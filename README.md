# ecoloader
Ecoloader is a browser extension designed to reduce energy consumption during web navigation.

## Setup
Install required packages:
```bash
$ npm install
```

Develop in watch mode:
```bash
$ npm run watch
```

Build for production:
```bash
$ npm run build
```

By changing the `TARGET_BROWSER` environment variable, you can specify which browser you are developing for.
This will compile a different `manifest.json`. The default is Firefox, but to use Chrome, for example:
```bash
$ TARGET_BROWSER=chrome npm run watch
```
The same applies to the build command above.
