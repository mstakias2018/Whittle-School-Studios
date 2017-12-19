/* eslint-disable */

export default {
  contentTypes: [
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'inlineImage',
        type: 'ContentType',
        createdAt: '2017-11-14T19:50:09.247Z',
        updatedAt: '2017-12-08T19:38:42.388Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 15,
        version: 30,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 29,
        firstPublishedAt: '2017-11-14T19:50:10.704Z',
        publishedAt: '2017-12-08T19:38:42.388Z',
      },
      displayField: 'contentfulLabel',
      name: 'InlineImage',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'asset',
          name: 'Asset',
          type: 'Link',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'alt',
          name: 'Alt',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'caption',
          name: 'Caption',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'shape',
          name: 'Shape',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [
            {
              in: ['Rectangle', 'Square', 'Circle'],
            },
          ],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'contentPage',
        type: 'ContentType',
        createdAt: '2017-11-14T19:50:09.266Z',
        updatedAt: '2017-12-15T20:43:11.484Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 39,
        version: 78,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 77,
        firstPublishedAt: '2017-11-14T19:50:09.645Z',
        publishedAt: '2017-12-15T20:43:11.484Z',
      },
      displayField: 'slug',
      name: 'ContentPage',
      description: 'A Category/Article page with configurable modules.',
      fields: [
        {
          id: 'pageType',
          name: 'Page Type',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [
            {
              in: ['Category', 'Article'],
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'seoMetaTitle',
          name: 'SEO Meta Title',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'seoMetaDescription',
          name: 'SEO Meta Description',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'navTitle',
          name: 'Nav Title',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'overviewNavTitle',
          name: 'Overview Nav Title',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'navDescription',
          name: 'Nav Description',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'slug',
          name: 'Slug',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [
            {
              unique: true,
            },
            {
              regexp: {
                pattern: '^[A-Za-z\\d\\-]*$',
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'subcategories',
          name: 'Subcategories',
          type: 'Array',
          localized: false,
          required: false,
          validations: [
            {
              size: {
                max: 4,
              },
            },
          ],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['contentPage'],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'headline',
          name: 'Headline',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'subhead',
          name: 'Subhead',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'mainImage',
          name: 'Main Image',
          type: 'Link',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'mainImageAlt',
          name: 'Main Image Alt',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'modules',
          name: 'Modules',
          type: 'Array',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: [
                  'bodyText',
                  'inlineImage',
                  'List',
                  'openApplyIFrame',
                  'datedPost',
                  'quote',
                  'SectionTitle',
                  'slideshowCarousel',
                  'threeUpBreaker',
                  'thumbnailList',
                ],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'hasShareButtons',
          name: 'Has Share Buttons',
          type: 'Boolean',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'bodyText',
        type: 'ContentType',
        createdAt: '2017-11-14T19:50:09.323Z',
        updatedAt: '2017-12-12T15:09:49.076Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
          },
        },
        publishedCounter: 14,
        version: 28,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
          },
        },
        publishedVersion: 27,
        firstPublishedAt: '2017-11-14T19:50:11.539Z',
        publishedAt: '2017-12-12T15:09:49.076Z',
      },
      displayField: 'contentfulLabel',
      name: 'BodyText',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'content',
          name: 'Content',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'globalSettings',
        type: 'ContentType',
        createdAt: '2017-11-16T21:40:05.434Z',
        updatedAt: '2017-12-15T20:00:29.505Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 29,
        version: 58,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 57,
        firstPublishedAt: '2017-11-16T21:40:05.576Z',
        publishedAt: '2017-12-15T20:00:29.505Z',
      },
      displayField: 'contentfulLabel',
      name: 'GlobalSettings',
      description: 'Global site settings. Only one instance per space is needed.',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'translations',
          name: 'Translations',
          type: 'Object',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'fabText',
          name: 'FAB text',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkMimetypeGroup: ['image'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'fabLinkInternal',
          name: 'FAB Link - Internal',
          type: 'Link',
          localized: false,
          required: false,
          validations: [
            {
              linkContentType: ['contentPage'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'fabLinkExternal',
          name: 'FAB Link - External',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern:
                  '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$',
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'contentPageShareIcons',
          name: 'Content Page Share Icons',
          type: 'Array',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
          items: {
            type: 'Symbol',
            validations: [
              {
                in: ['Facebook', 'Twitter', 'WeChat', 'Weibo'],
              },
            ],
          },
        },
        {
          id: 'footerShareIcons',
          name: 'Footer Share Icons',
          type: 'Array',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
          items: {
            type: 'Symbol',
            validations: [
              {
                in: ['Facebook', 'Twitter', 'Weibo', 'WeChat'],
              },
            ],
          },
        },
        {
          id: 'facebookUrl',
          name: 'Facebook URL',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern:
                  '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$',
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'twitterUrl',
          name: 'Twitter URL',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern:
                  '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$',
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'weiboUrl',
          name: 'Weibo URL',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern:
                  '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$',
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'weChatUrl',
          name: 'We Chat URL',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern:
                  '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$',
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'header',
        type: 'ContentType',
        createdAt: '2017-11-20T16:49:22.354Z',
        updatedAt: '2017-12-08T19:37:25.064Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 6,
        version: 12,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 11,
        firstPublishedAt: '2017-11-20T16:49:22.434Z',
        publishedAt: '2017-12-08T19:37:25.064Z',
      },
      displayField: 'contentfulLabel',
      name: 'Header',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'contentPages',
          name: 'Content Pages',
          type: 'Array',
          localized: false,
          required: true,
          validations: [
            {
              size: {
                min: 3,
                max: 6,
              },
            },
          ],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['contentPage'],
              },
            ],
            linkType: 'Entry',
          },
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'slideshowCarousel',
        type: 'ContentType',
        createdAt: '2017-11-20T18:52:56.395Z',
        updatedAt: '2017-12-14T18:43:12.536Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 8,
        version: 16,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 15,
        firstPublishedAt: '2017-11-20T18:52:56.510Z',
        publishedAt: '2017-12-14T18:43:12.536Z',
      },
      displayField: 'contentfulLabel',
      name: 'SlideshowCarousel',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'slides',
          name: 'Slides',
          type: 'Array',
          localized: false,
          required: true,
          validations: [
            {
              size: {
                min: 3,
                max: 6,
              },
            },
          ],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['inlineImage'],
              },
            ],
            linkType: 'Entry',
          },
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'footer',
        type: 'ContentType',
        createdAt: '2017-11-22T19:32:33.536Z',
        updatedAt: '2017-12-14T18:42:51.282Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 5,
        version: 10,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 9,
        firstPublishedAt: '2017-11-22T19:32:34.591Z',
        publishedAt: '2017-12-14T18:42:51.282Z',
      },
      displayField: 'contentfulLabel',
      name: 'Footer',
      description:
        'Global site footer - only one instance needed. See https://paper.dropbox.com/doc/06-Contentful-Nav-Guidelines-PTegZDiP0ci6TrtTWZDWj#:uid=570234377377681350880952&h2=Footer-links for guidelines.',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'primaryLink1',
          name: 'Primary Link 1',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkContentType: ['footerLink'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'utilityLink1',
          name: 'Utility Link 1',
          type: 'Link',
          localized: false,
          required: false,
          validations: [
            {
              linkContentType: ['footerLink'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'utilityLink2',
          name: 'Utility Link 2',
          type: 'Link',
          localized: false,
          required: false,
          validations: [
            {
              linkContentType: ['footerLink'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'utilityLink2Children',
          name: 'Utility Link 2 - Children',
          type: 'Array',
          localized: false,
          required: false,
          validations: [
            {
              size: {
                min: 1,
                max: 2,
              },
            },
          ],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['footerLink'],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'primaryLink2',
          name: 'Primary Link 2',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkContentType: ['footerLink'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'primaryLink2Children',
          name: 'Primary Link 2 - Children',
          type: 'Array',
          localized: false,
          required: true,
          validations: [
            {
              size: {
                min: 1,
              },
            },
          ],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['footerLink'],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'primaryLink3',
          name: 'Primary Link 3',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkContentType: ['footerLink'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'primaryLink3Children',
          name: 'Primary Link 3 - Children',
          type: 'Array',
          localized: true,
          required: true,
          validations: [
            {
              size: {
                min: 1,
                max: 5,
              },
            },
          ],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['footerLink'],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'primaryLink4',
          name: 'Primary Link 4',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkContentType: ['footerLink'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'primaryLink4Children',
          name: 'Primary Link 4 - Children',
          type: 'Array',
          localized: false,
          required: true,
          validations: [
            {
              size: {
                min: 1,
                max: 5,
              },
            },
          ],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['footerLink'],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'primaryLink5',
          name: 'Primary Link 5',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkContentType: ['footerLink'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'primaryLink5Children',
          name: 'Primary Link 5 - Children',
          type: 'Array',
          localized: false,
          required: true,
          validations: [
            {
              size: {
                min: 1,
                max: 5,
              },
            },
          ],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['footerLink'],
              },
            ],
            linkType: 'Entry',
          },
        },
        {
          id: 'primaryLink6',
          name: 'Primary Link 6',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkContentType: ['footerLink'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'primaryLink6Children',
          name: 'Primary Link 6 - Children',
          type: 'Array',
          localized: false,
          required: true,
          validations: [
            {
              size: {
                min: 1,
                max: 5,
              },
            },
          ],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [
              {
                linkContentType: ['footerLink'],
              },
            ],
            linkType: 'Entry',
          },
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'footerLink',
        type: 'ContentType',
        createdAt: '2017-11-22T19:32:33.538Z',
        updatedAt: '2017-12-15T20:00:15.488Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 7,
        version: 14,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 13,
        firstPublishedAt: '2017-11-22T19:32:35.648Z',
        publishedAt: '2017-12-15T20:00:15.488Z',
      },
      displayField: 'contentfulLabel',
      name: 'FooterLink',
      description: 'An internal or external footer link',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'linkTitle',
          name: 'Link title',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'linkDestinationInternal',
          name: 'Link - Internal',
          type: 'Link',
          localized: false,
          required: false,
          validations: [
            {
              linkContentType: ['contentPage'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'linkDestinationExternal',
          name: 'Link - External',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern:
                  '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$',
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'quote',
        type: 'ContentType',
        createdAt: '2017-11-28T15:29:20.382Z',
        updatedAt: '2017-12-06T14:20:24.622Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
          },
        },
        publishedCounter: 4,
        version: 8,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
          },
        },
        publishedVersion: 7,
        firstPublishedAt: '2017-11-28T15:29:20.593Z',
        publishedAt: '2017-12-06T14:20:24.622Z',
      },
      displayField: 'contentfulLabel',
      name: 'Quote',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'quoteType',
          name: 'Quote Type',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [
            {
              in: ['block-quote', 'pull-quote'],
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'content',
          name: 'Content',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'source',
          name: 'Source',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'homePage',
        type: 'ContentType',
        createdAt: '2017-12-01T19:10:09.189Z',
        updatedAt: '2017-12-04T19:57:11.980Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 5,
        version: 10,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 9,
        firstPublishedAt: '2017-12-01T19:10:09.471Z',
        publishedAt: '2017-12-04T19:57:11.980Z',
      },
      displayField: 'contentfulLabel',
      name: 'HomePage',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'seoMetaTitle',
          name: 'SEO Meta Title',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'seoMetaDescription',
          name: 'SEO Meta Description',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'headline',
          name: 'Headline',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'schoolIntroTitle',
          name: 'School Intro Title',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'openApplyIFrame',
        type: 'ContentType',
        createdAt: '2017-12-01T21:20:03.756Z',
        updatedAt: '2017-12-07T20:52:27.768Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 4,
        version: 8,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 7,
        firstPublishedAt: '2017-12-01T21:20:03.845Z',
        publishedAt: '2017-12-07T20:52:27.768Z',
      },
      displayField: 'contentfulLabel',
      name: 'OpenApplyIFrame',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'scriptUrl',
          name: 'Script URL',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [
            {
              regexp: {
                pattern:
                  '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$',
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'description',
          name: 'Description',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'threeUpBreaker',
        type: 'ContentType',
        createdAt: '2017-12-07T10:44:43.942Z',
        updatedAt: '2017-12-07T10:54:01.484Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
          },
        },
        publishedCounter: 3,
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2017-12-07T10:44:44.114Z',
        publishedAt: '2017-12-07T10:54:01.484Z',
      },
      displayField: 'contentfulLabel',
      name: 'ThreeUpBreaker',
      description:
        'Used to list 3 items as numbered paragraph blocks with an edge-to-edge container that helps break up the page.',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title1',
          name: 'Title 1',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'content1',
          name: 'Content 1',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title2',
          name: 'Title 2',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'content2',
          name: 'Content 2',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title3',
          name: 'Title 3',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'content3',
          name: 'Content 3',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'List',
        type: 'ContentType',
        createdAt: '2017-12-11T14:49:14.967Z',
        updatedAt: '2017-12-11T17:21:24.640Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedCounter: 6,
        version: 13,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedVersion: 12,
        firstPublishedAt: '2017-12-11T14:51:06.500Z',
        publishedAt: '2017-12-11T17:21:24.640Z',
      },
      displayField: 'contentfulLabel',
      name: 'List',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title1',
          name: 'Title 1',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'description1',
          name: 'Description 1',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title2',
          name: 'Title 2',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'description2',
          name: 'description 2',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title3',
          name: 'Title 3',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'description3',
          name: 'Description 3',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title4',
          name: 'Title 4',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'description4',
          name: 'Description 4',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title5',
          name: 'Title 5',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'description5',
          name: 'Description 5',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title6',
          name: 'Title 6',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'description6',
          name: 'Description 6',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title7',
          name: 'Title 7',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'description7',
          name: 'Description 7',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title8',
          name: 'Title 8',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'description8',
          name: 'Description 8',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'SectionTitle',
        type: 'ContentType',
        createdAt: '2017-12-11T18:44:07.430Z',
        updatedAt: '2017-12-12T02:06:54.474Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 3,
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2017-12-11T18:44:07.749Z',
        publishedAt: '2017-12-12T02:06:54.474Z',
      },
      displayField: 'contentfulLabel',
      name: 'SectionTitle',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'number',
          name: 'Number',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [
            {
              regexp: {
                pattern: '[0-9]',
                flags: null,
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'datedPost',
        type: 'ContentType',
        createdAt: '2017-12-14T21:22:02.901Z',
        updatedAt: '2017-12-15T19:50:34.166Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 7,
        version: 14,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 13,
        firstPublishedAt: '2017-12-14T21:22:03.210Z',
        publishedAt: '2017-12-15T19:50:34.166Z',
      },
      displayField: 'contentfulLabel',
      name: 'Post',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'date',
          name: 'Date',
          type: 'Date',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'source',
          name: 'Source',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'description',
          name: 'Description',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'linkInternal',
          name: 'Link - Internal',
          type: 'Link',
          localized: false,
          required: false,
          validations: [
            {
              linkContentType: ['contentPage'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'linkExternal',
          name: 'Link - External',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern:
                  '^(ftp|http|https):\\/\\/(\\w+:{0,1}\\w*@)?(\\S+)(:[0-9]+)?(\\/|\\/([\\w#!:.?+=&%@!\\-\\/]))?$',
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'thumbnailList',
        type: 'ContentType',
        createdAt: '2017-12-15T20:16:36.779Z',
        updatedAt: '2017-12-18T18:52:02.052Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 8,
        version: 16,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 15,
        firstPublishedAt: '2017-12-15T20:16:36.960Z',
        publishedAt: '2017-12-18T18:52:02.052Z',
      },
      displayField: 'contentfulLabel',
      name: 'ThumbnailList',
      description: '',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'title',
          name: 'Title',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item1Title',
          name: 'Item 1 Title',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item1Description',
          name: 'Item 1 Description',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item1Asset',
          name: 'Item 1 Asset',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkMimetypeGroup: ['image'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'item1ImageAlt',
          name: 'Item 1 Image Alt',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item2Title',
          name: 'Item 2 Title',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item2Description',
          name: 'Item 2 Description',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item2Asset',
          name: 'Item 2 Asset',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkMimetypeGroup: ['image'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'item2ImageAlt',
          name: 'Item 2 Image Alt',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item3Title',
          name: 'Item 3 Title',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item3Description',
          name: 'Item 3 Description',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item3Asset',
          name: 'Item 3 Asset',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkMimetypeGroup: ['image'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'item3ImageAlt',
          name: 'Item 3 Image Alt',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item4Title',
          name: 'Item 4 Title',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item4Description',
          name: 'Item 4 Description',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item4Asset',
          name: 'Item 4 Asset',
          type: 'Link',
          localized: false,
          required: false,
          validations: [
            {
              linkMimetypeGroup: ['image'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'item4ImageAlt',
          name: 'Item 4 Image Alt',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item5Title',
          name: 'Item 5 Title',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item5Description',
          name: 'Item 5 Description',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item5Asset',
          name: 'Item 5 Asset',
          type: 'Link',
          localized: false,
          required: false,
          validations: [
            {
              linkMimetypeGroup: ['image'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'item5ImageAlt',
          name: 'Item 5 Image Alt',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item6Title',
          name: 'Item 6 Title',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item6Description',
          name: 'Item 6 Description',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item6Asset',
          name: 'Item 6 Asset',
          type: 'Link',
          localized: false,
          required: false,
          validations: [
            {
              linkMimetypeGroup: ['image'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'item6ImageAlt',
          name: 'Item 6 Image Alt',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
      ],
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'globalTranslations',
        type: 'ContentType',
        createdAt: '2017-12-18T21:13:39.989Z',
        updatedAt: '2017-12-18T21:13:40.108Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 1,
        version: 2,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 1,
        firstPublishedAt: '2017-12-18T21:13:40.108Z',
        publishedAt: '2017-12-18T21:13:40.108Z',
      },
      displayField: 'contentfulLabel',
      name: 'GlobalTranslations',
      description: 'Global site translations. Only one instance per space is needed.',
      fields: [
        {
          id: 'contentfulLabel',
          name: 'Contentful Label (Internal)',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'translations',
          name: 'Translations',
          type: 'Object',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
      ],
    },
  ],
  editorInterfaces: [
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 30,
        createdAt: '2017-11-14T19:50:10.849Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-08T19:38:42.841Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'inlineImage',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'asset',
          settings: {
            helpText:
              'Inline image/video preview sizes should be either 840x484 (Xlarge), 620x350 (Large), 460x260 (Medium), or 270x152 (Small)',
          },
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'alt',
          settings: {
            helpText: 'This will be used as the image\'s alt attribute',
          },
          widgetId: 'singleLine',
        },
        {
          fieldId: 'caption',
          settings: {
            helpText: 'No markup on image/video captions. [Min/max character count to be added.]',
          },
          widgetId: 'singleLine',
        },
        {
          fieldId: 'shape',
          settings: {
            helpText:
              'Determines how the image is cropped. Rectangle and Square are always allowed. Circle is only allowed when the child of a Slideshow Carousel.',
          },
          widgetId: 'radio',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 78,
        createdAt: '2017-11-14T19:50:09.955Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-15T20:43:11.879Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'contentPage',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'pageType',
          widgetId: 'radio',
        },
        {
          fieldId: 'seoMetaTitle',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'seoMetaDescription',
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'navTitle',
          settings: {
            helpText: 'Only needed for Categories with nested Articles or Articles nested under Categories.',
          },
          widgetId: 'singleLine',
        },
        {
          fieldId: 'overviewNavTitle',
          settings: {
            helpText: 'Only needed for Categories with nested Articles. Usually "Overview".',
          },
          widgetId: 'singleLine',
        },
        {
          fieldId: 'navDescription',
          settings: {
            helpText:
              'Only needed for Categories with nested Articles or Articles nested under Categories. [English character guidelines] 24-56',
          },
          widgetId: 'singleLine',
        },
        {
          fieldId: 'slug',
          widgetId: 'slugEditor',
        },
        {
          fieldId: 'subcategories',
          settings: {
            helpText: 'Please only add subcategories to Category pages (not Articles)',
            bulkEditing: false,
          },
          widgetId: 'entryCardsEditor',
        },
        {
          fieldId: 'headline',
          settings: {
            helpText: '[English character guidelines] Category 18-36, Article 18-48',
          },
          widgetId: 'singleLine',
        },
        {
          fieldId: 'subhead',
          settings: {
            helpText: '[English character guidelines] Category 120-240, Article 80-160',
          },
          widgetId: 'singleLine',
        },
        {
          fieldId: 'mainImage',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'mainImageAlt',
          settings: {
            helpText: 'Required for pages with Main Image assets.',
          },
          widgetId: 'singleLine',
        },
        {
          fieldId: 'modules',
          settings: {
            bulkEditing: true,
          },
          widgetId: 'entryLinksEditor',
        },
        {
          fieldId: 'hasShareButtons',
          settings: {
            trueLabel: 'Yes',
            falseLabel: 'No',
          },
          widgetId: 'boolean',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 28,
        createdAt: '2017-11-14T19:50:11.828Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-12T15:09:51.852Z',
        updatedBy: {
          sys: {
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'bodyText',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'content',
          settings: {
            helpText:
              'Only bold and italic tags and links are allowed. All other tags will be stripped before rendering. There is no character count max for body text. Multiple paragraphs may be used within a single body text component.',
          },
          widgetId: 'markdown',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 58,
        createdAt: '2017-11-16T21:40:05.681Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-15T20:00:29.974Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'globalSettings',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          settings: {
            helpText: '[Internal Title] Only for internal usage for ease of labeling/browsing content on Contentful.',
          },
          widgetId: 'singleLine',
        },
        {
          fieldId: 'translations',
          settings: {
            helpText:
              'For consistency, please label aria labels as "xAriaLabel" and alt tags as "xAlt". Translation keys corresponding to constants in the code are written in all caps.',
          },
          widgetId: 'objectEditor',
        },
        {
          fieldId: 'fabText',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'fabLinkInternal',
          settings: {
            helpText:
              'Please fill out exactly one "FAB Link" field. If both are provided, the external link will be used.',
          },
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'fabLinkExternal',
          settings: {
            helpText:
              'Please fill out exactly one "FAB Link" field. If both are provided, the external link will be used.',
          },
          widgetId: 'urlEditor',
        },
        {
          fieldId: 'contentPageShareIcons',
          widgetId: 'checkbox',
        },
        {
          fieldId: 'footerShareIcons',
          widgetId: 'checkbox',
        },
        {
          fieldId: 'facebookUrl',
          settings: {
            helpText: 'Destination for footer Facebook link',
          },
          widgetId: 'urlEditor',
        },
        {
          fieldId: 'twitterUrl',
          settings: {
            helpText: 'Destination for footer Twitter link',
          },
          widgetId: 'urlEditor',
        },
        {
          fieldId: 'weiboUrl',
          settings: {
            helpText: 'Destination for footer Weibo link',
          },
          widgetId: 'urlEditor',
        },
        {
          fieldId: 'weChatUrl',
          settings: {
            helpText: 'Destination for footer We Chat link',
          },
          widgetId: 'urlEditor',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 12,
        createdAt: '2017-11-20T16:49:22.554Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-08T19:37:25.400Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'header',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'contentPages',
          settings: {
            bulkEditing: false,
          },
          widgetId: 'entryLinksEditor',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 16,
        createdAt: '2017-11-20T18:52:56.638Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-14T18:43:13.071Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'slideshowCarousel',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'slides',
          settings: {
            bulkEditing: true,
          },
          widgetId: 'entryLinksEditor',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 10,
        createdAt: '2017-11-22T19:32:34.784Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-14T18:42:51.861Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'footer',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'primaryLink1',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'utilityLink1',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'utilityLink2',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'utilityLink2Children',
          settings: {
            helpText: 'Please only include children if Utility Link 2 is filled out',
            bulkEditing: true,
          },
          widgetId: 'entryLinksEditor',
        },
        {
          fieldId: 'primaryLink2',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'primaryLink2Children',
          settings: {
            bulkEditing: true,
          },
          widgetId: 'entryLinksEditor',
        },
        {
          fieldId: 'primaryLink3',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'primaryLink3Children',
          settings: {
            bulkEditing: true,
          },
          widgetId: 'entryLinksEditor',
        },
        {
          fieldId: 'primaryLink4',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'primaryLink4Children',
          settings: {
            bulkEditing: true,
          },
          widgetId: 'entryLinksEditor',
        },
        {
          fieldId: 'primaryLink5',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'primaryLink5Children',
          settings: {
            bulkEditing: true,
          },
          widgetId: 'entryLinksEditor',
        },
        {
          fieldId: 'primaryLink6',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'primaryLink6Children',
          settings: {
            bulkEditing: true,
          },
          widgetId: 'entryLinksEditor',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 14,
        createdAt: '2017-11-22T19:32:35.762Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-15T20:00:15.941Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'footerLink',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'linkTitle',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'linkDestinationInternal',
          settings: {
            helpText: 'Please fill out exactly one "Link" field. If both are provided, the external link will be used.',
          },
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'linkDestinationExternal',
          settings: {
            helpText: 'Please fill out exactly one "Link" field. If both are provided, the external link will be used.',
          },
          widgetId: 'urlEditor',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 8,
        createdAt: '2017-11-28T15:29:20.716Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-06T14:20:27.825Z',
        updatedBy: {
          sys: {
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'quote',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          settings: {
            helpText: '',
          },
          widgetId: 'singleLine',
        },
        {
          fieldId: 'quoteType',
          widgetId: 'dropdown',
        },
        {
          fieldId: 'content',
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'source',
          widgetId: 'singleLine',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 10,
        createdAt: '2017-12-01T19:10:09.575Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-04T19:57:12.317Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'homePage',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'seoMetaTitle',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'seoMetaDescription',
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'headline',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'schoolIntroTitle',
          widgetId: 'multipleLine',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 8,
        createdAt: '2017-12-01T21:20:03.971Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-07T20:52:28.064Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'openApplyIFrame',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'scriptUrl',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description',
          widgetId: 'markdown',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 6,
        createdAt: '2017-12-07T10:44:44.403Z',
        createdBy: {
          sys: {
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-07T10:54:03.810Z',
        updatedBy: {
          sys: {
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'threeUpBreaker',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'title1',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'content1',
          widgetId: 'markdown',
        },
        {
          fieldId: 'title2',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'content2',
          widgetId: 'markdown',
        },
        {
          fieldId: 'title3',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'content3',
          widgetId: 'markdown',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 12,
        createdAt: '2017-12-11T14:51:06.653Z',
        createdBy: {
          sys: {
            id: '6214ankndWlLU2Ir99aaKG',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-11T17:21:25.192Z',
        updatedBy: {
          sys: {
            id: '6214ankndWlLU2Ir99aaKG',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'List',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'title1',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description1',
          widgetId: 'markdown',
        },
        {
          fieldId: 'title2',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description2',
          widgetId: 'markdown',
        },
        {
          fieldId: 'title3',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description3',
          widgetId: 'markdown',
        },
        {
          fieldId: 'title4',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description4',
          widgetId: 'markdown',
        },
        {
          fieldId: 'title5',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description5',
          widgetId: 'markdown',
        },
        {
          fieldId: 'title6',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description6',
          widgetId: 'markdown',
        },
        {
          fieldId: 'title7',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description7',
          widgetId: 'markdown',
        },
        {
          fieldId: 'title8',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description8',
          widgetId: 'markdown',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 6,
        createdAt: '2017-12-11T18:44:07.927Z',
        createdBy: {
          sys: {
            id: '6214ankndWlLU2Ir99aaKG',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-12T02:06:54.992Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'SectionTitle',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'number',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'title',
          widgetId: 'singleLine',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 14,
        createdAt: '2017-12-14T21:22:03.321Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-15T19:50:34.562Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'datedPost',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'date',
          settings: {
            ampm: '24',
            format: 'dateonly',
          },
          widgetId: 'datePicker',
        },
        {
          fieldId: 'title',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'source',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'linkInternal',
          settings: {
            helpText: 'If both an External and Internal link are provided, the External one will be used.',
          },
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'linkExternal',
          settings: {
            helpText: 'If both an External and Internal link are provided, the External one will be used.',
          },
          widgetId: 'urlEditor',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 16,
        createdAt: '2017-12-15T20:16:37.099Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-18T18:52:02.412Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'thumbnailList',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'title',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item1Title',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item1Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'item1Asset',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'item1ImageAlt',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item2Title',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item2Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'item2Asset',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'item2ImageAlt',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item3Title',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item3Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'item3Asset',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'item3ImageAlt',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item4Title',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item4Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'item4Asset',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'item4ImageAlt',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item5Title',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item5Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'item5Asset',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'item5ImageAlt',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item6Title',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'item6Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'item6Asset',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'item6ImageAlt',
          widgetId: 'singleLine',
        },
      ],
    },
    {
      sys: {
        id: 'default',
        type: 'EditorInterface',
        space: {
          sys: {
            id: 'udx5f2jyw09i',
            type: 'Link',
            linkType: 'Space',
          },
        },
        version: 2,
        createdAt: '2017-12-18T21:13:40.228Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-18T21:13:40.463Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'globalTranslations',
            type: 'Link',
            linkType: 'ContentType',
          },
        },
      },
      controls: [
        {
          fieldId: 'contentfulLabel',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'translations',
          widgetId: 'objectEditor',
        },
      ],
    },
  ],
  entries: [
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: '2GhxnGn75my6y0Owyuc8KS',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.742Z',
        updatedAt: '2017-12-18T22:56:12.543Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 6,
        version: 26,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 25,
        firstPublishedAt: '2017-11-14T19:50:29.540Z',
        publishedAt: '2017-12-18T22:56:12.543Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'inlineImage',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Square mouse image (Promoting diversity)',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
          'zh-CN': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        alt: {
          'en-US': 'Square mouse',
          'zh-CN': '提供',
        },
        shape: {
          'en-US': 'Square',
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'nCr3eS7rJ6wmQsMgO8aSe',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:55.831Z',
        updatedAt: '2017-12-18T22:55:59.999Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 27,
        version: 109,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 108,
        firstPublishedAt: '2017-11-22T19:33:10.554Z',
        publishedAt: '2017-12-18T22:55:59.999Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'contentPage',
          },
        },
      },
      fields: {
        pageType: {
          'en-US': 'Category',
        },
        seoMetaTitle: {
          'en-US': 'Social Responsibility in Education',
        },
        seoMetaDescription: {
          'en-US':
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        navTitle: {
          'en-US': 'Social Responsibility',
          'zh-CN': '社会责任感',
        },
        overviewNavTitle: {
          'en-US': 'Overview',
        },
        navDescription: {
          'en-US': 'quis nostrud exercitation ullamco',
        },
        slug: {
          'en-US': 'social-responsibility',
          'zh-CN': 'social-responsibility-cn',
        },
        subcategories: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3YO3FxeCGkMY2quAGgyEek',
              },
            },
          ],
        },
        headline: {
          'en-US': 'Social Responsibility',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5E1Ev4n9OoSo0aCGO4C8IY',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2GhxnGn75my6y0Owyuc8KS',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'LtfdmwKCMUg2iwaoMYEqc',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6dP5KIfWbC0cuwkAsgIcce',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'aPGz8O7oZieWc6oGUCocI',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': true,
          'zh-CN': true,
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: '5E1Ev4n9OoSo0aCGO4C8IY',
        type: 'Entry',
        createdAt: '2017-12-03T23:27:25.939Z',
        updatedAt: '2017-12-18T22:56:20.167Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 17,
        version: 126,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 125,
        firstPublishedAt: '2017-12-03T23:27:59.904Z',
        publishedAt: '2017-12-18T22:56:20.167Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'bodyText',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Lorem ipsum with embedded image (social responsibility)',
        },
        content: {
          'en-US':
            '![fish--left--circle](//images.contentful.com/udx5f2jyw09i/4gWhPrmQjm6qK4s0Ao8AW/be452143cdb844e34fb35854e333b2be/fish.jpg "Caption: Lorem ipsum cum sociis natoque penatibus.")Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo __the bold__. Duis aute irure dolor in reprehenderit in volsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo *test italic*. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqulamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqulamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in volsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit Excepteur sint occaecat cupidatat non proident,![Daffodils (curriculum carousel)--circle](//images.contentful.com/udx5f2jyw09i/hxEfHf39jGMMEQ8KE8Y8g/0957a66ec6d0d4c7a1d31d8d6f5d69c0/daffodils.jpg) sunt in culpa qui officia deserunt mollit anim id est laborum.in volsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
          'zh-CN':
            '料你结而*身起运*王根场统起价，__九认土身价已济员数到广可__，油养政__孤本料石__坑多战走。 民划做还打议半厂开子本北易，some *random* __English__ words 级方极定资A少领分秃董。 时计他理层场斯府相难，在号林史太门完离表，电[法2外](https://www.google.com)料扯热我。 *常在方界以说约政近*，便些近正参只同之，并数D状子信技。 增打出结 __质等__ 调作，边律平由 *给调* 天社，位-式级伶外。',
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'LtfdmwKCMUg2iwaoMYEqc',
        type: 'Entry',
        createdAt: '2017-12-06T19:28:09.221Z',
        updatedAt: '2017-12-18T22:56:14.551Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 5,
        version: 41,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 40,
        firstPublishedAt: '2017-12-06T19:28:54.354Z',
        publishedAt: '2017-12-18T22:56:14.551Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'bodyText',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Another embedded image test (social responsibility)',
        },
        content: {
          'en-US':
            '![Illustration of children--circle--left](//images.contentful.com/udx5f2jyw09i/5kLJqDZ9vyIaOucos4KCS0/438abc2c158e763f6a87f3b7dab233d8/children-with-lights.jpg "Caption: Lorem ipsum cum sociis natoque penatibus.")At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.',
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: '6dP5KIfWbC0cuwkAsgIcce',
        type: 'Entry',
        createdAt: '2017-12-15T20:43:29.921Z',
        updatedAt: '2017-12-18T22:56:16.197Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 4,
        version: 86,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 85,
        firstPublishedAt: '2017-12-15T20:45:38.042Z',
        publishedAt: '2017-12-18T22:56:16.197Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'thumbnailList',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Test list (social responsibility)',
        },
        title: {
          'en-US': 'Our Heads',
        },
        item1Title: {
          'en-US': 'Person One',
        },
        item1Description: {
          'en-US':
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        item1Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'ul4XFgkBtAUYY2Q8k0A0I',
            },
          },
        },
        item1ImageAlt: {
          'en-US': 'Building',
        },
        item2Title: {
          'en-US': 'Person Two',
        },
        item2Description: {
          'en-US':
            'Duis aute irure dolor in reprehenderit in volsed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        item2Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'hxEfHf39jGMMEQ8KE8Y8g',
            },
          },
        },
        item2ImageAlt: {
          'en-US': 'Daffodils',
        },
        item3Title: {
          'en-US': 'Person Three',
        },
        item3Description: {
          'en-US': 'Duis aute irure dolor.',
        },
        item3Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5kLJqDZ9vyIaOucos4KCS0',
            },
          },
        },
        item3ImageAlt: {
          'en-US': 'Children',
        },
        item4Title: {
          'en-US': 'Person Four',
        },
        item4Description: {
          'en-US':
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqulamco laboris nisi ut aliquip ex ea commodo consequat. ',
        },
        item4Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5iM0C8Tviguwks0kMCkyQE',
            },
          },
        },
        item4ImageAlt: {
          'en-US': 'Shenzhen campus',
        },
        item5Title: {
          'en-US': 'Person Five',
        },
        item5Description: {
          'en-US':
            'Duis aute irure dolor in reprehenderit Excepteur sint occaecat cupidatat non proident,Daffodils (curriculum carousel) sunt in culpa qui officia deserunt mollit anim id est laborum',
        },
        item5Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        item5ImageAlt: {
          'en-US': 'Mouse on teeth',
        },
        item6Title: {
          'en-US': 'Person Six',
        },
        item6Description: {
          'en-US':
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
        item6Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '4gWhPrmQjm6qK4s0Ao8AW',
            },
          },
        },
        item6ImageAlt: {
          'en-US': 'Fish',
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'aPGz8O7oZieWc6oGUCocI',
        type: 'Entry',
        createdAt: '2017-12-15T21:08:41.767Z',
        updatedAt: '2017-12-18T22:56:18.066Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 3,
        version: 54,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 53,
        firstPublishedAt: '2017-12-15T21:09:59.392Z',
        publishedAt: '2017-12-18T22:56:18.066Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'thumbnailList',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Second list with fewer items',
        },
        title: {
          'en-US': 'Our Campuses',
        },
        item1Title: {
          'en-US': 'DC',
        },
        item1Description: {
          'en-US':
            'Duis aute irure dolor in __reprehenderit__ in volsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad [minim](https://www.google.com) veniam, quis nostrud exercitation ullamco *laboris* nisi ut aliqulamco laboris nisi ut aliquip ex ea co',
        },
        item1Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'ul4XFgkBtAUYY2Q8k0A0I',
            },
          },
        },
        item1ImageAlt: {
          'en-US': 'Building',
        },
        item2Title: {
          'en-US': 'Shenzhen',
        },
        item2Description: {
          'en-US':
            'Duis aute irure dolor in __reprehenderit__ in volsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad [minim](https://www.google.com) veniam, quis nostrud exercitation ullamco *laboris* nisi ut aliqulamco laboris nisi ut aliquip ex ea co',
        },
        item2Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5iM0C8Tviguwks0kMCkyQE',
            },
          },
        },
        item2ImageAlt: {
          'en-US': 'Shenzhen campus',
        },
        item3Title: {
          'en-US': 'Beijing',
        },
        item3Description: {
          'en-US':
            'Duis aute irure dolor in __reprehenderit__ in volsed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad [minim](https://www.google.com) veniam, quis nostrud exercitation ullamco *laboris* nisi ut aliqulamco laboris nisi ut aliquip ex ea co',
        },
        item3Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '4gWhPrmQjm6qK4s0Ao8AW',
            },
          },
        },
        item3ImageAlt: {
          'en-US': 'Fish picture',
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: '2kmC6klQ4sWk8Sig2QsisK',
        type: 'Entry',
        createdAt: '2017-12-18T21:13:47.645Z',
        updatedAt: '2017-12-18T21:44:02.274Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 2,
        version: 14,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 13,
        firstPublishedAt: '2017-12-18T21:14:12.014Z',
        publishedAt: '2017-12-18T21:44:02.274Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'globalTranslations',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Global Site Translations',
        },
        translations: {
          'en-US': {
            fab: {
              ariaLabel: 'Learn more about admissions and enrollment',
            },
            date: {
              months: [
                {
                  long: 'January',
                  short: 'Jan',
                },
                {
                  long: 'February',
                  short: 'Feb',
                },
                {
                  long: 'March',
                  sort: 'Mar',
                },
                {
                  long: 'April',
                  short: 'Apr',
                },
                {
                  long: 'May',
                  short: 'May',
                },
                {
                  long: 'Jun',
                  short: 'Jun',
                },
                {
                  long: 'July',
                  short: 'Jul',
                },
                {
                  long: 'Aug',
                  short: 'August',
                },
                {
                  long: 'Sept',
                  short: 'September',
                },
                {
                  long: 'October',
                  short: 'Oct',
                },
                {
                  long: 'November',
                  short: 'Nov',
                },
                {
                  long: 'December',
                  short: 'Dec',
                },
              ],
            },
            post: {
              continueReading: 'Continue reading',
            },
            share: {
              linkCopied: 'Link copied to clipboard',
              shareLabel: 'Share',
              copyLinkLabel: 'Copy link to clipboard',
              socialIconAriaLabel: 'Share this page -',
            },
            events: {
              register: 'Register',
            },
            footer: {
              shareText: 'Stay connected with us:',
              copyrightLine1: 'All Rights Reserved. © 2017',
              copyrightLine2: 'G30 Project Ltd, the global parent entity.',
            },
            header: {
              logoAlt: 'The Whittle School',
              regions: {
                US: 'US',
                CHINA: 'China',
              },
              languages: {
                CHINESE: '中文',
                ENGLISH: 'English',
              },
              selectors: {
                regionAriaLabel: 'Region selector',
                languageAriaLabel: 'Language selector',
                currentSelectionAriaLabel: 'Current selection',
              },
              primaryAriaLabel: 'Main navigation',
              secondaryAriaLabel: 'Secondary navigation',
              checkedItemAriaLabel: 'Completed page',
            },
            social: {
              WEIBO: 'Weibo',
              WECHAT: 'We Chat',
              TWITTER: 'Twitter',
              FACEBOOK: 'Facebook',
            },
            general: {
              menu: 'Menu - Test change!!',
              close: 'Close',
              learnMore: 'Learn more',
              schoolName: 'The Whittle School',
              mainAriaLabel: 'Main content',
            },
            carousel: {
              nextAriaLabel: 'Next image',
              prevAriaLabel: 'Previous image',
              fullScreenAriaLabel: 'Open gallery in full screen mode',
            },
            dateIntervals: {
              days: 'Days',
              hours: 'Hours',
              weeks: 'Weeks',
              minutes: 'Minutes',
            },
            recirculation: {
              next: 'Next',
              previous: 'Prev',
            },
          },
          'zh-CN': {
            fab: {
              ariaLabel: '含点浮',
            },
            date: {
              months: [
                {
                  long: '一月',
                  short: '一月',
                },
                {
                  long: '二月',
                  short: '二月',
                },
                {
                  long: '三月',
                  sort: '三月',
                },
                {
                  long: '四月',
                  short: '四月',
                },
                {
                  long: '五月',
                  short: '五月',
                },
                {
                  long: '六月',
                  short: '六月',
                },
                {
                  long: '七月',
                  short: '七月',
                },
                {
                  long: '八月',
                  short: '八月',
                },
                {
                  long: '九月',
                  short: '九月',
                },
                {
                  long: '十月',
                  short: '十月',
                },
                {
                  long: '十一月',
                  short: '十一月',
                },
                {
                  long: '十二月',
                  short: '十二月',
                },
              ],
            },
            post: {
              continueReading: '東動',
            },
            share: {
              linkCopied: '含点浮',
              shareLabel: '人人',
              copyLinkLabel: '家的人',
              socialIconAriaLabel: '含点浮',
            },
            footer: {
              shareText: '人含点浮:',
              copyrightLine1: '含点浮 © 2017',
              copyrightLine2: '東動東動',
            },
            header: {
              logoAlt: '東動',
              regions: {
                US: '東動',
                CHINA: '含点浮',
              },
              languages: {
                CHINESE: '含点浮',
                ENGLISH: 'English',
              },
              selectors: {
                regionAriaLabel: '含点浮',
                languageAriaLabel: '含点浮',
                currentSelectionAriaLabel: '含点浮',
              },
              primaryAriaLabel: '人含点浮',
              secondaryAriaLabel: '含点浮',
              checkedItemAriaLabel: '東動',
            },
            social: {
              WEIBO: '東動',
              WECHAT: '含点浮',
              TWITTER: '人人',
              FACEBOOK: '含点浮',
            },
            general: {
              menu: '家的人',
              close: '人人',
              schoolName: '含点浮',
              mainAriaLabel: '且算品',
            },
            carousel: {
              nextAriaLabel: '東動',
              prevAriaLabel: '含点浮',
              fullScreenAriaLabel: '人人',
            },
            recirculation: {
              next: '含点浮',
              previous: '且算品',
            },
          },
        },
      },
    },
  ],
  assets: [
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: '4gWhPrmQjm6qK4s0Ao8AW',
        type: 'Asset',
        createdAt: '2017-11-14T19:50:13.353Z',
        updatedAt: '2017-11-22T19:32:52.122Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 3,
        version: 9,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 8,
        firstPublishedAt: '2017-11-14T19:50:21.774Z',
        publishedAt: '2017-11-22T19:32:52.122Z',
      },
      fields: {
        title: {
          'en-US': 'fish',
        },
        file: {
          'en-US': {
            url: '//images.contentful.com/udx5f2jyw09i/4gWhPrmQjm6qK4s0Ao8AW/be452143cdb844e34fb35854e333b2be/fish.jpg',
            details: {
              size: 6063549,
              image: {
                width: 4320,
                height: 2432,
              },
            },
            fileName: 'fish.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: '3oXvb6xAdywo8sKSmSgQAc',
        type: 'Asset',
        createdAt: '2017-11-14T19:50:13.421Z',
        updatedAt: '2017-12-08T19:14:41.841Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 4,
        version: 13,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 12,
        firstPublishedAt: '2017-11-14T19:50:22.499Z',
        publishedAt: '2017-12-08T19:14:41.841Z',
      },
      fields: {
        title: {
          'en-US': 'mouse',
        },
        description: {
          'en-US': '',
        },
        file: {
          'en-US': {
            url:
              '//images.contentful.com/udx5f2jyw09i/3oXvb6xAdywo8sKSmSgQAc/b84ad958042775300c2aa7309959a342/mouse.jpg',
            details: {
              size: 396383,
              image: {
                width: 1600,
                height: 851,
              },
            },
            fileName: 'mouse.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'ul4XFgkBtAUYY2Q8k0A0I',
        type: 'Asset',
        createdAt: '2017-11-14T19:50:13.422Z',
        updatedAt: '2017-12-08T19:15:23.110Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 4,
        version: 14,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 13,
        firstPublishedAt: '2017-11-14T19:50:20.972Z',
        publishedAt: '2017-12-08T19:15:23.110Z',
      },
      fields: {
        title: {
          'en-US': 'building',
        },
        description: {
          'en-US': '',
        },
        file: {
          'en-US': {
            url:
              '//images.contentful.com/udx5f2jyw09i/ul4XFgkBtAUYY2Q8k0A0I/08a8d618eb02bab1a6d04444460ffc17/building.jpg',
            details: {
              size: 4939996,
              image: {
                width: 4700,
                height: 2000,
              },
            },
            fileName: 'building.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: '5iM0C8Tviguwks0kMCkyQE',
        type: 'Asset',
        createdAt: '2017-11-16T18:33:04.650Z',
        updatedAt: '2017-12-08T19:14:53.135Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 6,
        version: 29,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 28,
        firstPublishedAt: '2017-11-16T18:34:36.021Z',
        publishedAt: '2017-12-08T19:14:53.134Z',
      },
      fields: {
        title: {
          'en-US': 'campus',
          'zh-CN': '',
        },
        file: {
          'en-US': {
            url:
              '//images.contentful.com/udx5f2jyw09i/5iM0C8Tviguwks0kMCkyQE/95e623e0bdf68408c3206d8cc495ea56/campus.jpg',
            details: {
              size: 11216609,
              image: {
                width: 5120,
                height: 2880,
              },
            },
            fileName: 'campus.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: '2GcxvHO8mkg48Q2QQWsCOe',
        type: 'Asset',
        createdAt: '2017-11-20T17:52:10.724Z',
        updatedAt: '2017-12-15T11:14:50.394Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
          },
        },
        publishedCounter: 10,
        version: 45,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6n9DTQYgQ2KhC3T6Ks5yZM',
          },
        },
        publishedVersion: 44,
        firstPublishedAt: '2017-11-20T17:53:10.141Z',
        publishedAt: '2017-12-15T11:14:50.394Z',
      },
      fields: {
        title: {
          'en-US': 'FAB',
          'zh-CN': 'fab-text-cn',
        },
        file: {
          'en-US': {
            url:
              '//images.contentful.com/udx5f2jyw09i/2GcxvHO8mkg48Q2QQWsCOe/6db433efd6a01a4bb6679b8104147f7a/fab-en.svg',
            details: {
              size: 19026,
              image: {
                width: 79,
                height: 77,
              },
            },
            fileName: 'fab-en.svg',
            contentType: 'image/svg+xml',
          },
          'zh-CN': {
            url:
              '//images.contentful.com/udx5f2jyw09i/2GcxvHO8mkg48Q2QQWsCOe/08603ae7a03a5c4831c6f69872bc75d1/fab-text-cn.svg',
            details: {
              size: 9420,
              image: {
                width: 120,
                height: 125,
              },
            },
            fileName: 'fab-text-cn.svg',
            contentType: 'image/svg+xml',
          },
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: '5kLJqDZ9vyIaOucos4KCS0',
        type: 'Asset',
        createdAt: '2017-11-20T19:33:40.102Z',
        updatedAt: '2017-12-08T19:15:03.897Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 4,
        version: 24,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 23,
        firstPublishedAt: '2017-11-20T19:35:01.275Z',
        publishedAt: '2017-12-08T19:15:03.897Z',
      },
      fields: {
        title: {
          'en-US': 'children',
        },
        file: {
          'en-US': {
            url:
              '//images.contentful.com/udx5f2jyw09i/5kLJqDZ9vyIaOucos4KCS0/438abc2c158e763f6a87f3b7dab233d8/children-with-lights.jpg',
            details: {
              size: 2150216,
              image: {
                width: 1860,
                height: 1116,
              },
            },
            fileName: 'children-with-lights.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
    },
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'hxEfHf39jGMMEQ8KE8Y8g',
        type: 'Asset',
        createdAt: '2017-11-20T20:38:57.893Z',
        updatedAt: '2017-12-08T19:15:14.172Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 4,
        version: 26,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 25,
        firstPublishedAt: '2017-11-20T20:39:25.416Z',
        publishedAt: '2017-12-08T19:15:14.172Z',
      },
      fields: {
        title: {
          'en-US': 'daffodils',
        },
        file: {
          'en-US': {
            url:
              '//images.contentful.com/udx5f2jyw09i/hxEfHf39jGMMEQ8KE8Y8g/0957a66ec6d0d4c7a1d31d8d6f5d69c0/daffodils.jpg',
            details: {
              size: 738730,
              image: {
                width: 900,
                height: 540,
              },
            },
            fileName: 'daffodils.jpg',
            contentType: 'image/jpeg',
          },
        },
      },
    },
  ],
  locales: [
    {
      name: 'US English',
      code: 'en-US',
      fallbackCode: null,
      default: true,
      contentManagementApi: true,
      contentDeliveryApi: true,
      optional: false,
      sys: {
        type: 'Locale',
        id: '5kkymkQLJCjT7alZ8X3OUu',
        version: 0,
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        createdAt: '2017-11-14T19:48:17Z',
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedAt: '2017-11-14T19:48:17Z',
      },
    },
    {
      name: 'Chinese (Simplified, China)',
      code: 'zh-CN',
      fallbackCode: 'en-US',
      default: false,
      contentManagementApi: true,
      contentDeliveryApi: true,
      optional: true,
      sys: {
        type: 'Locale',
        id: '7lkS4OlB6amJJCsLY6ur2a',
        version: 3,
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        createdAt: '2017-11-14T19:50:08Z',
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        updatedAt: '2017-11-16T01:13:33Z',
      },
    },
  ],
};
