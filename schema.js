/* === CATEGORY/SUBCATEGORY PAGES == */

// Note: How UI displays sometimes depends on the "page type" - whether a page is a category or article.

// schema
{
  pageType: { type: String }, // "Category" or "Article"
  slug: { type: String },

  // allows markdown
  headline: { type: String },
  // allows markdown
  subhead: { type: String, isRequired: false },

  mainImage: {
    /* src/srcSet properties from the Contentful image API */
    isRequired: false,
  },
  mainImageAlt: { type: String, isRequired: false },

  modules: []

  hasShareButtons: { type: boolean },
}

// example
{
  pageType: 'Category',
  slug: 'title-with-markdown',

  headline: 'Title with *markdown*',
  subhead: 'If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results.',

  mainImage: {
    /* src/srcSet properties from the Contentful image API */
  },
  mainImageAlt: 'Our new DC campus',

  modules: [ /* ... */ ],

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

/* InlineImage */

// schema
{
  alt: { type: String },
  asset {
    /* src/srcSet properties from the Contentful image API */
  },
  caption: { type: String, isRequired: false }, // allows markdown
  shape: { type: String }, // either "Square" or "Rectangle"
};

// example
{
  alt: 'Our new Shenzhen campus',
  asset {
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
        asset {
          /* src/srcSet properties from the Contentful image API */
        },
        caption: { type: String, isRequired: false }, // allows markdown
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
      asset {
        /* src/srcSet properties from the Contentful image API */
      },
      caption: 'Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et magnis dis parturient montes, nascetur.'
      shape: 'Rectangle',
    },
    {
      alt: 'Some great alt tag',
      asset {
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
  caption: { type: String, isRequired: false }, // allows markdown
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
