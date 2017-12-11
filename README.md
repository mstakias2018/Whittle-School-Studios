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

There are also China-specific `yarn develop-china` and `yarn build-china`
commands.

### Clearing Cache

To clear the cache while running `build` or `develop` and force fresh Contentful content, run `rm -rf .cache public` first.

### Mobile

To develop on a mobile device on your local network:

```
yarn develop -- --host <YOUR IP ADDRESS>
```

## Environments/Deployment

Read about these in the [annotations](https://paper.dropbox.com/doc/04-Global-Contentful-Notes-KFbCCPZhz9DWRbldpRJEe).

### Staging

We have a `SiteInfo` component that provides information on the most recent
build when on the staging branch. Read more on [Paper](https://paper.dropbox.com/doc/04-Staging-Environment-uvK4leT1LDsMWjFVy2xZM).

## Adding Translations

- Add translations to the JSON object on the [Dev China](https://app.contentful.com/spaces/udx5f2jyw09i/entries/qUHfYUmG8o4MCaEWoukuu)
Contentful space (you can use fake Chinese values).
- After development, run `yarn copy-cn-to-us` to copy the English values you've
provided to the Dev US Contentful space.

## Branches & Linting

### Branches

Assume we have a branch `my-branch`. As soon as it is pushed, a Netlify build
kicks off for each site. When complete, the builds will be available at:

- https://my-branch--whit-us.netlify.com/
- https://my-branch--whit-cn.netlify.com/

This build process will not be linted so it's easy to share WIP branches.

### Pull Requests

Assume we create PR #100. Netlify will again kick off a build. When complete,
the builds will live at:

- https://deploy-preview-100--whit-us.netlify.com/
- https://deploy-preview-100--whit-cn.netlify.com/

These preview builds will run our `lint-js` and `lint-css` tasks and fail if
either hits an error. This will enforce PR quality.

## `/dev` Pages

We have some pages under the `/dev` route that support testing and validation.
These are removed on the `production` branch in the `deleteDevPages` util.

### Validator

One dev page is the validator, which runs a report on all Contentful content to
report on rule violations that are too complex for Contentful.
