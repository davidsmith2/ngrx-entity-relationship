module.exports = {
  extends: ['../../.eslintrc.js'],
  "parserOptions": {
    "project": [
        'tsconfig.app.json',
        'tsconfig.spec.json'
    ],
    "tsconfigRootDir": __dirname,
    "sourceType": "module"
  },
  "ignorePatterns": [
    "**/*.html",
    "src/polyfills.ts"
  ]
};