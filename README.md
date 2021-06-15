# Create Next App eXtended v.2.0.1

> "next": "11.0.0"

### Content

- **[How to launch](#how-to-launch)**
- **[What is this?](#what-is-this)**
- **[Pre-commit](#pre-commit)**
- **[Dependencies](#dependencies)**
- **[License](#license)**

## How to launch:

1. `git clone`
2. `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git` to update the origin remote with your own repository / `git remote rm origin` to remove the origin remote
3. `npm i`
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
    "bulma": "^0.9.2",
    "next": "11.0.0",
    "normalize.css": "^8.0.1",
    "react": "17.0.2",
    "react-dom": "17.0.2"
},
"devDependencies": {
  "@typescript-eslint/eslint-plugin": "^4.27.0",
  "@typescript-eslint/parser": "^4.27.0",
  "babel-eslint": "^10.1.0",
  "eslint": "^7.28.0",
  "eslint-config-airbnb": "^18.2.1",
  "eslint-config-prettier": "^8.3.0",
  "eslint-config-react-app": "^6.0.0",
  "eslint-plugin-flowtype": "^5.7.2",
  "eslint-plugin-import": "^2.23.4",
  "eslint-plugin-jsx-a11y": "^6.4.1",
  "eslint-plugin-prettier": "^3.4.0",
  "eslint-plugin-react": "^7.24.0",
  "eslint-plugin-react-hooks": "^4.2.0",
  "eslint-webpack-plugin": "^2.5.4",
  "husky": "^6.0.0",
  "lint-staged": "^11.0.0",
  "prettier": "^2.3.1",
  "pretty-quick": "^3.1.0",
  "sass": "^1.32.9",
  "stylelint": "^13.13.1",
  "stylelint-config-standard": "^22.0.0",
  "stylelint-order": "^4.1.0",
  "stylelint-webpack-plugin": "^2.1.1",
  "typescript": "^4.3.2"
}
```

## License

Copyright © 2020 - 2021 Vlad Gerasimovich <hotepp@pm.me> Create Next App by Vercel Inc.

Licensed under the ISC license.
