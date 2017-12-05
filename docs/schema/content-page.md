# ContentPage

## Schema

```javascript
{
  pageType: { type: PageType },

  seoMetaTitle: { type: String, isRequired: false },
  seoMetaDescription: { type: String, isRequired: false },

  overviewNavTitle: { type: String, isRequired: false }
  navTitle: { type: String, isRequired: false },
  navDescription: { type: String, isRequired: false },

  slug: { type: String },

  subCategories: {
    type: [{ type: Reference<ContentPage> }],
    isRequired: false,
  },

  headline: { type: String },
  subhead: { type: String, isRequired: false },

  mainImage: { type: ContentfulAsset, isRequired: false },
  mainImageAlt: { type: String, isRequired: false },

  modules: {
    type: [{ type: Reference<ContentPageModule> }],
  }

  hasShareButtons: { type: boolean },
}
```

### Fields supporting markdown
- `headline`

## Example

```javascript
{
  pageType: 'Category',

  seoMetaTitle: 'Educational Programming',
  seoMetaDescription: `Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.`,

  overviewNavTitle: 'Overview',
  navTitle: 'Educational Experience',
  navDescription: 'A rundown of our philosophy',

  slug: 'educational-experience',

  subCategories: [
    Reference<Module>,
    Reference<Module>,
    Reference<Module>,
    Reference<Module>,
  ],

  headline: 'Passion for excellent education',
  subhead: `If it is essential for a school to understand well what it wants to
    help its students achieve, it is equally important for a school to know how
    it can deliver those results.`,

  mainImage: CONTENTFUL_ASSET_PROPS,
  mainImageAlt: 'Our new DC campus',

  modules: [
    Reference<BodyText>,
    Reference<PullQuote>,
  ],

  hasShareButtons: true,
}
```
