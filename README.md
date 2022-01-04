# Create Next App eXtended v.3.0.0

> "next": "12.0.7"

> "@storybook/react": "6.4.9"

### Content

- **[How to launch](#how-to-launch)**
- **[What is this?](#what-is-this)**
- **[Pre-commit](#pre-commit)**
- **[Conventional Changelog](#conventional-changelog)**
- **[Storybook](#storybook)**
- **[Dependencies](#dependencies)**
- **[License](#license)**

## How to launch:

### Cloning

1. `git clone git@github.com:hotepp/create-next-app-extended.git next-big-thing`: cloning the repo
2. `cd next-big-thing`: going to the cloned copy of the repo
3. `sudo rm -R .git && sudo rm CHANGELOG.md`: removing everything git-related from the cloned repo; be careful with `sudo`, you only want to delete the `.git` folder with everything inside of it and the `CHANGELOG.md` file, but nothing more
4. `git init`: creating our own git system
5. `git branch -M main`: rename the branch
6. `git remote add origin https://github.com/USERNAME/REPOSITORY.git`: setting our own repository as the remote origin
7. `git add .`: adding everything to our first git commit
8. `git commit -m "init"`: making our first git commit
9. `git push -u origin main`: pushing our first git commit to the `main` branch of our repo

P.S. Don't forget to remove the extra info like keywords, repository, packages you won't be using, reset the version etc. in `package.json`.

### Running

1. `npm i`
2. `npm run dev` to run the Next.js environment; `npm run sb` to run _Storybook_
3. Navigate to http://localhost:3000/ or to http://localhost:4000/, if you run _Storybook_
4. `npm run build` to create a production (Next.js) build; `npm run build:sb` to create a _Storybook_ build
5. `npm start` to run the created production (Next.js) build

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
- The best UI non-framework _Storybook_! Integrated and configured, while still being optional and flexible just as you always wanted. All the info you need is located [right here](https://storybook.js.org/). And [here](#storybook) is what you need to know about _Storybook_ in _Create Next App eXtended_.

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

## Storybook

_CNAX_ has two almost absolutely separated environments being the Next.js one and the _Storybook_ one. The reason we need two of them is that _Storybook_ never was about **building** websites, it is about **showing** them, while _Create Next App eXtended_ being able to **show** websites is everything about **building** them.

In order to deliver the best experience possible to our clients and to our non-frontend colleagues we have to make an effort to help them feel welcomed and _Storybook_ does exactly that.

To make it work with _CNAX_ we had to tweak some _Storybook_ configs, which you can find in the `.storybook` folder and see and test the changes for yourself.

To find out how to work with _CNAX_ and _Storybook_ together you can and should browse the example components, which are the part of the initial _CNAX_ setup. You can run _CNAX_ and _Storybook_ instances simultaneously to test the things out.

Have in mind, that the way the example components are made with _Storybook_ and _CNAX_ is only an **example**. It is something you can use as a starting point, but there is plenty space to make it better and more suitable for your or your project's needs.

You can use either _CNAX_ or _Storybook_ for the development process, but make sure to check from time to time, that the original Next.js env (environment) works. It is this env you will be using for the production after all, not the _Storybook_ one.

As a final note I want to remind, that it is quite important, nice and useful to have a UI for display purposes, but it is much more important to have a working environment, which gets things done. And it is exactly the purpose of this integration, so while working on the website, don't forget to deliver some stories with it and while working on the stories, don't forget, that the website won't build itself.

## Dependencies

```
"dependencies": {
  "bulma": "^0.9.3",
  "next": "12.0.7",
  "normalize.css": "^8.0.1",
  "react": "17.0.2",
  "react-dom": "17.0.2"
},
"devDependencies": {
  "@babel/core": "^7.16.7",
  "@storybook/addon-actions": "^6.4.9",
  "@storybook/addon-essentials": "^6.4.9",
  "@storybook/addon-links": "^6.4.9",
  "@storybook/builder-webpack5": "^6.4.9",
  "@storybook/manager-webpack5": "^6.4.9",
  "@storybook/react": "^6.4.9",
  "@typescript-eslint/eslint-plugin": "^5.9.0",
  "@typescript-eslint/parser": "^5.9.0",
  "babel-loader": "^8.2.3",
  "conventional-changelog-cli": "^2.2.2",
  "css-loader": "^6.5.1",
  "eslint": "^8.6.0",
  "eslint-config-next": "^12.0.7",
  "eslint-config-prettier": "^8.3.0",
  "eslint-plugin-prettier": "^4.0.0",
  "eslint-webpack-plugin": "^3.1.1",
  "husky": "^7.0.4",
  "lint-staged": "^12.1.5",
  "postcss-loader": "^6.2.1",
  "prettier": "^2.5.1",
  "pretty-quick": "^3.1.3",
  "sass": "^1.45.2",
  "sass-loader": "^12.4.0",
  "style-loader": "^3.3.1",
  "stylelint": "^14.2.0",
  "stylelint-config-standard-scss": "^3.0.0",
  "stylelint-order": "^5.0.0",
  "stylelint-webpack-plugin": "^3.1.0",
  "typescript": "^4.5.4",
  "webpack": "^5.65.0"
}
```

## License

Copyright © 2020 - 2022 Vlad Gerasimovich <hotepp@pm.me> Create Next App by Vercel Inc.

Licensed under the ISC license.
