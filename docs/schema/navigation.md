# Navigation

## Header

### Schema

```javascript
{
  contentPages: {
    type: [{ type: Reference<ContentPage> }],
  }
}
```

### Example

```javascript
{
  contentPages: [
    Reference<ContentPage>,
    Reference<ContentPage>,
    Reference<ContentPage>,
    Reference<ContentPage>,
    Reference<ContentPage>,
  ]
}
```

## Footer

### Schema

```javascript
{
  primaryLink1: { type: FooterLink },
  utilityLink1: { type: FooterLink },
  utilityLink2: { type: FooterLink },
  utilityLink2Children: [{ type: FooterLink }],
  primaryLink2: { type: FooterLink },
  primaryLink2Children: [{ type: FooterLink }],
  primaryLink3: { type: FooterLink },
  primaryLink3Children: [{ type: FooterLink }],
  primaryLink4: { type: FooterLink },
  primaryLink4Children: [{ type: FooterLink }],
  primaryLink5: { type: FooterLink },
  primaryLink5Children: [{ type: FooterLink }],
  primaryLink6: { type: FooterLink },
  primaryLink6Children: [{ type: FooterLink }],
}
```

### FooterLink

#### Schema

```javascript
{
  linkTitle: { type: String },
  linkDestinationExternal { type: String, isRequired: false },
  linkDestinationInternal { type: Reference<ContentPage>, isRequired: false },
}
```

### Example - Internal

```javascript
{
  linkTitle: 'Architecture',
  linkDestinationInternal: Reference<ContentPage>
}
```

### Example - External

```javascript
{
  linkTitle: 'Google',
  linkDestinationExternal: 'https://www.google.com'
}
```
