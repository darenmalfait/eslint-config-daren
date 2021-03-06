module.exports = {
  extends: ['./base-config.js', 'google', 'eslint:recommended', 'prettier'],
  plugins: ['prettier', 'babel', 'import'],
  rules: {
    'arrow-body-style': `off`,
    'babel/camelcase': `off`,
    'babel/new-cap': [
      `error`,
      {
        newIsCap: true,
        capIsNew: true,
      },
    ],
    'babel/no-invalid-this': `error`,
    'babel/no-unused-expressions': `error`,
    'babel/valid-typeof': `error`,
    'constructor-super': `error`,
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'sibling',
          'parent',
          'index',
          'object',
        ],
        'newlines-between': 'always-and-inside-groups',
        alphabetize: { order: 'asc', caseInsensitive: true },
      },
    ],
    'new-cap': `off`,
    'no-class-assign': `error`,
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'no-const-assign': `error`,
    'no-dupe-class-members': `error`,
    'no-duplicate-imports': `error`,
    'no-invalid-this': `off`,
    'no-new-symbol': `error`,
    'no-restricted-exports': `off`,
    'no-restricted-imports': `off`,
    'no-return-await': 'error',
    'no-this-before-super': `error`,
    'no-unsafe-optional-chaining': `error`,
    'no-unused-expressions': `off`,
    'no-unused-vars': [
      `error`,
      {
        varsIgnorePattern: `^_`,
        argsIgnorePattern: `^_`,
        ignoreRestSiblings: true,
      },
    ],
    'no-useless-computed-key': `error`,
    'no-useless-constructor': `error`,
    'no-useless-rename': `error`,
    'no-var': `error`,
    'object-shorthand': [`error`, `properties`],
    'prefer-destructuring': `off`, // I like it, but not that much...
    'prefer-arrow-callback': [
      `error`,
      { allowNamedFunctions: true, allowUnboundThis: true },
    ],
    'prefer-const': `error`,
    'prefer-numeric-literals': `error`,
    'prefer-rest-params': `error`,
    'prefer-spread': `error`,
    'prefer-template': `error`,
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        BracketSameLine: false,
        bracketSpacing: true,
        embeddedLanguageFormatting: 'auto',
        endOfLine: 'lf',
        htmlWhitespaceSensitivity: 'css',
        insertPragma: false,
        jsxSingleQuote: false,
        printWidth: 80,
        proseWrap: 'always',
        quoteProps: 'as-needed',
        requirePragma: false,
        semi: false,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'all',
        useTabs: false,
      },
    ],
    'require-yield': `error`,
    'sort-imports': `off`,
    'symbol-description': `error`,
    'require-jsdoc': `off`,
    'valid-jsdoc': `off`,
    'valid-typeof': `off`,
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        project: './tsconfig.json',
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/ban-types': [
          `error`,
          {
            extendDefaults: true,
            types: {
              '{}': {
                fixWith: `Record<string, unknown>`,
              },
              object: {
                fixWith: `Record<string, unknown>`,
              },
            },
          },
        ],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/naming-convention': 'off',
        '@typescript-eslint/no-dupe-class-members': `off`,
        '@typescript-eslint/no-duplicate-imports': `error`,
        '@typescript-eslint/no-invalid-this': `error`,
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/no-base-to-string': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'error',
        '@typescript-eslint/no-unnecessary-type-constraint': 'error',
        '@typescript-eslint/no-unused-expressions': `error`,
        '@typescript-eslint/no-unused-vars': [
          `error`,
          {
            varsIgnorePattern: `^_`,
            argsIgnorePattern: `^_`,
            ignoreRestSiblings: true,
          },
        ],
        '@typescript-eslint/no-empty-function': `off`,
        '@typescript-eslint/no-explicit-any': `off`,
        '@typescript-eslint/no-useless-constructor': `error`,
        'babel/no-invalid-this': `off`,
        'babel/no-unused-expressions': `off`,
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        'babel/valid-typeof': `off`,
        'constructor-super': `off`,
        'no-const-assign': `off`,
        'no-dupe-class-members': `off`,
        'no-duplicate-imports': `off`,
        'no-new-symbol': `off`,
        'no-this-before-super': `off`,
        'no-undef': 'off',
        'no-useless-constructor': `off`,
        'no-var': `error`,
        'prefer-const': `error`,
        'prefer-rest-params': `error`,
        'prefer-spread': `error`,
        camelcase: `off`,
      },
    },
  ],
}
