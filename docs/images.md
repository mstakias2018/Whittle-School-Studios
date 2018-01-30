# Images

## Contentful API

Contentful provides a rich [image API](https://www.contentful.com/developers/docs/references/images-api/). Gatsby exposes and enhances this API so that we can crop an image and retrieve an srcSet for all available resolutions up to 3x.

Example:

Let's say we have an asset that is 2000 x 2000 pixels.

If we request:

```
  {
    <IMAGE NODE NAME> {
      large: resolutions(width: 1000, height: 500) {
        src
        srcSet
      }
    }
  }
```

We'll get something like:

```
  {
    <IMAGE NODE NAME> {
      large: {
        src: "contentfulCDN.com/image-cropped-to-1000x500",
        srcSet: "
          contentfulCDN.com/image-cropped-to-1000x500.jpg 1x,
          contentfulCDN.com/image-cropped-to-1500x750.jpg 1.5x,
          contentfulCDN.com/image-cropped-to-2000x1000.jpg 2x
        "
      }
    }
  }
```

In this case we only received up to 2x resolution because of the size of the asset. If the original asset had been 3000px wide, we would have received an additional 3x resolution asset back.

## Downloading assets

Most people reference images directly on the Contentful CDN, but we may need to download our images because it's unlikely the Contentful CDN will be allowed in China. More on that at https://paper.dropbox.com/doc/09-Contentful-Assets-AwgceRjLKspqcKSNvFNya.

### Building the query

As we build each page, we execute a more advanced version of the above query. Our query includes the expected dimensions for our three main breakpoints (`SMALL`, `MEDIUM`, and `LARGE`), plus three interim breakpoints (`SMALL_MID`, `MEDIUM_MID`, and `LARGE_MID`). This is to account for changing image sizes within a breakpoint. For example, an image may need to be 270px at a 320px viewport, but at the upper end of the small breakpoint, it would need to be significantly larger - about 500px. Settings are defined for each image type in our `constants/image-config.js` file.

We define image sizes in terms of ratios and columns, then use our grid measurements to calculate dimensions.

```javascript
// CONFIG IN
{
  [IMAGE_SUBTYPE.MAIN_CATEGORY]: {
    [BREAKPOINTS_NAME.small]: { colRatio: 1, heightRatio: RATIO.SQUARE },
    [BREAKPOINTS_NAME.medium]: { colRatio: 1, heightRatio: RATIO.RECT },
    [BREAKPOINTS_NAME.large]: { colRatio: 1, heightRatio: 400 / 940 },
  },
  ...
};

// CONFIG OUT
{
  [IMAGE_SUBTYPE.MAIN_CATEGORY]: {
    [IMAGE_SIZE.SMALL]: {
      width: 270,
      height: 270,
    },
    [IMAGE_SIZE.SMALL_MID]: {
      width: 494,
      height: 494,
    },
    ...
  },
};
```

### Saving locally

Note: This feature is currently disabled. See Dropbox Paper for more information.

We save the images to our `static/` folder, whose contents will be copied into `public/` during the build process. This functionality is disabled in development mode to save time.

They are organized like this:

```
main <image type>
  |- 123344555 <page ID>
    |-sm <image size>
      |- filename.jpg
      |-1x
        |- filename.jpg
      |-1.5x
        |- filename.jpg
      |-2x
        |- filename.jpg
```

When necessary, add one or more extra folder levels to disambiguate between images:

```
main <image type>
  |- 123344555 <page ID>
    |- 1 <module index>
      |- 1 <slide index>
        |-sm <image size>
          |- filename.jpg
          |-1x
            |- filename.jpg
          |-1.5x
            |- filename.jpg
          |-2x
            |- filename.jpg
```

## Passing image data to the template

For each ContentPage, we create an `imageDataByType` map that will look like this:

```
  {
    main: {
      sm: {
        srcSet: [ '<imagepath>.jpg 1x', '<imagepath>.jpg 1.5x' ],
        src: '<imagepath>.jpg'
      },
      ...
    }
    ...
  }
```

### Image types and subtypes

Image types to not affect configuration but help us organize images in the `imageDataByType` object. For example, the `imageDataByType` object for a content page might be:

```
  {
    [IMAGE_TYPE.MAIN]: { /* image info for the main image */ },
    [IMAGE_TYPE.MODULES]: [
      { /* image info for the first page module */ },
      { /* image info for the second page module */ },
    ]
  }
```

Image subtypes correspond to specific size/ratio configurations in `constants/image-config.js`.
