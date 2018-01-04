# Schema

Contentful schema in Javascript pseudocode to help us plan and document.

## Denormalized Data Structure

Contentful allows us to nest content models inside one another. For example,
when defining our List module, we could give it a structure like this:

```javascript
{
  title: 'My list',
  items: [
    {
      title: 'Item 1',
      description: 'Description 1'
    },
    {
      title: 'Item 2',
      description: 'Description 2'
    }
  ]
}
```

To have an array like this, we would need to use two content models on
Contentful:

```javascript
// My main object is a *List*
{
  title: 'My list',
  items: [
    // Each item in here is a *ListItem*
    {
      title: 'Item 1',
      description: 'Description 1'
    },
    {
      title: 'Item 2',
      description: 'Description 2'
    }
  ]
}
```

Then, in our graphql, we would query the info like this:

```javascript
list {
  title
  items {
    title
    description
  }
}
```

Settings things up this way has some advantages:

- It's easy to apply length validations on Contentful
- The graphql and component code is very simple

But, this approach has one big disadvantage: it makes the content harder to
enter on Contentful. Editors must publish each nested module individually.
People who aren't developers can get lost in the different levels on Contentful.

This might not be a problem if our list was a top-level component, but since
it's already going to be nested as a module of the ContentPage content model,
having separate List and ListItem models would mean three levels of nesting.

To avoid this confusion, we've adopted a denormalized data structure for this
project. We would set up the same list like this:

```javascript
list {
  title: 'My list',

  item1Title: 'Title 1',
  item1Description: 'Description 1',

  item2Title: 'Title 2',
  item2Description: 'Description 2',
}
```

And the graphql like this:

```javascript
list {
  title
  item1Title
  item1Description
  item2Title
  item2Description
}
```

The code is a little more complicated, but we avoid a level of nesting, which
will simplify data entry for editors.

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
