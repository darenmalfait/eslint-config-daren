module.exports = {
  extends: ['../index.js', '../react.js', '../jsx-a11y.js'],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: require.resolve('./.tsconfig.json'),
      },
    },
  ],
}
