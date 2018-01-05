/* eslint-disable */

module.exports = {
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
        updatedAt: '2017-12-21T20:12:28.152Z',
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
        publishedCounter: 40,
        version: 80,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 79,
        firstPublishedAt: '2017-11-14T19:50:09.645Z',
        publishedAt: '2017-12-21T20:12:28.152Z',
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
                  'inlineVideo',
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
        updatedAt: '2017-12-21T21:31:35.684Z',
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
        publishedCounter: 35,
        version: 70,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 69,
        firstPublishedAt: '2017-11-16T21:40:05.576Z',
        publishedAt: '2017-12-21T21:31:35.684Z',
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
        updatedAt: '2018-01-04T09:13:41.416Z',
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
            id: '6Nei44MnEAd8PpKPZZHeIG',
          },
        },
        publishedCounter: 26,
        version: 52,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6Nei44MnEAd8PpKPZZHeIG',
          },
        },
        publishedVersion: 51,
        firstPublishedAt: '2017-11-28T15:29:20.593Z',
        publishedAt: '2018-01-04T09:13:41.416Z',
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
          validations: [
            {
              regexp: {
                pattern: '^[^\\u002D\\u2010\\u2011\\u2012\\u2013\\u2014\\u2015\\u2212]+$',
                flags: null,
              },
              message: 'Dashes are not allowed',
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
        id: 'homePage',
        type: 'ContentType',
        createdAt: '2017-12-01T19:10:09.189Z',
        updatedAt: '2018-01-04T15:28:23.780Z',
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
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedCounter: 19,
        version: 38,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedVersion: 37,
        firstPublishedAt: '2017-12-01T19:10:09.471Z',
        publishedAt: '2018-01-04T15:28:23.780Z',
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
          id: 'hero',
          name: 'hero',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkContentType: ['hero'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
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
        {
          id: 'campusModule',
          name: 'Campus Module',
          type: 'Link',
          localized: false,
          required: false,
          validations: [
            {
              linkContentType: ['campuses'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'eventList',
          name: 'Events List',
          type: 'Link',
          localized: false,
          required: false,
          validations: [
            {
              linkContentType: ['eventList'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
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
        updatedAt: '2017-12-19T21:31:34.012Z',
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
        firstPublishedAt: '2017-12-11T18:44:07.749Z',
        publishedAt: '2017-12-19T21:31:34.012Z',
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
          type: 'Integer',
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
        updatedAt: '2018-01-03T04:23:15.515Z',
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
        publishedCounter: 18,
        version: 36,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 35,
        firstPublishedAt: '2017-12-15T20:16:36.960Z',
        publishedAt: '2018-01-03T04:23:15.515Z',
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
          name: 'Item 1 Asset / Cover Photo',
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
          id: 'item1ImageAlt',
          name: 'Item 1 Image / Video Alt',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item1VideoEmbedCode',
          name: 'Item 1 Video Embed Code',
          type: 'Text',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern: 'iframe',
                flags: null,
              },
              message: 'Must contain iframe tag',
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item1VideoDuration',
          name: 'Item 1 Video Duration',
          type: 'Symbol',
          localized: true,
          required: false,
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
          name: 'Item 2 Asset / Cover Photo',
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
          id: 'item2ImageAlt',
          name: 'Item 2 Image / Video Alt',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item2VideoEmbedCode',
          name: 'Item 2 Video Embed Code',
          type: 'Text',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern: 'iframe',
                flags: null,
              },
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item2VideoDuration',
          name: 'Item 2 Video Duration',
          type: 'Symbol',
          localized: true,
          required: false,
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
          name: 'Item 3 Asset / Cover Photo',
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
          id: 'item3ImageAlt',
          name: 'Item 3 Image / Video Alt',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item3VideoEmbedCode',
          name: 'Item 3 Video Embed Code',
          type: 'Text',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern: 'iframe',
                flags: null,
              },
              message: 'Must contain an iframe tag',
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item3VideoDuration',
          name: 'Item 3 Video Duration',
          type: 'Symbol',
          localized: true,
          required: false,
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
          name: 'Item 4 Asset / Cover Photo',
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
          name: 'Item 4 Image / Video Alt',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item4VideoEmbedCode',
          name: 'Item 4 Video Embed Code',
          type: 'Text',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern: 'iframe',
                flags: null,
              },
              message: 'Must contain iframe tag',
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item4VideoDuration',
          name: 'Item 4 Video Duration',
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
          name: 'Item 5 Asset / Cover Photo',
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
          name: 'Item 5 Image / Video Alt',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item5VideoEmbedCode',
          name: 'Item 5 Video Embed Code',
          type: 'Text',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern: 'iframe',
                flags: null,
              },
              message: 'Must contain iframe tag',
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item5VideoDuration',
          name: 'Item 5 Video Duration',
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
          name: 'Item 6 Asset / Cover Photo',
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
          name: 'Item 6 Image / Video Alt',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item6VideoEmbedCode',
          name: 'Item 6 Video Embed Code',
          type: 'Text',
          localized: true,
          required: false,
          validations: [
            {
              regexp: {
                pattern: 'iframe',
                flags: null,
              },
              message: 'Must contain iframe tag',
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'item6VideoDuration',
          name: 'Item 6 Video Duration',
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: 'inlineVideo',
        type: 'ContentType',
        createdAt: '2017-12-21T20:10:46.024Z',
        updatedAt: '2017-12-21T20:15:06.250Z',
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
        firstPublishedAt: '2017-12-21T20:10:46.185Z',
        publishedAt: '2017-12-21T20:15:06.250Z',
      },
      displayField: 'contentfulLabel',
      name: 'InlineVideo',
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
          id: 'videoEmbedCode',
          name: 'Video Embed Code',
          type: 'Text',
          localized: true,
          required: true,
          validations: [
            {
              regexp: {
                pattern: 'iframe',
                flags: null,
              },
              message: 'Must contain an iframe',
            },
          ],
          disabled: false,
          omitted: false,
        },
        {
          id: 'asset',
          name: 'Cover Photo',
          type: 'Link',
          localized: false,
          required: false,
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
        id: 'campuses',
        type: 'ContentType',
        createdAt: '2017-12-22T13:03:31.627Z',
        updatedAt: '2018-01-04T16:12:07.385Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6Nei44MnEAd8PpKPZZHeIG',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6Nei44MnEAd8PpKPZZHeIG',
          },
        },
        publishedCounter: 6,
        version: 12,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6Nei44MnEAd8PpKPZZHeIG',
          },
        },
        publishedVersion: 11,
        firstPublishedAt: '2017-12-22T13:03:32.106Z',
        publishedAt: '2018-01-04T16:12:07.385Z',
      },
      displayField: 'contentfulLabel',
      name: 'Campuses',
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
          id: 'sectionTitle',
          name: 'Section Title',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'image',
          name: 'Image',
          type: 'Link',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'imageAlt',
          name: 'Alt',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'architectImage',
          name: 'Architect Image',
          type: 'Link',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
          linkType: 'Asset',
        },
        {
          id: 'architectName',
          name: 'Architect Name',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'architectQuote',
          name: 'Architect Quote',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
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
        {
          id: 'linkTitle',
          name: 'Link Title',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'linkDestination',
          name: 'Link Destination',
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
        id: 'eventList',
        type: 'ContentType',
        createdAt: '2017-12-22T17:52:05.592Z',
        updatedAt: '2018-01-04T15:29:16.729Z',
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
        publishedCounter: 4,
        version: 8,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedVersion: 7,
        firstPublishedAt: '2017-12-22T17:52:06.270Z',
        publishedAt: '2018-01-04T15:29:16.729Z',
      },
      displayField: 'contentfulLabel',
      name: 'EventsList',
      description: 'List for PIC & Hero',
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
          id: 'sectionTitle',
          name: 'sectionTitle',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'cityName',
          name: 'City name',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'introText',
          name: 'Intro text',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event1Date',
          name: '1. Date',
          type: 'Date',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event1TitleLine1',
          name: '1. Title line',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event1TitleLine2',
          name: '1. Title line 2',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event1Location',
          name: '1. Location',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event1Description',
          name: '1. Description',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event1RegistrationLink',
          name: '1. Registration link',
          type: 'Symbol',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event2Date',
          name: '2. Date',
          type: 'Date',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event2TitleLine1',
          name: '2. Title line',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event2TitleLine2',
          name: '2. Title line 2',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event2Location',
          name: '2. Location',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event2Description',
          name: '2. Description',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event2RegistrationLink',
          name: '2. Registration link',
          type: 'Symbol',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event3Date',
          name: '3. Date',
          type: 'Date',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event3TitleLine1',
          name: '3. Title line',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event3TitleLine2',
          name: '3. Title line 2',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event3Location',
          name: '3. Location',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event3Description',
          name: '3. Description',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event3RegistrationLink',
          name: '3. RegistrationLink',
          type: 'Symbol',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event4Date',
          name: '4. Date',
          type: 'Date',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event4TitleLine1',
          name: '4. Title line',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event4TitleLine2',
          name: '4. Title line 2',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event4Location',
          name: '4. Location',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event4Description',
          name: '4. Description',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event4RegistrationLink',
          name: '4. RegistrationLink',
          type: 'Symbol',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event5Date',
          name: '5. Date',
          type: 'Date',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event5TitleLine1',
          name: '5. Title line',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event5TitleLine2',
          name: '5. Title line 2',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event5Location',
          name: '5. Location',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event5Description',
          name: '5. Description',
          type: 'Text',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'event5RegistrationLink',
          name: '5. Registration link',
          type: 'Symbol',
          localized: false,
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
        id: 'dummyContentIndex',
        type: 'ContentType',
        createdAt: '2018-01-04T03:15:41.443Z',
        updatedAt: '2018-01-04T21:43:30.454Z',
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
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2018-01-04T03:15:41.610Z',
        publishedAt: '2018-01-04T21:43:30.454Z',
      },
      displayField: 'contentfulLabel',
      name: 'DummyContentIndex',
      description:
        'List of placeholder (dummy) content needed to solve a bug in the Gatsby Javascript library. Including content in this list will ensure it is never presented to users.',
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
          id: 'entries',
          name: 'Entries',
          type: 'Array',
          localized: false,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
          items: {
            type: 'Link',
            validations: [],
            linkType: 'Entry',
          },
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
        id: 'hero',
        type: 'ContentType',
        createdAt: '2018-01-04T10:50:56.273Z',
        updatedAt: '2018-01-04T14:17:12.861Z',
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
        publishedCounter: 3,
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2018-01-04T10:50:56.828Z',
        publishedAt: '2018-01-04T14:17:12.861Z',
      },
      displayField: 'contentfulLabel',
      name: 'Hero',
      description: 'Hero Block',
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
          id: 'eventListTitle',
          name: 'Event List title',
          type: 'Symbol',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'eventList',
          name: 'Event List',
          type: 'Link',
          localized: false,
          required: true,
          validations: [
            {
              linkContentType: ['eventList'],
            },
          ],
          disabled: false,
          omitted: false,
          linkType: 'Entry',
        },
        {
          id: 'image',
          name: 'Image',
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
          id: 'description',
          name: 'Description',
          type: 'Text',
          localized: true,
          required: true,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'linkTitle',
          name: 'Link Title',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'link',
          name: 'Link',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'countdownTitle',
          name: 'Countdown Title',
          type: 'Symbol',
          localized: true,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'countdownDate',
          name: 'Countdown date',
          type: 'Date',
          localized: false,
          required: false,
          validations: [],
          disabled: false,
          omitted: false,
        },
        {
          id: 'imageAlt',
          name: 'Image Alt',
          type: 'Symbol',
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
            helpText: "This will be used as the image's alt attribute",
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
        version: 80,
        createdAt: '2017-11-14T19:50:09.955Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-21T20:12:28.502Z',
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
        version: 70,
        createdAt: '2017-11-16T21:40:05.681Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-21T21:31:36.052Z',
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
        {
          fieldId: 'translations',
          widgetId: 'objectEditor',
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
        version: 52,
        createdAt: '2017-11-28T15:29:20.716Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2018-01-04T09:13:42.195Z',
        updatedBy: {
          sys: {
            id: '6Nei44MnEAd8PpKPZZHeIG',
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
        version: 38,
        createdAt: '2017-12-01T19:10:09.575Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2018-01-04T15:28:24.408Z',
        updatedBy: {
          sys: {
            id: '6214ankndWlLU2Ir99aaKG',
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
          fieldId: 'hero',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'schoolIntroTitle',
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'campusModule',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'eventList',
          widgetId: 'entryLinkEditor',
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
        version: 12,
        createdAt: '2017-12-11T18:44:07.927Z',
        createdBy: {
          sys: {
            id: '6214ankndWlLU2Ir99aaKG',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-19T21:31:34.350Z',
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
          widgetId: 'numberEditor',
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
        version: 36,
        createdAt: '2017-12-15T20:16:37.099Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2018-01-03T04:23:16.939Z',
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
          fieldId: 'item1VideoEmbedCode',
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'item1VideoDuration',
          settings: {
            helpText: 'Video duration in format 1:23:45.',
          },
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
          fieldId: 'item2VideoEmbedCode',
          settings: {
            helpText: 'Must contain iframe tag',
          },
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'item2VideoDuration',
          settings: {
            helpText: 'Video duration in format 1:23:45.',
          },
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
          fieldId: 'item3VideoEmbedCode',
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'item3VideoDuration',
          settings: {
            helpText: 'Video duration in format 1:23:45.',
          },
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
          fieldId: 'item4VideoEmbedCode',
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'item4VideoDuration',
          settings: {
            helpText: 'Video duration in format 1:23:45.',
          },
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
          fieldId: 'item5VideoEmbedCode',
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'item5VideoDuration',
          settings: {
            helpText: 'Video duration in format 1:23:45.',
          },
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
        {
          fieldId: 'item6VideoEmbedCode',
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'item6VideoDuration',
          settings: {
            helpText: 'Video duration in format 1:23:45.',
          },
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
        createdAt: '2017-12-21T20:10:46.291Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2017-12-21T20:15:07.249Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'inlineVideo',
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
          fieldId: 'videoEmbedCode',
          widgetId: 'multipleLine',
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
            helpText: "This will be used as the image's alt attribute",
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
        createdAt: '2017-12-22T13:03:32.217Z',
        createdBy: {
          sys: {
            id: '6Nei44MnEAd8PpKPZZHeIG',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2018-01-04T16:12:08.019Z',
        updatedBy: {
          sys: {
            id: '6Nei44MnEAd8PpKPZZHeIG',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'campuses',
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
          fieldId: 'sectionTitle',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'image',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'imageAlt',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'architectImage',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'architectName',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'architectQuote',
          widgetId: 'markdown',
        },
        {
          fieldId: 'description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'linkTitle',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'linkDestination',
          widgetId: 'entryLinkEditor',
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
        createdAt: '2017-12-22T17:52:06.622Z',
        createdBy: {
          sys: {
            id: '6214ankndWlLU2Ir99aaKG',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2018-01-04T15:29:17.613Z',
        updatedBy: {
          sys: {
            id: '6214ankndWlLU2Ir99aaKG',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'eventList',
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
          fieldId: 'sectionTitle',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'cityName',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'introText',
          widgetId: 'markdown',
        },
        {
          fieldId: 'event1Date',
          settings: {
            ampm: '24',
            format: 'dateonly',
          },
          widgetId: 'datePicker',
        },
        {
          fieldId: 'event1TitleLine1',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event1TitleLine2',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event1Location',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event1Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'event1RegistrationLink',
          widgetId: 'urlEditor',
        },
        {
          fieldId: 'event2Date',
          settings: {
            ampm: '24',
            format: 'dateonly',
          },
          widgetId: 'datePicker',
        },
        {
          fieldId: 'event2TitleLine1',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event2TitleLine2',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event2Location',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event2Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'event2RegistrationLink',
          widgetId: 'urlEditor',
        },
        {
          fieldId: 'event3Date',
          settings: {
            ampm: '24',
            format: 'dateonly',
          },
          widgetId: 'datePicker',
        },
        {
          fieldId: 'event3TitleLine1',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event3TitleLine2',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event3Location',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event3Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'event3RegistrationLink',
          widgetId: 'urlEditor',
        },
        {
          fieldId: 'event4Date',
          settings: {
            ampm: '24',
            format: 'dateonly',
          },
          widgetId: 'datePicker',
        },
        {
          fieldId: 'event4TitleLine1',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event4TitleLine2',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event4Location',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event4Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'event4RegistrationLink',
          widgetId: 'urlEditor',
        },
        {
          fieldId: 'event5Date',
          settings: {
            ampm: '24',
            format: 'dateonly',
          },
          widgetId: 'datePicker',
        },
        {
          fieldId: 'event5TitleLine1',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event5TitleLine2',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event5Location',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'event5Description',
          widgetId: 'markdown',
        },
        {
          fieldId: 'event5RegistrationLink',
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
        version: 6,
        createdAt: '2018-01-04T03:15:41.802Z',
        createdBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2018-01-04T21:43:30.812Z',
        updatedBy: {
          sys: {
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'dummyContentIndex',
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
          fieldId: 'entries',
          settings: {
            bulkEditing: false,
          },
          widgetId: 'entryLinksEditor',
        },
        {
          fieldId: 'asset',
          widgetId: 'assetLinkEditor',
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
        createdAt: '2018-01-04T10:50:56.965Z',
        createdBy: {
          sys: {
            id: '6214ankndWlLU2Ir99aaKG',
            type: 'Link',
            linkType: 'User',
          },
        },
        updatedAt: '2018-01-04T14:17:13.545Z',
        updatedBy: {
          sys: {
            id: '6214ankndWlLU2Ir99aaKG',
            type: 'Link',
            linkType: 'User',
          },
        },
        contentType: {
          sys: {
            id: 'hero',
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
          fieldId: 'eventListTitle',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'eventList',
          widgetId: 'entryLinkEditor',
        },
        {
          fieldId: 'image',
          widgetId: 'assetLinkEditor',
        },
        {
          fieldId: 'title',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'description',
          widgetId: 'multipleLine',
        },
        {
          fieldId: 'linkTitle',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'link',
          settings: {
            helpText: 'Please add internal link.',
          },
          widgetId: 'urlEditor',
        },
        {
          fieldId: 'countdownTitle',
          widgetId: 'singleLine',
        },
        {
          fieldId: 'countdownDate',
          settings: {
            ampm: '24',
            format: 'dateonly',
          },
          widgetId: 'datePicker',
        },
        {
          fieldId: 'imageAlt',
          widgetId: 'singleLine',
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
        id: '5HGowS2zmM6M2i8EaiCigG',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.415Z',
        updatedAt: '2017-12-18T22:58:42.048Z',
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
        version: 140,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 139,
        firstPublishedAt: '2017-11-14T19:50:31.894Z',
        publishedAt: '2017-12-18T22:58:42.048Z',
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
          'en-US': 'School history with test formatting (Curriculum)',
        },
        content: {
          'en-US':
            '__When the first Whittle__ School & Studios campuses open in 2020, over five years of report will have been invested in the creation of these learning spaces. We began with the search for a world-renowned architect who would commit himself and his team to this endeavor for a decade. We wanted someone with his “head in the clouds and feet on the ground,” someone who is an artist yet has the experience, practicality and scale to implement his vision globally. After meeting many of the greats within architecture, we chose Renzo Piano along with his team of 130 in Genoa and Paris. In-line text link their way to the most remote villages in less than 48 hours.\n\nIf it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results. The operating model Whittle School & Studios will build in the years before its  rst campuses open in 2020 is based on the tenets noted below. We believe carefully adhering to these themes will result in delivering desired outcomes.  If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results.  If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results. The operating model Whittle School & Studios will build in the years before its  rst campuses open in 2020 is based on the tenets noted below. We believe carefully adhering to these themes will result in delivering desired outcomes. FINAL TEST...3?!!!',
          'zh-CN':
            '如果一所学校必须了解如何帮助学生实现这一点，同样重要的一点是学校知道如何提供这些成果。 Whittle School＆Studios的运营模式将在2020年第一个校园开放之前的几年内建立，基于以下原则。 我们认为，仔细遵守这些主题将导致预期的结果。 如果一所学校必须了解如何帮助学生实现这一点，同样重要的一点是学校知道如何提供这些成果。 如果一所学校必须了解如何帮助学生实现这一点，同样重要的一点是学校知道如何提供这些成果。 Whittle School＆Studios的运营模式将在2020年第一个校园开放之前的几年内建立，基于以下原则。 我们认为，仔细遵守这些主题将导致预期的结果。',
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
        id: 'oGF4Yu8mfACkCCUMcsGgq',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.418Z',
        updatedAt: '2017-12-18T22:58:43.065Z',
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
        publishedCounter: 13,
        version: 87,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 86,
        firstPublishedAt: '2017-11-14T19:50:32.634Z',
        publishedAt: '2017-12-18T22:58:43.065Z',
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
          'en-US': 'Work philosophy (Curriculum)',
        },
        content: {
          'en-US':
            '![My custom alt title--left](//images.contentful.com/udx5f2jyw09i/5kLJqDZ9vyIaOucos4KCS0/438abc2c158e763f6a87f3b7dab233d8/children-with-lights.jpg "My custom caption")Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program. Test!!!',
          'zh-CN':
            '如果一所学 校必须了解如何帮助学生实现这一点，同样重要的一点是学校知道如何提供这些成果。 Whittle School＆Studios的运营模式将在2020年第一个校园开放之前的几年内建立，基于以下原则。 我们认为，仔细遵守这些主题将导致预期的结果。 如果一所学校必须了解如何帮助学生实现这一点，同样重要的一点是学校知道如何提供这些成果。 如果一所学校必须了解如何帮助学生实现这一点，同样重要的一点是学校知道如何提供这些成果。 Whittle School＆Studios的运营模式将在2020年第一个校园开放之前的几年内建立，基于以下原则。 我们认为，仔细遵守这些主题将导致预期的结果。',
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
        id: '17NAw16WM0eu4K2MYy4e0U',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.420Z',
        updatedAt: '2017-12-18T22:58:43.166Z',
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
        publishedCounter: 10,
        version: 37,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 36,
        firstPublishedAt: '2017-11-14T19:50:30.350Z',
        publishedAt: '2017-12-18T22:58:43.166Z',
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
          'en-US': 'Fish picture (Curriculum)',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '4gWhPrmQjm6qK4s0Ao8AW',
            },
          },
          'zh-CN': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '4gWhPrmQjm6qK4s0Ao8AW',
            },
          },
        },
        alt: {
          'en-US': 'School of fish',
          'zh-CN': '以下',
        },
        caption: {
          'en-US': "This caption is optional but I'm using it in this case.",
          'zh-CN': '如果一所学校必须了解如何帮助学生实现这一点，同样重要的一点是学校知道如何提供这些成果',
        },
        shape: {
          'en-US': 'Rectangle',
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
        id: '1jcBJ9ovrEYEAAee8cEoo',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.424Z',
        updatedAt: '2017-12-18T22:58:41.060Z',
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
        version: 27,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 26,
        firstPublishedAt: '2017-11-14T19:50:31.099Z',
        publishedAt: '2017-12-18T22:58:41.060Z',
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
          'en-US': 'School goals (Press releases)',
        },
        content: {
          'en-US':
            'Whittle School & Studios aims for nothing less than to reinvent private education. That\'s what the parents hear from Benno Schmidt, the former Yale president who is Avenues\' chairman and fronts its academic pedigree. "There is nothing as powerful as an idea whose time has come," he says. (Quoting Victor Hugo is always a crowd pleaser.) The new school promises a revolutionary global curriculum unencumbered by orthodoxy.\n\nInteger posuere erat a ante venenatis dapibus posuere velit aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam quis risus eget urna mollis ornare vel eu leo.',
          'zh-CN': '論說局要年品們不狀. 電遊遊海子得不廣富，處看意來口事力早圖者輕麼不為到各場？而野說。',
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
        id: '2OiFBZrIE80mYOMaAoyom2',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.427Z',
        updatedAt: '2017-12-18T22:58:43.070Z',
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
        version: 51,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 50,
        firstPublishedAt: '2017-11-14T19:50:24.603Z',
        publishedAt: '2017-12-18T22:58:43.070Z',
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
          'en-US': 'School history (Curriculum)',
        },
        content: {
          'en-US':
            'When the first Whittle School & Studios campuses open in 2020, over five years of report will have been invested in the creation of these learning spaces. We began with the search for a world-renowned architect who would commit himself and his team to this endeavor for a decade. We wanted someone with his “head in the clouds and feet on the ground,” someone who is an artist yet has the experience, practicality and scale to implement his vision globally. After meeting many of the greats within architecture, we chose Renzo Piano along with his team of 130 in Genoa and Paris. In-line text link their way to the most remote villages in less than 48 hours. Unimaginable just decades  ago, that once took months to deliver and their way to the most remote school to know how it can deliver those results. The operating model Whittle School & Studios will build in the years before its  rst campuses open in 2020 is based on the tenets noted below. We believe carefully adhering to these themes will result in delivering desired outcomes.  If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results. ',
          'zh-CN':
            '当第一所Whittle School＆Studios校园于2020年开放时，超过五年的报告将投入创造这些学习空间。 我们开始寻找一位世界知名的建筑师，他将为自己和他的团队致力于这个努力十年。 我们希望有人能够把他的头脑放在地上的云层和脚下，那位艺术家的人有全球经验，实践和规模来实现他的愿景。 在与建筑中许多伟人见面之后，我们选择了Renzo Piano及其130位热那亚和巴黎队。 在不到48小时的时间内，文字链接到最偏远的村庄。',
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
        id: '5UMFfvp4ZOooC8AkcSwwgs',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.440Z',
        updatedAt: '2017-12-18T22:58:26.673Z',
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
        version: 48,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 47,
        firstPublishedAt: '2017-11-14T19:50:33.360Z',
        publishedAt: '2017-12-18T22:58:26.673Z',
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
          'en-US': 'Test format module (Curriculum)',
        },
        content: {
          'en-US':
            "I'm a second module so I should not have a dropcap! Sarah is testing this now!\n\nBut I do have __bold text__, *italic text*, [external links](https://google.com), and [internal links](/educational-experience).\n\n- This is a fugutive list\n- It should be stripped out\n\n1. Same with numbered lists\n2. It should be stripped out\n",
          'zh-CN': '提供 提供 提供',
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
        id: '2hPzIu0QJOggIkomAcsW6I',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.677Z',
        updatedAt: '2017-12-18T22:58:44.124Z',
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
        publishedCounter: 35,
        version: 152,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 151,
        firstPublishedAt: '2017-11-14T19:50:25.513Z',
        publishedAt: '2017-12-18T22:58:44.124Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Curriculum',
          'zh-CN': ' 课程',
        },
        overviewNavTitle: {
          'en-US': 'Overview',
          'zh-CN': ' 概观',
        },
        navDescription: {
          'en-US': 'Our progressive fields of study',
          'zh-CN': '我们渐进的学习领域',
        },
        slug: {
          'en-US': 'curriculum',
          'zh-CN': 'curriculum-cn',
        },
        headline: {
          'en-US': 'Diversified courses for modern students',
          'zh-CN': ' 现代学生的多元化课程。',
        },
        subhead: {
          'en-US':
            'If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results.',
          'zh-CN': ' 如果学校必须明白要帮助学生达到什么目的，学校要知道如何实现这些成果同样重要。',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        mainImageAlt: {
          'en-US': 'Fostering Creativity',
          'zh-CN': '文化',
        },
        modules: {
          'zh-CN': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5HGowS2zmM6M2i8EaiCigG',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5UMFfvp4ZOooC8AkcSwwgs',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '17NAw16WM0eu4K2MYy4e0U',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'oGF4Yu8mfACkCCUMcsGgq',
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
        id: '5bH7yCuT6EeAM4gkskeims',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.718Z',
        updatedAt: '2017-12-18T22:58:35.749Z',
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
        version: 66,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 65,
        firstPublishedAt: '2017-11-14T19:50:28.775Z',
        publishedAt: '2017-12-18T22:58:35.749Z',
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
          'en-US': 'Article',
        },
        slug: {
          'en-US': 'promoting-diversity',
          'zh-CN': 'promoting-diversity-cn',
        },
        headline: {
          'en-US': 'Our schools',
          'zh-CN': '提供',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '4gWhPrmQjm6qK4s0Ao8AW',
            },
          },
          'zh-CN': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '4gWhPrmQjm6qK4s0Ao8AW',
            },
          },
        },
        mainImageAlt: {
          'en-US': 'School of fish',
          'zh-CN': '提供',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5HGowS2zmM6M2i8EaiCigG',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '17NAw16WM0eu4K2MYy4e0U',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5UMFfvp4ZOooC8AkcSwwgs',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '41pvuzoswgy00aKOK8mWIC',
              },
            },
          ],
          'zh-CN': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5HGowS2zmM6M2i8EaiCigG',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5UMFfvp4ZOooC8AkcSwwgs',
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
                id: 'oGF4Yu8mfACkCCUMcsGgq',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': true,
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
        id: '5UaVDzy1m8YEA88eeuGWYQ',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.743Z',
        updatedAt: '2017-12-18T22:58:42.190Z',
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
        publishedCounter: 31,
        version: 237,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 236,
        firstPublishedAt: '2017-11-14T19:50:27.156Z',
        publishedAt: '2017-12-18T22:58:42.190Z',
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
        navTitle: {
          'en-US': 'Educational Experience',
          'zh-CN': ' 教育经验',
        },
        overviewNavTitle: {
          'en-US': 'Overview',
          'zh-CN': ' 概观',
        },
        navDescription: {
          'en-US': 'Introduction to our philosophy',
          'zh-CN': ' 介绍我们的理念',
        },
        slug: {
          'en-US': 'educational-experience',
          'zh-CN': 'educational-experience-cn',
        },
        subcategories: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2hPzIu0QJOggIkomAcsW6I',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'bBgy8eVIm4EeMkIO4cGao',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5bH7yCuT6EeAM4gkskeims',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3LVu5Hld6M4iCUESiEumcy',
              },
            },
          ],
          'zh-CN': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2hPzIu0QJOggIkomAcsW6I',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5bH7yCuT6EeAM4gkskeims',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'bBgy8eVIm4EeMkIO4cGao',
              },
            },
          ],
        },
        headline: {
          'en-US': 'Excellence in Education',
          'zh-CN': '测试对教育卓越的承诺',
        },
        subhead: {
          'en-US':
            'Imagine the first global school, created by an international consortium of educators, technologists and experts in law, real estate, recruitment and more.',
          'zh-CN': '想象一下，由国际教育家，技术专家和法律专家，房地产，招聘等组成的第一所全球学校。',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'ul4XFgkBtAUYY2Q8k0A0I',
            },
          },
          'zh-CN': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'ul4XFgkBtAUYY2Q8k0A0I',
            },
          },
        },
        mainImageAlt: {
          'en-US': 'Globa Learning Environment',
          'zh-CN': '同样重要的',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'oGF4Yu8mfACkCCUMcsGgq',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4YQEt2FqwE8Ow6iSk6siUk',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5HGowS2zmM6M2i8EaiCigG',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5ixllsq7W0OymCMM2C4Guo',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '17NAw16WM0eu4K2MYy4e0U',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2OiFBZrIE80mYOMaAoyom2',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1Rn2v5x6xuUCoCQEyMoWOu',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5UMFfvp4ZOooC8AkcSwwgs',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2q9JpQUG1aw4kAMEwGIg6G',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6X4JULNRksCg0ocGeQ08Qi',
              },
            },
          ],
          'zh-CN': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5UMFfvp4ZOooC8AkcSwwgs',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5ixllsq7W0OymCMM2C4Guo',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5HGowS2zmM6M2i8EaiCigG',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2q9JpQUG1aw4kAMEwGIg6G',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'oGF4Yu8mfACkCCUMcsGgq',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '17NAw16WM0eu4K2MYy4e0U',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1Rn2v5x6xuUCoCQEyMoWOu',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2OiFBZrIE80mYOMaAoyom2',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4YQEt2FqwE8Ow6iSk6siUk',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6X4JULNRksCg0ocGeQ08Qi',
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
        id: '5dTpgXqOF2QewKwEoiEu2u',
        type: 'Entry',
        createdAt: '2017-11-14T19:50:23.760Z',
        updatedAt: '2017-12-18T22:58:34.536Z',
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
        publishedCounter: 9,
        version: 24,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 23,
        firstPublishedAt: '2017-11-14T19:50:27.935Z',
        publishedAt: '2017-12-18T22:58:34.536Z',
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
        slug: {
          'en-US': 'press-releases',
          'zh-CN': 'press-releases-cn',
        },
        headline: {
          'en-US': 'Press Releases',
          'zh-CN': '促进我们校园的',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1jcBJ9ovrEYEAAee8cEoo',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6pHUXBqJ2wu8ycIwwEE6gc',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '72Oj0ambMAa2yGoIQIsGOo',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': false,
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
        id: '1y0BVrygl2Mo0iiw4Ym2eQ',
        type: 'Entry',
        createdAt: '2017-11-20T16:41:50.225Z',
        updatedAt: '2017-12-18T22:58:41.230Z',
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
        version: 58,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 57,
        firstPublishedAt: '2017-11-20T16:44:27.814Z',
        publishedAt: '2017-12-18T22:58:41.230Z',
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
        navTitle: {
          'en-US': 'The Whittle Vision',
          'zh-CN': '委响果',
        },
        slug: {
          'en-US': 'the-whittle-vision',
          'zh-CN': 'the-whittle-vision-cn',
        },
        headline: {
          'en-US': 'Our educational vision',
          'zh-CN': '领马委响果张志',
        },
        hasShareButtons: {
          'en-US': true,
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
        id: '4lqE1xi5ZuQ4eEQ8IWqSgk',
        type: 'Entry',
        createdAt: '2017-11-20T16:45:26.993Z',
        updatedAt: '2017-12-21T20:15:42.922Z',
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
        publishedCounter: 12,
        version: 89,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 88,
        firstPublishedAt: '2017-11-20T16:46:02.867Z',
        publishedAt: '2017-12-21T20:15:42.921Z',
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
          'en-US': 'Title',
        },
        navTitle: {
          'en-US': 'Leadership and Faculty',
          'zh-CN': '自调厂们区',
        },
        overviewNavTitle: {
          'en-US': 'Overview Title',
        },
        navDescription: {
          'en-US': 'A description of our team of leaders',
        },
        slug: {
          'en-US': 'leadership-and-faculty',
          'zh-CN': 'leadership-and-faculty-cn',
        },
        subcategories: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6QKdoRL8iIcOOAC4eyCcsi',
              },
            },
          ],
        },
        headline: {
          'en-US': 'Our talented faculty',
          'zh-CN': '自调厂们区何',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'aPGz8O7oZieWc6oGUCocI',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3FpfKBbJ3auM4wQ2YEUG2I',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2K9Fw9p8IM0eGaY6QUm4Uk',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': true,
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
        id: 'bBgy8eVIm4EeMkIO4cGao',
        type: 'Entry',
        createdAt: '2017-11-20T16:46:14.614Z',
        updatedAt: '2017-12-19T22:08:51.157Z',
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
        publishedCounter: 12,
        version: 136,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 135,
        firstPublishedAt: '2017-11-20T16:47:08.660Z',
        publishedAt: '2017-12-19T22:08:51.157Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Center for Excellence?',
          'zh-CN': ' 创始人和领导',
        },
        overviewNavTitle: {
          'en-US': 'Overview',
          'zh-CN': ' 概观',
        },
        navDescription: {
          'en-US': 'About our founder and his vision for education. There is more to the story.',
          'zh-CN': '关于我们的创始人和他的教育愿景。还有更多的故事。',
        },
        slug: {
          'en-US': 'center-for-excellence',
          'zh-CN': 'center-for-excellence-cn',
        },
        headline: {
          'en-US': 'About Our *Center*',
          'zh-CN': ' 关于我们的创始人',
        },
        hasShareButtons: {
          'en-US': true,
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
        id: 'SnXrnfdOucMWcCaKY6WEG',
        type: 'Entry',
        createdAt: '2017-11-20T19:00:14.747Z',
        updatedAt: '2017-12-18T22:58:44.093Z',
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
        publishedCounter: 10,
        version: 51,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 50,
        firstPublishedAt: '2017-11-20T19:04:20.439Z',
        publishedAt: '2017-12-18T22:58:44.093Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'slideshowCarousel',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Curriculum page carousel',
        },
        slides: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2Yh00P2gx2YiC26UcYA8yy',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1FrKyTqztyEcmycs84quQs',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6wflT8Qoh24aAIi0CMw4GA',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6X4JULNRksCg0ocGeQ08Qi',
              },
            },
          ],
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
        id: '2Yh00P2gx2YiC26UcYA8yy',
        type: 'Entry',
        createdAt: '2017-11-20T19:00:19.298Z',
        updatedAt: '2017-12-18T22:58:41.063Z',
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
        version: 67,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 66,
        firstPublishedAt: '2017-11-20T19:02:16.046Z',
        publishedAt: '2017-12-18T22:58:41.063Z',
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
          'en-US': 'Campus picture (Curriculum carousel)',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5iM0C8Tviguwks0kMCkyQE',
            },
          },
        },
        alt: {
          'en-US': 'DC Campus',
          'zh-CN': '养家',
        },
        caption: {
          'en-US': 'Our campus provides an envigorating learning environment',
          'zh-CN': '养家增导在片即',
        },
        shape: {
          'en-US': 'Rectangle',
          'zh-CN': 'Rectangle',
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
        id: '1FrKyTqztyEcmycs84quQs',
        type: 'Entry',
        createdAt: '2017-11-20T19:03:11.997Z',
        updatedAt: '2017-12-18T22:58:41.052Z',
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
        version: 38,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 37,
        firstPublishedAt: '2017-11-20T19:03:42.250Z',
        publishedAt: '2017-12-18T22:58:41.052Z',
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
          'en-US': 'Mouse illustration (Curriculum carousel)',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        alt: {
          'en-US': 'Mouse illustration',
          'zh-CN': '指',
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
        id: '4PGT6TFonKkGEGy6kSsgEK',
        type: 'Entry',
        createdAt: '2017-11-20T19:04:02.688Z',
        updatedAt: '2017-12-18T22:58:41.096Z',
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
        version: 39,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 38,
        firstPublishedAt: '2017-11-20T19:04:15.514Z',
        publishedAt: '2017-12-18T22:58:41.096Z',
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
          'en-US': 'Fish illustration (Curriculum carousel)',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '4gWhPrmQjm6qK4s0Ao8AW',
            },
          },
        },
        alt: {
          'en-US': 'Fish illustration',
        },
        shape: {
          'en-US': 'Circle',
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
        id: '6wflT8Qoh24aAIi0CMw4GA',
        type: 'Entry',
        createdAt: '2017-11-20T19:32:27.727Z',
        updatedAt: '2017-12-18T22:58:40.212Z',
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
        version: 49,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 48,
        firstPublishedAt: '2017-11-20T19:35:20.004Z',
        publishedAt: '2017-12-18T22:58:40.212Z',
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
          'en-US': 'Children with lights (Curriculum carousel)',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5kLJqDZ9vyIaOucos4KCS0',
            },
          },
        },
        alt: {
          'en-US': 'Illustration of children',
        },
        shape: {
          'en-US': 'Circle',
          'zh-CN': 'Circle',
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
        id: '6X4JULNRksCg0ocGeQ08Qi',
        type: 'Entry',
        createdAt: '2017-11-20T20:38:47.811Z',
        updatedAt: '2017-12-18T22:58:40.056Z',
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
        version: 38,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 37,
        firstPublishedAt: '2017-11-20T20:39:50.058Z',
        publishedAt: '2017-12-18T22:58:40.056Z',
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
          'en-US': 'Daffodils (Curriculum carousel)',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'hxEfHf39jGMMEQ8KE8Y8g',
            },
          },
        },
        alt: {
          'en-US': 'Daffodil illustration',
        },
        shape: {
          'en-US': 'Rectangle',
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
        id: '41pvuzoswgy00aKOK8mWIC',
        type: 'Entry',
        createdAt: '2017-11-21T21:38:00.755Z',
        updatedAt: '2017-12-18T22:58:40.042Z',
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
        version: 28,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 27,
        firstPublishedAt: '2017-11-21T21:38:25.091Z',
        publishedAt: '2017-12-18T22:58:40.042Z',
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
          'en-US': 'Illustration of children (curriculum)',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5kLJqDZ9vyIaOucos4KCS0',
            },
          },
        },
        alt: {
          'en-US': 'Children',
        },
        shape: {
          'en-US': 'Rectangle',
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
        id: '1wRtEgj1CIoUMeKISKY4wy',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:53.891Z',
        updatedAt: '2017-12-18T22:58:30.499Z',
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
        version: 4,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 3,
        firstPublishedAt: '2017-11-22T19:33:03.105Z',
        publishedAt: '2017-12-18T22:58:30.499Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Campus & Architecture (footer link)',
        },
        linkTitle: {
          'en-US': 'Campus & Architecture',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '3WgEJyFzNKs0eGeyakgIIo',
            },
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
        id: '43etIoJ6JaYUQeQ002yYKe',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:53.914Z',
        updatedAt: '2017-12-18T22:58:30.522Z',
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
        version: 4,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 3,
        firstPublishedAt: '2017-11-22T19:33:03.823Z',
        publishedAt: '2017-12-18T22:58:30.522Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Architecture (footer link)',
        },
        linkTitle: {
          'en-US': 'Architecture',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2N2Tksgr3ycaiSIq8g44ym',
            },
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
        id: '2KkmBlxucEygMuoe8KuSye',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:53.925Z',
        updatedAt: '2017-12-18T22:58:40.095Z',
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
        version: 4,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 3,
        firstPublishedAt: '2017-11-22T19:33:04.553Z',
        publishedAt: '2017-12-18T22:58:40.095Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Social Responsibility (footer link)',
        },
        linkTitle: {
          'en-US': 'Social Responsibility',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: 'nCr3eS7rJ6wmQsMgO8aSe',
            },
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
        id: '1OyOSN3rG8IaY8cMogAe0u',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:53.952Z',
        updatedAt: '2017-12-18T22:58:40.060Z',
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
        version: 4,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 3,
        firstPublishedAt: '2017-11-22T19:33:05.395Z',
        publishedAt: '2017-12-18T22:58:40.060Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Global Call One-on-one (footer link)',
        },
        linkTitle: {
          'en-US': 'Global Call One-on-one',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '6jfKfHZqBaAmmie8iIEGuY',
            },
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
        id: 'in4Qc3TAOWakU6kgW0aYI',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:55.754Z',
        updatedAt: '2017-12-18T22:58:30.515Z',
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
        version: 4,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 3,
        firstPublishedAt: '2017-11-22T19:33:06.165Z',
        publishedAt: '2017-12-18T22:58:30.515Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Admissions & Information (footer link)',
        },
        linkTitle: {
          'en-US': 'Admissions & Information',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: 'Jdv3OVjyy28GAuwqCeQsa',
            },
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
        id: '5cpo7ptLMIs68GqaCKsuek',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:55.794Z',
        updatedAt: '2017-12-18T22:58:40.045Z',
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
        version: 4,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 3,
        firstPublishedAt: '2017-11-22T19:33:08.439Z',
        publishedAt: '2017-12-18T22:58:40.045Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Application Process (footer link)',
        },
        linkTitle: {
          'en-US': 'Application Process',
        },
        linkDestinationExternal: {
          'en-US': 'https://www.openapply.com/',
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
        id: 'Jdv3OVjyy28GAuwqCeQsa',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:55.797Z',
        updatedAt: '2017-12-18T22:58:28.608Z',
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
        publishedCounter: 9,
        version: 38,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 37,
        firstPublishedAt: '2017-11-22T19:33:09.133Z',
        publishedAt: '2017-12-18T22:58:28.608Z',
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
        navTitle: {
          'en-US': 'Admissions',
          'zh-CN': '招生',
        },
        overviewNavTitle: {
          'en-US': 'Overview',
          'zh-CN': ' 概观',
        },
        navDescription: {
          'en-US':
            'Welcome! We are excited to meet you and look forward to sharing why Whittle is not your typical school. ',
          'zh-CN': ' 欢迎！我们很高兴见到你，期待分享为什么惠特尔不是你典型的学校。',
        },
        slug: {
          'en-US': 'admissions',
          'zh-CN': 'admissions-and-information-cn',
        },
        subcategories: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1Yrp6KApQgkIOqwAwAi6Ey',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2Ui5VoOSzKouuUQc2wUoEI',
              },
            },
          ],
        },
        headline: {
          'en-US': 'Admissions & Information',
          'zh-CN': '招生和信息',
        },
        subhead: {
          'en-US':
            'We are building the first truly global pre K-12 school. Become a part of our diverse community of learners taking on the world’s toughest challenges. ',
          'zh-CN': '我们正在建设第一个真正意义上的全球性的十一所学校。成为我们多元化的学习者社区的一部分，承担全球最严峻的挑战。',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '4gWhPrmQjm6qK4s0Ao8AW',
            },
          },
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6e4YItBFioOqGS4w4Ky0OY',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'VLLAjmXzs4eGcw2wikgUI',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': false,
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
        id: '6jfKfHZqBaAmmie8iIEGuY',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:55.817Z',
        updatedAt: '2017-12-18T22:58:42.080Z',
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
        firstPublishedAt: '2017-11-22T19:33:09.840Z',
        publishedAt: '2017-12-18T22:58:42.080Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Global Call One-on-one',
        },
        slug: {
          'en-US': 'global-call-one-on-one',
          'zh-CN': 'global-call-one-on-one-cn',
        },
        headline: {
          'en-US': 'Global Call  One-on-one',
        },
        hasShareButtons: {
          'en-US': false,
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
        id: '2N2Tksgr3ycaiSIq8g44ym',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:55.818Z',
        updatedAt: '2017-12-18T22:58:28.696Z',
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
        version: 34,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 33,
        firstPublishedAt: '2017-11-22T19:33:11.247Z',
        publishedAt: '2017-12-18T22:58:28.696Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Architecture',
          'zh-CN': '建筑',
        },
        overviewNavTitle: {
          'en-US': 'Overview',
          'zh-CN': ' 概观',
        },
        navDescription: {
          'en-US': 'Architecture lorem ipsum',
          'zh-CN': 'Translate from Latin 建筑lorem ipsum',
        },
        slug: {
          'en-US': 'architecture',
          'zh-CN': 'architecture-cn',
        },
        headline: {
          'en-US': 'Architecture',
          'zh-CN': ' 建筑',
        },
        hasShareButtons: {
          'en-US': true,
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
        id: '1XOV0USkCAOKCgoCgg0gIY',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:55.938Z',
        updatedAt: '2017-12-18T22:58:41.068Z',
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
        version: 4,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 3,
        firstPublishedAt: '2017-11-22T19:33:13.746Z',
        publishedAt: '2017-12-18T22:58:41.068Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Education Program (footer link)',
        },
        linkTitle: {
          'en-US': 'Education Program',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '5UaVDzy1m8YEA88eeuGWYQ',
            },
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
        id: '3WgEJyFzNKs0eGeyakgIIo',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:55.940Z',
        updatedAt: '2017-12-18T22:58:34.577Z',
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
        publishedCounter: 14,
        version: 60,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 59,
        firstPublishedAt: '2017-11-22T19:33:12.099Z',
        publishedAt: '2017-12-18T22:58:34.576Z',
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
        navTitle: {
          'en-US': 'Campus & Architecture',
          'zh-CN': ' 校园和建筑',
        },
        overviewNavTitle: {
          'en-US': 'Overview',
          'zh-CN': '概观',
        },
        navDescription: {
          'en-US': 'A Whittle School & Studios education is not just..',
          'zh-CN': '惠特尔学校和工作室教育不仅仅是..',
        },
        slug: {
          'en-US': 'campus-and-architecture',
          'zh-CN': 'campus-and-architecture-cn',
        },
        subcategories: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'edpC6HGg5GyUO8iemc4MC',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'sTzhPpevjE8ci6QoiqQUu',
              },
            },
          ],
        },
        headline: {
          'en-US': 'A New Type of Campus',
          'zh-CN': ' 一种新型校园',
        },
        subhead: {
          'en-US':
            '“We want the architecture itself to teach tolerance and collaboration to its students, who will then go out and create a better world.” —Renzo Piano ',
          'zh-CN': '“我们希望建筑本身能够为学生传授宽容和协作，然后他们会走出去，创造一个更美好的世界。” - 琴佐钢琴',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'ul4XFgkBtAUYY2Q8k0A0I',
            },
          },
        },
        mainImageAlt: {
          'en-US': 'Test image alt',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '54FmqMxYIU8W0GGGwMkWsY',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6JENHwltNCqm4Ig48KgkEW',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4tlDqvWoRa68QW6UWcGiM6',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2aLyeRTLAIK8aK8cgAcEC2',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': true,
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
        id: '2ojDnuxa2UEaA0G4G88WuS',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:55.995Z',
        updatedAt: '2017-12-18T22:58:26.589Z',
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
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2017-11-22T19:33:14.457Z',
        publishedAt: '2017-12-18T22:58:26.589Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Founder & Leadership (footer link)',
        },
        linkTitle: {
          'en-US': 'Founder & Leadership',
          'zh-CN': ' 创始人和领导',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: 'bBgy8eVIm4EeMkIO4cGao',
            },
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
        id: '6bMZwc25eoSSIuW4IcSyWc',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:56.011Z',
        updatedAt: '2017-12-18T22:58:40.082Z',
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
        version: 4,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 3,
        firstPublishedAt: '2017-11-22T19:33:12.980Z',
        publishedAt: '2017-12-18T22:58:40.082Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Curriculum (footer link)',
        },
        linkTitle: {
          'en-US': 'Curriculum',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2hPzIu0QJOggIkomAcsW6I',
            },
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
        id: '5f2zIxFIWsYYOecAeiUIMI',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:56.012Z',
        updatedAt: '2017-12-18T22:58:25.526Z',
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
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2017-11-22T19:33:15.966Z',
        publishedAt: '2017-12-18T22:58:25.526Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'FAQ (footer link)',
        },
        linkTitle: {
          'en-US': 'FAQ',
          'zh-CN': ' 常问问题',
        },
        linkDestinationExternal: {
          'en-US': 'https://www.ask.com/',
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
        id: '117SvQU8eEoGcqUAMA6YIE',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:56.016Z',
        updatedAt: '2017-12-18T22:58:26.508Z',
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
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2017-11-22T19:33:15.283Z',
        publishedAt: '2017-12-18T22:58:26.508Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Leadership & Faculty (footer link)',
        },
        linkTitle: {
          'en-US': 'Leadership & Faculty',
          'zh-CN': ' 领导和教师',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '4lqE1xi5ZuQ4eEQ8IWqSgk',
            },
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
        id: '1npU6zv1iI8wa4uaEomO0Q',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:56.125Z',
        updatedAt: '2017-12-18T22:58:25.489Z',
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
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2017-11-22T19:33:18.050Z',
        publishedAt: '2017-12-18T22:58:25.489Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Contact Us (footer link)',
        },
        linkTitle: {
          'en-US': 'Contact Us',
          'zh-CN': ' 联系我们',
        },
        linkDestinationExternal: {
          'en-US': 'http://www.google.com',
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
        id: 'aJJ6pdagmcgKkuk4I08Wa',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:56.135Z',
        updatedAt: '2017-12-18T22:58:25.527Z',
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
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2017-11-22T19:33:18.734Z',
        publishedAt: '2017-12-18T22:58:25.527Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'The Whittle Vision (footer link)',
        },
        linkTitle: {
          'en-US': 'The Whittle Vision',
          'zh-CN': '惠特尔视觉',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '1y0BVrygl2Mo0iiw4Ym2eQ',
            },
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
        id: '1qw6YpbEdGisSMkCgcs284',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:56.172Z',
        updatedAt: '2017-12-18T22:58:25.702Z',
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
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2017-11-22T19:33:16.685Z',
        publishedAt: '2017-12-18T22:58:25.702Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Press (footer link)',
        },
        linkTitle: {
          'en-US': 'Press',
          'zh-CN': ' 按',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '5dTpgXqOF2QewKwEoiEu2u',
            },
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
        id: '2DzSHtJOEco4iEsykoK4ey',
        type: 'Entry',
        createdAt: '2017-11-22T19:32:56.178Z',
        updatedAt: '2017-12-18T22:58:25.489Z',
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
        version: 6,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 5,
        firstPublishedAt: '2017-11-22T19:33:17.393Z',
        publishedAt: '2017-12-18T22:58:25.489Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'News & FAQ (footer link)',
        },
        linkTitle: {
          'en-US': 'News & FAQ',
          'zh-CN': '新闻和常见问题',
        },
        linkDestinationExternal: {
          'en-US': 'http://www.nytimes.com',
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
        id: '2q9JpQUG1aw4kAMEwGIg6G',
        type: 'Entry',
        createdAt: '2017-11-28T15:34:38.243Z',
        updatedAt: '2017-12-18T22:58:27.499Z',
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
        version: 32,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 31,
        firstPublishedAt: '2017-11-28T15:35:41.878Z',
        publishedAt: '2017-12-18T22:58:27.499Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'quote',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Pull quote with author (educational experience)',
        },
        quoteType: {
          'en-US': 'pull-quote',
        },
        content: {
          'en-US':
            'If a school doesn’t measure the progress of every child on multiple dimensions, then its mission statement is nothing more than pretty words.',
          'zh-CN':
            '機種加一……和我比開，投性交？片苦里生？以最嚴寫很及制先術要近此我學，長也告金國生知看在理明有影內，的令影程然的然小統們統家只都，回內用意哥驚其買動可草公呢葉未時你個論食入沒身不還你經聞質反不出買但進上總，選山光我續家是光媽眾的有',
        },
        source: {
          'en-US': 'Chris Whittle',
          'zh-CN': '術要近此',
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
        id: '4YQEt2FqwE8Ow6iSk6siUk',
        type: 'Entry',
        createdAt: '2017-11-28T15:35:59.539Z',
        updatedAt: '2017-12-18T22:58:27.530Z',
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
        version: 29,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 28,
        firstPublishedAt: '2017-11-28T15:36:17.362Z',
        publishedAt: '2017-12-18T22:58:27.530Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'quote',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Pull quote without author (educational experience)',
        },
        quoteType: {
          'en-US': 'pull-quote',
        },
        content: {
          'en-US':
            'If a school doesn’t measure the progress of every child on multiple dimensions, then its mission statement is nothing more than pretty words.',
          'zh-CN':
            '機種加一……和我比開，投性交？片苦里生？以最嚴寫很及制先術要近此我學，長也告金國生知看在理明有影內，的令影程然的然小統們統家只都，回內用意哥驚其買動可草公呢葉未時你個論食入沒身不還你經聞質反不出買但進上總，選山光我續家是光媽眾的有',
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
        id: '3LVu5Hld6M4iCUESiEumcy',
        type: 'Entry',
        createdAt: '2017-11-30T15:30:30.019Z',
        updatedAt: '2017-12-18T22:58:42.089Z',
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
        version: 30,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 29,
        firstPublishedAt: '2017-11-30T15:33:16.099Z',
        publishedAt: '2017-12-18T22:58:42.089Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Personalization & Immersion',
        },
        slug: {
          'en-US': 'personalization-and-immersion',
          'zh-CN': 'personalization-and-immersion-cn',
        },
        headline: {
          'en-US': 'Personalization & immersion at The Whittle School',
        },
        hasShareButtons: {
          'en-US': false,
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
        id: '24P1PZxsgQqys0uQu8m2CA',
        type: 'Entry',
        createdAt: '2017-11-30T18:20:05.908Z',
        updatedAt: '2017-12-18T22:58:25.561Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 34,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 33,
        firstPublishedAt: '2017-11-30T18:22:00.133Z',
        publishedAt: '2017-12-18T22:58:25.561Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Staff & Faculty (footer link - child)',
        },
        linkTitle: {
          'en-US': 'Staff & Faculty',
          'zh-CN': '员工和教师',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: 'nCr3eS7rJ6wmQsMgO8aSe',
            },
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
        id: '6rf0TGLqhymCIo2I2QIaKy',
        type: 'Entry',
        createdAt: '2017-11-30T18:43:42.012Z',
        updatedAt: '2017-12-18T22:58:42.060Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 34,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 33,
        firstPublishedAt: '2017-11-30T18:44:49.236Z',
        publishedAt: '2017-12-18T22:58:42.060Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Advisory Boards (footer link - child)',
        },
        linkTitle: {
          'en-US': 'Advisory Boards',
          'zh-CN': '咨询委员会',
        },
        linkDestinationExternal: {
          'en-US': 'https://www.advisory.com/',
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
        id: '5RSD4orqZUw2OeIswEe46w',
        type: 'Entry',
        createdAt: '2017-11-30T18:45:17.660Z',
        updatedAt: '2017-12-18T22:58:41.066Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 27,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 26,
        firstPublishedAt: '2017-11-30T18:46:07.256Z',
        publishedAt: '2017-12-18T22:58:41.066Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Partners (footer link - child)',
        },
        linkTitle: {
          'en-US': 'Partners',
          'zh-CN': ' 伙伴',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2N2Tksgr3ycaiSIq8g44ym',
            },
          },
          'zh-CN': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2N2Tksgr3ycaiSIq8g44ym',
            },
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
        id: '58uGrKt7huC6GYwecWaII8',
        type: 'Entry',
        createdAt: '2017-11-30T19:10:11.166Z',
        updatedAt: '2017-12-18T22:58:25.483Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 23,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 22,
        firstPublishedAt: '2017-11-30T19:11:33.758Z',
        publishedAt: '2017-12-18T22:58:25.483Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Join Us (footer link - child)',
        },
        linkTitle: {
          'en-US': 'Join Us',
          'zh-CN': ' 加入我们',
        },
        linkDestinationExternal: {
          'en-US': 'https://work.co/',
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
        id: '4UkpQfYUdOgOaYs0a6Gi0M',
        type: 'Entry',
        createdAt: '2017-11-30T19:17:26.053Z',
        updatedAt: '2017-12-18T22:58:26.486Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 42,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 41,
        firstPublishedAt: '2017-11-30T19:18:38.596Z',
        publishedAt: '2017-12-18T22:58:26.486Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Community Partnership (footer link - child)',
        },
        linkTitle: {
          'en-US': 'Community Partnership',
          'zh-CN': ' 社区领导',
        },
        linkDestinationExternal: {
          'en-US': 'https://www.youtube.com/',
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
        id: '4q1337b2g0YyIEuKEuEmUO',
        type: 'Entry',
        createdAt: '2017-11-30T19:19:07.324Z',
        updatedAt: '2017-12-18T22:58:26.537Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 24,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 23,
        firstPublishedAt: '2017-11-30T19:21:59.046Z',
        publishedAt: '2017-12-18T22:58:26.537Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Enrollment (footer link - child)',
        },
        linkTitle: {
          'en-US': 'Enrollment',
          'zh-CN': ' 入学',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '5bH7yCuT6EeAM4gkskeims',
            },
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
        id: '1jmFyTQOnm0UyC4O6oE4q8',
        type: 'Entry',
        createdAt: '2017-11-30T19:23:01.541Z',
        updatedAt: '2017-12-18T22:58:26.536Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 23,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 22,
        firstPublishedAt: '2017-11-30T19:23:45.109Z',
        publishedAt: '2017-12-18T22:58:26.536Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'New York (footer link - child)',
        },
        linkTitle: {
          'en-US': 'New York',
          'zh-CN': ' 纽约',
        },
        linkDestinationExternal: {
          'en-US': 'https://www.nycgo.com/',
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
        id: '31vhSeL5lKWaEum22sOUOE',
        type: 'Entry',
        createdAt: '2017-11-30T19:24:12.163Z',
        updatedAt: '2017-12-18T22:58:26.509Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 26,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 25,
        firstPublishedAt: '2017-11-30T19:32:35.133Z',
        publishedAt: '2017-12-18T22:58:26.509Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Shenzhen (footer link - child)',
        },
        linkTitle: {
          'en-US': 'Shenzhen',
          'zh-CN': '深圳',
        },
        linkDestinationExternal: {
          'en-US': 'https://en.wikipedia.org/wiki/Shenzhen',
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
        id: '3YO3FxeCGkMY2quAGgyEek',
        type: 'Entry',
        createdAt: '2017-11-30T19:41:44.453Z',
        updatedAt: '2017-12-18T22:58:44.120Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 53,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 52,
        firstPublishedAt: '2017-11-30T19:46:34.203Z',
        publishedAt: '2017-12-18T22:58:44.120Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Responsibility ',
          'zh-CN': ' 责任',
        },
        navDescription: {
          'en-US': 'The state or fact of having a duty to deal with something or of having control over someone.',
          'zh-CN': ' 有责任处理某事或控制某人的状态或事实。',
        },
        slug: {
          'en-US': 'responsibility',
          'zh-CN': 'responsibility-cn',
        },
        headline: {
          'en-US': 'What is responsibility?',
          'zh-CN': ' 什么是责任？',
        },
        subhead: {
          'en-US':
            'Being responsible refers to our ability to make decisions that serve our own interests and the interests of others. We first need to be responsible for ourselves before we can be responsible for others. ',
          'zh-CN': '负责任是指我们做出符合自己利益和他人利益的决策的能力。我们首先需要对自己负责，然后才能对他人负责。',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5UMFfvp4ZOooC8AkcSwwgs',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4YQEt2FqwE8Ow6iSk6siUk',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'oGF4Yu8mfACkCCUMcsGgq',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '17NAw16WM0eu4K2MYy4e0U',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5HGowS2zmM6M2i8EaiCigG',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6X4JULNRksCg0ocGeQ08Qi',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2OiFBZrIE80mYOMaAoyom2',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'SnXrnfdOucMWcCaKY6WEG',
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
        id: '6S4WdC67YWGw48AeUAGyKu',
        type: 'Entry',
        createdAt: '2017-12-01T21:20:17.267Z',
        updatedAt: '2017-12-18T22:58:43.086Z',
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
        firstPublishedAt: '2017-12-01T21:20:32.853Z',
        publishedAt: '2017-12-18T22:58:43.086Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'openApplyIFrame',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Shenzhen',
        },
        scriptUrl: {
          'en-US': 'https://whittledc.openapply.com/roi.js',
          'zh-CN': 'https://whittleshenzhen.openapply.com/roi.js',
        },
        description: {
          'en-US':
            'Selecting a school for your child is perhaps one of the most important decisions a parent can make. Identifying and understanding the key differences between schools is an essential part of that decision making experience.',
          'zh-CN': '\n为你的孩子选择一个学校也许是家长可以做的最重要的决定之一。识别和理解学校之间的关键差异是决策经验的重要组成部分。',
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
        id: '5qe87nq0lG0eQmgS2oQqC8',
        type: 'Entry',
        createdAt: '2017-12-01T21:22:46.672Z',
        updatedAt: '2017-12-18T22:58:28.541Z',
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
        publishedCounter: 10,
        version: 159,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 158,
        firstPublishedAt: '2017-12-01T21:25:23.731Z',
        publishedAt: '2017-12-18T22:58:28.541Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Path to Inquiry',
          'zh-CN': '查询路径',
        },
        navDescription: {
          'en-US': 'Learn how to apply',
          'zh-CN': ' 学习如何申请',
        },
        slug: {
          'en-US': 'path-to-inquiry',
          'zh-CN': 'path-to-inquiry-cn',
        },
        headline: {
          'en-US': 'Path to Inquiry',
          'zh-CN': '查询路径',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6S4WdC67YWGw48AeUAGyKu',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': false,
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
        id: '2eMCXJdhug2WI2YOowcyaY',
        type: 'Entry',
        createdAt: '2017-12-01T21:42:01.897Z',
        updatedAt: '2017-12-18T22:58:27.511Z',
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
        version: 39,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 38,
        firstPublishedAt: '2017-12-01T21:42:34.169Z',
        publishedAt: '2017-12-18T22:58:27.511Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footerLink',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Path to Inquiry (Child)',
        },
        linkTitle: {
          'en-US': 'Path to Inquiry',
        },
        linkDestinationInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '5qe87nq0lG0eQmgS2oQqC8',
            },
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
        id: '26QiMDplFOUykAIcEWc4Ok',
        type: 'Entry',
        createdAt: '2017-12-04T16:19:34.190Z',
        updatedAt: '2017-12-18T22:58:44.071Z',
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
        version: 55,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 54,
        firstPublishedAt: '2017-12-04T16:19:59.425Z',
        publishedAt: '2017-12-18T22:58:44.071Z',
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
          'en-US': 'Square inlineimage (curriculum)',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'hxEfHf39jGMMEQ8KE8Y8g',
            },
          },
        },
        alt: {
          'en-US': 'Children Test',
          'zh-CN': 'Chinese alt text',
        },
        shape: {
          'en-US': 'Rectangle',
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
        id: '3ZudBcyB32UC4sgyo4qeQO',
        type: 'Entry',
        createdAt: '2017-12-05T21:09:00.978Z',
        updatedAt: '2017-12-18T22:58:27.497Z',
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
        version: 19,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 18,
        firstPublishedAt: '2017-12-05T21:09:20.284Z',
        publishedAt: '2017-12-18T22:58:27.497Z',
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
          'en-US': 'Building (architecture page)',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'ul4XFgkBtAUYY2Q8k0A0I',
            },
          },
        },
        alt: {
          'en-US': 'Building',
        },
        shape: {
          'en-US': 'Rectangle',
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
        id: '1Rn2v5x6xuUCoCQEyMoWOu',
        type: 'Entry',
        createdAt: '2017-12-06T15:20:23.125Z',
        updatedAt: '2017-12-18T22:58:27.498Z',
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
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 2,
        version: 8,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 7,
        firstPublishedAt: '2017-12-06T15:20:46.151Z',
        publishedAt: '2017-12-18T22:58:27.498Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'quote',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Block quote with author (educational experience)',
        },
        quoteType: {
          'en-US': 'block-quote',
        },
        content: {
          'en-US':
            'If a school doesn’t measure the progress of every child on multiple dimensions, then its mission statement is nothing more than pretty words.',
          'zh-CN':
            '機種加一……和我比開，投性交？片苦里生？以最嚴寫很及制先術要近此我學，長也告金國生知看在理明有影內，的令影程然的然小統們統家只都，回內用意哥驚其買動可草公呢葉未時你個論食入沒身不還你經聞質反不出買但進上總，選山光我續家是光媽眾的有',
        },
        source: {
          'en-US': 'Chris Whittle',
          'zh-CN': '術要近此',
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
        id: '5ixllsq7W0OymCMM2C4Guo',
        type: 'Entry',
        createdAt: '2017-12-07T10:56:42.639Z',
        updatedAt: '2017-12-18T22:58:44.075Z',
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
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedCounter: 8,
        version: 44,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 43,
        firstPublishedAt: '2017-12-07T10:59:46.717Z',
        publishedAt: '2017-12-18T22:58:44.075Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'threeUpBreaker',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': '3 up breaker',
        },
        title1: {
          'en-US': 'A School of One',
          'zh-CN': '一所学校',
        },
        content1: {
          'en-US':
            'Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—*or that can be replaced easily when it is time*',
          'zh-CN':
            '意义状你布者达包查如但看，[方之时物力所元老几色五](https://google.com "Google")，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，*持作片表变议京按*，权R候建豆周',
        },
        title2: {
          'en-US': 'Exceptional Faculty',
          'zh-CN': '师资力量雄厚',
        },
        content2: {
          'en-US':
            'Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! __We must__ choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time',
          'zh-CN': '意义状你布者达包查如但看，方之时物力所元老几色五，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，持作片表变议京按，权R候建豆周.',
        },
        title3: {
          'en-US': 'Progressive Pedagogy',
          'zh-CN': '进步的教育学',
        },
        content3: {
          'en-US':
            'Any parent [knows what](https://google.com "Google") a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! __We must choose *materials* that can co-exist__ with the natural energy of children—or that can be replaced easily when it is time',
          'zh-CN': '意义状你布者达包查如但看，方之时物力所元老几色五，标花术弦口济克说用我. 斗全取圆公算，理拉石片马口，该J江做. 气中土常劳接理高，持作片表变议京按，权R候建豆周.',
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
        id: '54FmqMxYIU8W0GGGwMkWsY',
        type: 'Entry',
        createdAt: '2017-12-07T16:58:47.110Z',
        updatedAt: '2017-12-18T22:58:29.467Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 52,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 51,
        firstPublishedAt: '2017-12-07T17:02:58.923Z',
        publishedAt: '2017-12-18T22:58:29.467Z',
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
          'en-US': 'Intro body',
        },
        content: {
          'en-US':
            'A Whittle School & Studios education is not just limited to the classroom. Everything in a school is a lesson, and the building itself is perhaps the most enduring one. ![Piano and his design team at work.](//images.contentful.com/udx5f2jyw09i/5kLJqDZ9vyIaOucos4KCS0/438abc2c158e763f6a87f3b7dab233d8/children-with-lights.jpg)\n\nDesigned by renowned architect Renzo Piano, our campuses support our educational mission and welcome the surrounding community. Our first two locations, in Shenzhen, China, [hyperlink to Shenzhen page?] and Washington, D.C., [hyperlink to D.C.?]  are inspiring environments for making, sharing, and growing, where students can pursue their passions and achieve their highest potential.  \n\nThe Piano team has developed a design concept that we will use, in large part, in every city, as our network of schools continues to grow. Though the architecture will adapt to local sites and conditions, the core principles of every campus will be the same. Our students and teachers will feel right at home, no matter which campus they are visiting.',
          'zh-CN':
            '\n惠特尔学校和工作室教育不仅限于教室。学校里的一切都是一个教训，建筑本身也许是最持久的一个。![Piano and his design team at work.](//images.contentful.com/udx5f2jyw09i/5kLJqDZ9vyIaOucos4KCS0/438abc2c158e763f6a87f3b7dab233d8/children-with-lights.jpg)\n\n由着名建筑师兰佐·皮亚诺设计，我们的校园支持我们的教育使命，欢迎周围的社区。我们的前两个地点，在中国深圳，[hyperlink to Shenzhen page?] 和华盛顿特区, [hyperlink to D.C.?] 是鼓舞人心的创造，分享和成长的环境，让学生追求激情，发挥最大的潜力。\n\n\n钢琴团队已经开发了一个设计理念，我们将在很大程度上在每个城市使用，因为我们的学校网络不断发展。虽然建筑将适应当地的场地和条件，但每个校园的核心原则都是一样的。我们的学生和老师都会感到宾至如归，不管他们到哪个校园。',
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
        id: 'edpC6HGg5GyUO8iemc4MC',
        type: 'Entry',
        createdAt: '2017-12-07T17:16:04.978Z',
        updatedAt: '2017-12-18T22:58:42.281Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 58,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 57,
        firstPublishedAt: '2017-12-07T17:42:19.468Z',
        publishedAt: '2017-12-18T22:58:42.281Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'D.C. Campus',
          'zh-CN': ' 校园',
        },
        navDescription: {
          'en-US': 'A Whittle School & Studios education is not just..',
          'zh-CN': ' 惠特尔学校和工作室教育不仅仅是..',
        },
        slug: {
          'en-US': 'dc',
          'zh-CN': 'dc-cn',
        },
        headline: {
          'en-US': 'Our Home in D.C. ',
          'zh-CN': ' 我们在D.C.的家',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5iM0C8Tviguwks0kMCkyQE',
            },
          },
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3Bl0pFCXEQoguqQ46gsUoq',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2aLyeRTLAIK8aK8cgAcEC2',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4b7uM28xQQygaKi22gU84M',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3sF1nXxhG0KsQkGcWumkKm',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': true,
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
        id: '3Bl0pFCXEQoguqQ46gsUoq',
        type: 'Entry',
        createdAt: '2017-12-07T17:18:08.797Z',
        updatedAt: '2017-12-18T22:58:28.501Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 17,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 16,
        firstPublishedAt: '2017-12-07T17:18:38.681Z',
        publishedAt: '2017-12-18T22:58:28.501Z',
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
          'en-US': 'DC body text intro',
        },
        content: {
          'en-US':
            'A Whittle School & Studios education is not just limited to the classroom—everything, and everyone, that a student interacts with during their time with us has an impact on their learning and development. Our campuses are designed to bring to life our project-based, hands-on curriculum, build a culture of collaboration, and help our students develop academically and personally.\n\nThe site of our first North American campus, in the northwest corner of Washington, D.C., was the former headquarters of the communications satellite services provider Intelsat, which was designed by Australian architect John Andrews in the 1980’s and encompasses more than 800,000 square feet of built area. The 13.7-acre site, currently home to a variety of trees and vegetation, will be enriched with even more plantings, to build the sense of a forest that envelops the building.  \n\nOf the 660,000 square feet (61,300 square meters) of academic space, only 18 percent or so is used for conventional classroom purposes. Over 80,000 square feet (7,400 square meters) alone is provided for performing arts, music and athletics.\n',
          'zh-CN':
            '惠特尔学校和工作室的教育不仅仅局限于教室 - 每个人，学生与他们在一起的时间里与他们互动的每件事都会影响他们的学习和发展。我们的校园旨在将我们基于项目的实践课程带入生活，建立协作文化，并帮助学生在学术上和个人上发展。\n\n我们在华盛顿特区西北角的第一个北美校园网站是通信卫星服务提供商Intelsat的前任总部，由澳大利亚建筑师约翰·安德鲁斯（John Andrews）在20世纪80年代设计，包括超过80万平方英尺的建筑区。目前拥有各种树木和植被的13.7英亩土地将被种植更多的树木，从而营造出包围建筑物的森林感。\n\n在66万平方英尺（61,300平方米）的学术空间中，只有18％左右用于传统教室用途。超过80,000平方英尺（7400平方米）的表演艺术，音乐和田径。',
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
        id: '2aLyeRTLAIK8aK8cgAcEC2',
        type: 'Entry',
        createdAt: '2017-12-07T17:19:17.836Z',
        updatedAt: '2017-12-18T22:58:28.495Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 15,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 14,
        firstPublishedAt: '2017-12-07T17:19:50.646Z',
        publishedAt: '2017-12-18T22:58:28.495Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'slideshowCarousel',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Images from DC campus',
        },
        slides: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3ZudBcyB32UC4sgyo4qeQO',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '17NAw16WM0eu4K2MYy4e0U',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4PGT6TFonKkGEGy6kSsgEK',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '26QiMDplFOUykAIcEWc4Ok',
              },
            },
          ],
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
        id: '3sF1nXxhG0KsQkGcWumkKm',
        type: 'Entry',
        createdAt: '2017-12-07T17:20:33.474Z',
        updatedAt: '2017-12-18T22:58:29.493Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 26,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 25,
        firstPublishedAt: '2017-12-07T17:20:59.454Z',
        publishedAt: '2017-12-18T22:58:29.493Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'quote',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Renzo quote (pull quote 2)',
        },
        quoteType: {
          'en-US': 'pull-quote',
        },
        content: {
          'en-US':
            '“Our campus is built around the Renaissance idea of the bottega—a lab where young people learn by watching and by doing, gaining secret knowledge."',
          'zh-CN': '\n“我们的校园围绕着bottega的复兴思想而建立，这个实验室是年轻人通过观看和做事来学习，获得秘密知识的一个实验室。”',
        },
        source: {
          'en-US': 'Renzo Piano',
          'zh-CN': 'Renzo Piano',
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
        id: 'sTzhPpevjE8ci6QoiqQUu',
        type: 'Entry',
        createdAt: '2017-12-07T17:24:19.623Z',
        updatedAt: '2017-12-18T22:58:43.159Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 54,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 53,
        firstPublishedAt: '2017-12-07T17:42:37.680Z',
        publishedAt: '2017-12-18T22:58:43.159Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Shenzhen',
          'zh-CN': ' 深圳',
        },
        navDescription: {
          'en-US': 'A Whittle School & Studios education is not just..',
          'zh-CN': ' 惠特尔学校和工作室教育不仅仅是..',
        },
        slug: {
          'en-US': 'shenzhen',
          'zh-CN': 'shenzhen-cn',
        },
        headline: {
          'en-US': 'Our Home in Shenzhen ',
          'zh-CN': '我们在深圳的家',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5iM0C8Tviguwks0kMCkyQE',
            },
          },
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5dmEsIRB4kOc4q8YQKISMC',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6vji17Z1w4y0uYmsOiKmYs',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '494d9Sla7eWEqQG2uuMC0I',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'V487TpOZWwiMuYCmcA0Ew',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': true,
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
        id: '5dmEsIRB4kOc4q8YQKISMC',
        type: 'Entry',
        createdAt: '2017-12-07T17:25:49.093Z',
        updatedAt: '2017-12-18T22:58:34.783Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 20,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 19,
        firstPublishedAt: '2017-12-07T17:26:03.717Z',
        publishedAt: '2017-12-18T22:58:34.783Z',
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
          'en-US': 'Chicago intro body text',
        },
        content: {
          'en-US':
            'A Whittle School & Studios education is not just limited to the classroom—everything, and everyone, that a student interacts with during their time with us has an impact on their learning and development. Our campuses are designed to bring to life our project-based, hands-on curriculum, build a culture of collaboration, and help our students develop academically and personally.\n\nOf the 411,181 square feet (38,200 square meters) of academic space at our Shenzhen campus, only 20 percent or so is used for conventional classroom purposes! Over 64,000 square feet (5,900 square meters) alone is provided for performing arts, music and athletics.\n',
          'zh-CN':
            '\n惠特尔学校和工作室的教育不仅仅局限于教室 - 每个人，学生与我们在一起的时间里与他们互动的每一件事都会影响他们的学习和发展。我们的校园旨在将我们基于项目的实践课程带入生活，建立合作文化，并帮助学生在学术上和个人上发展。\n\n在深圳校园的411181平方英尺（38200平方米）的学术空间中，只有20％左右用于传统的课堂教学！超过64,000平方英尺（5900平方米）的表演艺术，音乐和田径。',
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
        id: '6vji17Z1w4y0uYmsOiKmYs',
        type: 'Entry',
        createdAt: '2017-12-07T17:26:15.135Z',
        updatedAt: '2017-12-18T22:58:28.541Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 18,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 17,
        firstPublishedAt: '2017-12-07T17:38:39.644Z',
        publishedAt: '2017-12-18T22:58:28.541Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'slideshowCarousel',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Images of Shenzhen campus',
        },
        slides: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3ZudBcyB32UC4sgyo4qeQO',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6wflT8Qoh24aAIi0CMw4GA',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6X4JULNRksCg0ocGeQ08Qi',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '17NAw16WM0eu4K2MYy4e0U',
              },
            },
          ],
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
        id: 'V487TpOZWwiMuYCmcA0Ew',
        type: 'Entry',
        createdAt: '2017-12-07T17:40:40.145Z',
        updatedAt: '2018-01-04T09:08:27.932Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6Nei44MnEAd8PpKPZZHeIG',
          },
        },
        publishedCounter: 4,
        version: 113,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6Nei44MnEAd8PpKPZZHeIG',
          },
        },
        publishedVersion: 38,
        firstPublishedAt: '2017-12-07T17:41:01.770Z',
        publishedAt: '2018-01-03T15:56:04.380Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'quote',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Renzo quote (pull quote)',
        },
        quoteType: {
          'en-US': 'pull-quote',
        },
        content: {
          'en-US':
            '“The design of our school is a square, and its center is inspired by an Italian piazza. The piazza is a magic place where people mix with each other and stay together, where differences disappear and are actually valued. It’s like a little town.”\n',
          'zh-CN': '\n“我们学校的设计是一个广场，其中心是由意大利广场启发。广场是一个神奇的地方，人们彼此混合在一起，在差异消失和实际价值的地方。这就像一个小镇。“',
        },
        source: {
          'en-US': '—Renzo Piano',
          'zh-CN': '—Renzo Piano',
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
        id: '6e4YItBFioOqGS4w4Ky0OY',
        type: 'Entry',
        createdAt: '2017-12-07T18:18:47.965Z',
        updatedAt: '2017-12-18T22:58:29.492Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 53,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 52,
        firstPublishedAt: '2017-12-07T18:19:53.805Z',
        publishedAt: '2017-12-18T22:58:29.492Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'threeUpBreaker',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': '3-up admissions',
        },
        title1: {
          'en-US': 'Sign Up to Learn More',
          'zh-CN': ' 注册以了解更多信息',
        },
        content1: {
          'en-US':
            'Welcome! We are excited to meet you and look forward to sharing why Whittle is not your typical school. Complete our Inquiry Card [link to inquiry form], and we will be in touch. ',
          'zh-CN': '欢迎！我们很高兴见到你，期待分享为什么惠特尔不是你典型的学校。填写我们的查询卡 [link to inquiry form], \n我们会保持联系。',
        },
        title2: {
          'en-US': 'Attend a Parent Information Event',
          'zh-CN': '参加家长信息活动',
        },
        content2: {
          'en-US':
            'From an overview of our program to deep-dives into our curriculum, we would love for you to join us [link to calendar] for a first-hand experience of the Whittle approach to education.  ',
          'zh-CN': '\n从我们的课程概览深入到我们的课程，我们会很乐意为您加入 [link to calendar] 为惠特尔教育方法的第一手经验',
        },
        title3: {
          'en-US': 'Start the Application Process',
          'zh-CN': ' 启动应用程序进程',
        },
        content3: {
          'en-US':
            'A school is, at its core, a network of individuals learning and growing together and we are thrilled that you are interested in joining [link to process article page] our community. ',
          'zh-CN': '\n一所学校的核心是一个学习和成长的个人网络，我们很高兴你有兴趣加入',
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
        id: 'VLLAjmXzs4eGcw2wikgUI',
        type: 'Entry',
        createdAt: '2017-12-07T18:20:09.650Z',
        updatedAt: '2017-12-18T22:58:29.489Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 27,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 26,
        firstPublishedAt: '2017-12-07T18:20:26.315Z',
        publishedAt: '2017-12-18T22:58:29.489Z',
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
          'en-US': 'Admission description',
        },
        content: {
          'en-US':
            'Students are more than just a transcript. \n\nWe have a “life as application” philosophy—anything and everything about a student can be relevant to the admissions process.  \n\nOur progressive approach seeks to understand each individual learner on a deeply personal level. In addition to the materials typically required, we encourage students to showcase their creativity throughout the application process. Academic success is important, but just one factor. Are you a passionate illustrator? A budding poet? A tireless inventor? Your ambitions, talents, and dreams are important to us. They are what makes you unique! \n\nIn the coming months, we are pleased to offer varied opportunities for you to deepen your understanding of our school, engage with our unique approaches to learning, and ultimately, for us to become better acquainted. \n\nPresentations by our senior leadership and school leaders offer insight into our vision, program, and design process, while workshops and guest lectures offer a chance to experience what makes our approach distinctive. Many of these events [link to calendar?] will be held at our Parent Information Centers, which reflect the design of our campuses and facilitate learning that illustrates our educational principles. \n\nReady to take the next step? Read more about our Admission process [link to page] and submit an inquiry card [link to page]. \n',
          'zh-CN':
            '学生不仅仅是一个成绩单。\n\n我们有一个“生活就是应用”的理念 - 关于学生的一切事情都可以与招生过程相关。\n\n我们的渐进式方法试图深入了解每个学习者。除了通常所需的材料外，我们鼓励学生在整个申请过程中展示他们的创造力。学术上的成功是重要的，但只是一个因素。你是一个充满激情的插画师吗？一个萌芽的诗人？一个不知疲倦的发明家？你的野心，才能和梦想对我们很重要。他们是什么让你独一无二的！\n\n在接下来的几个月里，我们很高兴能为您提供各种机会，加深您对我们学校的了解，与我们独特的学习方法结合起来，最终让我们更加熟悉。\n\n我们的高级领导和学校领导的演讲为我们的愿景，计划和设计过程提供了深刻的见解，而研讨会和嘉宾讲座提供了一个机会来体验我们的方法与众不同。许多这些事件 [link to calendar?] 将在我们的家长信息中心举行，这些中心反映了我们校园的设计，并促进学习，这说明了我们的教育原则。\n\n准备采取下一步行动？了解更多关于我们的招生过程 [link to page] 并提交一个查询卡 [link to page].',
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
        id: '1Yrp6KApQgkIOqwAwAi6Ey',
        type: 'Entry',
        createdAt: '2017-12-07T18:20:55.419Z',
        updatedAt: '2017-12-18T22:58:34.530Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 48,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 47,
        firstPublishedAt: '2017-12-07T18:31:05.076Z',
        publishedAt: '2017-12-18T22:58:34.530Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Application Process',
          'zh-CN': ' 申请流程',
        },
        navDescription: {
          'en-US':
            'We are so glad that you are interested in becoming a founding student at the Whittle School & Studios. ',
          'zh-CN': '我们很高兴您有兴趣成为Whittle School＆Studios的创始人。',
        },
        slug: {
          'en-US': 'application-process',
          'zh-CN': 'application-process-cn',
        },
        headline: {
          'en-US': 'How to Apply',
          'zh-CN': ' 如何申请',
        },
        subhead: {
          'en-US': 'Our personalized, collaborative application process reflects our approach to education. ',
          'zh-CN': ' 我们个性化的协作式应用程序反映了我们的教育方法。',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5kLJqDZ9vyIaOucos4KCS0',
            },
          },
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2v6SbUZNjmq86umk042YUc',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1F1YF3aPVqC8KmusKeOwkA',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2xrAdhFuhKmogU2ssYMoOU',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6y83BcnE08sU28KCwA68iC',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5zqo2rZAFqMyoiC2EqIGaw',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2i0uO1CxdmYoiKSICiuMQE',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '73XIwmccnuQeoKAAuyMaoO',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': true,
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
        id: '2v6SbUZNjmq86umk042YUc',
        type: 'Entry',
        createdAt: '2017-12-07T18:23:53.932Z',
        updatedAt: '2017-12-18T22:58:33.499Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 60,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 59,
        firstPublishedAt: '2017-12-07T18:24:45.390Z',
        publishedAt: '2017-12-18T22:58:33.499Z',
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
          'en-US': 'Application text (1)',
        },
        content: {
          'en-US':
            'We are so glad that you are interested in becoming a founding student at the Whittle School & Studios. Our admissions philosophy is premised on the idea that anything and everything about a student is relevant; we call this principle “life as application”. Our team looks forward to supporting you and your student every step of the way. \n\nThe Admission timeline is composed of four phases:  \n\n1.\tAttend an Event [Link to event calendar/sign-up]\n2.\tPay Application Fee and Submit Part I of Your Application\n3.\tInterview\n4.\tComplete Your Application\n\n',
          'zh-CN':
            '\n我们很高兴您有兴趣成为Whittle School＆Studios的创始人。我们的录取理念是基于这样一个观念，即任何关于学生的事情都是相关的。我们把这个原则称为“生活就是应用”。我们的团队期待着您和您的学生每一步的支持\n\n招生时间表由四个阶段组成：\n\n\n1.参加活动 [Link to event calendar/sign-up]\n2.支付申请费用并提交申请的第一部分\n3.面试\n4.完成你的申请\n\n\n',
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
        id: '3VeuuqkMtiE6sSumM62Y80',
        type: 'Entry',
        createdAt: '2017-12-11T16:34:31.660Z',
        updatedAt: '2017-12-18T22:58:28.491Z',
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
        publishedCounter: 5,
        version: 75,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 74,
        firstPublishedAt: '2017-12-11T16:36:52.906Z',
        publishedAt: '2017-12-18T22:58:28.491Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'List',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'List test',
        },
        title1: {
          'en-US': 'Title 1',
          'zh-CN': '証国因橋小況現済走彩述柴 ',
        },
        description1: {
          'en-US': 'Description 1',
          'zh-CN': '__証国因橋小況現済走彩述柴__',
        },
        title2: {
          'en-US': 'Title 2',
          'zh-CN': '取者済知先気写迂',
        },
        description2: {
          'en-US': '__Description 2__',
          'zh-CN': '取者済知先気写迂',
        },
        title3: {
          'en-US': 'Title 3',
          'zh-CN': '稿購原身揮同合日功婦',
        },
        description3: {
          'en-US': 'Description 3',
          'zh-CN': '稿購原身揮同合日功婦',
        },
        title4: {
          'en-US': 'Title 4',
          'zh-CN': '本証危宮活識家億米健専',
        },
        description4: {
          'en-US': 'Description 4',
          'zh-CN': '件毎理計記菊野議必事読戦下馬覧示育聴阪欺',
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
        id: '4b7uM28xQQygaKi22gU84M',
        type: 'Entry',
        createdAt: '2017-12-11T17:55:48.623Z',
        updatedAt: '2017-12-18T22:58:29.643Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 73,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 72,
        firstPublishedAt: '2017-12-11T17:59:38.109Z',
        publishedAt: '2017-12-18T22:58:29.643Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'List',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Campus highlights list',
        },
        title1: {
          'en-US': 'Courtyards',
          'zh-CN': '四合院',
        },
        description1: {
          'en-US':
            'A series of glass-enclosed courtyards—open to all students—are distributed throughout the building and serve as the heart for the day-to-day activities of the school. These are the spaces where students meet their friends for lunch, collaborate on large projects, or screen a film. Sweeping fabric “sails” will be suspended in each of the courtyards, softening the scale of the spaces reducing ambient noise.    ',
          'zh-CN':
            '\n一系列对所有学生开放的玻璃封闭庭院分布在整个建筑物内，并作为学校日常活动的心脏。这些是学生午餐时与朋友见面，在大型项目上合作或者放映电影的空间。每个庭院都会悬挂清晰的“风帆”帆布，使空间的规模变得更小，从而降低环境噪音。',
        },
        title2: {
          'en-US': 'Workshop Spaces',
          'zh-CN': ' 车间空间',
        },
        description2: {
          'en-US':
            'To support our students’ passions and the interdisciplinary work at the core of the Whittle School network, we have unique Workshop spaces that flank two of the courtyards. There, students build their capacity for design thinking, bringing their ideas into reality through brainstorming, prototyping, and presenting. Themes for these spaces include 2-D and 3-D art, an electronics gym, video production, and wood and metal shops.  ',
          'zh-CN':
            '\n为了支持我们学生的激情和以惠特尔学校网络为核心的跨学科工作，我们在两个庭院的侧面拥有独特的工作间空间。在那里，学生们通过头脑风暴，原型设计和展示来建立他们的设计思维能力，将他们的想法变成现实。这些空间的主题包括二维和三维艺术，电子健身房，视频制作以及木材和金属商店。',
        },
        title3: {
          'en-US': 'Learning Commons',
          'zh-CN': ' 学习共享',
        },
        description3: {
          'en-US':
            'Classrooms are organized into “Learning Commons” organized around homerooms in the lower grades and around interdisciplinary subjects for older students. This configuration, where classrooms connect to a shared space, creates space for the students engage in large group, while also supporting interdisciplinary or experiential work that requires a larger space.',
          'zh-CN': '\n教室由低年级的家庭教室和大学生的跨学科课程组成“学习共享”。这种配置，教室连接到一个共享的空间，创造空间让学生从事大型团队，同时也支持需要更大空间的跨学科或体验性工作。',
        },
        title4: {
          'en-US': 'Flexible Clarroms',
          'zh-CN': ' 灵活的Clarroms',
        },
        description4: {
          'en-US':
            'Students can easily reconfigure their learning spaces to support different modes of teaching, learning and doing. Classrooms have writeable sliding panels, transforming all the walls into surfaces where students and teachers can share ideas, brainstorm and create. Transparent glass walls create strong connections between classrooms and adjacent learning commons, allowing the classroom to expand as needed, so students can work on different projects or at varying speeds.',
          'zh-CN':
            '学生可以轻松地重新配置他们的学习空间，以支持不同的教学，学习和做法。教室有可写的滑动面板，将所有的墙壁变成表面，学生和老师可以分享想法，集体讨论和创造。透明的玻璃墙在教室和相邻的学习公共空间之间建立了牢固的连接，使得课堂可以根据需要进行扩展，因此学生可以在不同的项目上或以不同的速度工作。',
        },
        title5: {
          'en-US': 'Performance and Presentation',
          'zh-CN': '表演和演示',
        },
        description5: {
          'en-US':
            'Each Whittle campus is organized around the public presentation of student work and the collective expression of community, giving performance and exhibition spaces pride of place. Through sharing their work with a wider audience, students cultivate both visual and spatial communication skills. This belief in performance and public presentation comes to life throughout the building in a wide variety of formal and informal spaces ranging from pin-up boards and rehearsal rooms to black box theatres to an end-stage amphitheater. ',
          'zh-CN':
            '\n每个惠特尔校园都围绕着学生作品的公开展示和社区的集体表现，给予表演和展览空间自豪的地方。通过与更广泛的观众分享他们的工作，学生们培养视觉和空间的沟通技巧。这种对表演和公众演示的信仰在各种正式和非正式的空间中形成，从排针板和排练室到黑箱剧院，到露天剧场。',
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
        id: '6JENHwltNCqm4Ig48KgkEW',
        type: 'Entry',
        createdAt: '2017-12-11T18:02:39.762Z',
        updatedAt: '2017-12-22T13:05:47.963Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedCounter: 4,
        version: 84,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedVersion: 83,
        firstPublishedAt: '2017-12-11T18:04:25.258Z',
        publishedAt: '2017-12-22T13:05:47.963Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'List',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Core design principles',
        },
        title1: {
          'en-US': 'Light Matters',
          'zh-CN': ' 光的问题',
        },
        description1: {
          'en-US':
            '__During the day__, we want to bring daylight into almost every room, while at night we hope the school becomes a glowing “lantern” for its community.',
          'zh-CN': '白天，我们想把日光带到几乎每个房间，晚上我们希望学校成为一个发光的“灯笼”，为它的社区',
        },
        title2: {
          'en-US': 'Ceiling Heights That Inspire',
          'zh-CN': ' 灵感的天花板高度',
        },
        description2: {
          'en-US':
            'Cathedral builders knew a thing or two about ceiling height, like how higher ones cause us to reflect and think. We must be practical, but we care about the right volume in every room.',
          'zh-CN': '\n大教堂的建造者对天花板的高度知之甚少，比如高层建筑如何让我们反思和思考。我们必须切实可行，但我们关心每个房间的正确音量。',
        },
        title3: {
          'en-US': 'Warmth',
          'zh-CN': ' 热情',
        },
        description3: {
          'en-US':
            'A school building’s ambience should embrace its students. Concrete, glass and steel alone will not achieve that. Through the use of wood and fabric we want school to feel like home.',
          'zh-CN': '学校的氛围应该包容学生。混凝土，玻璃和钢材本身并不能达到这个目的。通过使用木材和织物，我们希望学校感觉像家一样',
        },
        title4: {
          'en-US': 'Transparency',
          'zh-CN': ' 透明度',
        },
        description4: {
          'en-US':
            'Consistent with trends in most modern design, we want all that is happening to be visible. A parent and student can “see through” the school.',
          'zh-CN': '与大多数现代设计的趋势一致，我们希望所有正在发生的事情都是可见的。家长和学生可以“看穿”学校',
        },
        title5: {
          'en-US': 'A Forest In and Out',
          'zh-CN': ' 森林进出',
        },
        description5: {
          'en-US':
            'We want plantings to be plentiful and for it to be hard to discern what is inside or outside the building, a seamless connection to nature.',
          'zh-CN': '\n我们希望种植丰富，难以辨别建筑物内部或外部，与自然的无缝连接。',
        },
        title6: {
          'en-US': 'Roofs—Our Best Connection to the Sky!',
          'zh-CN': ' 屋顶 - 我们与天空的最佳联系！',
        },
        description6: {
          'en-US':
            'So let’s not waste them on air conditioning systems and elevator sheds! Make them gardens and labs and playgrounds.\n \n',
          'zh-CN': '\n所以我们不要把它们浪费在空调系统和电梯棚上！使他们花园，实验室和游乐场。',
        },
        title7: {
          'en-US': 'Materials That Wear Well or Replace Easily',
          'zh-CN': ' 材质磨损良好或易于更换',
        },
        description7: {
          'en-US':
            'Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time',
          'zh-CN': '任何家长都知道一个或两个孩子可以在短时间内在家中做什么。想象一下，2,500可以做到校舍！我们必须选择能够与儿童的自然能源共存的材料，或者在时间上可以轻易替换的材料',
        },
        title8: {
          'en-US': 'Every Faculty Member Is an Architect, Too',
          'zh-CN': ' 每个教员都是建筑师',
        },
        description8: {
          'en-US':
            'Most building design deteriorates from Day One by how the facility is used. We want to make faculty and students “trustees” of the school design. ',
          'zh-CN': '大多数建筑设计从第一天开始就由于设施的使用而恶化。我们想要让学校设计的教师和学生“受托人”。',
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
        id: '494d9Sla7eWEqQG2uuMC0I',
        type: 'Entry',
        createdAt: '2017-12-11T18:08:01.589Z',
        updatedAt: '2017-12-18T22:58:29.505Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 63,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 62,
        firstPublishedAt: '2017-12-11T18:13:16.418Z',
        publishedAt: '2017-12-18T22:58:29.505Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'List',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Campus Highlights',
        },
        title1: {
          'en-US': 'The Workshop Floor',
          'zh-CN': '车间的地板',
        },
        description1: {
          'en-US':
            'To support our students’ passions and the interdisciplinary work at the core of the Whittle School network, the entire second level of our Shenzhen campus is a dedicated “Workshop Floor.” There, students build their capacity for design thinking, bringing their ideas into reality through brainstorming, prototyping, and presenting. Among the many resources on this floor are a wood and metal shop, photography and filmmaking studios, a robotics gym, and graphic design labs.',
          'zh-CN':
            '\n为了支持我们学生的激情和以惠特尔学校网络为核心的跨学科工作，我们深圳校园的整个二层是一个专门的“工作坊”。在那里，学生们建立自己的设计思维能力，将他们的想法变成现实通过集思广益，原型设计和展示。在这个楼层的许多资源包括木材和金属商店，摄影和电影制作工作室，机器人健身房和平面设计实验室',
        },
        title2: {
          'en-US': 'Learning Commons',
          'zh-CN': ' 学习共享',
        },
        description2: {
          'en-US':
            'Classrooms are organized into “Learning Commons” organized around homerooms in the lower grades and around interdisciplinary subjects for older students. This configuration, where classrooms connect to a shared space, creates space for the students engage in large group, while also supporting interdisciplinary or experiential work that requires a larger space.',
          'zh-CN': '教室由低年级的家庭教室和大学生的跨学科课程组成“学习共享”。这种配置，教室连接到一个共享的空间，创造空间让学生从事大型团队，同时也支持需要更大空间的跨学科或体验性工作',
        },
        title3: {
          'en-US': 'Flexible Classrooms',
          'zh-CN': ' 灵活的教室',
        },
        description3: {
          'en-US':
            'Students can easily reconfigure their learning spaces to support different modes of teaching, learning and doing. Classrooms have writeable sliding panels, transforming all the walls into surfaces where students and teachers can share ideas, brainstorm and create. Transparent glass walls create strong connections between classrooms and adjacent learning commons, allowing the classroom to expand as needed, so students can work on different projects or at varying speeds.',
          'zh-CN':
            '\n学生可以轻松地重新配置他们的学习空间，以支持不同的教学，学习和做法。教室有可写的滑动面板，将所有的墙壁变成表面，学生和老师可以分享想法，集体讨论和创造。透明的玻璃墙在教室和相邻的学习公共空间之间建立了牢固的连接，使得课堂可以根据需要进行扩展，因此学生可以在不同的项目上或以不同的速度工作',
        },
        title4: {
          'en-US': 'Performance and Presentation',
          'zh-CN': ' 表演和演示',
        },
        description4: {
          'en-US':
            'Each Whittle campus is organized around the public presentation of student work and the collective expression of community, giving performance and exhibition spaces pride of place. Through sharing their work with a wider audience, students cultivate both visual and spatial communication skills. This belief in performance and public presentation comes to life throughout the building in a wide variety of formal and informal spaces ranging from pin-up boards and rehearsal rooms to black box theatres to an end-stage amphitheater. ',
          'zh-CN':
            '\n每个惠特尔校园都围绕着学生作品的公开展示和社区的集体表现，给予表演和展览空间自豪的地方。通过与更广泛的观众分享他们的工作，学生们培养视觉和空间的沟通技巧。这种对表演和公众演示的信仰在各种正式和非正式的空间中形成，从排针板和排练室到黑箱剧院，到露天剧场。',
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
        id: '2Ui5VoOSzKouuUQc2wUoEI',
        type: 'Entry',
        createdAt: '2017-12-11T18:21:12.591Z',
        updatedAt: '2017-12-18T22:58:43.116Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 66,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 65,
        firstPublishedAt: '2017-12-11T18:23:19.258Z',
        publishedAt: '2017-12-18T22:58:43.116Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Start Your Application',
          'zh-CN': ' 开始你的申请',
        },
        navDescription: {
          'en-US': 'Get started with our Inquiry Form',
          'zh-CN': ' 开始使用我们的查询表格',
        },
        slug: {
          'en-US': 'inquiry-form',
          'zh-CN': 'inquiry-form-cn',
        },
        headline: {
          'en-US': 'Start Your Application',
          'zh-CN': ' 开始你的申请',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1pSYRIOSnyUOYkQqAUkYAY',
              },
            },
          ],
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
        id: '1pSYRIOSnyUOYkQqAUkYAY',
        type: 'Entry',
        createdAt: '2017-12-11T18:21:51.488Z',
        updatedAt: '2018-01-03T20:40:28.741Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '1Obnuz1eSYvr2STtMVzdVL',
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
        version: 50,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 49,
        firstPublishedAt: '2017-12-11T18:22:27.610Z',
        publishedAt: '2018-01-03T20:40:28.741Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'openApplyIFrame',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Inquiry Form',
        },
        scriptUrl: {
          'en-US': 'https://whittledc.openapply.com/roi.js',
          'zh-CN': 'https://whittleshenzhen.openapply.com/roi.js?lang=zh-CN',
        },
        description: {
          'en-US': 'FPO: Start Your Application now!',
          'zh-CN': '\n立即启动您的应用程序',
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
        id: '4tlDqvWoRa68QW6UWcGiM6',
        type: 'Entry',
        createdAt: '2017-12-11T19:02:18.676Z',
        updatedAt: '2017-12-22T14:08:31.842Z',
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
        publishedCounter: 7,
        version: 49,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedVersion: 48,
        firstPublishedAt: '2017-12-11T19:02:46.045Z',
        publishedAt: '2017-12-22T14:08:31.842Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'SectionTitle',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Section title test',
        },
        number: {
          'en-US': 7,
        },
        title: {
          'en-US': 'Just testing section title',
          'zh-CN': '惠特尔学校和工',
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
        id: '6QKdoRL8iIcOOAC4eyCcsi',
        type: 'Entry',
        createdAt: '2017-12-14T18:04:15.645Z',
        updatedAt: '2017-12-18T22:58:44.116Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 55,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 54,
        firstPublishedAt: '2017-12-14T18:07:55.693Z',
        publishedAt: '2017-12-18T22:58:44.116Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Founder & Leadership',
          'zh-CN': '创始人和领导',
        },
        navDescription: {
          'en-US': 'At the heart of our work is the belief that schooling.',
          'zh-CN': '我们工作的核心是相信学校教育',
        },
        slug: {
          'en-US': 'founder-and-leadership',
          'zh-CN': 'founder-and-leadership-cn',
        },
        headline: {
          'en-US': 'Founder and Leadership Headline',
          'zh-CN': ' 创始人和领导标题',
        },
        subhead: {
          'en-US':
            "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
          'zh-CN': '矿石Ipsum只是印刷和排版行业的虚拟文本。 Lorem Ipsum自从16世纪以来一直是业界的标准虚拟文本，当时一台不知名的打印机拿起了一个类型的厨房，把它打成一个样板书。',
        },
        modules: {
          'en-US': [
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
                id: '5E1Ev4n9OoSo0aCGO4C8IY',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'oGF4Yu8mfACkCCUMcsGgq',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '26QiMDplFOUykAIcEWc4Ok',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2OiFBZrIE80mYOMaAoyom2',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5dmEsIRB4kOc4q8YQKISMC',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2aLyeRTLAIK8aK8cgAcEC2',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5UMFfvp4ZOooC8AkcSwwgs',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5HGowS2zmM6M2i8EaiCigG',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2q9JpQUG1aw4kAMEwGIg6G',
              },
            },
          ],
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
        id: '1F1YF3aPVqC8KmusKeOwkA',
        type: 'Entry',
        createdAt: '2017-12-14T21:17:44.435Z',
        updatedAt: '2017-12-19T21:32:04.126Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 30,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 29,
        firstPublishedAt: '2017-12-14T21:18:11.083Z',
        publishedAt: '2017-12-19T21:32:04.126Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'SectionTitle',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Required Materials (1)',
        },
        number: {
          'en-US': 1,
        },
        title: {
          'en-US': 'Required Materials',
          'zh-CN': ' 所需材料',
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
        id: '6y83BcnE08sU28KCwA68iC',
        type: 'Entry',
        createdAt: '2017-12-14T21:18:13.187Z',
        updatedAt: '2017-12-19T21:32:09.151Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 17,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 16,
        firstPublishedAt: '2017-12-14T21:18:31.239Z',
        publishedAt: '2017-12-19T21:32:09.151Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'SectionTitle',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Interview (2)',
        },
        number: {
          'en-US': 2,
        },
        title: {
          'en-US': 'Interview',
          'zh-CN': '访问',
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
        id: '2i0uO1CxdmYoiKSICiuMQE',
        type: 'Entry',
        createdAt: '2017-12-14T21:18:33.468Z',
        updatedAt: '2017-12-19T21:31:58.176Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 17,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 16,
        firstPublishedAt: '2017-12-14T21:18:50.903Z',
        publishedAt: '2017-12-19T21:31:58.176Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'SectionTitle',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Assessment (3)',
        },
        number: {
          'en-US': 3,
        },
        title: {
          'en-US': 'Assessment',
          'zh-CN': '评定',
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
        id: '2xrAdhFuhKmogU2ssYMoOU',
        type: 'Entry',
        createdAt: '2017-12-14T21:20:13.478Z',
        updatedAt: '2017-12-18T22:58:34.469Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 20,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 19,
        firstPublishedAt: '2017-12-14T21:20:44.091Z',
        publishedAt: '2017-12-18T22:58:34.469Z',
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
          'en-US': 'Application Text 2',
        },
        content: {
          'en-US':
            '\n\nBasic Information\n-\tProfile \n-\tCV\n-\tEssays\n-\tScanned ID\n-\tPortfolio\nApplication Fee\nProof of Citizenship\nBoarding Application (if applicable) \nSchool Documents\n-\tELC: None\n-\tPrimary:\n-\tSchool Report\n-\tTeacher Recommendation\n-\tMiddle & High:\n-\tSchool Report\n-\tTranscript\n-\tTeacher Recommendation\n\n',
          'zh-CN':
            '基本信息\n - 简介\n-\t简历\n - 散文\n - 扫描的ID\n - 投资组合\n报名费\n公民证明\n登机申请（如适用）\n学校文件\n -  ELC：没有\n - 主：\n-\t学校报告\n - 老师推荐\n - 中高：\n-\t学校报告\n - 成绩单\n - 老师推荐',
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
        id: '5zqo2rZAFqMyoiC2EqIGaw',
        type: 'Entry',
        createdAt: '2017-12-14T21:20:55.208Z',
        updatedAt: '2017-12-18T22:58:33.656Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 28,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 27,
        firstPublishedAt: '2017-12-14T21:21:26.759Z',
        publishedAt: '2017-12-18T22:58:33.656Z',
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
          'en-US': 'Application Text 3',
        },
        content: {
          'en-US':
            'Students will interact with our admissions team in a forum appropriate to their age-level. Early Learning applicants will engage in group play with other children; while primary, middle, and high school applicants will have a student interview. All of these interactions are accompanied by a conversation with parents in order for our team to learn as much as possible about the qualities and interests of our applicants.\n\n',
          'zh-CN':
            '学生将与我们的招生团队在适合其年龄层次的论坛上互动。早教的申请者将与其他孩子进行小组游戏;而小学，中学和高中的申请者将有一个学生面试。所有这些互动都伴随着与家长的谈话，以便我们的团队尽可能多地了解我们申请人的素质和兴趣。',
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
        id: '73XIwmccnuQeoKAAuyMaoO',
        type: 'Entry',
        createdAt: '2017-12-14T21:21:34.180Z',
        updatedAt: '2017-12-18T22:58:33.460Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
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
        version: 15,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 14,
        firstPublishedAt: '2017-12-14T21:22:07.615Z',
        publishedAt: '2017-12-18T22:58:33.460Z',
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
          'en-US': 'Application Text 4',
        },
        content: {
          'en-US':
            'We also require our applicants to undergo testing relevant to their age group in order to assess how well their cognitive backgrounds fit the Whittle educational model.\n\nTo assess cognitive ability, students will take the following tests:\n-\tELC: WPPSI-IV, DP-3\n-\tPrimary, Middle, & High School: WISC-V\n\nStudents also have the option to submit results from achievement testing.\n-\tELC: ERB test (if necessary)\n-\tPrimary, Middle, & High School: ISEE\n\n\n\n',
          'zh-CN':
            '\n我们还要求我们的申请人接受与他们年龄组相关的测试，以评估他们的认知背景如何符合Whittle教育模式。\n\n为了评估认知能力，学生将进行以下测试：\n -  ELC：WPPSI-IV，DP-3\n - 小学，中学和高中：WISC-V\n\n学生也可以选择提交成绩测试结果。\n -  ELC：ERB测试（如有必要）\n - 小学，中学和高中：ISEE',
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
        id: '6pHUXBqJ2wu8ycIwwEE6gc',
        type: 'Entry',
        createdAt: '2017-12-14T21:25:54.713Z',
        updatedAt: '2017-12-18T22:58:34.494Z',
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
        version: 48,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 47,
        firstPublishedAt: '2017-12-14T21:28:07.438Z',
        publishedAt: '2017-12-18T22:58:34.494Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'datedPost',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'DatedPost (press releases)',
        },
        date: {
          'en-US': '2017-12-28',
        },
        title: {
          'en-US': "Chris Whittle's Plan to Make a World-class Private School",
        },
        description: {
          'en-US':
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. __Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia__, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, *discovered the undoubtable source*. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, [very popular during the Renaissance](https://www.google.com). The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
          'zh-CN':
            '他数元所片定采电厂，__都半出声此期体题对__，度否助片展豆成。 数联点如重离住，题日办满青，活1步前务。 平格从门易听指运情取话，使构这平象济话据断，她离D-录原研力收。 用目界任张各交合离目，史后集命建影多习得，影反3此身Y与很。 *世省别合及八期形*，空过具直建经热，材候村治C。 在规两她效毛走本现风，[却道决眼教变位况](https://www.youtube.com)，我花-性委省必。',
        },
        linkInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '1Yrp6KApQgkIOqwAwAi6Ey',
            },
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
        id: '72Oj0ambMAa2yGoIQIsGOo',
        type: 'Entry',
        createdAt: '2017-12-14T21:31:24.721Z',
        updatedAt: '2017-12-18T22:58:34.515Z',
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
        version: 60,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 59,
        firstPublishedAt: '2017-12-14T21:32:04.050Z',
        publishedAt: '2017-12-18T22:58:34.515Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'datedPost',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Dated post with source (press releases)',
        },
        date: {
          'en-US': '2017-06-05',
        },
        title: {
          'en-US': 'Test title',
        },
        source: {
          'en-US': 'The New York Times',
        },
        description: {
          'en-US': 'Wow, what a short description!',
        },
        linkExternal: {
          'en-US': 'http://www.youtube.com',
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
        updatedAt: '2018-01-03T04:43:58.169Z',
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
        version: 111,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 110,
        firstPublishedAt: '2017-12-15T20:45:38.042Z',
        publishedAt: '2018-01-03T04:43:58.169Z',
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
        item1VideoEmbedCode: {
          'en-US':
            '<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=s0357lcbv3c&tiny=0&auto=0" allowfullscreen></iframe>',
        },
        item1VideoDuration: {
          'en-US': '1:23',
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
        item2VideoEmbedCode: {
          'en-US':
            '<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=s0357lcbv3c&tiny=0&auto=0" allowfullscreen></iframe>',
        },
        item2VideoDuration: {
          'en-US': '12:34',
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
        item3VideoEmbedCode: {
          'en-US':
            '<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=s0357lcbv3c&tiny=0&auto=0" allowfullscreen></iframe>',
        },
        item3VideoDuration: {
          'en-US': '0:45',
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
        item4VideoEmbedCode: {
          'en-US':
            '<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=s0357lcbv3c&tiny=0&auto=0" allowfullscreen></iframe>',
        },
        item4VideoDuration: {
          'en-US': '1:00:40',
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
        item5VideoEmbedCode: {
          'en-US':
            '<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=s0357lcbv3c&tiny=0&auto=0" allowfullscreen></iframe>',
        },
        item5VideoDuration: {
          'en-US': '4:67',
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
        item6VideoEmbedCode: {
          'en-US':
            '<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=s0357lcbv3c&tiny=0&auto=0" allowfullscreen></iframe>',
        },
        item6VideoDuration: {
          'en-US': '7:89',
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
        updatedAt: '2018-01-02T23:36:10.934Z',
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
        publishedCounter: 9,
        version: 97,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 96,
        firstPublishedAt: '2017-12-15T21:09:59.392Z',
        publishedAt: '2018-01-02T23:36:10.934Z',
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
        item1VideoEmbedCode: {
          'en-US':
            '<iframe src="https://player.vimeo.com/video/248996255?color=ffffff&title=0&byline=0&portrait=0&badge=0" width="640" height="640" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/248996255">INFINITE WORLDS</a> from <a href="https://vimeo.com/philiplueck">philiplueck</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
          'zh-CN':
            '<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=s0357lcbv3c&tiny=0&auto=0" allowfullscreen></iframe>',
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
        item2VideoEmbedCode: {
          'en-US':
            '<iframe src="https://player.vimeo.com/video/243740445" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/243740445">Integrated learning experience</a> from <a href="https://vimeo.com/user74207196">Mike Stakias</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
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
        item4Title: {
          'en-US': 'Test with only vimeo',
        },
        item4Description: {
          'en-US': 'Hello!',
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
        item4VideoEmbedCode: {
          'en-US':
            '<iframe src="https://player.vimeo.com/video/243740445" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/243740445">Integrated learning experience</a> from <a href="https://vimeo.com/user74207196">Mike Stakias</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
        },
        item5Title: {
          'en-US': 'Test with only tencent',
        },
        item5Description: {
          'en-US': 'hello',
        },
        item5Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5kLJqDZ9vyIaOucos4KCS0',
            },
          },
        },
        item5VideoEmbedCode: {
          'en-US':
            '<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=s0357lcbv3c&tiny=0&auto=0" allowfullscreen></iframe>',
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
        id: '2ocDIH03OQkyuSUs4QIwak',
        type: 'Entry',
        createdAt: '2017-12-19T20:26:12.998Z',
        updatedAt: '2018-01-04T21:28:03.661Z',
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
        publishedCounter: 13,
        version: 237,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 236,
        firstPublishedAt: '2017-12-19T20:29:09.507Z',
        publishedAt: '2018-01-04T21:28:03.661Z',
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
          'en-US': 'Dummy page',
        },
        seoMetaDescription: {
          'en-US':
            "NOTICE: I am a dummy page to fix an issue Gatsby (one of our libraries) has with empty fields. For this reason it's necessary to create a version of each content type with all the fields filled out. If you ever see content like this, please ignore it. We will add provisions in the code to prevent this content from ever showing up for users.",
        },
        navTitle: {
          'en-US': 'Dummy page',
        },
        overviewNavTitle: {
          'en-US': 'Dummy page',
        },
        navDescription: {
          'en-US': 'Dummy page',
        },
        slug: {
          'en-US': 'dummy-page-DONT-DELETE',
          'zh-CN': 'dummy-page-DONT-DELETE',
        },
        subcategories: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2KxFtXkJdm2MUa4q6qQSCS',
              },
            },
          ],
        },
        headline: {
          'en-US': 'Dummy page',
        },
        subhead: {
          'en-US': 'Dummy page',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        mainImageAlt: {
          'en-US': 'Dummy page',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3EdCqRbdna8MCKKuOesEem',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3yjj9axPRem6uYISQyUYwK',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1MjT1Gr5UoayK2EyMqSYwo',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '292SwwFVYw48QuuUg44IGI',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2rTpnYLLbS4EsGQgqmQea4',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2S9fl5C87ScyiEamei2IU2',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'aKCFRDQqic4UeomgawC6y',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6TDXyB8vE4OgcmWSc60aQi',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2TtdYMe0XeiUeSmG82ku8I',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3JdwZ3ZjpKq00Uo22OC0E',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1Ic2ioOtyIoQGwSaCOSCGm',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'u1DZBpWXIcCCA0yQuYO6Y',
              },
            },
          ],
        },
        hasShareButtons: {
          'en-US': true,
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
        id: '2KxFtXkJdm2MUa4q6qQSCS',
        type: 'Entry',
        createdAt: '2017-12-19T20:30:12.011Z',
        updatedAt: '2018-01-04T21:28:22.051Z',
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
        version: 42,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 41,
        firstPublishedAt: '2017-12-19T20:32:07.118Z',
        publishedAt: '2018-01-04T21:28:22.051Z',
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
          'en-US': 'Article',
        },
        seoMetaTitle: {
          'en-US': 'Dummy page',
        },
        seoMetaDescription: {
          'en-US':
            "NOTICE: I am a dummy page to fix an issue Gatsby (one of our libraries) has with empty fields. For this reason it's necessary to create a version of each content type with all the fields filled out. If you ever see content like this, please ignore it. We will add provisions in the code to prevent this content from ever showing up for users.",
        },
        slug: {
          'en-US': 'dummy-page-ARTICLE-DONT-DELETE',
          'zh-CN': 'dummy-page-ARTICLE-DONT-DELETE',
        },
        headline: {
          'en-US': 'Dummy page',
          'zh-CN': 'Dummy page',
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
        id: '3EdCqRbdna8MCKKuOesEem',
        type: 'Entry',
        createdAt: '2017-12-19T20:32:46.909Z',
        updatedAt: '2017-12-19T20:34:26.926Z',
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
        version: 18,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 17,
        firstPublishedAt: '2017-12-19T20:33:00.816Z',
        publishedAt: '2017-12-19T20:34:26.926Z',
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
          'en-US': "Dummy body text DON'T DELETE",
        },
        content: {
          'en-US': 'Dummy body text',
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
        id: '3yjj9axPRem6uYISQyUYwK',
        type: 'Entry',
        createdAt: '2017-12-19T20:33:43.952Z',
        updatedAt: '2017-12-19T20:34:24.333Z',
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
        version: 26,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 25,
        firstPublishedAt: '2017-12-19T20:34:24.333Z',
        publishedAt: '2017-12-19T20:34:24.333Z',
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
          'en-US': "Dummy inline image DON'T DELETE",
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        alt: {
          'en-US': 'Dummy asset',
        },
        caption: {
          'en-US': 'Dummy caption',
        },
        shape: {
          'en-US': 'Rectangle',
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
        id: '2rTpnYLLbS4EsGQgqmQea4',
        type: 'Entry',
        createdAt: '2017-12-19T20:34:32.318Z',
        updatedAt: '2017-12-19T20:35:27.633Z',
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
        version: 89,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 88,
        firstPublishedAt: '2017-12-19T20:35:27.633Z',
        publishedAt: '2017-12-19T20:35:27.633Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'List',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy list DON'T DELETE",
        },
        title1: {
          'en-US': 'Item 1',
        },
        description1: {
          'en-US': 'Description 1',
        },
        title2: {
          'en-US': 'Item 2',
        },
        description2: {
          'en-US': 'Description 2',
        },
        title3: {
          'en-US': 'Item 3',
        },
        description3: {
          'en-US': 'Description 3',
        },
        title4: {
          'en-US': 'Item 4',
        },
        description4: {
          'en-US': 'Description 4',
        },
        title5: {
          'en-US': 'Item 5',
        },
        description5: {
          'en-US': 'Description 5',
        },
        title6: {
          'en-US': 'Item 6',
        },
        description6: {
          'en-US': 'Description 6',
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
        id: '2S9fl5C87ScyiEamei2IU2',
        type: 'Entry',
        createdAt: '2017-12-19T20:35:37.283Z',
        updatedAt: '2017-12-19T20:36:07.492Z',
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
        version: 28,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 27,
        firstPublishedAt: '2017-12-19T20:36:07.492Z',
        publishedAt: '2017-12-19T20:36:07.492Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'openApplyIFrame',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy iframe DON'T DELETE",
        },
        scriptUrl: {
          'en-US': 'https://whittledc.openapply.com/roi.js',
        },
        description: {
          'en-US': 'Dummy description',
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
        id: 'aKCFRDQqic4UeomgawC6y',
        type: 'Entry',
        createdAt: '2017-12-19T20:36:16.691Z',
        updatedAt: '2017-12-19T20:37:04.879Z',
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
        version: 50,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 49,
        firstPublishedAt: '2017-12-19T20:37:04.879Z',
        publishedAt: '2017-12-19T20:37:04.879Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'datedPost',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy post DON'T DELETE",
        },
        date: {
          'en-US': '2017-12-12',
        },
        title: {
          'en-US': 'Dummy title',
        },
        source: {
          'en-US': 'Dummy source',
        },
        description: {
          'en-US': 'Dummy description',
        },
        linkInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2KxFtXkJdm2MUa4q6qQSCS',
            },
          },
        },
        linkExternal: {
          'en-US': 'http://www.google.com',
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
        id: '6TDXyB8vE4OgcmWSc60aQi',
        type: 'Entry',
        createdAt: '2017-12-19T20:37:10.980Z',
        updatedAt: '2017-12-19T20:37:35.555Z',
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
        version: 22,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 21,
        firstPublishedAt: '2017-12-19T20:37:35.555Z',
        publishedAt: '2017-12-19T20:37:35.555Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'quote',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy quote DON'T DELETE",
        },
        quoteType: {
          'en-US': 'block-quote',
        },
        content: {
          'en-US': 'Dummy quote',
        },
        source: {
          'en-US': 'Dummy source',
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
        id: '2TtdYMe0XeiUeSmG82ku8I',
        type: 'Entry',
        createdAt: '2017-12-19T20:37:38.833Z',
        updatedAt: '2017-12-19T21:31:46.680Z',
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
        version: 25,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 24,
        firstPublishedAt: '2017-12-19T20:38:00.167Z',
        publishedAt: '2017-12-19T21:31:46.680Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'SectionTitle',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy section title DON'T DELETE",
        },
        number: {
          'en-US': 1,
        },
        title: {
          'en-US': 'Dummy title',
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
        id: '3JdwZ3ZjpKq00Uo22OC0E',
        type: 'Entry',
        createdAt: '2017-12-19T20:38:22.894Z',
        updatedAt: '2017-12-19T20:40:44.683Z',
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
        version: 18,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 17,
        firstPublishedAt: '2017-12-19T20:40:44.683Z',
        publishedAt: '2017-12-19T20:40:44.683Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'slideshowCarousel',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy carousel DON'T DELETE",
        },
        slides: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3yjj9axPRem6uYISQyUYwK',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1MjT1Gr5UoayK2EyMqSYwo',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '292SwwFVYw48QuuUg44IGI',
              },
            },
          ],
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
        id: '1MjT1Gr5UoayK2EyMqSYwo',
        type: 'Entry',
        createdAt: '2017-12-19T20:39:30.139Z',
        updatedAt: '2017-12-19T20:39:49.489Z',
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
        version: 22,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 21,
        firstPublishedAt: '2017-12-19T20:39:49.489Z',
        publishedAt: '2017-12-19T20:39:49.489Z',
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
          'en-US': "Dummy inline image 2 - DON'T DELETE",
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        alt: {
          'en-US': 'Dummy alt',
        },
        shape: {
          'en-US': 'Rectangle',
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
        id: '292SwwFVYw48QuuUg44IGI',
        type: 'Entry',
        createdAt: '2017-12-19T20:39:53.395Z',
        updatedAt: '2017-12-19T20:40:32.190Z',
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
        version: 29,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 28,
        firstPublishedAt: '2017-12-19T20:40:32.190Z',
        publishedAt: '2017-12-19T20:40:32.190Z',
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
          'en-US': "Dummy inline image 3 - DON'T DELETE",
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        alt: {
          'en-US': 'Dummy alt',
        },
        shape: {
          'en-US': 'Rectangle',
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
        id: '1Ic2ioOtyIoQGwSaCOSCGm',
        type: 'Entry',
        createdAt: '2017-12-19T20:40:59.489Z',
        updatedAt: '2017-12-19T20:41:41.119Z',
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
        version: 46,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 45,
        firstPublishedAt: '2017-12-19T20:41:35.380Z',
        publishedAt: '2017-12-19T20:41:41.119Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'threeUpBreaker',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy breaker DON'T DELETE",
        },
        title1: {
          'en-US': 'Dummy title',
        },
        content1: {
          'en-US': 'Description 1',
        },
        title2: {
          'en-US': 'Title 2',
        },
        content2: {
          'en-US': 'Description 2',
        },
        title3: {
          'en-US': 'Title 3',
        },
        content3: {
          'en-US': 'Description 3',
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
        id: 'u1DZBpWXIcCCA0yQuYO6Y',
        type: 'Entry',
        createdAt: '2017-12-19T20:41:47.672Z',
        updatedAt: '2017-12-19T20:43:46.441Z',
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
        version: 129,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 128,
        firstPublishedAt: '2017-12-19T20:43:46.441Z',
        publishedAt: '2017-12-19T20:43:46.441Z',
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
          'en-US': "Dummy thumbnail list DON'T DELETE",
        },
        title: {
          'en-US': 'Dummy title',
        },
        item1Title: {
          'en-US': 'Title 1',
        },
        item1Description: {
          'en-US': 'Description 1',
          'zh-CN': 'Description 2',
        },
        item1Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        item1ImageAlt: {
          'en-US': 'Alt 1',
        },
        item2Title: {
          'en-US': 'Title 2',
        },
        item2Description: {
          'en-US': 'Description 2',
        },
        item2Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        item2ImageAlt: {
          'en-US': 'Alt 2',
        },
        item3Title: {
          'en-US': 'Title 3',
        },
        item3Description: {
          'en-US': 'Description 3',
        },
        item3Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        item3ImageAlt: {
          'en-US': 'Alt 3',
        },
        item4Title: {
          'en-US': 'Title 4',
        },
        item4Description: {
          'en-US': 'Description 4',
        },
        item4Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        item4ImageAlt: {
          'en-US': 'Alt 4',
        },
        item5Title: {
          'en-US': 'Title 5',
        },
        item5Description: {
          'en-US': 'Description 5',
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
          'en-US': 'Alt 5',
        },
        item6Title: {
          'en-US': 'Title 6',
        },
        item6Description: {
          'en-US': 'Description 6',
        },
        item6Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        item6ImageAlt: {
          'en-US': 'Alt 6',
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
        id: '1Lfo7ysSLuOA6OmmuyqgEG',
        type: 'Entry',
        createdAt: '2017-12-19T21:03:52.727Z',
        updatedAt: '2018-01-04T15:14:19.206Z',
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
        version: 15,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 8,
        firstPublishedAt: '2017-12-19T21:04:04.161Z',
        publishedAt: '2017-12-19T21:21:07.791Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'footer',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Global Site Footer',
        },
        primaryLink1: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: 'aJJ6pdagmcgKkuk4I08Wa',
            },
          },
        },
        utilityLink1: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '1npU6zv1iI8wa4uaEomO0Q',
            },
          },
        },
        utilityLink2: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2DzSHtJOEco4iEsykoK4ey',
            },
          },
        },
        utilityLink2Children: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1qw6YpbEdGisSMkCgcs284',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5f2zIxFIWsYYOecAeiUIMI',
              },
            },
          ],
        },
        primaryLink2: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '117SvQU8eEoGcqUAMA6YIE',
            },
          },
        },
        primaryLink2Children: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2ojDnuxa2UEaA0G4G88WuS',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '24P1PZxsgQqys0uQu8m2CA',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6rf0TGLqhymCIo2I2QIaKy',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5RSD4orqZUw2OeIswEe46w',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '58uGrKt7huC6GYwecWaII8',
              },
            },
          ],
        },
        primaryLink3: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '1XOV0USkCAOKCgoCgg0gIY',
            },
          },
        },
        primaryLink3Children: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6bMZwc25eoSSIuW4IcSyWc',
              },
            },
          ],
        },
        primaryLink4: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '1wRtEgj1CIoUMeKISKY4wy',
            },
          },
        },
        primaryLink4Children: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '43etIoJ6JaYUQeQ002yYKe',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1jmFyTQOnm0UyC4O6oE4q8',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '31vhSeL5lKWaEum22sOUOE',
              },
            },
          ],
        },
        primaryLink5: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2KkmBlxucEygMuoe8KuSye',
            },
          },
        },
        primaryLink5Children: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1OyOSN3rG8IaY8cMogAe0u',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4UkpQfYUdOgOaYs0a6Gi0M',
              },
            },
          ],
        },
        primaryLink6: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: 'in4Qc3TAOWakU6kgW0aYI',
            },
          },
        },
        primaryLink6Children: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5cpo7ptLMIs68GqaCKsuek',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4q1337b2g0YyIEuKEuEmUO',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2eMCXJdhug2WI2YOowcyaY',
              },
            },
          ],
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
        id: '55NFLBG4diiWOkEkigMaqi',
        type: 'Entry',
        createdAt: '2017-12-19T21:22:22.755Z',
        updatedAt: '2018-01-04T02:31:42.457Z',
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
        version: 12,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 11,
        firstPublishedAt: '2017-12-19T21:23:07.934Z',
        publishedAt: '2018-01-04T02:31:42.457Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'globalSettings',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Global Site Settings',
        },
        fabText: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '2GcxvHO8mkg48Q2QQWsCOe',
            },
          },
        },
        fabLinkInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2Ui5VoOSzKouuUQc2wUoEI',
            },
          },
        },
        fabLinkExternal: {
          'en-US': 'http://www.google.com',
        },
        contentPageShareIcons: {
          'en-US': ['Facebook', 'Twitter'],
          'zh-CN': ['WeChat', 'Weibo'],
        },
        footerShareIcons: {
          'en-US': ['Facebook', 'Twitter', 'Weibo', 'WeChat'],
          'zh-CN': ['Facebook', 'Twitter', 'Weibo', 'WeChat'],
        },
        facebookUrl: {
          'en-US': 'https://www.facebook.com/',
        },
        twitterUrl: {
          'en-US': 'https://twitter.com/',
        },
        weiboUrl: {
          'en-US': 'https://weibo.com/',
        },
        weChatUrl: {
          'en-US': 'https://www.wechat.com',
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
        id: '5VcR3PkjIIE2eay4KkoWM0',
        type: 'Entry',
        createdAt: '2017-12-19T21:24:46.606Z',
        updatedAt: '2018-01-04T16:13:05.378Z',
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
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedCounter: 11,
        version: 51,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6214ankndWlLU2Ir99aaKG',
          },
        },
        publishedVersion: 50,
        firstPublishedAt: '2017-12-19T21:25:42.721Z',
        publishedAt: '2018-01-04T16:13:05.378Z',
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
            teams: {
              heroLinkText: 'Learn more',
              teamLinkText: 'See all',
              ratioDividerText: 'Out of every',
            },
            video: {
              play: 'Play video',
              pause: 'Pause video',
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
              menu: 'Menu',
              skip: 'Skip',
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
            teams: {
              heroLinkText: '学到更多',
              teamLinkText: '查看全部',
              ratioDividerText: '每一个',
            },
            video: {
              play: '含点浮',
              pause: '含点浮',
            },
            events: {
              register: '含点浮',
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
              skip: '跳跃',
              close: '人人',
              learnMore: '学到更多',
              schoolName: '含点浮',
              mainAriaLabel: '且算品',
            },
            carousel: {
              nextAriaLabel: '東動',
              prevAriaLabel: '含点浮',
              fullScreenAriaLabel: '人人',
            },
            dateIntervals: {
              days: '九月',
              hours: '一月',
              weeks: '十月',
              minutes: '月',
            },
            recirculation: {
              next: '含点浮',
              previous: '且算品',
            },
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
        id: '1i5JEYe83yoKmMy02Iu2w4',
        type: 'Entry',
        createdAt: '2017-12-19T21:25:49.547Z',
        updatedAt: '2017-12-20T01:30:40.071Z',
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
        version: 4,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 3,
        firstPublishedAt: '2017-12-19T21:27:30.097Z',
        publishedAt: '2017-12-20T01:30:40.071Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'header',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Global Site Header',
        },
        contentPages: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1y0BVrygl2Mo0iiw4Ym2eQ',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4lqE1xi5ZuQ4eEQ8IWqSgk',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5UaVDzy1m8YEA88eeuGWYQ',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3WgEJyFzNKs0eGeyakgIIo',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'nCr3eS7rJ6wmQsMgO8aSe',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'Jdv3OVjyy28GAuwqCeQsa',
              },
            },
          ],
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
        id: '2AHm3MCe0kW6EYkkAIoQU2',
        type: 'Entry',
        createdAt: '2017-12-19T21:26:18.132Z',
        updatedAt: '2018-01-04T21:27:46.680Z',
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
        version: 55,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 54,
        firstPublishedAt: '2017-12-19T21:27:13.925Z',
        publishedAt: '2018-01-04T21:27:46.680Z',
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
          'en-US': 'Article',
        },
        seoMetaTitle: {
          'en-US': 'Dummy article 2',
        },
        seoMetaDescription: {
          'en-US':
            "NOTICE: I am a dummy page to fix an issue Gatsby (one of our libraries) has with empty fields. For this reason it's necessary to create a version of each content type with all the fields filled out. If you ever see content like this, please ignore it. We will add provisions in the code to prevent this content from ever showing up for users.",
        },
        slug: {
          'en-US': 'dummy-page-article-2-DONT-DELETE',
          'zh-CN': 'dummy-page-article-2-DONT-DELETE',
        },
        headline: {
          'en-US': 'Dummy article 2',
          'zh-CN': 'Dummy article 2',
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
        id: '2TsufJpuekEgMaycuoMcae',
        type: 'Entry',
        createdAt: '2017-12-19T21:28:36.063Z',
        updatedAt: '2018-01-04T17:17:38.700Z',
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
        publishedCounter: 13,
        version: 29,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 28,
        firstPublishedAt: '2017-12-19T21:29:14.961Z',
        publishedAt: '2018-01-04T17:17:38.700Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'homePage',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Home',
        },
        seoMetaTitle: {
          'en-US': 'Global Education in Shenzhen',
        },
        headline: {
          'en-US': 'The First  Global School in _Shenzhen_',
          'zh-CN': ' 深圳第一家全球学校',
        },
        hero: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '342IF0pi3YMiukWEoCeUMK',
            },
          },
        },
        schoolIntroTitle: {
          'en-US':
            'Imagine a network of schools created by an international consortium of educators, architects, artists and technologists.',
        },
        campusModule: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '10VV9L42x8W8K4o4cSUY88',
            },
          },
          'zh-CN': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '10VV9L42x8W8K4o4cSUY88',
            },
          },
        },
        eventList: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2ayEuX6PDOyYCUsKq2WCoq',
            },
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
        id: '3FpfKBbJ3auM4wQ2YEUG2I',
        type: 'Entry',
        createdAt: '2017-12-21T20:12:42.991Z',
        updatedAt: '2017-12-21T20:14:39.647Z',
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
        version: 35,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 34,
        firstPublishedAt: '2017-12-21T20:14:39.647Z',
        publishedAt: '2017-12-21T20:14:39.647Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'inlineVideo',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Tiger video (leadership page)',
        },
        videoEmbedCode: {
          'en-US':
            '<iframe src="https://player.vimeo.com/video/243740445" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
          'zh-CN':
            '<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=s0357lcbv3c&tiny=0&auto=0" allowfullscreen></iframe>',
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'hxEfHf39jGMMEQ8KE8Y8g',
            },
          },
        },
        alt: {
          'en-US': 'Tiger video',
        },
        caption: {
          'en-US': 'Wow, what a tiger!',
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
        id: '2K9Fw9p8IM0eGaY6QUm4Uk',
        type: 'Entry',
        createdAt: '2017-12-21T20:14:51.502Z',
        updatedAt: '2018-01-03T23:09:27.738Z',
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
        version: 13,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 8,
        firstPublishedAt: '2017-12-21T20:15:18.010Z',
        publishedAt: '2017-12-21T20:15:25.971Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'inlineVideo',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Tiger video- no cover photo (leadership page)',
        },
        videoEmbedCode: {
          'en-US':
            '<iframe src="https://player.vimeo.com/video/243740445?color=d9542b&byline=0&portrait=0" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/243740445">Integrated learning experience</a> from <a href="https://vimeo.com/user74207196">Mike Stakias</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
          'zh-CN':
            '<iframe frameborder="0" width="640" height="498" src="https://v.qq.com/iframe/player.html?vid=b0021u5lxcl&tiny=0&auto=0" allowfullscreen></iframe>',
        },
        alt: {
          'en-US': 'Tiger video',
        },
        caption: {
          'en-US': 'Wow, what a tiger!',
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
        id: '10VV9L42x8W8K4o4cSUY88',
        type: 'Entry',
        createdAt: '2017-12-22T13:32:32.572Z',
        updatedAt: '2018-01-04T21:26:54.428Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6Nei44MnEAd8PpKPZZHeIG',
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
        version: 57,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 56,
        firstPublishedAt: '2017-12-22T13:43:31.964Z',
        publishedAt: '2018-01-04T21:26:54.428Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'campuses',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy campuses - DON'T DELETE",
        },
        sectionTitle: {
          'en-US': 'Campuses.',
          'zh-CN': '校 园 。',
        },
        image: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        imageAlt: {
          'en-US': 'Shenzhen campus',
          'zh-CN': 'Shenzhen campus',
        },
        architectImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        architectName: {
          'en-US': 'Renzo Piano',
          'zh-CN': 'Renzo Piano',
        },
        architectQuote: {
          'en-US': 'Cursus magna, vel scelerisque nisl consectetur et.',
          'zh-CN': '“我们学校的屋顶是一个神奇的地方 - 一个自由和发现的地方。 它有一个“森林”，你可以在晚上看到太阳和行星和星星。 这是一个自由的地方，一个孩子可以仰望和梦想。“',
        },
        description: {
          'en-US':
            'In the fall of 2020, our first four campuses will open in China, the U.S., the Middle East and Asia, with the intended cities being Shenzhen, Washington, D.C., Dubai and Singapore. Each 600,000-square-foot campus designed by Renzo Piano Building Workshop will serve 2,500 students ages three to 18, with about \n160 per grade.  ',
          'zh-CN':
            '在2020年秋天，我们的前四个校区将在中国，美国，中东和亚洲开放，目标城市是深圳，华盛顿特区，迪拜和新加坡。 由Renzo Piano建筑研讨会设计的每个60万平方英尺的校园将为3至18岁的2500名学生提供服务，其中约\n每年160份',
        },
        linkTitle: {
          'en-US': 'Explore the campuses',
          'zh-CN': '探索校园',
        },
        linkDestination: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2ocDIH03OQkyuSUs4QIwak',
            },
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
        id: '2ayEuX6PDOyYCUsKq2WCoq',
        type: 'Entry',
        createdAt: '2017-12-22T17:55:00.020Z',
        updatedAt: '2018-01-04T21:18:49.807Z',
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
        publishedCounter: 4,
        version: 180,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 179,
        firstPublishedAt: '2017-12-22T17:57:12.441Z',
        publishedAt: '2018-01-04T21:18:49.807Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'eventList',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Test list',
        },
        sectionTitle: {
          'en-US': 'Workshops.',
          'zh-CN': '解如何解',
        },
        cityName: {
          'en-US': 'Shenzhen',
          'zh-CN': '解如何',
        },
        introText: {
          'en-US':
            'Identifying and understanding the key differences between schools is an essential part of that decision making experience.',
          'zh-CN': '仔细遵守这些主题将导致预期的结果。 如果一所学校必须了解如何帮助学生实现这',
        },
        event1Date: {
          'en-US': '2017-12-30',
        },
        event1TitleLine1: {
          'en-US': 'PYP Workshop',
          'zh-CN': '校知道',
        },
        event1TitleLine2: {
          'en-US': '(Ages 3-5)',
          'zh-CN': '(点是 3-5)',
        },
        event1Location: {
          'en-US': 'Shenzhen Civic Center',
          'zh-CN': '点是学校知道',
        },
        event1Description: {
          'en-US': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
          'zh-CN': '点是学校知道如何提供这些成果',
        },
        event1RegistrationLink: {
          'en-US': 'http://www.google.com',
        },
        event2Date: {
          'en-US': '2018-01-11',
        },
        event2TitleLine1: {
          'en-US': 'Test2',
        },
        event2TitleLine2: {
          'en-US': 'Ages (test-test)',
        },
        event2Location: {
          'en-US': 'Test2',
        },
        event2Description: {
          'en-US': 'Test2',
        },
        event2RegistrationLink: {
          'en-US': 'http://www.youtube.com',
        },
        event3Date: {
          'en-US': '2018-01-17',
        },
        event3TitleLine1: {
          'en-US': 'Test3',
        },
        event3TitleLine2: {
          'en-US': 'Ages 3-3',
        },
        event3Location: {
          'en-US': 'Test3',
        },
        event3Description: {
          'en-US': 'Test 3',
          'zh-CN': 'Test 3',
        },
        event3RegistrationLink: {
          'en-US': 'http://www.yahoo.com',
        },
        event4Date: {
          'en-US': '2018-01-19',
        },
        event4TitleLine1: {
          'en-US': 'Test4',
        },
        event4Location: {
          'en-US': 'test4',
        },
        event4Description: {
          'en-US': 'test4',
        },
        event4RegistrationLink: {
          'en-US': 'http://www.bing.com',
        },
        event5Date: {
          'en-US': '2018-01-24',
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
        id: '5DLtQxj8QgS2is0O6WMAmg',
        type: 'Entry',
        createdAt: '2018-01-02T20:41:50.919Z',
        updatedAt: '2018-01-02T22:22:55.114Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 4,
        version: 98,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 96,
        firstPublishedAt: '2018-01-02T20:51:00.495Z',
        publishedAt: '2018-01-02T22:18:40.032Z',
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
        navTitle: {
          'en-US': 'Education Program',
          'zh-CN': '教育计划',
        },
        overviewNavTitle: {
          'en-US': 'Overview',
          'zh-CN': '概观',
        },
        navDescription: {
          'en-US': 'At the heart of our work is the belief that schooling',
          'zh-CN': '我们工作的核心是相信学校教育',
        },
        slug: {
          'en-US': 'education-program-qa',
          'zh-CN': 'education-program-qa-cn',
        },
        subcategories: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4IaGM8hu80YwSCCkuIgIko',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '31SzvkO9CgKSga04W4cUAU',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1UKPiV5sEAqGMywYgckYa8',
              },
            },
          ],
        },
        headline: {
          'en-US': 'Excellence in Education',
          'zh-CN': '致力于卓越的教育',
        },
        subhead: {
          'en-US':
            'Imagine the first global school, created by an international consortium of educators, architects, artists, technologists and experts in law, real estate, recruitment and more.',
          'zh-CN': '想象一下，由国际教育家，建筑师，艺术家，技术专家和法律专家，房地产，招聘等等组成的第一所全球学校。',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'ul4XFgkBtAUYY2Q8k0A0I',
            },
          },
        },
        mainImageAlt: {
          'en-US': 'building',
          'zh-CN': '建造',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '51iIWixhuUEukuWUcowemW',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2FNbIrvZ1eOOkisS4W6s2o',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4JOAcxplVCwgcieY4oqoiS',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2fSUh7wluU2UIYMyMCWwE2',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '51iIWixhuUEukuWUcowemW',
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
        id: '51iIWixhuUEukuWUcowemW',
        type: 'Entry',
        createdAt: '2018-01-02T20:54:29.158Z',
        updatedAt: '2018-01-02T20:55:59.667Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 15,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 14,
        firstPublishedAt: '2018-01-02T20:55:59.667Z',
        publishedAt: '2018-01-02T20:55:59.667Z',
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
          'en-US': 'Body Text - QA 1',
        },
        content: {
          'en-US':
            'Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and works to make social responsibility much more than its scholarship program.',
          'zh-CN':
            '对我们的工作的赞赏是一个新的教育规范的出现，这在很大程度上要归功于那些已经走在我们前面的那么多变革推动者的困难和开创性的工作。我们站在他们的肩上。他们教导我们，一所现代化的学校就像学习教学一样，知道一个人如何学习会比什么学到更多;希望能够实现步调一致的全民教育的终结;了解到学生的情感发展也必须给予时间;认为设施的实际设计本身就是一个教训;相信一个精心设计的学校系统将超越单一;利用我们新的数字时代的马匹;赞赏教育不再受地方或国家管辖范围的约束;努力履行社会责任远超过奖学金计划。',
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
        id: '2FNbIrvZ1eOOkisS4W6s2o',
        type: 'Entry',
        createdAt: '2018-01-02T20:56:58.948Z',
        updatedAt: '2018-01-02T20:59:04.407Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 32,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 31,
        firstPublishedAt: '2018-01-02T20:59:04.407Z',
        publishedAt: '2018-01-02T20:59:04.407Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'quote',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Pull Quote with Source - QA 1',
        },
        quoteType: {
          'en-US': 'pull-quote',
        },
        content: {
          'en-US':
            'If a school doesn’t measure the progress of every child on multiple dimensions, then its mission statement is nothing more than pretty words.',
          'zh-CN': '\n如果一个学校不能从多个方面衡量每一个孩子的进步，那么它的使命就只不过是漂亮的话语而已。',
        },
        source: {
          'en-US': 'Chris Whittle',
          'zh-CN': 'Chris Whittle',
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
        id: '4JOAcxplVCwgcieY4oqoiS',
        type: 'Entry',
        createdAt: '2018-01-02T21:00:27.140Z',
        updatedAt: '2018-01-02T21:01:23.378Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 12,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 11,
        firstPublishedAt: '2018-01-02T21:01:23.378Z',
        publishedAt: '2018-01-02T21:01:23.378Z',
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
          'en-US': 'Body Text - QA 2',
        },
        content: {
          'en-US':
            'If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results. The operating model Whittle School & Studios will build in the years before its  rst campuses open in 2020 is based on the tenets noted below. We believe carefully adhering to these themes will result in delivering desired outcomes.  If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results.  If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results. The operating model Whittle School & Studios will build in the years before its  rst campuses open in 2020 is based on the tenets noted below. We believe carefully adhering to these themes will result in delivering desired outcomes.',
          'zh-CN':
            '如果学校必须明白要帮助学生达到什么目的，学校要知道如何实现这些成果同样重要。惠特尔学校和工作室将在2020年第一个校区开放之前建立的运营模式是基于以下原则。我们相信认真遵守这些主题将会产生理想的结果。如果学校必须明白要帮助学生达到什么目的，学校要知道如何实现这些成果同样重要。如果学校必须明白要帮助学生达到什么目的，学校要知道如何实现这些成果同样重要。惠特尔学校和工作室将在2020年第一个校区开放之前建立的运营模式是基于以下原则。我们相信认真遵守这些主题将会产生理想的结果。',
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
        id: '2fSUh7wluU2UIYMyMCWwE2',
        type: 'Entry',
        createdAt: '2018-01-02T21:02:09.662Z',
        updatedAt: '2018-01-03T19:09:11.948Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 2,
        version: 48,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 47,
        firstPublishedAt: '2018-01-02T21:08:45.220Z',
        publishedAt: '2018-01-03T19:09:11.948Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'threeUpBreaker',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Three - Up Breaker - QA 1',
        },
        title1: {
          'en-US': 'A School of One ',
          'zh-CN': ' 一所学校',
        },
        content1: {
          'en-US':
            'Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a *school building*! We must choose materials that can [co-exist](https://youtube.com) with the natural energy of children—or that can be __replaced easily__ when it is time.',
          'zh-CN':
            '\n[任何家长都知道](https://cnn.com)一个或两个孩子可以在短时间内在家中做什么。想象一下，2,500__可以做到校舍__！我们必须选择能够与儿童的自然能源共存的材料，*或者在时间*上可以轻易替换的材料。',
        },
        title2: {
          'en-US': 'Exceptional Faculty',
          'zh-CN': '师资力量雄厚',
        },
        content2: {
          'en-US':
            'Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time.',
          'zh-CN': '任何家长都知道一个或两个孩子可以在短时间内在家中做什么。想象一下，2,500可以做到校舍！我们必须选择能够与儿童的自然能源共存的材料，或者在时间上可以轻易替换的材料。',
        },
        title3: {
          'en-US': 'Progressive Pedagogy',
          'zh-CN': '进步的教育学',
        },
        content3: {
          'en-US':
            'Though we will likely build the entire core and shell of the campus all at once (no parent wants a constant construction site as an environment), we will phase some portions of the interior. We are designing with that in mind so that we can keep disruption to a minimum.',
          'zh-CN': '\n尽管我们可能一下子建成整个校园的核心和外壳（没有父母希望一个固定的建筑工地作为一个环境），但我们还是要分一部分内部。我们正在设计这一目标，以便尽可能减少干扰',
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
        id: '4IaGM8hu80YwSCCkuIgIko',
        type: 'Entry',
        createdAt: '2018-01-02T21:16:04.292Z',
        updatedAt: '2018-01-02T22:19:05.376Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 3,
        version: 97,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 96,
        firstPublishedAt: '2018-01-02T21:22:14.044Z',
        publishedAt: '2018-01-02T22:19:05.376Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Look Inside',
          'zh-CN': '看看里面',
        },
        navDescription: {
          'en-US': 'Charter schools are free public schools open to all New York City children.',
          'zh-CN': '特许学校是免费的 公立学校开放 所有纽约市的孩子。',
        },
        slug: {
          'en-US': 'look-inside-qa',
          'zh-CN': 'look-inside-qa-cn',
        },
        headline: {
          'en-US': 'Charter Schools - Preparing Students for College and Career',
          'zh-CN': ' 特许学校 - 为学生和职业做好准备',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '4gWhPrmQjm6qK4s0Ao8AW',
            },
          },
        },
        mainImageAlt: {
          'en-US': 'fish',
          'zh-CN': '鱼',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '7DARoi0iR2Swo4kOuoSiEy',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5KcVv3N4juIsgwysGKyMGW',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5Ikcv9jpFmSqsYy8SAGy0y',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6X4JULNRksCg0ocGeQ08Qi',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '69hAxDmaWIS2kMuYWmI0CK',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1h6V2DQq9KEysgcOsQgYco',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '51iIWixhuUEukuWUcowemW',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'SnXrnfdOucMWcCaKY6WEG',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4JOAcxplVCwgcieY4oqoiS',
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
        id: '7DARoi0iR2Swo4kOuoSiEy',
        type: 'Entry',
        createdAt: '2018-01-02T21:25:18.841Z',
        updatedAt: '2018-01-02T21:25:54.592Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 14,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 13,
        firstPublishedAt: '2018-01-02T21:25:54.592Z',
        publishedAt: '2018-01-02T21:25:54.592Z',
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
          'en-US': 'Body Text - QA 3',
        },
        content: {
          'en-US':
            'Unlike traditional public schools, charter schools are independent of the Department of Education. Charter schools are held accountable for advancing student achievement; if they do not meet their goals, a charter school can be closed. The combination of freedom and accountability for success allows charter schools to try new approaches, respond to community needs and put student learning first.',
          'zh-CN':
            '\n与传统的公立学校不同，特许学校独立于教育部门。特许学校负责提高学生成绩;如果他们不达标，特许学校可能会被关闭。自由和成功责任的结合使特许学校能够尝试新的方法，回应社区的需求，并把学生的学习放在第一位。',
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
        id: '5KcVv3N4juIsgwysGKyMGW',
        type: 'Entry',
        createdAt: '2018-01-02T21:27:04.213Z',
        updatedAt: '2018-01-02T21:32:31.013Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 2,
        version: 27,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 26,
        firstPublishedAt: '2018-01-02T21:29:29.779Z',
        publishedAt: '2018-01-02T21:32:31.013Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'List',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'List - QA 1',
        },
        title1: {
          'en-US': 'Prepare students for college and career',
          'zh-CN': '为学生和事业做好准备',
        },
        description1: {
          'en-US': 'NYC charter school students typically outperform their district counterparts on state exams.',
          'zh-CN': '纽约市的特许学校学生在州考试中的表现通常优于地区同学。',
        },
        title2: {
          'en-US': 'Have the freedom to innovate',
          'zh-CN': ' 有创新的自由',
        },
        description2: {
          'en-US':
            'Charter schools have flexibility in the way they operate. Many charters have longer school days and years and offer programs in the arts, sciences and languages.',
          'zh-CN': '特许学校在经营方式上具有灵活性。许多宪章有更长的上学时间和年纪，并提供艺术，科学和语言方面的课程。',
        },
        title3: {
          'en-US': 'Serve all children',
          'zh-CN': '为所有的孩子服务',
        },
        description3: {
          'en-US':
            'Charter schools accept all children including students with special needs and English Language Learners.',
          'zh-CN': '特许学校接受所有儿童，包括有特殊需要的学生和英语学习者。',
        },
        title4: {
          'en-US': 'Are in demand',
          'zh-CN': ' 有需求',
        },
        description4: {
          'en-US':
            'There are currently 216 charter schools serving 106,600 students – and yet, there are still 47,800 families on wait lists to get into a charter school.',
          'zh-CN': '目前有216所特许学校，为106,600名学生提供服务 - 然而，仍然有4.78万个候补名单上的家庭进入特许学校。',
        },
        title5: {
          'en-US': 'Offer parents a choice',
          'zh-CN': '为父母提供一个选择',
        },
        description5: {
          'en-US':
            'Charter schools offer parents an opportunity to choose a school that best suits their child’s needs.',
          'zh-CN': '\n特许学校为家长提供了一个选择最适合孩子需求的学校的机会。',
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
        id: '5Ikcv9jpFmSqsYy8SAGy0y',
        type: 'Entry',
        createdAt: '2018-01-02T21:33:27.213Z',
        updatedAt: '2018-01-02T21:34:26.843Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 13,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 12,
        firstPublishedAt: '2018-01-02T21:34:26.843Z',
        publishedAt: '2018-01-02T21:34:26.843Z',
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
          'en-US': 'Body Text - QA 4',
        },
        content: {
          'en-US':
            'New York state’s first charter school opened in Harlem in 1999, nearly a year after the passage of the Charter Schools Act. Since then an average of 12 charter schools have opened in New York City annually. Today, nearly 8% of the city’s public school children are being educated in a charter school.\n\nResearch has repeatedly shown that New York City has one of the top performing charter school sectors in the country.',
          'zh-CN':
            '\n特许学校法案通过近一年后，纽约州第一所特许学校于1999年在哈莱姆开设。从那时起，纽约市平均每年有12所特许学校开学。今天，全市近8％的公立学校的孩子正在接受特许学校的教育。\n\n研究一再表明，纽约市是全国表现最好的特许学校之一。',
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
        id: '69hAxDmaWIS2kMuYWmI0CK',
        type: 'Entry',
        createdAt: '2018-01-02T21:36:51.945Z',
        updatedAt: '2018-01-02T21:38:52.648Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 21,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 20,
        firstPublishedAt: '2018-01-02T21:38:52.648Z',
        publishedAt: '2018-01-02T21:38:52.648Z',
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
          'en-US': 'Body Text - QA 5',
        },
        content: {
          'en-US':
            'Favoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one; harnesses the horses of our new digital age; appreciates that education can no longer be bound by local or national jurisdictions; and they taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns; hopes to bring about the end of lock-step, one-size- ts-all education; understands that the emotional development of its students must also be given time; intuits that the physical design of a facility is a lesson unto itself; believes that a well- designed system of schools will surpass a single one.\n\nFavoring our work is the emergence of a new educational canon thanks, in large part, to the di cult, pioneering e orts of so many change agents who have gone before us. We stand on their shoulders. They taught us that a modern school is one that thinks as much about learning as teaching; knows that how one learns will outlast what one learns.',
          'zh-CN':
            '\n对我们的工作的赞赏是一个新的教育规范的出现，这在很大程度上要归功于那些已经走在我们前面的那么多变革推动者的困难和开创性的工作。我们站在他们的肩上。他们教导我们说，一所现代化的学校就像学习教学一样，知道一个人如何学习会比什么学到更多;希望能够实现步调一致的全民教育的终结;了解到学生的情感发展也必须给予时间;认为设施的实际设计本身就是一个教训;相信一个精心设计的学校系统将超越单一;利用我们新的数字时代的马匹;赞赏教育不再受地方或国家管辖范围的约束;他们教导我们说，一所现代化的学校是一个像教学一样认真学习的学校。知道一个人如何学习会比什么学到更多;希望能够实现步调一致的全民教育的终结;了解到学生的情感发展也必须给予时间;认为设施的实际设计本身就是一个教训;相信一个精心设计的学校系统将超越单一。\n\n对我们的工作的赞赏是一个新的教育规范的出现，这在很大程度上要归功于那些已经走在我们前面的那么多变革推动者的困难和开创性的工作。我们站在他们的肩上。他们教导我们，一所现代化的学校就像学习教学一样，知道一个人如何学习会比什么学到更多。',
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
        id: '1h6V2DQq9KEysgcOsQgYco',
        type: 'Entry',
        createdAt: '2018-01-02T21:39:32.549Z',
        updatedAt: '2018-01-02T21:41:20.264Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 24,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 23,
        firstPublishedAt: '2018-01-02T21:41:20.264Z',
        publishedAt: '2018-01-02T21:41:20.264Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'quote',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Block Quote with Source - QA 1',
        },
        quoteType: {
          'en-US': 'block-quote',
        },
        content: {
          'en-US':
            'In the fall of 2020, our first four campuses will open in China, the U.S., the Middle East and Asia, with the intended cities being Shenzhen, Washington, D.C., Dubai and Singapore. Each 600,000-square-foot campus designed by Renzo Piano Building Workshop will serve 2,500 students ages three to 18, with about \n160 per grade.  ',
          'zh-CN':
            '\n在2020年秋季，我们的前四个校区将在中国，美国，中东和亚洲开放，预定的城市是深圳，华盛顿特区，迪拜和新加坡。每个由Renzo Piano Building Workshop设计的60万平方英尺的校园将为2500名年龄在3岁至18岁的学生提供服务\n每档160个',
        },
        source: {
          'en-US': 'Renzo Piano',
          'zh-CN': 'Renzo Piano',
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
        id: '31SzvkO9CgKSga04W4cUAU',
        type: 'Entry',
        createdAt: '2018-01-02T21:50:20.133Z',
        updatedAt: '2018-01-04T22:38:39.755Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 4,
        version: 56,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 54,
        firstPublishedAt: '2018-01-02T21:52:31.172Z',
        publishedAt: '2018-01-02T22:19:50.732Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Operating a School',
          'zh-CN': ' 经营学校',
        },
        navDescription: {
          'en-US': 'The key to running a great school is in the constant imagination and reinvestment of its leaders.',
          'zh-CN': ' 经营一个伟大的学校的关键是在不断的想象和领导的再投资。',
        },
        slug: {
          'en-US': 'operating-a-school-qa',
          'zh-CN': 'operating-a-school-qa-cn',
        },
        headline: {
          'en-US': 'Operating a School or Network',
          'zh-CN': ' 操作学校或网络',
        },
        subhead: {
          'en-US':
            'As you continue to uncover better ways to serve your students, we’re standing by to help you achieve your goals and maintain the highest standards for educational excellence.',
          'zh-CN': ' 在您继续发现更好的方式为您的学生服务的同时，我们竭力帮助您实现自己的目标，并保持教育卓越的最高标准。',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '69hAxDmaWIS2kMuYWmI0CK',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3FpfKBbJ3auM4wQ2YEUG2I',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4JOAcxplVCwgcieY4oqoiS',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '47vATuESveack8KIQYQywI',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5LfWLKsggw6KoIYiWKi8ki',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2TVIRwULCwy4ikC0iGe46i',
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
        id: '47vATuESveack8KIQYQywI',
        type: 'Entry',
        createdAt: '2018-01-02T21:58:06.977Z',
        updatedAt: '2018-01-02T22:06:30.089Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 118,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 117,
        firstPublishedAt: '2018-01-02T22:06:30.089Z',
        publishedAt: '2018-01-02T22:06:30.089Z',
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
          'en-US': 'List w/ Thumbnail - Images - QA 1',
        },
        title: {
          'en-US': 'Programs and Services',
          'zh-CN': ' 程序和服务',
        },
        item1Title: {
          'en-US': 'English Language Learner Support',
          'zh-CN': ' 英语学习者支持',
        },
        item1Description: {
          'en-US':
            'Our ELL Specialist designs unique programming to support your efforts in recruiting, identifying and best educating ELLs by drawing upon local and national school-level expertise.',
          'zh-CN': '我们的ELL专家设计独特的计划，通过借鉴当地和国家学校的专业知识来支持您的招聘，确定和最佳教育ELL的努力。\n',
        },
        item1Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'hxEfHf39jGMMEQ8KE8Y8g',
            },
          },
        },
        item1ImageAlt: {
          'en-US': 'daffodils',
          'zh-CN': '水仙花',
        },
        item2Title: {
          'en-US': 'Enrollment & Student Recruitment',
          'zh-CN': '招生和学生招聘',
        },
        item2Description: {
          'en-US':
            'The Common Online Charter Application has become a definitive resource for parents interested in applying to NYC charter schools. Whether your school has your own online application or not, we encourage you to take advantage of these benefits.',
          'zh-CN': '\n通用在线宪章申请已成为有兴趣申请纽约特许学校的父母的权威资源。无论您的学校是否有您自己的在线申请，我们都鼓励您利用这些好处。',
        },
        item2Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5kLJqDZ9vyIaOucos4KCS0',
            },
          },
        },
        item2ImageAlt: {
          'en-US': 'children',
          'zh-CN': ' 孩子',
        },
        item3Title: {
          'en-US': 'Job Search',
          'zh-CN': ' 求职',
        },
        item3Description: {
          'en-US':
            'Need to fill a crucial role at your school or looking to continue your career in the NYC charter sector? Hundreds of high-qualified applicants visit our Job Board daily.\n\n[View Posts](https://youtube.com)',
          'zh-CN': '\n需要在你的学校填补一个关键的角色，或者想在纽约市的特许行业继续你的事业？每天有数百名高素质申请人访问我们的工作委员会。\n\n\n[查看帖子](https://youtube.com)',
        },
        item3Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5iM0C8Tviguwks0kMCkyQE',
            },
          },
        },
        item3ImageAlt: {
          'en-US': 'campus',
          'zh-CN': '校园',
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
        id: '5LfWLKsggw6KoIYiWKi8ki',
        type: 'Entry',
        createdAt: '2018-01-02T22:08:51.533Z',
        updatedAt: '2018-01-03T16:50:08.842Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 3,
        version: 44,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 43,
        firstPublishedAt: '2018-01-02T22:12:17.575Z',
        publishedAt: '2018-01-03T16:50:08.842Z',
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
          'en-US': 'Body Text w/ Inset Image - QA',
        },
        content: {
          'en-US':
            'Charter schools are committed to serving all students, including English Language Learners (ELLs). The Charter Center’s ELL programming is designed to support your efforts in recruiting, identifying and best educating ELLs. Drawing upon local and national school-level expertise, schools are provided with a variety of operational, programmatic and pedagogical best practices and strategies that can be applied immediately.\n\n![fish--left--circle](//images.contentful.com/udx5f2jyw09i/4gWhPrmQjm6qK4s0Ao8AW/be452143cdb844e34fb35854e333b2be/fish.jpg "Caption: Lorem ipsum cum sociis natoque penatibus.")In 2011, a consortium of borough-based special education cooperatives were merged into a city-wide membership organization committed to supporting quality education programs for students with disabilities. This organization, the NYC Special Education Collaborative, focuses on assisting schools with starting and operating successful special education programs. The Collaborative currently includes over 170 charter schools in the New York City area with active membership of school leaders, special education coordinators, counselors, social workers and general education staff.\n\nThe Charter Center was founded to support the development of a high quality charter school sector in New York City. One of the ways in which we do this is by ensuring that public policies and politics engender the continued growth, autonomy and quality of the charter sector. Charter schools are committed to serving all students, including English Language Learners (ELLs). The Charter Center’s ELL programming is designed to support your efforts in recruiting, identifying and best educating ELLs. Drawing upon local and national school-level expertise, schools are provided with a variety of operational, programmatic and pedagogical best practices and strategies that can be applied immediately.\n\nThe Charter Center was founded to support the development of a high quality charter school sector in New York City. ![My custom alt title--right](//images.contentful.com/udx5f2jyw09i/5kLJqDZ9vyIaOucos4KCS0/438abc2c158e763f6a87f3b7dab233d8/children-with-lights.jpg "My custom caption")One of the ways in which we do this is by ensuring that public policies and politics engender the continued growth, autonomy and quality of the charter sector.\n\n',
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
        id: '1UKPiV5sEAqGMywYgckYa8',
        type: 'Entry',
        createdAt: '2018-01-02T22:22:54.972Z',
        updatedAt: '2018-01-02T22:54:05.352Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 4,
        version: 87,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 86,
        firstPublishedAt: '2018-01-02T22:26:24.099Z',
        publishedAt: '2018-01-02T22:54:05.352Z',
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
          'en-US': 'Article',
        },
        navTitle: {
          'en-US': 'Replicating Quality',
          'zh-CN': ' 复制质量',
        },
        navDescription: {
          'en-US': 'Replicating Quality Schools is the first program of its kind in the country',
          'zh-CN': ' 复制优质学校是该国第一个此类计划',
        },
        slug: {
          'en-US': 'replicating-quality-qa',
          'zh-CN': 'replicating-quality-qa-cn',
        },
        headline: {
          'en-US': 'Launching the Next Generation of High Quality Schools',
          'zh-CN': ' 启动下一代高品质的学校',
        },
        subhead: {
          'en-US':
            'The Charter Center’s Replicating Quality Schools program, now offered nationally, ensures that operators looking to replicate do so thoughtfully and strategically, rather than opportunistically.',
          'zh-CN': '宪章中心的“复制优质学校”计划目前在全国范围内提供，确保希望复制的运营商能够做到如此周到，有战略意义，而不是机会主义。',
        },
        mainImage: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5iM0C8Tviguwks0kMCkyQE',
            },
          },
        },
        mainImageAlt: {
          'en-US': 'campus',
          'zh-CN': '校园',
        },
        modules: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '7DARoi0iR2Swo4kOuoSiEy',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2eNQr4idA0WuyQ4oOEUuM4',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4JOAcxplVCwgcieY4oqoiS',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3FpfKBbJ3auM4wQ2YEUG2I',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1X4KiYPDg06GOEGkCa8WKG',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5Ikcv9jpFmSqsYy8SAGy0y',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1Z7Y52IoHS2kWE8iCocQog',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'OAPWHIWESY8w4K8oasQsO',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'SnXrnfdOucMWcCaKY6WEG',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3DGHzOp2MgCEYGgUmok0qy',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3tubPEEOoE6e0icQs8YiQs',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3rTG4OSfjiIYMmcI8Om8ia',
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
        id: '2eNQr4idA0WuyQ4oOEUuM4',
        type: 'Entry',
        createdAt: '2018-01-02T22:28:54.673Z',
        updatedAt: '2018-01-02T22:29:54.933Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 24,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 23,
        firstPublishedAt: '2018-01-02T22:29:54.933Z',
        publishedAt: '2018-01-02T22:29:54.933Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'SectionTitle',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Section Title - QA 1',
        },
        number: {
          'en-US': 1,
        },
        title: {
          'en-US': 'Smart Growth',
          'zh-CN': ' 智能增长',
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
        id: '1X4KiYPDg06GOEGkCa8WKG',
        type: 'Entry',
        createdAt: '2018-01-02T22:31:29.389Z',
        updatedAt: '2018-01-02T22:32:08.180Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 20,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 19,
        firstPublishedAt: '2018-01-02T22:32:08.180Z',
        publishedAt: '2018-01-02T22:32:08.180Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'SectionTitle',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Section Title - QA 2',
        },
        number: {
          'en-US': 2,
        },
        title: {
          'en-US': 'The Program',
          'zh-CN': ' 该程序',
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
        id: '1Z7Y52IoHS2kWE8iCocQog',
        type: 'Entry',
        createdAt: '2018-01-02T22:32:55.627Z',
        updatedAt: '2018-01-02T22:34:25.848Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 21,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 20,
        firstPublishedAt: '2018-01-02T22:34:25.848Z',
        publishedAt: '2018-01-02T22:34:25.848Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'quote',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Pull Quote w/out Source - QA 1',
        },
        quoteType: {
          'en-US': 'pull-quote',
        },
        content: {
          'en-US': 'I believe that if one always looked at the skies, one would end up with wings.',
          'zh-CN': '\n我相信，如果一个人总是看着天空，最终会有翅膀。',
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
        id: 'OAPWHIWESY8w4K8oasQsO',
        type: 'Entry',
        createdAt: '2018-01-02T22:35:43.097Z',
        updatedAt: '2018-01-02T22:36:18.266Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 17,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 16,
        firstPublishedAt: '2018-01-02T22:36:18.266Z',
        publishedAt: '2018-01-02T22:36:18.266Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'SectionTitle',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Section Title - QA 3',
        },
        number: {
          'en-US': 3,
        },
        title: {
          'en-US': 'Gallery',
          'zh-CN': ' 画廊',
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
        id: '3DGHzOp2MgCEYGgUmok0qy',
        type: 'Entry',
        createdAt: '2018-01-02T22:39:41.522Z',
        updatedAt: '2018-01-02T22:40:33.834Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 2,
        version: 18,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 17,
        firstPublishedAt: '2018-01-02T22:40:20.175Z',
        publishedAt: '2018-01-02T22:40:33.834Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'SectionTitle',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Section Title - QA 4',
        },
        number: {
          'en-US': 4,
        },
        title: {
          'en-US': 'Press ',
          'zh-CN': ' 按',
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
        id: '3tubPEEOoE6e0icQs8YiQs',
        type: 'Entry',
        createdAt: '2018-01-02T22:41:14.737Z',
        updatedAt: '2018-01-03T19:13:12.337Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 3,
        version: 47,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 46,
        firstPublishedAt: '2018-01-02T22:50:46.477Z',
        publishedAt: '2018-01-03T19:13:12.337Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'datedPost',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Post w/ Date - QA 1',
        },
        date: {
          'en-US': '2018-01-02',
        },
        title: {
          'en-US': 'Toutiao, a High-Flying Chinese App, Delivers News to Millions. China’s Censors Have Noticed.',
          'zh-CN': ' Toutiao，一个高飞的中国应用程序，传达百万的消息。中国检查员注意到了。',
        },
        source: {
          'en-US': 'NY Times',
          'zh-CN': ' 纽约时报',
        },
        description: {
          'en-US':
            '__Authorities__ have told the popular [service](https://cnn.com) to clean up salacious material, *illustrating* the balance required to meet China’s voracious news demand.\n\n',
          'zh-CN': '\n当局已经告诉民众清理色情材料，说明满足中国贪婪新闻需求的平衡。\n\n\n',
        },
        linkExternal: {
          'en-US': 'https://www.nytimes.com/2018/01/02/business/china-toutiao-censorship.html',
          'zh-CN': 'https://www.nytimes.com/2018/01/02/business/china-toutiao-censorship.html',
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
        id: '3rTG4OSfjiIYMmcI8Om8ia',
        type: 'Entry',
        createdAt: '2018-01-02T22:51:03.096Z',
        updatedAt: '2018-01-03T19:14:36.343Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 2,
        version: 24,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 23,
        firstPublishedAt: '2018-01-02T22:54:01.657Z',
        publishedAt: '2018-01-03T19:14:36.343Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'datedPost',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Post w/ Date - QA 2',
        },
        date: {
          'en-US': '2017-12-05',
        },
        title: {
          'en-US': '68 Things You Cannot Say on China’s Internet',
          'zh-CN': '在中国互联网上不能说的68件事',
        },
        description: {
          'en-US':
            'Song Jie, a writer in central China, knows what she can and cannot write in the romance novels she publishes __*online*__. Words that describe explicit sexual acts are out, of course. ',
          'zh-CN': '华中作家宋杰知道她在网上发表的浪漫小说里能写什么，__不能写什么__。当然，描述明确的性行为的词语已经不在了。',
        },
        linkInternal: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '5qe87nq0lG0eQmgS2oQqC8',
            },
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
        id: '2RHzwEEnVYaOQIMwsamoSC',
        type: 'Entry',
        createdAt: '2018-01-04T02:02:59.897Z',
        updatedAt: '2018-01-04T21:26:41.099Z',
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
        publishedCounter: 9,
        version: 62,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 61,
        firstPublishedAt: '2018-01-04T02:09:08.124Z',
        publishedAt: '2018-01-04T21:26:41.099Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'homePage',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Dummy homepage - DONT DELETE',
        },
        seoMetaTitle: {
          'en-US': 'Global Education in Shenzhen',
        },
        seoMetaDescription: {
          'en-US':
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        headline: {
          'en-US': "I'm a dummy homepage and I don't want to show up in real life",
          'zh-CN': ' 深圳第一家全球学校',
        },
        hero: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '5ETDV8KfzGwQUaC4qWyCiu',
            },
          },
        },
        schoolIntroTitle: {
          'en-US':
            'Imagine a network of schools created by an international consortium of educators, architects, artists and technologists.',
        },
        campusModule: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '10VV9L42x8W8K4o4cSUY88',
            },
          },
          'zh-CN': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '10VV9L42x8W8K4o4cSUY88',
            },
          },
        },
        eventList: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '4NEGlZg8ko4uQcm8kes204',
            },
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
        id: '3wJSqy5JTWKCiQ6saI0aw0',
        type: 'Entry',
        createdAt: '2018-01-04T03:16:44.315Z',
        updatedAt: '2018-01-04T21:43:41.838Z',
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
        version: 63,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 62,
        firstPublishedAt: '2018-01-04T03:17:03.348Z',
        publishedAt: '2018-01-04T21:43:41.838Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'dummyContentIndex',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy content index - DON'T DELETE",
        },
        entries: {
          'en-US': [
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2RHzwEEnVYaOQIMwsamoSC',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '10VV9L42x8W8K4o4cSUY88',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '4NEGlZg8ko4uQcm8kes204',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '5ETDV8KfzGwQUaC4qWyCiu',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2TtdYMe0XeiUeSmG82ku8I',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2AHm3MCe0kW6EYkkAIoQU2',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2ocDIH03OQkyuSUs4QIwak',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'u1DZBpWXIcCCA0yQuYO6Y',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1Ic2ioOtyIoQGwSaCOSCGm',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3JdwZ3ZjpKq00Uo22OC0E',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '292SwwFVYw48QuuUg44IGI',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '1MjT1Gr5UoayK2EyMqSYwo',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '6TDXyB8vE4OgcmWSc60aQi',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: 'aKCFRDQqic4UeomgawC6y',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2S9fl5C87ScyiEamei2IU2',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2rTpnYLLbS4EsGQgqmQea4',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3EdCqRbdna8MCKKuOesEem',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '3yjj9axPRem6uYISQyUYwK',
              },
            },
            {
              sys: {
                type: 'Link',
                linkType: 'Entry',
                id: '2KxFtXkJdm2MUa4q6qQSCS',
              },
            },
          ],
        },
        asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
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
        id: '342IF0pi3YMiukWEoCeUMK',
        type: 'Entry',
        createdAt: '2018-01-04T10:56:02.950Z',
        updatedAt: '2018-01-04T21:21:23.024Z',
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
        publishedCounter: 6,
        version: 64,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 63,
        firstPublishedAt: '2018-01-04T10:58:16.173Z',
        publishedAt: '2018-01-04T21:21:23.024Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'hero',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': 'Hero',
        },
        eventListTitle: {
          'en-US': 'Parent Information',
          'zh-CN': 'Parent Information',
        },
        eventList: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '2ayEuX6PDOyYCUsKq2WCoq',
            },
          },
        },
        image: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'ul4XFgkBtAUYY2Q8k0A0I',
            },
          },
        },
        title: {
          'en-US':
            'Imagine a network of schools, created by an international consortium of educators, architects, artists and technologists.',
          'zh-CN':
            'Imagine a network of schools, created by an international consortium of educators, architects, artists and technologists.',
        },
        description: {
          'en-US':
            'Imagine a network of schools created by an international consortium of educators, architects, artists and technologists. Imagine one school with many campuses in the world’s top 30 cities connected by a single faculty and a common curriculum implemented with a collective intelligence. From preschool through high school, our program is a seamless global experience.\n\n\n',
          'zh-CN':
            'Imagine a network of schools created by an international consortium of educators, architects, artists and technologists. Imagine one school with many campuses in the world’s top 30 cities connected by a single faculty and a common curriculum implemented with a collective intelligence. From preschool through high school, our program is a seamless global experience. \n\n',
        },
        linkTitle: {
          'en-US': 'Learn more',
          'zh-CN': 'Learn more',
        },
        link: {
          'en-US': 'http://www.google.com',
          'zh-CN': 'http://www.google.com',
        },
        countdownTitle: {
          'en-US': 'Shenzhen Campus Opening',
          'zh-CN': 'Shenzhen Campus Opening',
        },
        countdownDate: {
          'en-US': '2018-01-14',
        },
        imageAlt: {
          'en-US': 'Image alt',
          'zh-CN': 'Image alt',
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
        id: '4NEGlZg8ko4uQcm8kes204',
        type: 'Entry',
        createdAt: '2018-01-04T21:17:38.035Z',
        updatedAt: '2018-01-04T21:27:06.937Z',
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
        version: 25,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 24,
        firstPublishedAt: '2018-01-04T21:17:56.538Z',
        publishedAt: '2018-01-04T21:27:06.937Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'eventList',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy event list - DON'T DELETE",
        },
        sectionTitle: {
          'en-US': 'Workshops.',
          'zh-CN': '解如何解',
        },
        cityName: {
          'en-US': 'Shenzhen',
          'zh-CN': '解如何',
        },
        introText: {
          'en-US':
            'Identifying and understanding the key differences between schools is an essential part of that decision making experience.',
          'zh-CN': '仔细遵守这些主题将导致预期的结果。 如果一所学校必须了解如何帮助学生实现这',
        },
        event1Date: {
          'en-US': '2017-12-30',
        },
        event1TitleLine1: {
          'en-US': 'PYP Workshop',
          'zh-CN': '校知道',
        },
        event1TitleLine2: {
          'en-US': '(Ages 3-5)',
          'zh-CN': '(点是 3-5)',
        },
        event1Location: {
          'en-US': 'Shenzhen Civic Center',
          'zh-CN': '点是学校知道',
        },
        event1Description: {
          'en-US': 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.',
          'zh-CN': '点是学校知道如何提供这些成果',
        },
        event1RegistrationLink: {
          'en-US': 'http://www.google.com',
        },
        event2Date: {
          'en-US': '2018-01-11',
        },
        event2TitleLine1: {
          'en-US': 'Test2',
        },
        event2TitleLine2: {
          'en-US': 'Ages (test-test)',
        },
        event2Location: {
          'en-US': 'Test2',
        },
        event2Description: {
          'en-US': 'Test2',
        },
        event2RegistrationLink: {
          'en-US': 'http://www.youtube.com',
        },
        event3Date: {
          'en-US': '2018-01-17',
        },
        event3TitleLine1: {
          'en-US': 'Test3',
        },
        event3TitleLine2: {
          'en-US': 'Ages 3-3',
        },
        event3Location: {
          'en-US': 'Test3',
        },
        event3Description: {
          'en-US': 'Test 3',
          'zh-CN': 'Test 3',
        },
        event3RegistrationLink: {
          'en-US': 'http://www.yahoo.com',
        },
        event4Date: {
          'en-US': '2018-01-19',
        },
        event4TitleLine1: {
          'en-US': 'Test4',
        },
        event4TitleLine2: {
          'en-US': 'test4',
        },
        event4Location: {
          'en-US': 'test4',
        },
        event4Description: {
          'en-US': 'test4',
        },
        event4RegistrationLink: {
          'en-US': 'http://www.bing.com',
        },
        event5Date: {
          'en-US': '2018-01-24',
        },
        event5TitleLine1: {
          'en-US': 'test5',
        },
        event5TitleLine2: {
          'en-US': 'test5',
        },
        event5Location: {
          'en-US': 'test5',
        },
        event5Description: {
          'en-US': '5',
        },
        event5RegistrationLink: {
          'en-US': 'http://www.ebay.com',
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
        id: '5ETDV8KfzGwQUaC4qWyCiu',
        type: 'Entry',
        createdAt: '2018-01-04T21:20:19.316Z',
        updatedAt: '2018-01-04T21:27:15.986Z',
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
        version: 32,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 31,
        firstPublishedAt: '2018-01-04T21:20:50.326Z',
        publishedAt: '2018-01-04T21:27:15.986Z',
        contentType: {
          sys: {
            type: 'Link',
            linkType: 'ContentType',
            id: 'hero',
          },
        },
      },
      fields: {
        contentfulLabel: {
          'en-US': "Dummy hero - DON'T DELETE",
        },
        eventListTitle: {
          'en-US': 'Parent Information',
          'zh-CN': 'Parent Information',
        },
        eventList: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: '4NEGlZg8ko4uQcm8kes204',
            },
          },
        },
        image: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '3oXvb6xAdywo8sKSmSgQAc',
            },
          },
        },
        title: {
          'en-US':
            'Imagine a network of schools, created by an international consortium of educators, architects, artists and technologists.',
          'zh-CN':
            'Imagine a network of schools, created by an international consortium of educators, architects, artists and technologists.',
        },
        description: {
          'en-US':
            'Imagine a network of schools created by an international consortium of educators, architects, artists and technologists. Imagine one school with many campuses in the world’s top 30 cities connected by a single faculty and a common curriculum implemented with a collective intelligence. From preschool through high school, our program is a seamless global experience.\n\n\n',
          'zh-CN':
            'Imagine a network of schools created by an international consortium of educators, architects, artists and technologists. Imagine one school with many campuses in the world’s top 30 cities connected by a single faculty and a common curriculum implemented with a collective intelligence. From preschool through high school, our program is a seamless global experience. \n\n',
        },
        linkTitle: {
          'en-US': 'Learn more',
          'zh-CN': 'Learn more',
        },
        link: {
          'en-US': 'http://www.google.com',
        },
        countdownTitle: {
          'en-US': 'Shenzhen Campus Opening',
          'zh-CN': 'Shenzhen Campus Opening',
        },
        countdownDate: {
          'en-US': '2018-01-14',
        },
        imageAlt: {
          'en-US': 'Image alt',
          'zh-CN': 'Image alt',
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
        id: '2TVIRwULCwy4ikC0iGe46i',
        type: 'Entry',
        createdAt: '2018-01-04T22:38:39.416Z',
        updatedAt: '2018-01-04T22:50:05.290Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedCounter: 1,
        version: 143,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '4eFTAohh8Wle0Ls9OnsUSy',
          },
        },
        publishedVersion: 142,
        firstPublishedAt: '2018-01-04T22:50:05.290Z',
        publishedAt: '2018-01-04T22:50:05.290Z',
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
          'en-US': 'List w/ Thumbnails - Video - QA 1',
        },
        title: {
          'en-US': 'Engineering Majors',
          'zh-CN': '工程专业',
        },
        item1Title: {
          'en-US': 'Civil',
          'zh-CN': ' 国内',
        },
        item1Description: {
          'en-US':
            'Is a professional engineering discipline that deals with the design, construction, and maintenance of the physical and naturally built environment, including works like roads, bridges, canals, dams, and buildings.',
          'zh-CN': '是一个专业的工程学科，涉及物理和自然环境的设计，施工和维护，包括道路，桥梁，运河，水坝和建筑物等工程。',
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
          'en-US': 'building',
          'zh-CN': '建造',
        },
        item1VideoEmbedCode: {
          'en-US':
            '<iframe src="https://player.vimeo.com/video/244901843" width="640" height="268" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/244901843">Now That I&#039;ve Found You</a> from <a href="https://vimeo.com/peterhuang">Peter Huang</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
          'zh-CN':
            '<iframe src="https://player.vimeo.com/video/244901843" width="640" height="268" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/244901843">Now That I&#039;ve Found You</a> from <a href="https://vimeo.com/peterhuang">Peter Huang</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
        },
        item1VideoDuration: {
          'en-US': '6:16',
          'zh-CN': '6:16',
        },
        item2Title: {
          'en-US': 'Ocean',
          'zh-CN': ' 海洋',
        },
        item2Description: {
          'en-US':
            'Provides an important link between the other oceanographic disciplines such as marine biology, chemical and physical oceanography, and marine geology and geophysics.',
          'zh-CN': '提供其他海洋学科如海洋生物学，化学和物理海洋学，以及海洋地质学和地球物理学之间的重要联系。',
        },
        item2Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5kLJqDZ9vyIaOucos4KCS0',
            },
          },
        },
        item2ImageAlt: {
          'en-US': 'ocean',
          'zh-CN': ' 海洋',
        },
        item2VideoEmbedCode: {
          'en-US':
            '<iframe src="https://player.vimeo.com/video/244405542" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/244405542">Happiness</a> from <a href="https://vimeo.com/user4630714">Steve Cutts</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
          'zh-CN':
            '<iframe src="https://player.vimeo.com/video/244405542" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/244405542">Happiness</a> from <a href="https://vimeo.com/user4630714">Steve Cutts</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
        },
        item2VideoDuration: {
          'en-US': '4:16',
          'zh-CN': '4:16',
        },
        item3Title: {
          'en-US': 'Aerospace',
          'zh-CN': '航天',
        },
        item3Description: {
          'en-US': 'Is the *primary field of* engineering concerned with the development of aircraft and spacecraft. ',
          'zh-CN': '\n*是航空航天器发展的主要工程领域*。',
        },
        item3Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '5iM0C8Tviguwks0kMCkyQE',
            },
          },
        },
        item3ImageAlt: {
          'en-US': 'campus',
          'zh-CN': '校园',
        },
        item3VideoEmbedCode: {
          'en-US':
            '<iframe src="https://player.vimeo.com/video/212731897" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/212731897">Extrapolate</a> from <a href="https://vimeo.com/johanrijpma">johan rijpma</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
          'zh-CN':
            '<iframe src="https://player.vimeo.com/video/212731897" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/212731897">Extrapolate</a> from <a href="https://vimeo.com/johanrijpma">johan rijpma</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
        },
        item3VideoDuration: {
          'en-US': '1:02:33',
          'zh-CN': '1:02:33',
        },
        item4Title: {
          'en-US': 'Mechanical',
          'zh-CN': '机械',
        },
        item4Description: {
          'en-US':
            'Is the discipline that applies engineering, physics, and materials science principles to design, analyze, [manufacture](https://cnn.com), and maintain mechanical systems.',
          'zh-CN': '是应用工程，物理和材料科学原理来设计，分析，制造和维护机械系统的学科。',
        },
        item4Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: '4gWhPrmQjm6qK4s0Ao8AW',
            },
          },
        },
        item4ImageAlt: {
          'en-US': 'fish',
          'zh-CN': ' 鱼',
        },
        item4VideoEmbedCode: {
          'en-US':
            '<iframe src="https://player.vimeo.com/video/249449543" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/249449543">Women&amp;Wine</a> from <a href="https://vimeo.com/user5887013">Ape&amp;Bj&oslash;rn AS</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
          'zh-CN':
            '<iframe src="https://player.vimeo.com/video/249449543" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/249449543">Women&amp;Wine</a> from <a href="https://vimeo.com/user5887013">Ape&amp;Bj&oslash;rn AS</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
        },
        item4VideoDuration: {
          'en-US': '21:22',
          'zh-CN': '21:22',
        },
        item5Title: {
          'en-US': 'Biomedical',
          'zh-CN': '生物医学',
        },
        item5Description: {
          'en-US':
            'Is the application of *engineering* principles and design concepts to medicine and biology for __healthcare purposes__ (e.g. diagnostic or therapeutic).',
          'zh-CN': '\n将工程原理和设计概念应用于医学和生物学以用于医疗目的（__例如诊断或治疗__）。',
        },
        item5Asset: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: 'hxEfHf39jGMMEQ8KE8Y8g',
            },
          },
        },
        item5ImageAlt: {
          'en-US': 'daffodils',
          'zh-CN': ' 水仙花',
        },
        item5VideoEmbedCode: {
          'en-US':
            '<iframe src="https://player.vimeo.com/video/249449543" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/249449543">Women&amp;Wine</a> from <a href="https://vimeo.com/user5887013">Ape&amp;Bj&oslash;rn AS</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
          'zh-CN':
            '<iframe src="https://player.vimeo.com/video/249449543" width="640" height="360" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n<p><a href="https://vimeo.com/249449543">Women&amp;Wine</a> from <a href="https://vimeo.com/user5887013">Ape&amp;Bj&oslash;rn AS</a> on <a href="https://vimeo.com">Vimeo</a>.</p>',
        },
        item5VideoDuration: {
          'en-US': '3:33:33',
          'zh-CN': '3:33:33',
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
        updatedAt: '2018-01-04T22:21:09.794Z',
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
        version: 40,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '2jNQ11AkTRw4aZ7RC5XD2m',
          },
        },
        publishedVersion: 39,
        firstPublishedAt: '2017-11-14T19:50:22.499Z',
        publishedAt: '2018-01-04T22:21:09.794Z',
      },
      fields: {
        title: {
          'en-US': "Dummy asset - DON'T DELETE",
          'zh-CN': 'mouse',
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
          'zh-CN': {
            url:
              '//images.contentful.com/udx5f2jyw09i/3oXvb6xAdywo8sKSmSgQAc/0cf68e67a9faa3babc7343039e59f7b9/mouse.jpg',
            details: {
              size: 434159,
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
    {
      sys: {
        space: {
          sys: {
            type: 'Link',
            linkType: 'Space',
            id: 'udx5f2jyw09i',
          },
        },
        id: '1GcmWnu9Ra4EI2uI2CKqyM',
        type: 'Asset',
        createdAt: '2017-12-22T13:37:16.323Z',
        updatedAt: '2017-12-22T13:39:34.690Z',
        createdBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6Nei44MnEAd8PpKPZZHeIG',
          },
        },
        updatedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6Nei44MnEAd8PpKPZZHeIG',
          },
        },
        publishedCounter: 1,
        version: 16,
        publishedBy: {
          sys: {
            type: 'Link',
            linkType: 'User',
            id: '6Nei44MnEAd8PpKPZZHeIG',
          },
        },
        publishedVersion: 15,
        firstPublishedAt: '2017-12-22T13:39:34.690Z',
        publishedAt: '2017-12-22T13:39:34.690Z',
      },
      fields: {
        title: {
          'en-US': 'Architect Image',
          'zh-CN': 'Architect Image',
        },
        file: {
          'en-US': {
            url:
              '//images.contentful.com/udx5f2jyw09i/1GcmWnu9Ra4EI2uI2CKqyM/184401e8e829afb81e7dc5729b0ed6ea/renzo_img.png',
            details: {
              size: 14787,
              image: {
                width: 100,
                height: 100,
              },
            },
            fileName: 'renzo img.png',
            contentType: 'image/png',
          },
          'zh-CN': {
            url:
              '//images.contentful.com/udx5f2jyw09i/1GcmWnu9Ra4EI2uI2CKqyM/f773e286ef2f900c15c4dbab4cdfabcb/renzo_img.png',
            details: {
              size: 14787,
              image: {
                width: 100,
                height: 100,
              },
            },
            fileName: 'renzo img.png',
            contentType: 'image/png',
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
