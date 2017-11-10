# The Whittle School

## Setup

1. **Clone the repo:**

```sh
$ git clone https://github.com/workco/whittle-school.git
$ cd whittle-school
```

2. **Install dependencies**:

```sh
$ yarn
```

3. **Start dev server**:

```sh
$ yarn develop
```

4. **Build locally and start server**:

```sh
$ yarn start
$ yarn build
```

## Deployment

Each region has its own Netlify site:

- https://whit-us.netlify.com/
- https://whit-cn.netlify.com/

Pushing to the `qa` branch will trigger a deploy on **both** Netlify sites. To deploy `master`:

```
git push origin master:qa
```

Additionally, webhooks on the US and China Contentful spaces will update their respective Netlify sites.
