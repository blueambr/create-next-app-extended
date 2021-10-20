# Create Next App eXtended v.2.1.0

> "next": "11.1.2"

### Content

- **[How to launch](#how-to-launch)**
- **[What is this?](#what-is-this)**
- **[Pre-commit](#pre-commit)**
- **[Dependencies](#dependencies)**
- **[License](#license)**

## How to launch:

1. `git clone`
2. `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git` to update the origin remote with your own repository / `git remote rm origin` to remove the origin remote
3. `npm i` or `npm i --legacy-peer-deps`, if `npm i` throws errors
4. `npm run dev`
5. Navigate to your localhost address
   (default is http://localhost:3000/)
6. `npm run build` to create a build for production
7. `npm run start` to run the production build

For more info visit [Next.js Getting Started](https://nextjs.org/docs/getting-started).

P.S. Don't forget to remove extra info like keywords, repository etc. from `package.json`.

## What is this?

_Create Next App eXtended_ or _CNAX_ is an opinionated version of [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

It contains all the recent Next.js features +

- Basic styles adjustment and some of Bulma modules in `src/styles/global` and `src/styles/misc`
- Set of Sass/SCSS mixins and variables in `src/styles/includes`
- Pre-configured and customizable [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/)
- Pre-commit feature with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- `next.config.js`, which includes [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin) and [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin)
- `jsconfig.json`, which includes [absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)

## Pre-commit

_CNAX_ has a pre-commit feature, based on [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged). It looks like this:

**lint-staged** in `package.json`:

```
"lint-staged": {
  "src/**/*.{js,jsx}": [
    "pretty-quick --pattern './src/**/*.{js,jsx}'",
    "eslint './src/**/*.{js,jsx}' --fix"
  ],
  "src/**/*.{css,sass,scss}": [
    "stylelint './src/**/*.{css,sass,scss}' --fix"
  ]
}
```

**pre-commit** in `.husky/pre-commit`:

```
npm run lint
```

And it can be configured in any preferrable way. Enjoy!

## Dependencies

```
"dependencies": {
  "bulma": "^0.9.3",
  "next": "11.1.2",
  "normalize.css": "^8.0.1",
  "react": "17.0.2",
  "react-dom": "17.0.2"
},
"devDependencies": {
  "@typescript-eslint/eslint-plugin": "^5.1.0",
  "@typescript-eslint/parser": "^5.1.0",
  "conventional-changelog-cli": "^2.1.1",
  "eslint": "^8.0.1",
  "eslint-config-next": "^11.1.2",
  "eslint-config-prettier": "^8.3.0",
  "eslint-plugin-prettier": "^4.0.0",
  "eslint-webpack-plugin": "^3.0.1",
  "husky": "^7.0.2",
  "lint-staged": "^11.2.3",
  "prettier": "^2.4.1",
  "pretty-quick": "^3.1.1",
  "sass": "^1.43.2",
  "stylelint": "^13.13.1",
  "stylelint-config-standard": "^22.0.0",
  "stylelint-order": "^4.1.0",
  "stylelint-webpack-plugin": "^3.0.1",
  "typescript": "^4.4.4"
}
```

## License

Copyright © 2020 - 2021 Vlad Gerasimovich <hotepp@pm.me> Create Next App by Vercel Inc.

Licensed under the ISC license.
