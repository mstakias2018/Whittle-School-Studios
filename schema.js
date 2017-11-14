/* === CATEGORY/SUBCATEGORY PAGES == */

// Note: How UI displays sometimes depends on the "page type" - whether a page is a category or article.

// schema
{
  // allows markdown
  headline: { type: String },

  // determines page type TODO FIX THIS
  isCategory: { type: boolean },

  mainImage: {
    /* src/srcSet properties from the Contentful image API */
    isRequired: false,
  },
  mainImageAlt: { type: String, isRequired: false },

  // allows markdown
  subhead: { type: String, isRequired: false },

  modules: []

  hasShareButtons: { type: boolean },
}

// example
{
  headline: 'Title with *markdown*',

  isCategory: true,

  mainImage: {
    /* src/srcSet properties from the Contentful image API */
  },
  mainImageAlt: 'Our new DC campus',

  modules: [ /* ... */ ],

  subhead: 'If it is essential for a school to understand well what it wants to help its students achieve, it is equally important for a school to know how it can deliver those results.',

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
  content: { type: String }, // allows markdown
};

// example
{
  content: 'Content involving a lot of *markdown*\n\nAnd line breaks.',
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
