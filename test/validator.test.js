import React from 'react';
import { shallow } from 'enzyme';

import Validator from '../src/pages/dev/validator';
import { RULE_TEXT } from '../src/constants/validations';
import { CONTENT_MODULE } from '../src/constants/contentful';
import { IMAGE_SHAPE } from '../src/constants/images';
import { PAGE_TYPE } from '../src/constants/settings';
import { LANGUAGE, LANGUAGE_CONTENTFUL_LOCALE } from '../src/constants/regions';

const VIMEO_EMBED_CODE = '<iframe src="player.vimeo.com" allowfullscreen></iframe>';
const TENCENT_EMBED_CODE = '<iframe src="v.qq.com" allowfullscreen></iframe>';

const getOutput = ({
  contentPageNode = {},
  headersNode = {},
  homepageNode = {},
}) => {
  const data = {
    allContentfulContentPage: {
      contentPages: [
        { node: contentPageNode },
      ],
    },
    allContentfulHeader: {
      headers: [
        { node: headersNode },
      ],
    },
    allContentfulHomePage: {
      homepage: [
        {
          node: homepageNode,
        },
      ],
    },
  };

  return shallow(<Validator data={data} />).text();
};

const getOutputForContentPage = contentPageNode =>
  getOutput({ contentPageNode });

const getOutputForHeader = headersNode =>
  getOutput({ headersNode });

const getOutputForHomepage = homepageNode =>
  getOutput({ homepageNode });

describe('Validator', () => {
  describe('content page rules', () => {
    describe(RULE_TEXT.ONE_OR_MORE_MODULES, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          modules: [{}]
        });
        expect(result).not.toContain(RULE_TEXT.ONE_OR_MORE_MODULES);
      });
      test('fail', () => {
        const result = getOutputForContentPage({});
        expect(result).toContain(RULE_TEXT.ONE_OR_MORE_MODULES);
      });
    });

    describe(RULE_TEXT.FIRST_MODULE_BODY_TEXT, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          modules: [{ content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT }]
        });
        expect(result).not.toContain(RULE_TEXT.FIRST_MODULE_BODY_TEXT);
      });
      test('pass - OpenApplyIFrame', () => {
        const result = getOutputForContentPage({
          modules: [{ type: CONTENT_MODULE.OPENAPPLY_IFRAME }]
        });
        expect(result).not.toContain(RULE_TEXT.FIRST_MODULE_BODY_TEXT);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          modules: [{ type: CONTENT_MODULE.CAROUSEL }]
        });
        expect(result).toContain(RULE_TEXT.FIRST_MODULE_BODY_TEXT);
      });
    });

    describe(RULE_TEXT.IFRAME_ONLY_MODULE, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          modules: [{ type: CONTENT_MODULE.OPENAPPLY_IFRAME }]
        });
        expect(result).not.toContain(RULE_TEXT.IFRAME_ONLY_MODULE);
      });
      test('pass - no iframe', () => {
        const result = getOutputForContentPage({
          modules: [{ type: CONTENT_MODULE.CAROUSEL }]
        });
        expect(result).not.toContain(RULE_TEXT.IFRAME_ONLY_MODULE);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          modules: [
            { type: CONTENT_MODULE.OPENAPPLY_IFRAME },
            { type: CONTENT_MODULE.CAROUSEL },
          ]
        });
        expect(result).toContain(RULE_TEXT.IFRAME_ONLY_MODULE);
      });
    });

    describe(RULE_TEXT.CONTAIN_BODY_TEXT, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          modules: [{ content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT }]
        });
        expect(result).not.toContain(RULE_TEXT.CONTAIN_BODY_TEXT);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          modules: [{ type: CONTENT_MODULE.CAROUSEL }]
        });
        expect(result).toContain(RULE_TEXT.CONTAIN_BODY_TEXT);
      });
    });

    describe(RULE_TEXT.NO_MAIN_IMAGE_NO_SUBHEAD, () => {
      test('pass - both', () => {
        const result = getOutputForContentPage({
          mainImage: {},
          subhead: 'Hello',
        });
        expect(result).not.toContain(RULE_TEXT.NO_MAIN_IMAGE_NO_SUBHEAD);
      });
      test('pass - neither', () => {
        const result = getOutputForContentPage({});
        expect(result).not.toContain(RULE_TEXT.NO_MAIN_IMAGE_NO_SUBHEAD);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          subhead: 'Hello',
        });
        expect(result).toContain(RULE_TEXT.NO_MAIN_IMAGE_NO_SUBHEAD);
      });
    });

    describe(RULE_TEXT.MAIN_IMAGE_ALT, () => {
      test('pass - both', () => {
        const result = getOutputForContentPage({
          mainImage: {},
          mainImageAlt: 'hello'
        });
        expect(result).not.toContain(RULE_TEXT.MAIN_IMAGE_ALT);
      });
      test('pass - neither', () => {
        const result = getOutputForContentPage({});
        expect(result).not.toContain(RULE_TEXT.MAIN_IMAGE_ALT);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          mainImage: {},
        });
        expect(result).toContain(RULE_TEXT.MAIN_IMAGE_ALT);
      });
    });

    describe(RULE_TEXT.NO_STACKED, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          modules: [
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
            { type: CONTENT_MODULE.CAROUSEL },
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
          ],
        });
        expect(result).not.toContain(RULE_TEXT.NO_STACKED);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          modules: [
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
            { type: CONTENT_MODULE.CAROUSEL },
            { type: CONTENT_MODULE.CAROUSEL },
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
          ],
        });
        expect(result).toContain(RULE_TEXT.NO_STACKED);
      });
    });

    describe(RULE_TEXT.CAROUSEL_POSITION, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          modules: [
            { type: CONTENT_MODULE.CAROUSEL },
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
          ],
        });
        expect(result).not.toContain(RULE_TEXT.CAROUSEL_POSITION);
      });
      test('fail - next to last', () => {
        const result = getOutputForContentPage({
          modules: [
            { type: CONTENT_MODULE.CAROUSEL },
            { content: { text: '' }, type: CONTENT_MODULE.BODY_TEXT },
          ],
        });
        expect(result).toContain(RULE_TEXT.CAROUSEL_POSITION);
      });
      test('fail - last', () => {
        const result = getOutputForContentPage({
          modules: [{ type: CONTENT_MODULE.CAROUSEL }],
        });
        expect(result).toContain(RULE_TEXT.CAROUSEL_POSITION);
      });
    });

    describe(RULE_TEXT.VIDEO_ALT_TAGS, () => {
      test('pass - no videos', () => {
        const result = getOutputForContentPage({
          modules: [{ type: CONTENT_MODULE.CAROUSEL }],
        });
        expect(result).not.toContain(RULE_TEXT.VIDEO_ALT_TAGS);
      });
      test('pass - all videos', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              alt: 'hello',
              type: CONTENT_MODULE.INLINE_VIDEO,
              video: { videoEmbedCode: VIMEO_EMBED_CODE },
            },
            {
              alt1: 'hello',
              alt6: 'hello',
              type: CONTENT_MODULE.THUMBNAIL_LIST,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video6: { videoEmbedCode: VIMEO_EMBED_CODE },
            },
            {
              alt1: 'hello',
              alt2: 'hello',
              alt3: 'hello',
              type: CONTENT_MODULE.VIDEOS,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2: { videoEmbedCode: VIMEO_EMBED_CODE },
              video3: { videoEmbedCode: VIMEO_EMBED_CODE },
            },
            {
              content: {
                text: `![daffodils](${VIMEO_EMBED_CODE})Lorem ipsum.`,
              },
              type: CONTENT_MODULE.BODY_TEXT,
            },
          ],
        });
        expect(result).not.toContain(RULE_TEXT.VIDEO_ALT_TAGS);
      });
      test('fail - inline video', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              type: CONTENT_MODULE.INLINE_VIDEO,
              video: { videoEmbedCode: VIMEO_EMBED_CODE },
            }
          ],
        });
        expect(result).toContain(RULE_TEXT.VIDEO_ALT_TAGS);
      });
      test('fail - thumbnailList video', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              alt1: 'hello',
              type: CONTENT_MODULE.THUMBNAIL_LIST,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video6: { videoEmbedCode: VIMEO_EMBED_CODE },
            }
          ],
        });
        expect(result).toContain(RULE_TEXT.VIDEO_ALT_TAGS);
      });
      test('fail - videos', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              alt1: 'hello',
              alt2: 'hello',
              type: CONTENT_MODULE.VIDEOS,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2: { videoEmbedCode: VIMEO_EMBED_CODE },
              video3: { videoEmbedCode: VIMEO_EMBED_CODE },
            }
          ],
        });
        expect(result).toContain(RULE_TEXT.VIDEO_ALT_TAGS);
      });
      test('fail - body text', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              content: {
                text: '![](<iframe src="http://test.com" allowfullscreen></iframe>)Lorem ipsum.',
              },
              type: CONTENT_MODULE.BODY_TEXT,
            },
          ],
        });
        expect(result).toContain(RULE_TEXT.VIDEO_ALT_TAGS);
      });
    });

    describe(RULE_TEXT.VIMEO_COVER_PHOTO, () => {
      test('pass - no videos', () => {
        const result = getOutputForContentPage({
          modules: [{ type: CONTENT_MODULE.CAROUSEL }],
        });
        expect(result).not.toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
      test('pass - all videos', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              asset: {},
              type: CONTENT_MODULE.INLINE_VIDEO,
              video: { videoEmbedCode: VIMEO_EMBED_CODE },
            },
            {
              type: CONTENT_MODULE.INLINE_VIDEO,
              video: { videoEmbedCode: TENCENT_EMBED_CODE },
            },
            {
              alt1: 'hello',
              alt6: 'hello',
              asset1: {},
              asset6: {},
              type: CONTENT_MODULE.THUMBNAIL_LIST,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2: { videoEmbedCode: TENCENT_EMBED_CODE },
              video6: { videoEmbedCode: VIMEO_EMBED_CODE },
            },
            {
              type: CONTENT_MODULE.VIDEOS,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video1cover: {},
              video2: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2cover: {},
              video3: { videoEmbedCode: TENCENT_EMBED_CODE },
            },
            {
              content: {
                text: `
                  ![daffodils](//images.contentful.com/jpg ${VIMEO_EMBED_CODE})Lorem ipsum.
                  ![daffodils](${TENCENT_EMBED_CODE})Lorem ipsum.
                `,
              },
              type: CONTENT_MODULE.BODY_TEXT,
            },
          ],
        });
        expect(result).not.toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
      test('fail - inline video', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              type: CONTENT_MODULE.INLINE_VIDEO,
              video: { videoEmbedCode: VIMEO_EMBED_CODE },
            }
          ],
        });
        expect(result).toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
      test('fail - thumbnailList video', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              asset1: {},
              type: CONTENT_MODULE.THUMBNAIL_LIST,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video6: { videoEmbedCode: VIMEO_EMBED_CODE },
            }
          ],
        });
        expect(result).toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
      test('fail - videos', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              type: CONTENT_MODULE.VIDEOS,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video1cover: {},
              video2: { videoEmbedCode: VIMEO_EMBED_CODE },
              video3: { videoEmbedCode: TENCENT_EMBED_CODE },
            }
          ],
        });
        expect(result).toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
      test('fail - body text', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              content: {
                text: `![daffodils](${VIMEO_EMBED_CODE})Lorem ipsum.`,
              },
              type: CONTENT_MODULE.BODY_TEXT,
            },
          ],
        });
        expect(result).toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
    });

    describe(RULE_TEXT.INLINE_IMAGE_SHAPE, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          modules: [
            { shape: IMAGE_SHAPE.SQUARE, type: CONTENT_MODULE.INLINE_IMAGE },
          ],
        });
        expect(result).not.toContain(RULE_TEXT.INLINE_IMAGE_SHAPE);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          modules: [
            { shape: IMAGE_SHAPE.CIRCLE, type: CONTENT_MODULE.INLINE_IMAGE },
          ],
        });
        expect(result).toContain(RULE_TEXT.INLINE_IMAGE_SHAPE);
      });
    });

    describe(RULE_TEXT.VIDEOS_COUNT, () => {
      test('pass - 3 videos', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              type: CONTENT_MODULE.VIDEOS,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2: { videoEmbedCode: VIMEO_EMBED_CODE },
              video3: { videoEmbedCode: TENCENT_EMBED_CODE },
            }
          ],
        });
        expect(result).not.toContain(RULE_TEXT.VIDEOS_COUNT);
      });
      test('pass - 1 video', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              type: CONTENT_MODULE.VIDEOS,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
            }
          ],
        });
        expect(result).not.toContain(RULE_TEXT.VIDEOS_COUNT);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          modules: [
            {
              type: CONTENT_MODULE.VIDEOS,
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2: { videoEmbedCode: VIMEO_EMBED_CODE },
            }
          ],
        });
        expect(result).toContain(RULE_TEXT.VIDEOS_COUNT);
      });
    });

    describe(RULE_TEXT.TEAMS_BIO_IMAGE, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          teams: {
            sections: [
              {
                image1: { id: 'someid1234' },
                image2: { id: 'someid1234' },
                image3: { id: 'someid1234' },
                image4: { id: 'someid1234' },
                image5: { id: 'someid1234' },
                image6: { id: 'someid1234' },
                title1: 'title',
                title2: 'title',
                title3: 'title',
                title4: 'title',
                title5: 'title',
                title6: 'title',
              }
            ]
          }
        });
        expect(result).not.toContain(RULE_TEXT.TEAMS_BIO_IMAGE);
      });
      test('pass - no sections', () => {
        const result = getOutputForContentPage({
          teams: {}
        });
        expect(result).not.toContain(RULE_TEXT.TEAMS_BIO_IMAGE);
      });
      test('fail - missing image', () => {
        const result = getOutputForContentPage({
          teams: {
            sections: [
              {
                image1: { id: 'someid1234' },
                image2: { id: 'someid1234' },
                image4: { id: 'someid1234' },
                image5: { id: 'someid1234' },
                image6: { id: 'someid1234' },
                title1: 'title',
                title2: 'title',
                title3: 'title',
                title4: 'title',
                title5: 'title',
                title6: 'title',
              }
            ]
          }
        });
        expect(result).toContain(RULE_TEXT.TEAMS_BIO_IMAGE);
      });
    });
  });

  describe('article rules', () => {
    describe(RULE_TEXT.ARTICLE_SUBCATEGORIES, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          pageType: PAGE_TYPE.ARTICLE,
        });
        expect(result).not.toContain(RULE_TEXT.ARTICLE_SUBCATEGORIES);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          pageType: PAGE_TYPE.ARTICLE,
          subcategories: [{}],
        });
        expect(result).toContain(RULE_TEXT.ARTICLE_SUBCATEGORIES);
      });
    });
  });

  describe('category rules', () => {
    describe(RULE_TEXT.CATEGORY_WITH_SUB_NAV_PROPS, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          navDescription: 'test',
          navTitle: 'test',
          overviewNavTitle: 'test',
          pageType: PAGE_TYPE.CATEGORY,
          subcategories: [{}],
        });
        expect(result).not.toContain(RULE_TEXT.CATEGORY_WITH_SUB_NAV_PROPS);
      });
      test('pass - no subcategories', () => {
        const result = getOutputForContentPage({
          pageType: PAGE_TYPE.CATEGORY,
        });
        expect(result).not.toContain(RULE_TEXT.CATEGORY_WITH_SUB_NAV_PROPS);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          navDescription: 'test',
          navTitle: 'test',
          pageType: PAGE_TYPE.CATEGORY,
          subcategories: [{}],
        });
        expect(result).toContain(RULE_TEXT.CATEGORY_WITH_SUB_NAV_PROPS);
      });
    });

    describe(RULE_TEXT.CATEGORY_HEADER_NAV_PROPS, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          header: {},
          navTitle: 'test',
          pageType: PAGE_TYPE.CATEGORY,
        });
        expect(result).not.toContain(RULE_TEXT.CATEGORY_HEADER_NAV_PROPS);
      });
      test('pass - not in header', () => {
        const result = getOutputForContentPage({
          pageType: PAGE_TYPE.CATEGORY,
        });
        expect(result).not.toContain(RULE_TEXT.CATEGORY_HEADER_NAV_PROPS);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          header: {},
          pageType: PAGE_TYPE.CATEGORY,
        });
        expect(result).toContain(RULE_TEXT.CATEGORY_HEADER_NAV_PROPS);
      });
    });

    describe(RULE_TEXT.CATEGORY_SUBCATEGORIES, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          pageType: PAGE_TYPE.CATEGORY,
          subcategories: [
            {
              id: 'someid123',
              pageType: PAGE_TYPE.ARTICLE,
            }
          ]
        });
        expect(result).not.toContain(RULE_TEXT.CATEGORY_SUBCATEGORIES);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          pageType: PAGE_TYPE.CATEGORY,
          subcategories: [
            {
              id: 'someid123',
              pageType: PAGE_TYPE.CATEGORY,
            }
          ]
        });
        expect(result).toContain(RULE_TEXT.CATEGORY_SUBCATEGORIES);
      });
    });
  });

  describe('subcategory rules', () => {
    describe(RULE_TEXT.SUBCATEGORY_NAV_PROPS, () => {
      test('pass', () => {
        const result = getOutputForContentPage({
          navDescription: 'navDescription',
          navTitle: 'navTitle',
          parentCategory: {},
        });
        expect(result).not.toContain(RULE_TEXT.SUBCATEGORY_NAV_PROPS);
      });
      test('pass - not subcategory', () => {
        const result = getOutputForContentPage({});
        expect(result).not.toContain(RULE_TEXT.SUBCATEGORY_NAV_PROPS);
      });
      test('fail', () => {
        const result = getOutputForContentPage({
          navTitle: 'navTitle',
          parentCategory: {},
        });
        expect(result).toContain(RULE_TEXT.SUBCATEGORY_NAV_PROPS);
      });
    });
  });

  describe('header rules', () => {
    describe(RULE_TEXT.HEADER_LINKS_CATEGORIES, () => {
      test('pass', () => {
        const result = getOutputForHeader({
          contentPages: [
            { pageType: PAGE_TYPE.CATEGORY },
            { pageType: PAGE_TYPE.CATEGORY },
            { pageType: PAGE_TYPE.CATEGORY },
            { pageType: PAGE_TYPE.CATEGORY },
          ],
        });
        expect(result).not.toContain(RULE_TEXT.HEADER_LINKS_CATEGORIES);
      });
      test('fail', () => {
        const result = getOutputForHeader({
          contentPages: [
            { pageType: PAGE_TYPE.CATEGORY },
            { pageType: PAGE_TYPE.ARTICLE },
            { pageType: PAGE_TYPE.CATEGORY },
            { pageType: PAGE_TYPE.CATEGORY },
          ],
        });
        expect(result).toContain(RULE_TEXT.HEADER_LINKS_CATEGORIES);
      });
    });
  });

  describe('homepage rules', () => {
    describe(RULE_TEXT.VIDEOS_COUNT, () => {
      test('pass - 3 videos', () => {
        const result = getOutputForHomepage({
          hero: {
            videos: {
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2: { videoEmbedCode: TENCENT_EMBED_CODE },
              video3: { videoEmbedCode: VIMEO_EMBED_CODE },
            },
          },
        });
        expect(result).not.toContain(RULE_TEXT.VIDEOS_COUNT);
      });
      test('pass - 1 video', () => {
        const result = getOutputForHomepage({
          hero: {
            videos: {
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
            },
          },
        });
        expect(result).not.toContain(RULE_TEXT.VIDEOS_COUNT);
      });
      test('pass - 0 videos', () => {
        const result = getOutputForHomepage({});
        expect(result).not.toContain(RULE_TEXT.VIDEOS_COUNT);
      });
      test('fail', () => {
        const result = getOutputForHomepage({
          hero: {
            videos: {
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2: { videoEmbedCode: TENCENT_EMBED_CODE },
            },
          },
        });
        expect(result).toContain(RULE_TEXT.VIDEOS_COUNT);
      });
    });

    describe(RULE_TEXT.PIC_MODULE_PROPS, () => {
      test('pass', () => {
        const result = getOutputForHomepage({
          eventList: {
            date1: 'date',
            description1: {
              text: 'description'
            },
            link1: {},
            location1: 'location',
            title1: 'title',
          },
        });
        expect(result).not.toContain(RULE_TEXT.PIC_MODULE_PROPS);
      });
      test('pass - no event list', () => {
        const result = getOutputForHomepage({});
        expect(result).not.toContain(RULE_TEXT.PIC_MODULE_PROPS);
      });
      test('fail', () => {
        const result = getOutputForHomepage({
          eventList: {
            description1: {},
            link1: {},
            location1: 'location',
            title1: 'title',
          },
        });
        expect(result).toContain(RULE_TEXT.PIC_MODULE_PROPS);
      });
    });

    describe(RULE_TEXT.VIMEO_COVER_PHOTO, () => {
      test('pass - no videos', () => {
        const result = getOutputForHomepage({});
        expect(result).not.toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
      test('pass - all videos', () => {
        const result = getOutputForHomepage({
          campusModule: {
            image: {},
            video: { videoEmbedCode: VIMEO_EMBED_CODE },
          },
          hero: {
            videos: {
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video1cover: {},
              video2: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2cover: {},
              video3: { videoEmbedCode: TENCENT_EMBED_CODE },
            },
          },
        });
        expect(result).not.toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
      test('pass - campus is not vimeo', () => {
        const result = getOutputForHomepage({
          campusModule: {
            video: { videoEmbedCode: TENCENT_EMBED_CODE },
          },
        });
        expect(result).not.toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
      test('fail - videos', () => {
        const result = getOutputForHomepage({
          hero: {
            videos: {
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video1cover: {},
              video2: { videoEmbedCode: VIMEO_EMBED_CODE },
              video3: { videoEmbedCode: TENCENT_EMBED_CODE },
            },
          },
        });
        expect(result).toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
      test('fail - campus', () => {
        const result = getOutputForHomepage({
          campusModule: {
            video: { videoEmbedCode: VIMEO_EMBED_CODE },
          },
        });
        expect(result).toContain(RULE_TEXT.VIMEO_COVER_PHOTO);
      });
    });

    describe(RULE_TEXT.VIDEO_ALT_TAGS, () => {
      test('pass - no videos', () => {
        const result = getOutputForHomepage({});
        expect(result).not.toContain(RULE_TEXT.VIDEO_ALT_TAGS);
      });
      test('pass - all videos', () => {
        const result = getOutputForHomepage({
          campusModule: {
            imageAlt: 'test',
            video: { videoEmbedCode: TENCENT_EMBED_CODE },
          },
          hero: {
            videos: {
              alt1: 'test',
              alt2: 'test',
              alt3: 'test',
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2: { videoEmbedCode: VIMEO_EMBED_CODE },
              video3: { videoEmbedCode: TENCENT_EMBED_CODE },
            },
          },
        });
        expect(result).not.toContain(RULE_TEXT.VIDEO_ALT_TAGS);
      });
      test('fail - videos', () => {
        const result = getOutputForHomepage({
          hero: {
            videos: {
              alt1: 'test',
              alt2: 'test',
              video1: { videoEmbedCode: VIMEO_EMBED_CODE },
              video2: { videoEmbedCode: VIMEO_EMBED_CODE },
              video3: { videoEmbedCode: TENCENT_EMBED_CODE },
            },
          },
        });
        expect(result).toContain(RULE_TEXT.VIDEO_ALT_TAGS);
      });
      test('fail - campus', () => {
        const result = getOutputForHomepage({
          campusModule: {
            video: { videoEmbedCode: TENCENT_EMBED_CODE },
          },
        });
        expect(result).toContain(RULE_TEXT.VIDEO_ALT_TAGS);
      });
    });

    describe(RULE_TEXT.SECTION_TITLES_PERIOD, () => {
      test('pass - empty', () => {
        const result = getOutputForHomepage({});
        expect(result).not.toContain(RULE_TEXT.SECTION_TITLES_PERIOD);
      });
      test('pass - all titles', () => {
        const result = getOutputForHomepage({
          campusModule: {
            campusSectionTitle: 'Campus.'
          },
          eventList: {
            eventListSectionTitle: 'Events.'
          },
          teamsModule: {
            teamsSectionTitle: 'Teams.'
          },
        });
        expect(result).not.toContain(RULE_TEXT.SECTION_TITLES_PERIOD);
      });
      test('pass - chinese', () => {
        const result = getOutputForHomepage({
          campusModule: {
            campusSectionTitle: '便花老条'
          },
          eventList: {
            eventListSectionTitle: '决'
          },
          locale: LANGUAGE_CONTENTFUL_LOCALE[LANGUAGE.CHINESE],
          teamsModule: {
            teamsSectionTitle: '验压公增'
          },
        });
        expect(result).not.toContain(RULE_TEXT.SECTION_TITLES_PERIOD);
      });
      test('fail - campus', () => {
        const result = getOutputForHomepage({
          campusModule: {
            campusSectionTitle: 'Campus'
          },
        });
        expect(result).toContain(RULE_TEXT.SECTION_TITLES_PERIOD);
      });
      test('fail - events', () => {
        const result = getOutputForHomepage({
          eventList: {
            eventListSectionTitle: 'Events'
          },
        });
        expect(result).toContain(RULE_TEXT.SECTION_TITLES_PERIOD);
      });
      test('fail - teams', () => {
        const result = getOutputForHomepage({
          teamsModule: {
            teamsSectionTitle: 'Teams'
          },
        });
        expect(result).toContain(RULE_TEXT.SECTION_TITLES_PERIOD);
      });
    });

    describe(RULE_TEXT.TEAMS_HERO, () => {
      test('pass', () => {
        const result = getOutputForHomepage({
          teamsModule: {
            heroDescription: { id: 'someid124' },
            heroImage: { id: 'someid124' },
            heroLinkDestination: { id: 'someid124' },
            heroName: 'hero name',
            heroTitle: 'hero title',
          }
        });
        expect(result).not.toContain(RULE_TEXT.TEAMS_HERO);
      });
      test('fail', () => {
        const result = getOutputForHomepage({
          teamsModule: {
            heroDescription: { id: 'someid124' },
            heroImage: { id: 'someid124' },
          }
        });
        expect(result).toContain(RULE_TEXT.TEAMS_HERO);
      });
    });

    describe(RULE_TEXT.TEAMS_BIO_IMAGE, () => {
      test('pass', () => {
        const result = getOutputForHomepage({
          teamsModule: {
            sections: [
              {
                image1: { id: 'someid1234' },
                image2: { id: 'someid1234' },
                image3: { id: 'someid1234' },
                image4: { id: 'someid1234' },
                image5: { id: 'someid1234' },
                image6: { id: 'someid1234' },
                title1: 'title',
                title2: 'title',
                title3: 'title',
                title4: 'title',
                title5: 'title',
                title6: 'title',
              }
            ]
          }
        });
        expect(result).not.toContain(RULE_TEXT.TEAMS_BIO_IMAGE);
      });
      test('pass - no sections', () => {
        const result = getOutputForHomepage({
          teamsModule: {}
        });
        expect(result).not.toContain(RULE_TEXT.TEAMS_BIO_IMAGE);
      });
      test('fail - missing image', () => {
        const result = getOutputForHomepage({
          teamsModule: {
            sections: [
              {
                image1: { id: 'someid1234' },
                image2: { id: 'someid1234' },
                image4: { id: 'someid1234' },
                image5: { id: 'someid1234' },
                image6: { id: 'someid1234' },
                title1: 'title',
                title2: 'title',
                title3: 'title',
                title4: 'title',
                title5: 'title',
                title6: 'title',
              }
            ]
          }
        });
        expect(result).toContain(RULE_TEXT.TEAMS_BIO_IMAGE);
      });
    });
  });
});
