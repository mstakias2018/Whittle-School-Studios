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
      shape: { type: ImageShapeStraight },
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
  number: { type: Integer },
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
  items: {
    type: [
      {
        title: { type: String },
        description: { type: LongTextField },
      }
    ],
  },
}
```
#### Fields supporting markdown
- `description`

### Example

```javascript
{
  items: [
    {
      title: 'First list item',
      description: {
        description: 'Cursus magna, vel scelerisque nisl consectetur et.',
      },
    },
    {
      title: 'Second list item',
      description: {
        description: 'Cursus magna, vel scelerisque nisl consectetur et.',
      },
    },
    {
      title: 'Third list item',
      description: {
        description: `[Cursus magna](http://www.google.com), vel scelerisque
          nisl consectetur et.`,
      },
    }
  ]
}
```

## DatedPost

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
  items: {
    type: [
      {
        asset: { type: ContentfulAsset },
        description: { type: LongTextField },
        title: { type: String },
      }
    ],
  },
}
```
#### Fields supporting markdown
- `description`

### Example

```javascript
{
  title: 'Our heads',
  items: [
    {
      asset: CONTENTFUL_ASSET_PROPS,
      description: {
        description: `[Cursus magna](http://www.google.com), vel scelerisque nisl
          consectetur et.`,
      },
      title: 'Chris Whittle',
    },
    {
      asset: CONTENTFUL_ASSET_PROPS,
      description: {
        description: `[Cursus magna](http://www.google.com), vel scelerisque nisl
          consectetur et.`,
      },
      title: 'Work & Co',
    },
    {
      asset: CONTENTFUL_ASSET_PROPS,
      description: {
        description: `[Cursus magna](http://www.google.com), vel scelerisque nisl
          consectetur et.`,
      },
      title: 'John Smith',
    }
  ]
}
```
