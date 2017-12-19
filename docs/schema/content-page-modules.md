# ContentPage Modules

## BodyText

### Schema

```javascript
{
  content: { type: LongTextField },
}
```

#### Fields supporting markdown
- `content`

### Example

```javascript
{
  content: {
    content: 'Content involving a lot of *markdown*\n\nAnd line breaks.',
  },
}
```

### InsetImage/InsetVideo

Image - right aligned
```
![My alt tag](//contentful-url.com "Optional caption")
```

Image - left aligned
```
![My alt tag--left](//contentful-url.com "Optional caption")
```

Image - circle mask
```
![My alt tag--circle](//contentful-url.com "Optional caption")
```

Note: Circle/left attributes can be combined in any order. These are both valid:

- `My alt tag--circle--left`
- `My alt tag--left--circle`

Video - right aligned
```
![My alt tag](https://player.vimeo.com/video/243740445 "Optional caption")
```

Video - left aligned
```
![My alt tag--left](https://player.vimeo.com/video/243740445 "Optional caption")
```

## InlineImage

### Schema

```javascript
{
  alt: { type: String },
  asset: { type: ContentfulAsset },
  caption: { type: String, isRequired: false },
  shape: { type: ImageShapeStraight },
}
```

### Example

```javascript
{
  alt: 'Our new Shenzhen campus',
  asset: CONTENTFUL_ASSET_PROPS,
  caption: `Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et
    magnis dis parturient montes, nascetur.`,
  shape: 'Rectangle',
};
```

## Carousel

### Schema

```javascript
{
  slides: {
    type: [
      alt: { type: String },
      asset: { type: ContentfulAsset },
      caption: { type: String, isRequired: false },
      shape: { type: ImageShape },
    ],
  },
}
```

### Example

```javascript
{
  slides: [{
    alt: 'Our new Shenzhen campus',
    asset: CONTENTFUL_ASSET_PROPS,
    caption: `Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et
      magnis dis parturient montes, nascetur.`,
    shape: 'Rectangle',
  }],
};
```

## InlineVideo

### Schema

```javascript
{
  // TBD whether we will also include alt & asset fields for a cover photo,
  // or just use the Vimeo asset
  caption: { type: String, isRequired: false },
  url: { type: String },
}
```

### Example

```javascript
{
  caption: `Caption Loreum Ipsum: Lorem ipsum cum sociis natoque penatibus et
  magnis dis parturient montes, nascetur.`,
  url: 'https://vimeo.com/76979871',
}
```

## Quote

### Schema

```javascript
type QuoteStyle = ["PullQuote", "BlockQuote"];

{
  content: { type: LongTextField },
  source: { type: String, isRequired: false },
  style: { type: QuoteStyle },
}
```

### Example

```javascript
{
  content: {
    content: `Ask not what your country can do for you—ask what you can do for
      your country.`,
  },
  source: 'John F. Kennedy',
  style: 'PullQuote',
}
```

## ThreeUpBreaker

### Schema

```javascript
{
  title1: { type: String },
  content1: { type: LongTextField },
  title2: { type: String },
  content2: { type: LongTextField },
  title3: { type: String },
  content3: { type: LongTextField },
}
```
#### Fields supporting markdown
- `content1`
- `content2`
- `content3`

### Example

```javascript
{
  title1: 'A School of One',
  content1: {
    content1: `Any parent knows what a child or two can do to a home in short
      order. Imagine what 2,500 can do to a school building! We must choose
      materials that can co-exist with the natural energy of children—or that
      can be replaced easily when it is time`,
  },
  title2: 'Exceptional Faculty',
  content2: {
    content2: `Any parent knows what a child or two can do to a home in short
      order. Imagine what 2,500 can do to a school building! We must choose
      materials that can co-exist with the natural energy of children—or that
      can be replaced easily when it is time`,
  },
  title3: 'Progressive Pedagogy',
  content3: {
    content3: `Any parent knows what a child or two can do to a home in short
      order. Imagine what 2,500 can do to a school building! We must choose
      materials that can co-exist with the natural energy of children—or that
      can be replaced easily when it is time`,
  },
}
```

## SectionTitle

### Schema

```javascript
{
  number: { type: String },
  title: { type: String }
}
```

### Example

```javascript
{
  number: 5,
  title: 'Our Upcoming Locations'
}
```

## List

### Schema

```javascript
{
  {
    title1: { type: String },
    description1: { type: LongTextField },
    title2: { type: String },
    description2: { type: LongTextField },
    title3: { type: String },
    description3: { type: LongTextField },
    title4: { type: String },
    description4: { type: LongTextField },
    title5: { type: String },
    description5: { type: LongTextField },
    title6: { type: String },
    description6: { type: LongTextField },
    title7: { type: String },
    description7: { type: LongTextField },
    title8: { type: String },
    description8: { type: LongTextField },
  }
}
```
#### Fields supporting markdown
- `description`

### Example

```javascript
{
  title1: 'First list item',
  description1: {
    description1: 'Cursus magna, vel scelerisque nisl consectetur et.',
  },

  title2: 'Second list item',
  description2: {
    description2: 'Cursus magna, vel scelerisque nisl consectetur et.',
  },

  title3: 'Third list item',
  description3: {
    description3: `[Cursus magna](http://www.google.com), vel scelerisque
      nisl consectetur et.`,
  },
}
```

## Post

### Schema

```javascript
{
  date: { type: String }, // in format YYYY-MM-DD
  title: { type: String },
  source: { type: String, isRequired: false },
  description: { type: LongTextField },
  linkInternal: { type: String, isRequired: false },
  linkExternal: { type: Reference<ContentPage>, isRequired: false }
}
```
#### Fields supporting markdown
- `description`

### Example

```javascript
{
  date: '2017-11-17',
  title: 'Whittle School announces DC campus',
  source: 'The New York Times',
  description: {
    description: `[Cursus magna](http://www.google.com), vel scelerisque nisl
      consectetur et.`,
  },
  linkExternal: 'http://www.nytimes.com'
}
```

## ThumbnailList

### Schema

```javascript
{
  title: { type: String },

  item1Asset: { type: ContentfulAsset },
  item1Description: { type: LongTextField },
  item1ImageAlt: { type: String },
  item1Title: { type: String },

  item2Asset: { type: ContentfulAsset },
  item2Description: { type: LongTextField },
  item2ImageAlt: { type: String },
  item2Title: { type: String },

  item3Asset: { type: ContentfulAsset },
  item3Description: { type: LongTextField },
  item3ImageAlt: { type: String },
  item3Title: { type: String },

  item4Asset: { type: ContentfulAsset, isRequired: false },
  item4Description: { type: LongTextField, isRequired: false },
  item4ImageAlt: { type: String, isRequired: false },
  item4Title: { type: String, isRequired: false },

  item5Asset: { type: ContentfulAsset, isRequired: false },
  item5Description: { type: LongTextField, isRequired: false },
  item5ImageAlt: { type: String, isRequired: false },
  item5Title: { type: String, isRequired: false },

  item6Asset: { type: ContentfulAsset, isRequired: false },
  item6Description: { type: LongTextField, isRequired: false },
  item6ImageAlt: { type: String, isRequired: false },
  item6Title: { type: String, isRequired: false },
}
```
#### Fields supporting markdown
- `description`

### Example

```javascript
{
  title: 'Our heads',

  item1Asset: CONTENTFUL_ASSET_PROPS,
  item1Description: {
    item1Description: `[Cursus magna](http://www.google.com), vel scelerisque nisl
      consectetur et.`,
  },
  item1Title: 'Chris Whittle',

  item2Asset: CONTENTFUL_ASSET_PROPS,
  item2Description: {
    item2Description: `[Cursus magna](http://www.google.com), vel scelerisque nisl
      consectetur et.`,
  },
  item2Title: 'Work & Co',

  item3Asset: CONTENTFUL_ASSET_PROPS,
  item3Description: {
    item3Description: `[Cursus magna](http://www.google.com), vel scelerisque nisl
      consectetur et.`,
  },
  item3Title: 'John Smith',
}
```

## VideoGroup

A collection of videos that will be featured on the homepage, but which can also
be added to content pages.

### Schema

```javascript
{
  title: { type: String },

  video1Url: { type: string }, // TODO finalize all video props
  video1Title: { type: string },
  video1Description: { type: LongTextField },
  video1Link: { type: Reference<ContentPage>, isRequired: false }

  video2Url: { type: string }, // TODO finalize all video props
  video2Title: { type: string },
  video2Description: { type: LongTextField },
  video2Link: { type: Reference<ContentPage>, isRequired: false }

  video3Url: { type: string }, // TODO finalize all video props
  video3Title: { type: string },
  video3Description: { type: LongTextField },
  video3Link: { type: Reference<ContentPage>, isRequired: false }
}
```

#### Fields supporting markdown
- `description`

### Example

```javascript
{
  title: 'Educational Program',

  video1Title: 'Global experiences',
  video1Description: {
    description: 'Cursus _magna_, vel scelerisque nisl consectetur et.',
  },
  video1Link: { type: Reference<ContentPage> },
  video1Url: 'vimeo.com/123',
}
```

## Team

List of team members and statistics that will be featured on the homepage, but
which can also be added to content pages.

### Schema

```javascript
{
  heroBio: { type: Reference<Bio> },
  heroLearnMoreLink: { type: Reference<ContentPage> },

  // TODO What's the min number of sections? Assuming 1
  section1Title: { type: String },
  section1SeeAllLink: { type: Reference<ContentPage> },
  section1Bios: {
    type: [
      { type: Reference<Bio> }
    ],
  }

  section2Title: { type: String },
  section2SeeAllLink: { type: Reference<ContentPage> },
  section2Bios: {
    type: [
      { type: Reference<Bio> }
    ],
  }

  section3Title: { type: String },
  section3SeeAllLink: { type: Reference<ContentPage> },
  section3Bios: {
    type: [
      { type: Reference<Bio> }
    ],
  }

  section4Title: { type: String },
  section4SeeAllLink: { type: Reference<ContentPage> },
  section4Bios: {
    type: [
      { type: Reference<Bio> }
    ],
  }

  section5Title: { type: String },
  section5SeeAllLink: { type: Reference<ContentPage> },
  section5Bios: {
    type: [
      { type: Reference<Bio> }
    ],
  }

  statistics: {
    type: [
      { type: Reference<StatisticPercentage|StatisticRatio> }
    ]
  }
}
```

### Example

```javascript
{
  heroBio: Reference<Bio>,
  heroLearnMoreLink: Reference<ContentPage>,

  section1Title: 'Board of Directors',
  section1SeeAllLink: Reference<ContentPage>,
  section1Bios: [
    Reference<Bio>,
    Reference<Bio>,
  ],

  statistics: [
    Reference<StatisticPercentage>,
    Reference<StatisticRatio>,
  ],
}
```

### Bio

#### Schema

```javascript
{
  image: { type: ContentfulAsset },
  name: { type: String },
  title: { type: String },
  description: { type: LongTextField },
}
```

#### Example

```javascript
{
  image: CONTENTFUL_ASSET_PROPS,
  name:  'Chris Whittle',
  title: 'Founder',
  description: {
    description: 'Cursus magna, vel scelerisque nisl consectetur et.',
  },
}
```

### StatisticPercentage

#### Schema

```javascript
{
  value: { type: Integer },
  description: { type: LongTextField },
}
```

#### Example

```javascript
{
  value: 80,
  description: "Of our team holds a master's agree from an Ivy League institution",
}
```

### StatisticRatio

#### Schema

```javascript
{
  value1: { type: Integer },
  value2: { type: Integer },
  description: { type: LongTextField },
}
```

#### Example

```javascript
{
  value1: 1,
  value1: 2,
  description: 'Members of our team speaks at least two languages'
}
```
