# Code conventions

## Array `key`s

When iterating over an array in jsx, we use the array's index as its child element's
key property.

```
things.map((thing, index) => (
  <Hello key={index} />
));
```

## Constants

Many of our constants need to be used on the server side (in and around our gatsby-node file) and the client side, so we use a special syntax:

```
exports.CAPITALIZED_CONSTANT_NAME = {
  CAPITALIZED_KEY: 'VALUE',
};
```

If a constant is used internally in the same file, please define and export separately:

```
const MY_CONSTANT = {
  SIZE: 4,
};

exports.MY_CONSTANT = MY_CONSTANT;

exports.MY_OTHER_CONSTANT = {
  [MY_CONSTANT.SIZE]: 'ANOTHER_SETTING',
};
```
