/* === CATEGORY/SUBCATEGORY PAGES == */

// Note: How UI displays sometimes depends on the "page type" - whether a page is a category or subcategory.

// schema
{
  // allows markdown
  headline: { type: String },

  // determines page type
  isCategory: { type: boolean },

  mainImage: {
    type: {
      title: { type: String },
      /* + more src/srcSet properties from the Contentful image API */
    },
    isRequired: false,
  },

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
    title: 'Our new Shenzhen campus',
    /* + more src/srcSet properties from the Contentful image API */
  },

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
  title: { type: String },
  description: { type: String, isRequired: false }, // allows markdown
  /* + more src/srcSet properties from the Contentful image API */
};

// example
{
  title: 'Our new Shenzhen campus',
  description: 'Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et magnis dis parturient montes, nascetur.'
  /* + more src/srcSet properties from the Contentful image API */
};

/* Carousel */

// schema
{
  slides: [
    {
      image: {
        type: {
          {
            title: { type: String },
            description: { type: String, isRequired: false }, // allows markdown
            /* + more src/srcSet properties from the Contentful image API */
          };
        }
      },
      isCircle: { type: Boolean }
    }
  ]
}

// example
{
  slides: [
    {
      image: {
        title: 'Our new Shenzhen campus',
        description: 'Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et magnis dis parturient montes, nascetur.'
        /* + more src/srcSet properties from the Contentful image API */
      },
      isCircle: true,
    },
    {
      image: {
        title: 'Our new Shenzhen campus',
        description: 'Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et magnis dis parturient montes, nascetur.'
        /* + more src/srcSet properties from the Contentful image API */
      },
      isCircle: false,
    }
  ]
}
