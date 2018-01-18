import { getContent } from '../scripts/transfer-spaces';
import mockExport from './mock-export';
import mockExportUnpublished from './mock-export-unpublished';

const TRANSLATION_CONTENT_TYPE = 'globalTranslations';
const DUMMY_CONTENT_INDEX_CONTENT_TYPE = 'dummyContentIndex';
const PROTECTED_CONTENT_TYPES = [
  TRANSLATION_CONTENT_TYPE,
  DUMMY_CONTENT_INDEX_CONTENT_TYPE,
];
const LANGUAGE = {
  CHINESE: 'zh-CN',
  ENGLISH: 'en-US',
};

const hasFieldsOfLocale = (entries, locale) =>
  entries.some(entry =>
    Object.keys(entry.fields)
      .map(fieldName => entry.fields[fieldName])
      .some(field => field[locale]));

const parseResult = (result) => {
  const { assets, entries, locales } = result;

  const hasGlobalTranslations = entries.some(e =>
    e.sys.contentType.sys.id === TRANSLATION_CONTENT_TYPE);

  const dummyContentIndex = entries.find(e =>
    e.sys.contentType.sys.id === DUMMY_CONTENT_INDEX_CONTENT_TYPE);
  const {
    asset: dummyAssetData,
    entries: dummyEntryData,
  } = dummyContentIndex.fields;
  const dummyEntryIds = dummyEntryData[LANGUAGE.ENGLISH].map(e => e.sys.id);
  const dummyAssetId = dummyAssetData[LANGUAGE.ENGLISH].sys.id;

  const dummyEntries = dummyEntryIds.map(id =>
    entries.find(entry => entry.sys.id === id)).filter(e => !!e);

  const hasDummyEntries = dummyEntryIds.length
    && dummyEntryIds.length === dummyEntries.length;
  const hasDummyAsset = dummyAssetId && assets.some(a => a.sys.id === dummyAssetId);

  const hasOnlyPublishedAssets = assets.every(a => a.sys.publishedAt);

  const hasNonDummyAssets = assets.length > 1;
  const hasNonDummyEntries =
    entries.length > dummyEntries.length + PROTECTED_CONTENT_TYPES.length;

  return {
    ...result,
    hasChineseAssetFields: hasFieldsOfLocale(assets, LANGUAGE.CHINESE),
    hasChineseEntryFields: hasFieldsOfLocale(entries, LANGUAGE.CHINESE),
    hasDummyAsset,
    hasDummyEntries,
    hasEnglishAssetFields: hasFieldsOfLocale(assets, LANGUAGE.ENGLISH),
    hasEnglishEntryFields: hasFieldsOfLocale(entries, LANGUAGE.ENGLISH),
    hasGlobalTranslations,
    hasNonDummyAssets,
    hasNonDummyEntries,
    hasOnlyPublishedAssets,
    localeCodes: locales.map(l => l.code),
  };
};

describe('getContent', () => {
  it('handles default options', () => {
    const result = parseResult(getContent(mockExport, {}));

    expect(result.hasChineseAssetFields).toBe(true);
    expect(result.hasChineseEntryFields).toBe(true);
    expect(result.hasDummyAsset).toBe(true);
    expect(result.hasDummyEntries).toBe(true);
    expect(result.hasEnglishAssetFields).toBe(true);
    expect(result.hasEnglishEntryFields).toBe(true);
    expect(result.hasGlobalTranslations).toBe(true);
    expect(result.hasNonDummyAssets).toBe(true);
    expect(result.hasNonDummyEntries).toBe(true);
    expect(result.hasOnlyPublishedAssets).toBe(true);
    expect(result.localeCodes).toEqual([LANGUAGE.ENGLISH, LANGUAGE.CHINESE]);
  });

  it('can filter out non english content', () => {
    const result = parseResult(getContent(mockExport, { shouldFilterNonEnglish: true }));

    expect(result.hasChineseAssetFields).toBe(false);
    expect(result.hasChineseEntryFields).toBe(false);
    expect(result.hasDummyAsset).toBe(true);
    expect(result.hasDummyEntries).toBe(true);
    expect(result.hasEnglishAssetFields).toBe(true);
    expect(result.hasEnglishEntryFields).toBe(true);
    expect(result.hasGlobalTranslations).toBe(true);
    expect(result.hasNonDummyAssets).toBe(true);
    expect(result.hasNonDummyEntries).toBe(true);
    expect(result.hasOnlyPublishedAssets).toBe(true);
    expect(result.localeCodes).toEqual([LANGUAGE.ENGLISH]);
  });

  it('can filter out all content but translations', () => {
    const result = parseResult(getContent(mockExport, { shouldSkipContent: true }));

    expect(result.hasChineseAssetFields).toBe(true);
    expect(result.hasChineseEntryFields).toBe(true);
    expect(result.hasDummyAsset).toBe(true);
    expect(result.hasDummyEntries).toBe(true);
    expect(result.hasEnglishAssetFields).toBe(true);
    expect(result.hasEnglishEntryFields).toBe(true);
    expect(result.hasGlobalTranslations).toBe(true);
    expect(result.hasNonDummyAssets).toBe(false);
    expect(result.hasNonDummyEntries).toBe(false);
    expect(result.hasOnlyPublishedAssets).toBe(true);
    expect(result.localeCodes).toEqual([LANGUAGE.ENGLISH, LANGUAGE.CHINESE]);
  });

  it('can filter out non english content and all content but translations', () => {
    const result = parseResult(getContent(mockExport, { shouldFilterNonEnglish: true, shouldSkipContent: true }));

    expect(result.hasChineseAssetFields).toBe(false);
    expect(result.hasChineseEntryFields).toBe(false);
    expect(result.hasDummyAsset).toBe(true);
    expect(result.hasDummyEntries).toBe(true);
    expect(result.hasEnglishAssetFields).toBe(true);
    expect(result.hasEnglishEntryFields).toBe(true);
    expect(result.hasGlobalTranslations).toBe(true);
    expect(result.hasNonDummyAssets).toBe(false);
    expect(result.hasNonDummyEntries).toBe(false);
    expect(result.hasOnlyPublishedAssets).toBe(true);
    expect(result.localeCodes).toEqual([LANGUAGE.ENGLISH]);
  });

  it('throws an error when there are unpublished entries', () => {
    expect(() => parseResult(getContent(mockExportUnpublished, {}))).toThrowError();
  });
});
