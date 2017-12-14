/* eslint-disable no-console */

import spaceExport from 'contentful-export';
import spaceImport from 'contentful-import';
import { createClient } from 'contentful-management';

import { CONTENTFUL } from '../src/constants/contentful';

const client = createClient({ accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN });

const filterFields = entries =>
  entries.map((entry) => {
    const fieldNames = entry.fields ? Object.keys(entry.fields) : [];
    return {
      ...entry,
      fields: fieldNames.reduce((acc, fieldName) => {
        acc[fieldName] = { 'en-US': entry.fields[fieldName]['en-US'] };
        return acc;
      }, {}),
    };
  });

const getContent = (output, shouldFilterNonEnglish) => {
  const { assets, entries, locales } = output;
  return shouldFilterNonEnglish ? {
    ...output,
    assets: filterFields(assets),
    entries: filterFields(entries),
    locales: locales.filter(({ code }) => code === 'en-US'),
  } : output;
};

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
       translated, but content is not changed.

   Known issues:
     If the target has a field that the source does not, you'll get an error:
     "You need to omit a field before deleting it." These changes are rare enough
     that developers can manually prepare the target environment by deleting any
     fields not present in the source.
*/
export default (sourceInfo, targetInfo, opts = {}) => {
  const { shouldFilterNonEnglish, shouldSkipContent } = opts;
  const [sourceEnv, sourceRegion] = sourceInfo;
  const [targetEnv, targetRegion] = targetInfo;
  const sourceSpaceId = CONTENTFUL[sourceEnv][sourceRegion].spaceId;
  const targetSpaceId = CONTENTFUL[targetEnv][targetRegion].spaceId;

  console.log(`=== COPYING FROM ${sourceEnv}-${sourceRegion} TO ${targetEnv}-${targetRegion}`);

  return new Promise(resolve =>
    spaceExport({
      managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
      saveFile: false,
      skipContent: !!shouldSkipContent,
      skipWebhooks: true,
      spaceId: sourceSpaceId,
    }).then((output) => {
      const importToTarget = () =>
        spaceImport({
          content: shouldSkipContent ? output : getContent(output, shouldFilterNonEnglish),
          managementToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
          spaceId: targetSpaceId,
        }).then(resolve);

      return shouldSkipContent ?
        importToTarget() :
        clearTarget(targetSpaceId).then(importToTarget);
    }));
};
