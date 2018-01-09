# HomePage Modules

## Hero

### Schema

```javascript
{
  title: { type: String },
  countdownDate: { type: String },
  countdownTitle: { type: String },
  description: { type: LongTextField },
  image: { type: ContentfulAsset },
  imageAlt: { type: String },
  link: { type: Reference<FooterLink> },
  eventListTitle: { type: String },
  videos: { type: Reference<Videos> },
}
```

### Example

```javascript
{
  title: 'Imagine a network of schools, created by an international consortium of educators, architects, artists and technologists.',
  description: 'Imagine a network of schools created by an international consortium of educators, architects, artists and technologists. Imagine one school with many campuses in the world’s top 30 cities connected by a single faculty and a common curriculum implemented with a collective intelligence. From preschool through high school, our program is a seamless global experience.',
  countdownDate: '2018-04-03',
  countdownTitle: 'Shenzhen Campus Opening',
  image: CONTENTFUL_ASSET_PROPS,
  imageAlt: 'Some image alt',
  link: Reference<FooterLink>,
  eventListTitle: 'Parent Information',
  videos: Reference<Videos>,
}
```

## EventList

### Schema

```javascript
{
  cityName: { type: String },
  introText: { tyep: LongTextField },
  sectionTitle: { type: String },
  event1Date: { type: String }, // format YYYY-MM-DD
  event1TitleLine1: { type: String },
  event1TitleLine2: { type: String, isRequired: false },
  event1Location: { type: String },
  event1Description: { type: LongTextField },
  event1RegistrationLink: { type: String },

  event2Date: { type: String, isRequired: false }, // format YYYY-MM-DD
  event2TitleLine1: { type: String, isRequired: false },
  event2TitleLine2: { type: String, isRequired: false },
  event2Location: { type: String, isRequired: false },
  event2Description: { type: LongTextField, isRequired: false },
  event2RegistrationLink: { type: String, isRequired: false },

  event3Date: { type: String, isRequired: false }, // format YYYY-MM-DD
  event3TitleLine1: { type: String, isRequired: false },
  event3TitleLine2: { type: String, isRequired: false },
  event3Location: { type: String, isRequired: false },
  event3Description: { type: LongTextField, isRequired: false },
  event3RegistrationLink: { type: String, isRequired: false },

  event4Date: { type: String, isRequired: false }, // format YYYY-MM-DD
  event4TitleLine1: { type: String, isRequired: false },
  event4TitleLine2: { type: String, isRequired: false },
  event4Location: { type: String, isRequired: false },
  event4Description: { type: LongTextField, isRequired: false },
  event4RegistrationLink: { type: String, isRequired: false },

  event5Date: { type: String, isRequired: false }, // format YYYY-MM-DD
  event5TitleLine1: { type: String, isRequired: false },
  event5TitleLine2: { type: String, isRequired: false },
  event5Location: { type: String, isRequired: false },
  event5Description: { type: LongTextField, isRequired: false },
  event5RegistrationLink: { type: String, isRequired: false },
}
```

### Example

```javascript
{
  cityName: 'Shenzhen',
  introText: 'Identifying and understanding the key differences between et.',
  sectionTitle: 'Workshops.',
  event1Date: '2018-03-20',
  event1TitleLine1: 'PYP Workshop',
  event1TitleLine2: '(Ages 3-5)',
  event1Location: 'Verizon Center',
  event1Description: {
    event1Description: 'Cursus magna, vel scelerisque nisl consectetur et.',
  },
  event1RegistrationLink: 'http://www.openapply.com/register/123',
}
```

## Videos

### Schema

```javascript
{
  title: { type: String, isRequired: false },
  
  video1Title: { type: String, isRequired: false },
  video1Link: { type: Reference<FooterLink>, isRequired: false },
  video1Description: { type: LongTextField, isRequired: false },
  video1AssetCoverPhoto: { type: ContentfulAsset, isRequired: false },
  video1ImageVideoAlt: { type: String },
  
  video2Title: { type: String, isRequired: false },
  video2Link: { type: Reference<FooterLink>, isRequired: false },
  video2Description: { type: LongTextField, isRequired: false },
  video2AssetCoverPhoto: { type: ContentfulAsset, isRequired: false },
  video2ImageVideoAlt: { type: String, isRequired: false },
  
  video3Title: { type: String, isRequired: false },
  video3Link: { type: Reference<FooterLink>, isRequired: false },
  video3Description: { type: LongTextField, isRequired: false },
  video3AssetCoverPhoto: { type: ContentfulAsset, isRequired: false },
  video3ImageVideoAlt: { type: String, isRequired: false },
}
```

### Example

```javascript
{
  title: 'Educational Program',
  video1Title: 'Global Experiences',
  video1Link: Reference<FooterLink>,
  video1Description: {
      video1Description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis.',
    },
  video1AssetCoverPhoto: CONTENTFUL_ASSET_PROPS,
  video1ImageVideoAlt: 'Global Experiences',
}
```

## Campuses

### Schema

```javascript
{
  sectionTitle: { type: String},
  
  image: { type: ContentfulAsset, isRequired: false },
  imageAlt: { type: String, isRequired: false },
  videoUrl: { type: String, isRequired: false }, // TODO finalize all video props

  architectImage: { type: ContentfulAsset },
  architectName: { type: String },
  architectQuote: { type: LongTextField },

  description: { type: LongTextField },
  linkTitle: { type: String, isRequired: false },
  linkDestination: { type: Reference<ContentPage>, isRequired: false },
}
```

#### Fields supporting markdown
- `architectQuote`
- `description`

### Example

```javascript
{
  sectionTitle: 'Campuses.',
  
  image: CONTENTFUL_ASSET_PROPS,
  imageAlt: 'Shenzhen campus',

  architectImage: CONTENTFUL_ASSET_PROPS,
  architectName: 'Renzo Piano',
  architectQuote: {
    architectQuote: 'Cursus magna, vel scelerisque nisl consectetur et.',
  },

  description: {
    description: 'Cursus magna, vel scelerisque nisl consectetur et.',
  },
  linkTitle: 'Explore the campuses',
  linkDestination: Reference<ContentPage>,
}
```
