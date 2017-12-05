# Schema

Contentful schema in Javascript pseudocode to help us plan and document.

## Validations

Contentful fields will be externally validated for complex rules, eg:
`ContentPage` of type `Article` cannot have `subcategories`.

## Used In These Docs

### Enums

```javascript
PageTime = ["Category", "Article"];
ImageShapeStraight = ["Square", "Rectangle"];
ImageShape = ["Square", "Rectangle", "Circle"];
ContentPageModule = [
  "BodyText",
  "InlineImage",
  "Carousel",
  "InlineVideo",
  "Quote",
  "ThreeUpBreaker",
  "SectionTitle",
  "List",
  "DatedPost",
  "ThumbnailList",
];
HomePageModule = [
  "EventList",
  "Campuses",
  "Teams",
];
```

### Types

```javascript
// Automatically supports `resolutions` graphql queries for responsive srcSets
type ContentfulAsset;

/*
  Long text fields have a nested property under the field name, eg:
    myLongField = {
      myLongField: 'Lorem ipsum...',
    };
*/
type LongTextField = {
  type: {
    [FIELD_NAME]: { type: string },
  },
};
```

### Placeholders

```javascript
// props provided to ContentfulAsset
CONTENTFUL_ASSET_PROPS;
```
