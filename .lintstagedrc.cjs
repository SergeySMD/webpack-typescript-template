module.exports = {
  '*.{ts,tsx}': [() => 'tsc -p ./tsconfig.json', 'eslint --fix --no-cache', 'prettier --write'],
  '*.{js,jsx}': ['eslint --fix --no-cache', 'prettier --write'],
  '*.module.scss': ['stylelint', 'prettier --write']
};
