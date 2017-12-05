# HomePage Modules

## EventList

### Schema

```javascript
{
  cityName: { type: String },
  description: { type: LongTextField },
  list: {
    type: [{
      date: { type: String }, // format YYYY-MM-DD
      titleLine1: { type: String },
      titleLine2: { type: String, isRequired: false },
      location: { type: String },
      description: { type: LongTextField },
      registrationLink: { type: String },
    }]
  }
}
```

### Example

```javascript
{
  cityName: 'Washington, D.C.',
  description: {
    description: 'Cursus magna, vel scelerisque nisl consectetur et.',
  },
  list: [{
    date: '2018-03-20',
    titleLine1: 'PYP Workshop',
    titleLine2: '(Ages 3-5)',
    location: 'Verizon Center',
    description: {
      description: 'Cursus magna, vel scelerisque nisl consectetur et.',
    },
    registrationLink: 'http://www.openapply.com/register/123',
  }],
}
```
