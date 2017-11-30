/* ===== SCHEMA ===== */

// Contentful schema in Javascript pseudocode to help us plan and document.

/* === HEADER === */

// schema
{
  contentPages: [
    { type: Reference<ContentPage> },
  ]
}

// example
{
  contentPages: [
    <ContentPageReference>,
    <ContentPageReference>,
    <ContentPageReference>,
    <ContentPageReference>,
    <ContentPageReference>,
  ]
}

// Subnav/Recirculation module are derived from one of these:
// - Category's Subcategory children
// - Article's parent Category and its Subcategory children

/* === FOOTER === */

// schema
{
  primaryLink1: { type: FooterLink },
  utilityLink1: { type: FooterLink },
  utilityLink2: { type: FooterLink },
  utilityLink2Children: [{ type: FooterLink }],
  primaryLink2: { type: FooterLink },
  primaryLink2Children: [{ type: FooterLink }],
  primaryLink3: { type: FooterLink },
  primaryLink3Children: [{ type: FooterLink }],
  primaryLink4: { type: FooterLink },
  primaryLink4Children: [{ type: FooterLink }],
  primaryLink5: { type: FooterLink },
  primaryLink5Children: [{ type: FooterLink }],
  primaryLink6: { type: FooterLink },
  primaryLink6Children: [{ type: FooterLink }],
}

// FooterLink schema
{
  linkTitle: { type: String },
  linkDestinationExternal { type: String, isRequired: false },
  linkDestinationInternal { type: Reference<ContentType>, isRequired: false },
}

// example - internal
{
  linkTitle: 'Architecture',
  linkDestinationInternal: <ContentPageReference>
}

// example - external
{
  linkTitle: 'Google',
  linkDestinationExternal: 'https://www.google.com'
}


// Note
// - One of linkDestinationExternal or linkDestinationInternal must be supplied

/* === CATEGORY/ARTICLE PAGES == */

// Note: How UI displays sometimes depends on the "page type" - whether a page is a category or article.

// schema
{
  pageType: { type: String }, // "Category" or "Article"

  // Required for:
  // - Categories with Subcategory children
  overviewNavTitle: { type: String, isRequired: false }
  // Required for:
  // - Categories appearing in header
  // - Categories with Subcategory children
  // - Articles with Category parents
  navTitle: { type: String, isRequired: false },
  // Required for:
  // - Categories with Subcategory children
  // - Articles with Category parents
  navDescription: { type: String, isRequired: false },

  slug: { type: String },

  subCategories: [ // Only for "Category" pages
    { type: Reference<ContentPage>, isRequired: false },
  ],

  // allows markdown
  headline: { type: String },
  subhead: { type: String, isRequired: false },

  mainImage: {
    /* src/srcSet properties from the Contentful image API */
    isRequired: false,
  },
  mainImageAlt: { type: String, isRequired: false },

  modules: [
    { type: Reference }, // Can reference anything listed under MODULES below
  ],

  hasShareButtons: { type: boolean },
}

// example
{
  pageType: 'Category',

  overviewNavTitle: 'Overview',
  navTitle: 'Educational Experience',
  navDescription: 'A rundown of our philosophy',

  slug: 'educational-experience',

  subCategories: [
    <ContentPageReference>,
    <ContentPageReference>,
    <ContentPageReference>,
    <ContentPageReference>,
    <ContentPageReference>,
  ],

  headline: 'Passion for excellent education',
  subhead: 'If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results.',

  mainImage: {
    /* src/srcSet properties from the Contentful image API */
  },
  mainImageAlt: 'Our new DC campus',

  modules: [
    <BodyTextReference>,
    <PullQuoteReference>,
  ],

  hasShareButtons: true,
}

// notes
// - Headline alignment depends on page type
// - Subhead placement/alignment depends on page type/presence of mainImage
// - The order of sharing icons will be determined elsewhere in the CMS

/* === MODULES === */

/* BodyText */

// schema
{
  content: { type: { content: { type: String } } }, // allows markdown
};

// example
{
  content: {
    content: 'Content involving a lot of *markdown*\n\nAnd line breaks.',
  },
};

// notes
// - We will programatically determine whether a dropcap is needed
//   (for first BodyText on US)

// InsetImage/InsetVideo will be embedded inside BodyText

// Image - right aligned
```
![My alt tag](//contentful-url.com "Optional caption")
```

// Image - left aligned
```
![My alt tag--left](//contentful-url.com "Optional caption")
```

// Video - right aligned
```
![My alt tag](https://player.vimeo.com/video/243740445 "Optional caption")
```

// Video - left aligned
```
![My alt tag--left](https://player.vimeo.com/video/243740445 "Optional caption")
```

/* InlineImage */

// schema
{
  alt: { type: String },
  asset: {
    /* src/srcSet properties from the Contentful image API */
  },
  caption: { type: String, isRequired: false },
  shape: { type: String }, // either "Square" or "Rectangle"
};

// example
{
  alt: 'Our new Shenzhen campus',
  asset: {
    /* src/srcSet properties from the Contentful image API */
  },
  caption: 'Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et magnis dis parturient montes, nascetur.'
  shape: 'Rectangle',
};

/* Carousel */

// schema
{
  slides: [
    {
      type: {
        alt: { type: String },
        asset: {
          /* src/srcSet properties from the Contentful image API */
        },
        caption: { type: String, isRequired: false },
        shape: { type: String }, // "Square", "Rectangle", "Circle"
      },
    }
  ]
}

// example
{
  slides: [
    {
      alt: 'Our new Shenzhen campus',
      asset: {
        /* src/srcSet properties from the Contentful image API */
      },
      caption: 'Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et magnis dis parturient montes, nascetur.'
      shape: 'Rectangle',
    },
    {
      alt: 'Some great alt tag',
      asset: {
        /* src/srcSet properties from the Contentful image API */
      },
      shape: 'Circle',
    }
  ]
}

/* InlineVideo */

// schema
{
  // TBD whether we will also include alt & asset fields for a cover photo,
  // or just use the Vimeo asset
  caption: { type: String, isRequired: false },
  url: { type: String },
};

// example
{
  caption: 'Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et magnis dis parturient montes, nascetur.'
  url: 'https://vimeo.com/76979871',
}

/* Quote */

// schema
{
  content: { type: {
    content: { type: String },
  },
  source: { type: String, isRequired: false },
  style: { type: String }, // "PullQuote" or "BlockQuote"
}

// example
{
  content: {
    content: 'Ask not what your country can do for you—ask what you can do for your country.',
  },
  source: 'John F. Kennedy',
  style: 'PullQuote',
}

/* ThreeUpBreaker */

// schema
{
  title1: { type: String },
  content1: { type: { content: { type: String } } }, // allows markdown
  title2: { type: String },
  content2: { type: { content: { type: String } } }, // allows markdown
  title3: { type: String },
  content3: { type: { content: { type: String } } }, // allows markdown
}

// example
{
  title1: 'A School of One',
  content1: { content: 'Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time' },
  title2: 'Exceptional Facutly',
  content2: { content: 'Any parent knows what a child or two can do to a home in short order. Imagine what 2,500 can do to a school building! We must choose materials that can co-exist with the natural energy of children—or that can be replaced easily when it is time' },
  title3: 'Progressive Pedagogy',
  content3: { content: 'Though we will likely build the entire core and shell of the campus all at once (no parent wants a constant construction site as an environment), we will phase some portions of the interior. We are designing with that in mind so that we can keep disruption to a minimum.', },
}

/* SectionTitle */

// schema
{
  number: { type: Integer },
  title: { type: String }
}

// example
{
  number: 5,
  title: 'Our Upcoming Locations'
}

/* List */

// schema
{
  items: [ // 3-8 items allowed
    {
      title: { type: String },
      description: { type: String }, // allows markdown
    }
  ]
}

// example
{
  items: [
    {
      title: 'First list item',
      description: 'Cursus magna, vel scelerisque nisl consectetur et.'
    },
    {
      title: 'Second list item',
      description: 'Cursus magna, vel scelerisque nisl consectetur et.'
    },
    {
      title: 'Third list item',
      description: '[Cursus magna](http://www.google.com), vel scelerisque nisl consectetur et.'
    }
  ]
}

/* PostWithDate */

// schema
{
  date: { type: String }, // in format YYYY-MM-DD
  title: { type: String },
  source: { type: String, isRequired: false },
  description: { type: String }, // supports markdown
  linkInternal: { type: String, isRequired: false },
  linkExternal: { type: Relation<ContentPage>, isRequired: false }
}

// example
{
  date: '2017-11-17',
  title: 'Whittle School announces DC campus',
  source: 'The New York Times',
  description: '[Cursus magna](http://www.google.com), vel scelerisque nisl consectetur et.',
  linkExternal: 'http://www.nytimes.com'
}

/* ListWithThumbnails */

// TODO address video schema

// schema
{
  title: { type: String },
  items: [ // 3-6 items
    {
      asset: {
        /* src/srcSet properties from the Contentful image API */
      },
      description: { type: String }, // allows markdown
      title: { type: String },
    }
  ]
}

// example
{
  title: 'Our heads',
  items: [
    {
      asset: { /* ... */ },
      description: '[Cursus magna](http://www.google.com), vel scelerisque nisl consectetur et.',
      title: 'Chris Whittle',
    },
    {
      asset: { /* ... */ },
      description: '[Cursus magna](http://www.google.com), vel scelerisque nisl consectetur et.',
      title: 'Work & Co',
    },
    {
      asset: { /* ... */ },
      description: '[Cursus magna](http://www.google.com), vel scelerisque nisl consectetur et.',
      title: 'John Smith',
    }
  ]
}
