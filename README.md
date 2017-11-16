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

### China

There are also China-specific `yarn develop-china` and `yarn build-china` commands.

### Mobile

To develop on a mobile device on your local network:

```
yarn develop -- --host <YOUR IP ADDRESS>
```

## Environments

Right now we have four Contentful spaces:

- US Dev
- China Dev
- US QA
- China QA

The Dev spaces are used for local development and branch previews on Netlify. The QA environments are used for testing on Netlify.

When developing using Contentful, it's recommended to make changes to the China Dev space, as this allows for local testing in English and Chinese. To copy any new content over to the US Dev space, run:

```
yarn copy-cn-to-us
```

This will copy all the China Dev content in the `en-US` locale over to the US Dev space.

## Deployment

Each region has its own Netlify site:

- https://whit-us.netlify.com/
- https://whit-cn.netlify.com/

Pushing to the `qa` branch will trigger a deploy on **both** Netlify sites. Additionally, webhooks on the US and China Contentful spaces will update their respective Netlify sites.

To trigger a deploy, run:

```
yarn deploy
```

This will:

1. Copy our US/China Dev Contentful space content to their respective QA spaces.
2. Run `git push origin master:qa` to update the code on the QA branch.
