module.exports = {
  extends: ['../../.eslintrc.js'],
  "parserOptions": {
    "project": [
        'tsconfig.lib.json',
        'tsconfig.spec.json'
    ],
    "tsconfigRootDir": __dirname,
    "sourceType": "module"
  }
};