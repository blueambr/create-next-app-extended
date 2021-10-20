# Create Next App eXtended v.2.1.1

> "next": "11.1.2"

### Content

- **[How to launch](#how-to-launch)**
- **[What is this?](#what-is-this)**
- **[Pre-commit](#pre-commit)**
- **[Conventional Changelog](#conventional-changelog)**
- **[Dependencies](#dependencies)**
- **[License](#license)**

## How to launch:

### Cloning

1. `git clone git@github.com:hotepp/create-next-app-extended.git next-big-thing`: cloning the repo
2. `cd next-big-thing`: going to the cloned copy of the repo
3. `sudo rm -R .git && sudo rm CHANGELOG.md`: removing everything git-related from the cloned repo; be careful with `sudo`, you only want to delete the `.git` folder with everything inside of it and the `CHANGELOG.md` file, but nothing more
4. `git init`: creating our own git system
5. `git remote add origin https://github.com/USERNAME/REPOSITORY.git`: setting our own repository as the remote origin
6. `git add .`: adding everything to our first git commit
7. `git commit -m "init"`: making our first git commit
8. `git push -u origin main`: pushing our first git commit to the `main` branch of our repo

P.S. Don't forget to remove the extra info like keywords, repository, packages you won't be using, reset the version etc. in `package.json`.

### Running

1. `npm i` or `npm i --legacy-peer-deps`, if `npm i` throws errors
2. `npm run dev` to run the environment
3. Navigate to your localhost address (default is http://localhost:3000/)
4. `npm run build` to create a production build
5. `npm start` to run the created production build

For more info visit [Next.js Getting Started](https://nextjs.org/docs/getting-started).

## What is this?

_Create Next App eXtended_ or _CNAX_ is an opinionated version of [Create Next App](https://nextjs.org/docs/api-reference/create-next-app).

It contains all the recent Next.js features +

- Basic styles adjustment and some of Bulma modules in `src/styles/global` and `src/styles/misc`
- Set of Sass/SCSS mixins and variables in `src/styles/includes`
- Pre-configured and customizable [ESLint](https://eslint.org/), [Prettier](https://prettier.io/) and [Stylelint](https://stylelint.io/)
- Pre-commit feature with [Husky](https://github.com/typicode/husky) and [lint-staged](https://github.com/okonet/lint-staged)
- `next.config.js`, which includes [eslint-webpack-plugin](https://github.com/webpack-contrib/eslint-webpack-plugin) and [stylelint-webpack-plugin](https://github.com/webpack-contrib/stylelint-webpack-plugin)
- `jsconfig.json`, which includes [absolute imports](https://nextjs.org/docs/advanced-features/module-path-aliases)
- Automatically generated `CHANGELOG.md` file using `npm version` script, if [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) approach is being used

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

## Conventional Changelog

I recommend using the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) approach for committing your work to Git. If you use it, your commits will be very descriptive and themselves could tell the story of your project to anyone.

On top of this [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-cli) was built. I included the CLI version of it here, in the `version` npm script. It generates a nice `CHANGELOG.md` for your nice commits.

The recommended commit approach for using this would be:

1. Make changes
2. Commit those changes
3. Run the `npm version [patch|minor|major]` command (more about it [here](https://docs.npmjs.com/cli/v6/commands/npm-version))
4. Push

The `npm version` script will automatically bump the project's version in `package.json` and commit it, together with our newly generated `CHANGELOG.md`.

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
