# HomePage

## Schema

```javascript
{
  seoMetaTitle: { type: String, isRequired: false },
  seoMetaDescription: { type: String, isRequired: false },

  headline: { type: String },

  hero: { type: Reference<Hero> },

  videoModule: { type: Reference<VideoGroup>, isRequired: false }

  eventList: { type: Reference<EventList> },

  campusesTitle: { type: string },
  campusesModule: { type: Reference<Campuses> },

  teamsTitle: { type: string, isRequired: false },
  teamsModule: { type: Reference<Teams>, isRequired: false },
}
```
### Fields supporting markdown
- `headline`
- `schoolIntroBodyText`

## Example

```javascript
{
  seoMetaTitle: 'K-12 Private Education for Global Students',
  seoMetaDescription: `Duis aute irure dolor in reprehenderit in voluptate velit
    esse cillum dolore eu fugiat nulla pariatur.`,

  headline: 'The first global school in _Shenzhen_',
  
  hero: Reference<Hero>,

  videoModule: Reference<VideoGroup>,

  module1: Reference<EventList>,

  module2: Reference<Campuses>

  module3Title: 'Teams',
  module3: Reference<Teams>
}
```
