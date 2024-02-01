<div align="center">
<h1>eslint-config-daren</h1>

<p>These are my settings for ESLint and Prettier</p>
<p>You might like them - or you might not. Don't worry you can always change them.</p>
</div>

---

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![version][version-badge]][package]
[![MIT License][license-badge]][license]
<!-- prettier-ignore-end -->

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Configuring ESLint, Prettier, and TypeScript Together](#configuring-eslint-prettier-and-typescript-together)
  - [Prettier (Formatting)](#prettier-formatting)
  - [Eslint (Linting)](#eslint-linting)
    - [Other configs](#other-configs)
    - [React example](#react-example)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module should be installed as one of your project's `devDependencies`:

```bash
npm install --dev eslint-config-daren
```

```bash
yarn add -D eslint-config-daren
```

```bash
pnpm add -D eslint-config-daren
```

## Configuring ESLint, Prettier, and TypeScript Together

### Prettier (Formatting)

```json
// .vscode/settings.json​
{​
  "editor.defaultFormatter": "esbenp.prettier-vscode",​
  "editor.formatOnSave": true​
}
```

```js
// prettier.config.js

import darenPrettierConfig from 'eslint-config-daren/prettier-config'

export default {
  ...darenPrettierConfig,
  semi: false,
}
```

### Eslint (Linting)

Then add the extends to your .eslintrc.js:

```js
module.exports = {
  extends: 'daren',
  overrides: {
    // your overrides
  },
}
```

#### Other configs

You can use other configs in combination with the main eslint.

```js
module.exports = {
  extends: ['daren', 'daren/<config-name>'],
}
```

Or you can extend them like this:

```js
module.exports = {
  extends: [
    ...[
      'eslint-config-daren',
      'eslint-config-daren/react',
      'eslint-config-daren/jsx-a11y',
      'eslint-config-daren/tailwind',
    ].map(config => require.resolve(config)),
  ],
  overrides {
    // your overrides
  },
}
```

#### React example

```js
module.exports = {
  extends: ['daren', 'daren/react', 'daren/jsx-a11y', 'daren/tailwind'],
  overrides: {
    // your overrides
  },
}
```

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com
[node]: https://nodejs.org
[build-badge]: https://img.shields.io/github/workflow/status/darenmalfait/eslint-config-daren/CI?logo=github&style=flat-square
[build]: https://github.com/darenmalfait/eslint-config-daren/actions?query=workflow
[version-badge]: https://img.shields.io/npm/v/eslint-config-daren.svg?style=flat-square
[package]: https://www.npmjs.com/package/eslint-config-daren
[downloads-badge]: https://img.shields.io/npm/dm/eslint-config-daren.svg?style=flat-square
[license-badge]: https://img.shields.io/npm/l/eslint-config-daren.svg?style=flat-square
[license]: https://github.com/darenmalfait/eslint-config-daren/blob/main/LICENSE
<!-- prettier-ignore-end -->
