# Create Next App eXtended v.1.2.0

> "next": "10.0.0"

### Content

**[How to launch](#how-to-launch)**
**[What is this?](#what-is-this)**
**[Pre-commit](#pre-commit)**
**[Dependencies](#dependencies)**
**[License](#license)**

## How to launch:

1. `git clone`
2. `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git` to update the origin remote with your own repository / `git remote rm origin` to remove the origin remote
3. `yarn` / `npm i`
4. `yarn start` / `npm start`
5. Navigate to your localhost address
   (default is http://localhost:3000/)

For more info visit the [Next.js Getting Started section](https://nextjs.org/docs/getting-started).

P.S. Don't forget to remove extra info like keywords, repository, etc. from `package.json`.

## What is this?

_Create Next App eXtended_ or _CNAX_ is an opinionated version of [Create Next App](https://nextjs.org/docs/getting-started#setup).

It contains all the recent Next.js features +

- Basic styles adjustment: `"normalize.css": "^8.0.1"` and `./src/styles/misc`
- Set of SCSS/Sass mixins and variables in `./src/styles/includes`
- Pre-configured and customizable [Stylelint](https://stylelint.io/), [Prettier](https://prettier.io/) and [ESLint](https://eslint.org/) pushed in the webpack config through the `next.config.js`
- Pre-commit feature with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- [uniqid](https://github.com/adamhalasz/uniqid)
- `jsconfig.json`, that includes [absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)

## Pre-commit

_CNAX_ has a pre-commit script, based on [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). It looks like this:

```
"lint-staged": {
  "src/**/*.{js,jsx}": [
    "pretty-quick --pattern './src/**/*.{js,jsx}'",
    "eslint './src/**/*.{js,jsx}' --fix"
  ],
  "src/**/*.{scss,sass,css}": [
    "stylelint './src/**/*.{scss,sass,css}' --fix"
  ]
},
"husky": {
  "hooks": {
    "pre-commit": "lint-staged && yarn build && git add ."
  }
}
```

And it can be configured in any preferrable way. Enjoy!

## Dependencies

You **should** `yarn upgrade --latest` / `npm update && npm audit fix -f` as _CNAX_ will always be ok working with the latest versions of the dependencies, so it is **strongly recommended**. If anything goes wrong, visit the [Next.js docs](https://nextjs.org/docs) for explanations.

```
"dependencies": {
  "next": "10.0.0",
  "normalize.css": "^8.0.1",
  "react": "17.0.1",
  "react-dom": "17.0.1"
},
"devDependencies": {
  "babel-eslint": "^10.1.0",
  "eslint": "^7.12.1",
  "eslint-config-airbnb": "^18.2.0",
  "eslint-config-prettier": "^6.15.0",
  "eslint-config-react-app": "^6.0.0",
  "eslint-loader": "^4.0.2",
  "eslint-plugin-flowtype": "^5.2.0",
  "eslint-plugin-import": "^2.22.1",
  "eslint-plugin-jsx-a11y": "^6.4.1",
  "eslint-plugin-prettier": "^3.1.4",
  "eslint-plugin-react": "^7.21.5",
  "eslint-plugin-react-hooks": "^4.2.0",
  "husky": "^4.3.0",
  "lint-staged": "^10.5.1",
  "prettier": "^2.1.2",
  "pretty-quick": "^3.1.0",
  "sass": "^1.28.0",
  "stylelint": "^13.7.2",
  "stylelint-config-standard": "^20.0.0",
  "stylelint-order": "^4.1.0",
  "stylelint-webpack-plugin": "^2.1.1"
},
```

## License

Copyright © 2020, based on Create Next App by Vercel, Inc.

Licensed under the MIT license.
