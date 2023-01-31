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
- [Usage](#usage)
  - [Other configs](#other-configs)
    - [React example](#react-example)
- [VS Code](#vs-code)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

This module should be installed as one of your project's `devDependencies`:

```
npm install --dev eslint-config-daren
```

```
yarn add -D eslint-config-daren
```

## Usage

Then add the extends to your .eslintrc.js:

```js
module.exports = {
  extends: "daren",
  rules: {
    // your overrides
  },
};
```

### Other configs

You can use other configs in combination with the main eslint.

```js
module.exports = {
  extends: ['daren', 'daren/<config-name>'],
}
```

#### React example

```js
module.exports = {
  extends: [
    'daren',
    'daren/react',
    'daren/jsx-a11y',
    'daren/tailwind',
  ],
  rules: {
    // your overrides
  },
};
```


## VS Code

Using the eslint-plugin you can use these settings for autoformatting:

```js
"editor.formatOnSave": true,
"eslint.format.enable": true,
  "[javascript]": {
"editor.formatOnSave": false,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[javascriptreact]": {
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[typescript]": {
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"[typescriptreact]": {
  "editor.formatOnSave": false,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint"
},
"editor.codeActionsOnSave": {
  "source.fixAll": true,
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
