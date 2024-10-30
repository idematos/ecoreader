# [WIP] Ecoreader
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

## Load in Developer Mode

#### Chrome

1. Open Chrome and go to `chrome://extensions/`.
2. Enable Developer mode (toggle in the top right).
3. Click on Load unpacked.
4. Select the output directory (`build/`).

#### Firefox

1. Open Firefox and go to `about:debugging#/runtime/this-firefox`.
2. Click on Load Temporary Add-on...
3. Select the manifest file (`public/manifest.json`) from the output directory.

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

## License

Licensed under the [MIT License](https://opensource.org/license/MIT).
