module.exports = {
  extends: ['./base-config.js'],
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['eslint-plugin-tailwindcss'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'tailwindcss/classnames-order': 'error',
    'tailwindcss/enforces-shorthand': 'error',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-arbitrary-value': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'error',
  },
}
