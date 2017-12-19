import { getContent } from '../scripts/transfer-spaces';
import mockExport from './mock-export';

const hasFieldsOfLocale = (entries, locale) =>
  entries.some(entry =>
    Object.keys(entry.fields)
      .map(fieldName => entry.fields[fieldName])
      .some(field => field[locale]));

const parseResult = result => ({
  ...result,
  entryContentTypes: result.entries.map(e => e.sys.contentType.sys.id),
  hasChineseFields: hasFieldsOfLocale(result.entries, 'zh-CN'),
  hasEnglishFields: hasFieldsOfLocale(result.entries, 'en-US'),
  localeCodes: result.locales.map(l => l.code),
});

describe('getContent', () => {
  it('handles default options', () => {
    const result = parseResult(getContent(mockExport, {}));

    expect(result.assets).toBeDefined();
    expect(result.entryContentTypes).toEqual([
      'inlineImage',
      'contentPage',
      'bodyText',
      'bodyText',
      'thumbnailList',
      'thumbnailList',
      'globalTranslations',
    ]);
    expect(result.hasChineseFields).toBe(true);
    expect(result.hasEnglishFields).toBe(true);
    expect(result.localeCodes).toEqual(['en-US', 'zh-CN']);
  });

  it('can filter out non english content', () => {
    const result = parseResult(getContent(mockExport, { shouldFilterNonEnglish: true }));

    expect(result.assets).toBeDefined();
    expect(result.entryContentTypes).toEqual([
      'inlineImage',
      'contentPage',
      'bodyText',
      'bodyText',
      'thumbnailList',
      'thumbnailList',
      'globalTranslations',
    ]);
    expect(result.hasChineseFields).toBe(false);
    expect(result.hasEnglishFields).toBe(true);
    expect(result.localeCodes).toEqual(['en-US']);
  });

  it('can filter out all content but translations', () => {
    const result = parseResult(getContent(mockExport, { shouldSkipContent: true }));

    expect(result.assets).toBeUndefined();
    expect(result.entryContentTypes).toEqual([
      'globalTranslations',
    ]);
    expect(result.hasChineseFields).toBe(true);
    expect(result.hasEnglishFields).toBe(true);
    expect(result.localeCodes).toEqual(['en-US', 'zh-CN']);
  });

  it('can filter out non english content and all content but translations', () => {
    const result = parseResult(getContent(mockExport, { shouldFilterNonEnglish: true, shouldSkipContent: true }));

    expect(result.assets).toBeUndefined();
    expect(result.entryContentTypes).toEqual([
      'globalTranslations',
    ]);
    expect(result.hasChineseFields).toBe(false);
    expect(result.hasEnglishFields).toBe(true);
    expect(result.localeCodes).toEqual(['en-US']);
  });
});
