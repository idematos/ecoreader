# Ecoreader
*[work in progress]*

A browser extension to reduce energy consumption during web navigation.

## Setup

#### Install required packages
```bash
$ npm install
```

#### Develop in watch mode
```bash
$ npm run watch
```

#### Build for production
```bash
$ npm run build
```

By changing the `TARGET_BROWSER` environment variable, you can specify which browser you are developing for.
This will compile a different `manifest.json`. The default is Firefox, but to use Chrome, for example:
```bash
$ TARGET_BROWSER=chrome npm run watch
```
The same applies to the build command above.

## Linting and formatting
We use [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to lint and format our code.
To automatically reformat files and fix some of the issues, run:
```bash
$ npm run fix
```

#### Lint
```bash
$ npm run lint
$ npm run lint:fix
```

#### Format
```bash
$ npm run format
$ npm run format:fix
```

## Contributions

Contributions are welcome. Feel free to open an issue or submit a pull request if you have questions or suggestions.
