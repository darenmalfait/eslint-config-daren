const nodeServerImports =
  require('./rules/node-server-imports').nodeServerImports

module.exports = {
  extends: ['./base-config.js'],
  rules: {
    'node-server-imports': nodeServerImports,
  },
}
