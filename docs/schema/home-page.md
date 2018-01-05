# HomePage

## Schema

```javascript
{
  seoMetaTitle: { type: String, isRequired: false },
  seoMetaDescription: { type: String, isRequired: false },

  headline: { type: String },

  campusOpeningDate: { type: String }, // in format YYYY-MM-DD

  schoolIntroImage: { type: ContentfulAsset },
  schoolIntroImageAlt: { type: String },
  schoolIntroTitle: { type: String },
  schoolIntroBodyText: { type: LongTextField },
  schoolIntroLinks: {
    type: [{ type: FooterLink }], // TODO when integrating, rename to Link
    isRequired: false,
  },

  videoModule: { type: Reference<VideoGroup>, isRequired: false }

  eventListTitle: { type: string },
  eventList: { type: Reference<EventList> },

  campusesTitle: { type: string },
  campusesModule: { type: Reference<Campuses> },

  teamsTitle: { type: string, isRequired: false },
  teamsModule: { type: Reference<Teams>, isRequired: false },
}
```
### Fields supporting markdown
- `headline`
- `schoolIntroBodyText`

## Example

```javascript
{
  seoMetaTitle: 'K-12 Private Education for Global Students',
  seoMetaDescription: `Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.`,

  headline: 'The first global school in _Shenzhen_',

  campusOpeningDate: '2019-01-18',

  schoolIntroImage: CONTENTFUL_ASSET_PROPS,
  schoolIntroImageAlt: 'Our new Shenzhen campus',
  schoolIntroTitle: `Imagine a network of schools created by an international
    consortium of educators, architects, artists and technologists.`,
  schoolIntroBodyText: {
    schoolIntroBodyText: `Imagine a network of schools created by a global
      consortium of educators, architects, artists and technologists. Imagine 1
      school with many campuses in the world’s top 30 cities connected by one
      faculty & a common curriculum implemented with a collective intelligence.
      From preschool through high school, our program is a seamless global
      experience.`,
    },
  schoolIntroLinks: [{
    linkTitle: 'Apply Now',
    linkDestinationInternal: Reference<ContentPage>
  }],

  videoModule: Reference<VideoGroup>,

  module1Title: 'Workshops',
  module1: Reference<PicModule>,

  module2: Reference<Campuses>

  module3Title: 'Teams',
  module3: Reference<Teams>
}
```
