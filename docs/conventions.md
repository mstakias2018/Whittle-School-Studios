# Code conventions

## Array `key`s

When iterating over an array in jsx, we use the array's index as its child element's
key property.

```javascript
things.map((thing, index) => (
  <Hello key={index} />
));
```

## Constants

Many of our constants need to be used on the server side (in and around our gatsby-node file) and the client side, so we use a special syntax:

```javascript
exports.CAPITALIZED_CONSTANT_NAME = {
  CAPITALIZED_KEY: 'VALUE',
};
```

If a constant is used internally in the same file, please define and export separately:

```javascript
const MY_CONSTANT = {
  SIZE: 4,
};

exports.MY_CONSTANT = MY_CONSTANT;

exports.MY_OTHER_CONSTANT = {
  [MY_CONSTANT.SIZE]: 'ANOTHER_SETTING',
};
```

## Graphql

### IDs

Always use the `contentful_id` property instead of the regular `id` - this will
match the original Contentful ID without any padding added by Gatsby. See
https://github.com/gatsbyjs/gatsby/pull/3158 for more info.

Example:

```javascript
{
  id: contentful_id
}
```

### Long text fields

Long text fields are delivered to us in the form:

```javascript
{
  myFieldName: {
    myFieldName: 'I am a regular string',
  }
}
```

For consistency we can rename the inner field when querying:

```javascript
{
  myFieldName {
    content: myFieldName
  }
}
```

We replace `content` with `markdown` if the content supports Markdown:

```javascript
{
  myFieldName {
    markdown: myFieldName
  }
}
```

## CSS

Class names are hashed, which eliminates collisions with global scope, so there
is no need to prefix class names with the component title;

```css
/* Good */
.title { }
.form { }
.form_isDisabled{ }
.sendButton { }
```

```css
/* Avoid */
.myComponent_title { }
.MyComponent_form { }
```
