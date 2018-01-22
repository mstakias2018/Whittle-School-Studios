import { IMAGE_SHAPE } from './images';
import { LANGUAGE, LANGUAGE_CONTENTFUL_LOCALE } from './regions';
import { CONTENT_MODULE } from './contentful';
import { PAGE_TYPE } from './settings';
import { parseInsetContent } from '../utils/strings';

const checkOpenIframe = modules => modules.some(({ type } = module) => type === CONTENT_MODULE.OPENAPPLY_IFRAME);
const isVimeoVideo = src => !!(src && src.match('player.vimeo.com'));
const hasCoverImage = src => src && !src.match('VIDEO-NO-COVER-IMAGE');

exports.CONTENT_PAGE_RULES = {
  list: [
    {
      text: 'Pages must have one or more modules',
      validator: ({ modules }) => modules && modules.length >= 1,
    },
    {
      text: 'First module must be BodyText',
      validator: ({ modules }) => {
        const firstModule = modules && modules[0];
        if (!firstModule) return false;
        if (checkOpenIframe(modules)) return true;
        return firstModule.type === CONTENT_MODULE.BODY_TEXT;
      },
    },
    {
      text: 'If an OpenApplyIFrame exists, it is the only module on the page',
      validator: ({ modules }) => {
        if (!modules) return true;
        return !(checkOpenIframe(modules) && modules.length !== 1);
      }
    },
    {
      text: 'Page must contain BodyText',
      validator: ({ modules }) => {
        if (!modules) return false;
        if (checkOpenIframe(modules)) return true;
        return modules.some(({ type } = module) => type === CONTENT_MODULE.BODY_TEXT);
      },
    },
    {
      text: 'If no main image exists, no subhead will exist',
      validator: ({ subhead, mainImage }) => !(subhead && !mainImage),
    },
    {
      text: 'Main image alt must be provided if main image exists',
      validator: ({ mainImage, mainImageAlt }) => !(mainImage && !mainImageAlt),
    },
    {
      text: 'No module other than BodyText may be consecutively stacked',
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
      text: 'Carousel cannot be the the last or next-to-last module on the page',
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
      text: 'All videos must have alt tags',
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
            const text = parseInsetContent(item.content.text);

            // Check body items
            if (text.images.filter(image => image.hasVideo && image.alt).length !== text.videoEmbedCodes.length) {
              return true;
            }
          }
          return false;
        }));
      }
    },
    {
      text: 'All Vimeo videos must have a cover photo',
      validator: ({ modules }) => {
        if (!modules) return true;

        return !(modules.some((item) => {
          // Validate inline video
          if (item.type === CONTENT_MODULE.INLINE_VIDEO) return isVimeoVideo(item.video.videoEmbedCode) && !item.asset;
          // Validate thumbnailList
          if (item.type === CONTENT_MODULE.THUMBNAIL_LIST) {
            if (Array(6).fill(0).some((_, index) => item[`video${index + 1}`] &&
              isVimeoVideo(item[`video${index + 1}`].videoEmbedCode)
                  && !item[`asset${index + 1}`])) return true;
          }
          // Validate videos
          if (item.type === CONTENT_MODULE.VIDEOS) {
            return Array(3).fill(0)
              .some((_, index) => item[`video${index + 1}`] && !item[`video${index + 1}cover`]);
          }
          // Validate body text
          if (item.type === CONTENT_MODULE.BODY_TEXT) {
            const text = parseInsetContent(item.content.text);
            return text.videoEmbedCodes.some(video => isVimeoVideo(video) && !hasCoverImage(video));
          }
          return false;
        }));
      }
    },
    {
      text: 'Inline images can only have the circle shape when children of a Carousel',
      validator: ({ modules }) => {
        if (!modules) return true;

        return !(modules.some(({ type, shape }) => type === CONTENT_MODULE.INLINE_IMAGE &&
          shape === IMAGE_SHAPE.CIRCLE));
      }
    }
  ],
  title: 'content page',
};

const ARTICLE_RULES = {
  list: [
    {
      text: 'Articles must not have subcategories',
      validator: ({ subcategories }) => !(subcategories && subcategories.length),
    },
  ],
  title: 'article',
};

const CATEGORY_RULES = {
  list: [
    {
      text: `Categories with subcategories must have Nav Title, Nav Description,
             and Overview Nav Title values`,
      validator: ({
        overviewNavTitle,
        navDescription,
        navTitle,
        subcategories,
      }) => !(subcategories && !(overviewNavTitle && navDescription && navTitle)),
    },
    {
      text: 'Categories in header must have Nav Title value',
      validator: ({ header, navTitle }) => !(header && !navTitle),
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
      text: 'Subcategories must have Nav Title and Nav Description values',
      validator: ({ navTitle, navDescription }) => navTitle && navDescription,
    },
  ],
  title: 'subcategory',
};

exports.HEADER_RULES = {
  list: [
    {
      text: 'Header links can only be Categories',
      validator: ({ contentPages }) => {
        if (!contentPages) return true;
        return !(contentPages.some(({ pageType }) => pageType !== PAGE_TYPE.CATEGORY));
      },
    },
  ],
  title: 'Primary Nav Rules',
};

exports.HOMEPAGE_RULES = {
  list: [
    {
      text: `Hero module- video: Display either 1, 3, or no videos. Never display 
      2 video (the design does not support this)`,
      validator: ({ hero: { videos } }) => Array(3).fill(0)
        .filter((_, index) => videos[`video${index + 1}`].videoEmbedCode).length !== 2,
    },
    {
      text: 'PIC module: Every event must have a date, title, location, description, and link.',
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
      text: 'All Vimeo videos must have a cover photo.',
      validator: ({ hero: { videos }, campusModule: { video, image } }) => {
        for (let i = 1; i <= 3; i += 1) {
          // Check if we need to validate elements
          if (videos[`video${i}`]) {
            // Validate
            if (isVimeoVideo(videos[`video${i}`].videoEmbedCode) && !videos[`video${i}cover`]) return false;
          }
        }
        return !(video && isVimeoVideo(video.videoEmbedCode) && !image);
      },
    },
    {
      text: 'All videos must have alt tags',
      validator: ({ hero: { videos }, campusModule: { imageAlt, video } }) => {
        for (let i = 1; i <= 3; i += 1) {
          // Check if we need to validate elements
          if (videos[`video${i}`]) {
            // Validate
            if (videos[`video${i}`].videoEmbedCode && !videos[`alt${i}`]) return false;
          }
        }
        return !(video && video.videoEmbedCode && !imageAlt);
      },
    },
    {
      text: '[English only] Section titles should always end in a period.',
      validator: ({
        locale,
        campusModule: { campusSectionTitle },
        teamsModule: { teamsSectionTitle },
        eventList: { eventListSectionTitle },
      }) => {
        if (LANGUAGE_CONTENTFUL_LOCALE[LANGUAGE.CHINESE] === locale) return true;

        return !([campusSectionTitle, teamsSectionTitle, eventListSectionTitle]
          .some(title => title[title.length - 1] !== '.'));
      }
    },
  ],
  title: 'Homepage rules',
};
