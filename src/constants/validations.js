import { IMAGE_SHAPE } from './images';
import { LANGUAGE, LANGUAGE_CONTENTFUL_LOCALE } from './regions';
import { CONTENT_MODULE } from './contentful';
import { PAGE_TYPE } from './settings';
import { isVimeo, parseInsetContent } from '../utils/strings';

const checkOpenIframe = modules => modules.some(({ type } = module) => type === CONTENT_MODULE.OPENAPPLY_IFRAME);

const RULE_TEXT = {
  ARTICLE_SUBCATEGORIES: 'Articles must not have subcategories',
  CAROUSEL_POSITION: 'Carousel cannot be the the last or next-to-last module on the page',
  CATEGORY_HEADER_NAV_PROPS: 'Categories in header must have Nav Title value',
  CATEGORY_SUBCATEGORIES: 'Categories can only have Articles as subcategories',
  CATEGORY_WITH_SUB_NAV_PROPS: 'Categories with subcategories must have Nav Title, '
    + 'Nav Description, and Overview Nav Title values',
  CONTAIN_BODY_TEXT: 'Page must contain BodyText',
  FIRST_MODULE_BODY_TEXT: 'First module must be BodyText',
  HEADER_LINKS_CATEGORIES: 'Header links can only be Categories',
  IFRAME_ONLY_MODULE: 'If an OpenApplyIFrame exists, it is the only module on the page',
  INLINE_IMAGE_SHAPE: 'Inline images can only have the circle shape when children of a Carousel',
  MAIN_IMAGE_ALT: 'Main image alt must be provided if main image exists',
  NO_MAIN_IMAGE_NO_SUBHEAD: 'If no main image exists, no subhead will exist',
  NO_STACKED: 'No module other than BodyText may be consecutively stacked',
  ONE_OR_MORE_MODULES: 'Pages must have one or more modules',
  PIC_MODULE_PROPS: 'PIC module: Every event must have a date, title, location, description, and link.',
  SECTION_TITLES_PERIOD: '[English only] Section titles should always end in a period.',
  SUBCATEGORY_NAV_PROPS: 'Subcategories must have Nav Title and Nav Description values',
  TEAMS_BIO_IMAGE: 'Teams module: bios must either all contain an image, or none, per category',
  TEAMS_HERO: 'Teams module: must have a hero component',
  VIDEO_ALT_TAGS: 'All videos must have alt tags',
  VIDEOS_COUNT: 'Videos module should display either 1, 3, or no videos. '
    + 'Never display 2 video (the design does not support this).',
  VIMEO_COVER_PHOTO: 'All Vimeo videos must have a cover photo',
};

exports.RULE_TEXT = RULE_TEXT;

exports.CONTENT_PAGE_RULES = {
  list: [
    {
      text: RULE_TEXT.ONE_OR_MORE_MODULES,
      validator: ({ modules }) => modules && modules.length >= 1,
    },
    {
      text: RULE_TEXT.FIRST_MODULE_BODY_TEXT,
      validator: ({ modules }) => {
        const firstModule = modules && modules[0];
        if (!firstModule) return false;
        if (checkOpenIframe(modules)) return true;
        return firstModule.type === CONTENT_MODULE.BODY_TEXT;
      },
    },
    {
      text: RULE_TEXT.IFRAME_ONLY_MODULE,
      validator: ({ modules }) => {
        if (!modules) return true;
        return !(checkOpenIframe(modules) && modules.length !== 1);
      }
    },
    {
      text: RULE_TEXT.CONTAIN_BODY_TEXT,
      validator: ({ modules }) => {
        if (!modules) return false;
        if (checkOpenIframe(modules)) return true;
        return modules.some(({ type } = module) => type === CONTENT_MODULE.BODY_TEXT);
      },
    },
    {
      text: RULE_TEXT.NO_MAIN_IMAGE_NO_SUBHEAD,
      validator: ({ subhead, mainImage }) => !(subhead && !mainImage),
    },
    {
      text: RULE_TEXT.MAIN_IMAGE_ALT,
      validator: ({ mainImage, mainImageAlt }) => !(mainImage && !mainImageAlt),
    },
    {
      text: RULE_TEXT.NO_STACKED,
      validator: ({ modules }) => {
        if (!modules) return true;

        for (let i = 0; i < modules.length; i += 1) {
          // Check if there are no more modules
          if (!modules[i + 1]) return true;
          // Check if next one is the same as current
          if ((modules[i].type !== CONTENT_MODULE.BODY_TEXT) &&
            (modules[i].type === modules[i + 1].type)) return false;
        }

        return true;
      },
    },
    {
      text: RULE_TEXT.CAROUSEL_POSITION,
      validator: ({ modules }) => {
        if (!modules) return true;
        // Check if it's last
        const isLast = modules[modules.length - 1].type === CONTENT_MODULE.CAROUSEL;
        if (isLast) return false;
        // Check if it's next to last
        if (modules.length > 1) {
          return !(modules[modules.length - 2].type === CONTENT_MODULE.CAROUSEL);
        }
        return true;
      },
    },
    {
      text: RULE_TEXT.VIDEO_ALT_TAGS,
      validator: ({ modules }) => {
        if (!modules) return true;

        return !(modules.some((item) => {
          // Validate inline video
          if (item.type === CONTENT_MODULE.INLINE_VIDEO) return item.video && !item.alt;
          // Validate thumbnailList
          if (item.type === CONTENT_MODULE.THUMBNAIL_LIST) {
            if (Array(6).fill(0).some((_, index) => item[`video${index + 1}`] &&
                !item[`alt${index + 1}`])) return true;
          }
          // Validate videos
          if (item.type === CONTENT_MODULE.VIDEOS) {
            return Array(3).fill(0)
              .some((_, index) => item[`video${index + 1}`] && !item[`alt${index + 1}`]);
          }
          // Validate body text
          if (item.type === CONTENT_MODULE.BODY_TEXT) {
            const { assets } = parseInsetContent(item.content.text);

            // Check body items
            if (assets.some(asset => asset.videoEmbedCode && !asset.alt)) {
              return true;
            }
          }
          return false;
        }));
      }
    },
    {
      text: RULE_TEXT.VIMEO_COVER_PHOTO,
      validator: ({ modules }) => {
        if (!modules) return true;

        return !(modules.some((item) => {
          // Validate inline video
          if (item.type === CONTENT_MODULE.INLINE_VIDEO) return isVimeo(item.video.videoEmbedCode) && !item.asset;
          // Validate thumbnailList
          if (item.type === CONTENT_MODULE.THUMBNAIL_LIST) {
            if (Array(6).fill(0).some((_, index) => item[`video${index + 1}`] &&
              isVimeo(item[`video${index + 1}`].videoEmbedCode)
                  && !item[`asset${index + 1}`])) return true;
          }
          // Validate videos
          if (item.type === CONTENT_MODULE.VIDEOS) {
            return Array(3).fill(0)
              .some((_, index) => item[`video${index + 1}`]
                && isVimeo(item[`video${index + 1}`].videoEmbedCode)
                && !item[`video${index + 1}cover`]);
          }
          // Validate body text
          if (item.type === CONTENT_MODULE.BODY_TEXT) {
            const { assets } = parseInsetContent(item.content.text);
            return assets.some(({ imageUrl, videoEmbedCode }) => isVimeo(videoEmbedCode) && !imageUrl);
          }
          return false;
        }));
      }
    },
    {
      text: RULE_TEXT.VIDEOS_COUNT,
      validator: ({ modules }) => {
        if (!modules) return true;

        return modules.every(item => item.type === CONTENT_MODULE.VIDEOS
          && Array(3).fill(0)
            .filter((_, index) => item[`video${index + 1}`]
              && item[`video${index + 1}`].videoEmbedCode).length !== 2);
      },
    },
    {
      text: RULE_TEXT.INLINE_IMAGE_SHAPE,
      validator: ({ modules }) => {
        if (!modules) return true;

        return !modules.some(({ type, shape }) => type === CONTENT_MODULE.INLINE_IMAGE
          && shape === IMAGE_SHAPE.CIRCLE);
      },
    },
    {
      text: RULE_TEXT.TEAMS_BIO_IMAGE,
      validator: ({ teams }) => {
        if (!teams) return true;

        const sections = teams.sections || [];

        return !sections.some((section) => {
          const foundItems = [];

          Array(6).fill(0).forEach((_, index) => {
            if (section[`title${index + 1}`]) {
              const imgExists = !!section[`image${index + 1}`];
              if (!foundItems.includes(imgExists)) foundItems.push(imgExists);
            }
          });

          return foundItems.length > 1;
        });
      }
    },
  ],
  title: 'content page',
};

const ARTICLE_RULES = {
  list: [
    {
      text: RULE_TEXT.ARTICLE_SUBCATEGORIES,
      validator: ({ subcategories }) => !(subcategories && subcategories.length),
    },
  ],
  title: 'article',
};

const CATEGORY_RULES = {
  list: [
    {
      text: RULE_TEXT.CATEGORY_WITH_SUB_NAV_PROPS,
      validator: ({
        overviewNavTitle,
        navDescription,
        navTitle,
        subcategories,
      }) => !(subcategories && !(overviewNavTitle && navDescription && navTitle)),
    },
    {
      text: RULE_TEXT.CATEGORY_HEADER_NAV_PROPS,
      validator: ({ header, navTitle }) => !(header && !navTitle),
    },
    {
      text: RULE_TEXT.CATEGORY_SUBCATEGORIES,
      validator: ({ pageType, subcategories }) => {
        if (pageType !== PAGE_TYPE.CATEGORY || !subcategories) return true;
        return !subcategories.some(item => item.pageType !== PAGE_TYPE.ARTICLE);
      },
    },
  ],
  title: 'category',
};

exports.PAGE_TYPE_RULES = {
  [PAGE_TYPE.ARTICLE]: ARTICLE_RULES,
  [PAGE_TYPE.CATEGORY]: CATEGORY_RULES,
};

exports.SUBCATEGORY_RULES = {
  list: [
    {
      text: RULE_TEXT.SUBCATEGORY_NAV_PROPS,
      validator: ({ navTitle, navDescription }) => navTitle && navDescription,
    },
  ],
  title: 'subcategory',
};

exports.HEADER_RULES = {
  list: [
    {
      text: RULE_TEXT.HEADER_LINKS_CATEGORIES,
      validator: ({ contentPages }) => {
        if (!contentPages) return true;
        return !contentPages.some(({ pageType }) => pageType !== PAGE_TYPE.CATEGORY);
      },
    },
  ],
  title: 'Primary Nav Rules',
};

exports.HOMEPAGE_RULES = {
  list: [
    {
      text: RULE_TEXT.VIDEOS_COUNT,
      validator: ({ hero: { videos } = {} }) => !videos || Array(3).fill(0)
        .filter((_, index) => videos[`video${index + 1}`]
          && videos[`video${index + 1}`].videoEmbedCode).length !== 2,
    },
    {
      text: RULE_TEXT.PIC_MODULE_PROPS,
      validator: ({ eventList }) => {
        if (!eventList) return true;
        for (let i = 1; i <= 5; i += 1) {
          // Check if we need to validate elements
          if (eventList[`title${i}`] || eventList[`date${i}`] || eventList[`location${i}`] ||
            eventList[`description${i}`] || eventList[`link${i}`]) {
            // Validate
            if (!(eventList[`title${i}`] && eventList[`date${i}`] && eventList[`location${i}`] &&
                eventList[`description${i}`] && eventList[`link${i}`])) return false;
          }
        }
        return true;
      },
    },
    {
      text: RULE_TEXT.VIMEO_COVER_PHOTO,
      validator: ({ hero: { videos } = {}, campusModule: { video, image } = {} }) => {
        if (videos) {
          for (let i = 1; i <= 3; i += 1) {
            // Check if we need to validate elements
            if (videos[`video${i}`]) {
              // Validate
              if (isVimeo(videos[`video${i}`].videoEmbedCode) && !videos[`video${i}cover`]) return false;
            }
          }
        }

        return !(video && isVimeo(video.videoEmbedCode) && !image);
      },
    },
    {
      text: RULE_TEXT.VIDEO_ALT_TAGS,
      validator: ({ hero: { videos } = {}, campusModule: { imageAlt, video } = {} }) => {
        if (videos) {
          for (let i = 1; i <= 3; i += 1) {
            // Check if we need to validate elements
            if (videos[`video${i}`]) {
              // Validate
              if (videos[`video${i}`].videoEmbedCode && !videos[`alt${i}`]) return false;
            }
          }
        }

        return !(video && video.videoEmbedCode && !imageAlt);
      },
    },
    {
      text: RULE_TEXT.SECTION_TITLES_PERIOD,
      validator: ({
        locale,
        campusModule,
        eventList,
        teamsModule,
      }) => {
        if (LANGUAGE_CONTENTFUL_LOCALE[LANGUAGE.CHINESE] === locale) return true;

        const { campusSectionTitle } = campusModule || {};
        const { eventListSectionTitle } = eventList || {};
        const { teamsSectionTitle } = teamsModule || {};

        return ![campusSectionTitle, teamsSectionTitle, eventListSectionTitle]
          .some(title => title && title[title.length - 1] !== '.');
      }
    },
    {
      text: RULE_TEXT.TEAMS_HERO,
      validator: ({ teamsModule }) => {
        if (!teamsModule) return true;
        const {
          heroName, heroTitle, heroImage, heroDescription, heroLinkDestination
        } = teamsModule;

        return !(!heroName || !heroTitle || !heroImage || !heroDescription || !heroLinkDestination);
      },
    },
    {
      text: RULE_TEXT.TEAMS_BIO_IMAGE,
      validator: ({ teamsModule }) => {
        if (!teamsModule) return true;

        const sections = teamsModule.sections || [];

        return !sections.some((section) => {
          const foundItems = [];

          Array(6).fill(0).forEach((_, index) => {
            if (section[`title${index + 1}`]) {
              const imgExists = !!section[`image${index + 1}`];
              if (!foundItems.includes(imgExists)) foundItems.push(imgExists);
            }
          });

          return foundItems.length > 1;
        });
      }
    },
  ],
  title: 'Homepage rules',
};
