# @benhigham/browserslist-config

[![npm version](https://img.shields.io/npm/v/@benhigham/browserslist-config.svg)](https://www.npmjs.com/package/@benhigham/browserslist-config)
[![npm downloads](https://img.shields.io/npm/dm/@benhigham/browserslist-config.svg)](https://www.npmjs.com/package/@benhigham/browserslist-config)
[![License](https://img.shields.io/github/license/benhigham/browserslist-config)](LICENSE.md)

My personal [Browserslist](https://github.com/browserslist/browserslist) configurations for modern web and Node.js projects.

## Installation

```bash
# npm
npm install --save-dev @benhigham/browserslist-config

# yarn
yarn add --dev @benhigham/browserslist-config

# pnpm
pnpm add --save-dev @benhigham/browserslist-config
```

## Usage

The default export targets modern browsers with ES6 module support, including recent versions of desktop and mobile browsers.

Create a `.browserslistrc` file in your project root:

```ini
extends @benhigham/browserslist-config
```

Or add to your `package.json`:

```json
{
  "browserslist": ["extends @benhigham/browserslist-config"]
}
```

### Use with Node.js

For Node.js projects, use the specialized Node.js configuration:

```ini
extends @benhigham/browserslist-config/node
```

Or in your `package.json`:

```json
{
  "browserslist": ["extends @benhigham/browserslist-config/node"]
}
```

## Configuration Details

### Default Configuration

Includes:

- Browsers that fully support ES6 modules
- Last 2 major versions of:
  - Chrome
  - Firefox
  - Safari
  - Edge
  - Android
  - ChromeAndroid
  - FirefoxAndroid
  - iOS

### Node.js Configuration

Includes:

- Maintained Node.js versions

## See Supported Browsers

To see the exact browsers supported by these configurations, run:

```bash
npx browserslist "extends @benhigham/browserslist-config"
# or for Node.js config
npx browserslist "extends @benhigham/browserslist-config/node"
```

## License

This project is licensed under the [MIT License](LICENSE.md).
