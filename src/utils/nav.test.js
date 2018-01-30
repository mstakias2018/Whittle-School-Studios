import {
  createContentPageLink,
  parseLink,
  transformSubnavProps,
  formatFooterLinks,
  transformLocalizedSlugData,
  getCurrentPageWithLocalizedSlugs,
  getUrlData,
  getArticleTitle,
} from './nav';
import { LANGUAGE } from '../constants/regions';
import { PAGE_TYPE } from '../constants/settings';

describe('createContentPageLink', () => {
  test('content page', () => {
    expect(createContentPageLink({
      slug: 'test-slug',
    })).toBe('/test-slug');
  });

  test('content page with parent category', () => {
    expect(createContentPageLink({
      parentCategory: [
        {
          slug: 'test-parent-slug',
        },
      ],
      slug: 'test-slug',
    })).toBe('/test-parent-slug/test-slug');
  });
});

describe('parseLink', () => {
  test('external link', () => {
    expect(parseLink({
      external: 'http://www.google.com',
    })).toBe('http://www.google.com');
  });

  test('interal link', () => {
    expect(parseLink({
      internal: {
        parentCategory: [
          {
            slug: 'test-parent-slug',
          },
        ],
        slug: 'test-slug',
      },
    })).toBe('/test-parent-slug/test-slug');
  });

  test('external and interal links - external wins', () => {
    expect(parseLink({
      external: 'http://www.google.com',
      internal: {
        parentCategory: [
          {
            slug: 'test-parent-slug',
          },
        ],
        slug: 'test-slug',
      },
    })).toBe('http://www.google.com');
  });
});

describe('transformSubnavProps', () => {
  test('category', () => {
    const result = transformSubnavProps({
      categoryDescription: 'Our vision for education',
      categorySlug: 'the-whittle-vision',
      categoryTitle: 'The Whittle Vision',
      currentPageId: '111',
      currentPageType: PAGE_TYPE.CATEGORY,
      overviewNavTitle: 'Overview',
      parentCategoryId: '111',
      subcategories: [
        {
          description: 'Our principled approach to education',
          id: '222',
          slug: 'our-principles',
          title: 'Our Principles',
        },
        {
          description: 'Our valued approach to education',
          id: '333',
          slug: 'our-values',
          title: 'Our Values',
        },
      ],
    });

    expect(result).toEqual({
      categoryTitle: 'The Whittle Vision',
      navItems: [
        {
          description: 'Our vision for education',
          id: '111',
          isActive: true,
          link: 'the-whittle-vision',
          title: 'Overview',
        },
        {
          description: 'Our principled approach to education',
          id: '222',
          isActive: false,
          link: 'the-whittle-vision/our-principles',
          slug: 'our-principles',
          title: 'Our Principles',
        },
        {
          description: 'Our valued approach to education',
          id: '333',
          isActive: false,
          link: 'the-whittle-vision/our-values',
          slug: 'our-values',
          title: 'Our Values',
        },
      ],
    });
  });

  test('article', () => {
    const result = transformSubnavProps({
      categoryDescription: 'Our vision for education',
      categorySlug: 'the-whittle-vision',
      categoryTitle: 'The Whittle Vision',
      currentPageId: '222',
      currentPageType: PAGE_TYPE.ARTICLE,
      overviewNavTitle: 'Overview',
      parentCategoryId: '111',
      subcategories: [
        {
          description: 'Our principled approach to education',
          id: '222',
          slug: 'our-principles',
          title: 'Our Principles',
        },
        {
          description: 'Our valued approach to education',
          id: '333',
          slug: 'our-values',
          title: 'Our Values',
        },
      ],
    });

    expect(result).toEqual({
      categoryTitle: 'The Whittle Vision',
      navItems: [
        {
          description: 'Our vision for education',
          id: '111',
          isActive: false,
          link: 'the-whittle-vision',
          title: 'Overview',
        },
        {
          description: 'Our principled approach to education',
          id: '222',
          isActive: true,
          link: 'the-whittle-vision/our-principles',
          slug: 'our-principles',
          title: 'Our Principles',
        },
        {
          description: 'Our valued approach to education',
          id: '333',
          isActive: false,
          link: 'the-whittle-vision/our-values',
          slug: 'our-values',
          title: 'Our Values',
        },
      ],
    });
  });
});

describe('formatFooterLinks', () => {
  test('without utility links', () => {
    const result = formatFooterLinks({
      primaryLink1: {
        linkDestinationExternal: null,
        linkDestinationInternal: { parentCategory: null, slug: 'the-whittle-vision' },
        linkTitle: 'The Whittle Vision',
      },
      primaryLink2: {
        linkDestinationExternal: null,
        linkDestinationInternal: { parentCategory: null, slug: 'leadership-and-faculty' },
        linkTitle: 'Leadership & Faculty',
      },
      primaryLink2Children: [
        {
          linkDestinationExternal: null,
          linkDestinationInternal: {
            parentCategory: [{ slug: 'educational-experience' }],
            slug: 'center-for-excellence',
          },
          linkTitle: 'Founder & Leadership',
        },
        {
          linkDestinationExternal: null,
          linkDestinationInternal: { parentCategory: null, slug: 'social-responsibility' },
          linkTitle: 'Staff & Faculty',
        },
        {
          linkDestinationExternal: 'https://www.advisory.com/',
          linkDestinationInternal: null,
          linkTitle: 'Advisory Boards',
        },
        {
          linkDestinationExternal: null,
          linkDestinationInternal: { parentCategory: null, slug: 'architecture' },
          linkTitle: 'Partners',
        },
      ],
      utilityLink1: null,
      utilityLink2: null,
      utilityLink2Children: null,
    });

    expect(result).toEqual({
      primaryLinks: [
        { link: '/the-whittle-vision', title: 'The Whittle Vision' },
        {
          link: '/leadership-and-faculty',
          subLinks: [
            { link: '/educational-experience/center-for-excellence', title: 'Founder & Leadership' },
            { link: '/social-responsibility', title: 'Staff & Faculty' },
            { link: 'https://www.advisory.com/', title: 'Advisory Boards' },
            { link: '/architecture', title: 'Partners' },
          ],
          title: 'Leadership & Faculty',
        },
      ],
      utilityLinks: [],
    });
  });

  test('with utility links', () => {
    const result = formatFooterLinks({
      primaryLink1: {
        linkDestinationExternal: null,
        linkDestinationInternal: { parentCategory: null, slug: 'the-whittle-vision' },
        linkTitle: 'The Whittle Vision',
      },
      primaryLink2: {
        linkDestinationExternal: null,
        linkDestinationInternal: { parentCategory: null, slug: 'leadership-and-faculty' },
        linkTitle: 'Leadership & Faculty',
      },
      primaryLink2Children: [
        {
          linkDestinationExternal: null,
          linkDestinationInternal: {
            parentCategory: [{ slug: 'educational-experience' }],
            slug: 'center-for-excellence',
          },
          linkTitle: 'Founder & Leadership',
        },
        {
          linkDestinationExternal: null,
          linkDestinationInternal: { parentCategory: null, slug: 'social-responsibility' },
          linkTitle: 'Staff & Faculty',
        },
        {
          linkDestinationExternal: 'https://www.advisory.com/',
          linkDestinationInternal: null,
          linkTitle: 'Advisory Boards',
        },
        {
          linkDestinationExternal: null,
          linkDestinationInternal: { parentCategory: null, slug: 'architecture' },
          linkTitle: 'Partners',
        },
      ],
      utilityLink1: {
        linkDestinationExternal: null,
        linkDestinationInternal: { parentCategory: null, slug: 'the-whittle-vision' },
        linkTitle: 'The Whittle Vision',
      },
      utilityLink2: {
        linkDestinationExternal: 'https://www.advisory.com/',
        linkDestinationInternal: null,
        linkTitle: 'Advisory Boards',
      },
      utilityLink2Children: [
        {
          linkDestinationExternal: null,
          linkDestinationInternal: {
            parentCategory: [{ slug: 'educational-experience' }],
            slug: 'center-for-excellence',
          },
          linkTitle: 'Founder & Leadership',
        },
        {
          linkDestinationExternal: null,
          linkDestinationInternal: { parentCategory: null, slug: 'social-responsibility' },
          linkTitle: 'Staff & Faculty',
        },
      ],
    });

    expect(result).toEqual({
      primaryLinks: [
        { link: '/the-whittle-vision', title: 'The Whittle Vision' },
        {
          link: '/leadership-and-faculty',
          subLinks: [
            { link: '/educational-experience/center-for-excellence', title: 'Founder & Leadership' },
            { link: '/social-responsibility', title: 'Staff & Faculty' },
            { link: 'https://www.advisory.com/', title: 'Advisory Boards' },
            { link: '/architecture', title: 'Partners' },
          ],
          title: 'Leadership & Faculty',
        },
      ],
      utilityLinks: [
        { link: '/the-whittle-vision', title: 'The Whittle Vision' },
        {
          link: 'https://www.advisory.com/',
          subLinks: [
            { link: '/educational-experience/center-for-excellence', title: 'Founder & Leadership' },
            { link: '/social-responsibility', title: 'Staff & Faculty' },
          ],
          title: 'Advisory Boards',
        },
      ],
    });
  });
});

describe('transformLocalizedSlugData', () => {
  test('no parent category', () => {
    const result = transformLocalizedSlugData({
      edges: [
        { node: { locale: 'en-US', parentCategory: null, slug: 'educational-experience' } },
        { node: { locale: 'zh-CN', parentCategory: null, slug: 'educational-experience-cn' } },
      ],
    });

    expect(result).toEqual([
      { link: '/educational-experience', locale: 'en-US' },
      { link: '/educational-experience-cn', locale: 'zh-CN' },
    ]);
  });

  test('with parent category', () => {
    const result = transformLocalizedSlugData({
      edges: [
        {
          node: {
            locale: 'en-US',
            parentCategory: [
              {
                slug: 'test-parent-slug',
              },
            ],
            slug: 'educational-experience',
          },
        },
        {
          node: {
            locale: 'zh-CN',
            parentCategory: [
              {
                slug: 'test-parent-slug',
              },
            ],
            slug: 'educational-experience-cn',
          },
        },
      ],
    });

    expect(result).toEqual([
      { link: '/test-parent-slug/educational-experience', locale: 'en-US' },
      { link: '/test-parent-slug/educational-experience-cn', locale: 'zh-CN' },
    ]);
  });
});

describe('getCurrentPageWithLocalizedSlugs', () => {
  test('default', () => {
    const result = getCurrentPageWithLocalizedSlugs([
      { link: '/test-parent-slug/educational-experience', locale: 'en-US' },
      { link: '/test-parent-slug/educational-experience-cn', locale: 'zh-CN' },
    ], LANGUAGE.ENGLISH);

    expect(result).toBe('/test-parent-slug/educational-experience');
  });

  test('empty list (on homepage)', () => {
    const result = getCurrentPageWithLocalizedSlugs([], LANGUAGE.ENGLISH);

    expect(result).toBe('');
  });
});

describe('getUrlData', () => {
  test('default', () => {
    const result = getUrlData(
      [
        { link: '/test-parent-slug/educational-experience', locale: 'en-US' },
        { link: '/test-parent-slug/educational-experience-cn', locale: 'zh-CN' },
      ],
      LANGUAGE.ENGLISH
    );

    expect(result).toEqual({
      currentUrl: 'https://master--whit-cn.netlify.com/en/test-parent-slug/educational-experience',
      rootUrl: 'https://master--whit-cn.netlify.com/',
    });
  });

  test('empty list (on homepage)', () => {
    const result = getUrlData([], LANGUAGE.ENGLISH);

    expect(result).toEqual({
      currentUrl: 'https://master--whit-cn.netlify.com/en',
      rootUrl: 'https://master--whit-cn.netlify.com/',
    });
  });
});

describe('getArticleTitle', () => {
  test('category with title', () => {
    expect(getArticleTitle('category title', 0, translation)).toBe('category title');
  });
  test('category without title', () => {
    expect(getArticleTitle(undefined, 0, translation)).toBe('header.subMenuTitileFallback.overview');
  });
  test('article with title', () => {
    expect(getArticleTitle('article title', 3, translation)).toBe('article title');
  });
  test('article without title', () => {
    expect(getArticleTitle(undefined, 3, translation)).toBe('header.subMenuTitileFallback.article');
  });
});
