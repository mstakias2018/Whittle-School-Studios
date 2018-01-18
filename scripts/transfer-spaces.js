/* eslint-disable no-console */

import 'dotenv/config';

import spaceExport from 'contentful-export';
import spaceImport from 'contentful-import';
import { createClient } from 'contentful-management';

import { CONTENTFUL_SPACE } from '../src/constants/contentful';
import { LANGUAGE, LANGUAGE_CONTENTFUL_LOCALE } from '../src/constants/regions';

const client = createClient({ accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN });

const TRANSLATION_CONTENT_TYPE = 'globalTranslations';
const DUMMY_CONTENT_INDEX_CONTENT_TYPE = 'dummyContentIndex';

const ENGLISH = LANGUAGE_CONTENTFUL_LOCALE[LANGUAGE.ENGLISH];

const filterNonEnglishFields = entries => entries.map((entry) => {
  const fieldNames = entry.fields ? Object.keys(entry.fields) : [];
  const out = { ...entry };

  out.fields = fieldNames.reduce((acc, fieldName) => {
    acc[fieldName] = { [ENGLISH]: entry.fields[fieldName][ENGLISH] };
    return acc;
  }, {});

  return out;
});

const getFilteredContent = (entries, assets, opts) => {
  const { shouldFilterNonEnglish, shouldSkipContent } = opts;

  let filteredEntries = [...entries];
  let filteredAssets = [...assets];

  if (shouldFilterNonEnglish) {
    filteredEntries = filterNonEnglishFields(filteredEntries);
    filteredAssets = filterNonEnglishFields(filteredAssets);
  }

  if (shouldSkipContent) {
    const findEntryByType = type =>
      filteredEntries.find(e => e.sys.contentType.sys.id === type);

    const translations = findEntryByType(TRANSLATION_CONTENT_TYPE);
    const dummyContentIndex = findEntryByType(DUMMY_CONTENT_INDEX_CONTENT_TYPE);

    const {
      asset: dummyAssetData,
      entries: dummyEntryData,
    } = dummyContentIndex.fields;

    // Ids are not localized so we can always grab by the English locale
    const dummyEntryIds = dummyEntryData[ENGLISH].map(e => e.sys.id);
    const dummyAssetId = dummyAssetData[ENGLISH].sys.id;

    const dummyEntries = dummyEntryIds.map(id =>
      filteredEntries.find(e => e.sys.id === id));
    const dummyAsset = filteredAssets.find(a => a.sys.id === dummyAssetId);

    filteredEntries = [
      translations,
      dummyContentIndex,
      ...dummyEntries,
    ];
    filteredAssets = [dummyAsset];
  }

  return {
    assets: filteredAssets,
    entries: filteredEntries,
  };
};

const getContent = (output, opts, spaceId) => {
  const { shouldFilterNonEnglish, shouldSkipContent } = opts;
  const { assets, entries, locales } = output;
  const publishedAssets = assets.filter(a => a.sys.publishedAt);

  const unpublishedEntryIds = entries.reduce((acc, { sys }) => {
    if (sys.version - sys.publishedVersion > 1) {
      acc.push(sys.id);
    }

    return acc;
  }, []);

  if (unpublishedEntryIds.length) {
    throw new Error([
      'Cannot transfer from space with unpublished updates.',
      'Please check the following entries:',
      '',
      ...unpublishedEntryIds.map(id =>
        `- https://app.contentful.com/spaces/${spaceId}/entries/${id}`),
    ].join('\n'));
  }

  let out = {
    ...output,
    assets: publishedAssets,
  };

  if (shouldFilterNonEnglish) {
    out.locales = locales.filter(({ code }) => code === ENGLISH);
  }

  if (shouldSkipContent || shouldFilterNonEnglish) {
    out = {
      ...out,
      ...getFilteredContent(entries, publishedAssets, opts),
    };
  }

  return out;
};

exports.getContent = getContent;

const unpublishAndDeleteEntries = (entries) => {
  if (!entries) return undefined;
  return Promise.all(entries.items.map(item =>
    new Promise((resolve) => {
      if (!item) {
        resolve();
        return;
      }

      item.isPublished() ?
        item.unpublish().then(() => item.delete().then(resolve)) :
        item.delete().then(resolve);
    })));
};

const clearTarget = targetSpaceId =>
  new Promise(resolve =>
    client.getSpace(targetSpaceId).then(space =>
      Promise.all([
        space.getEntries().then(unpublishAndDeleteEntries),
        space.getAssets().then(unpublishAndDeleteEntries),
      ]).then(resolve)));

/* Transfers data between contentful spaces

   Options:
     shouldFilterNonEnglish:
       Needed when transfering from a space with multiple languages to a space
       with just English. Someday this might need to be more sophisticated and
       use an array of languages.
     shouldSkipContent:
       Necessary when deploying to production so only structural updates are
       translated, but content is not changed. NOTE: Even in this case,
       translations will be copied.

   Known issues:
     If the target has a field that the source does not, you'll get an error:
     "You need to omit a field before deleting it." These changes are rare enough
     that developers can manually prepare the target environment by deleting any
     fields not present in the source.
*/
export default (sourceInfo, targetInfo, opts = {}) => {
  const { shouldSkipContent } = opts;
  const [sourceEnv, sourceRegion] = sourceInfo;
  const [targetEnv, targetRegion] = targetInfo;
  const sourceSpaceId = CONTENTFUL_SPACE[sourceEnv][sourceRegion].spaceId;
  const targetSpaceId = CONTENTFUL_SPACE[targetEnv][targetRegion].spaceId;

  console.log(`=== COPYING FROM ${sourceEnv}-${sourceRegion} TO ${targetEnv}-${targetRegion}`);

  return new Promise(resolve =>
    spaceExport({
      managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
      saveFile: false,
      skipRoles: true,
      skipWebhooks: true,
      spaceId: sourceSpaceId,
    }).then((output) => {
      const importToTarget = () =>
        spaceImport({
          content: getContent(output, opts, sourceSpaceId),
          managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
          spaceId: targetSpaceId,
        }).then(resolve);

      return shouldSkipContent ?
        importToTarget() :
        clearTarget(targetSpaceId).then(importToTarget);
    }));
};
