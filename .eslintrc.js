module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:import/errors",
    "plugin:import/warnings",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y", "react-hooks", "prettier", "@typescript-eslint", "import"],
  rules: {
    "no-console": ["error", { allow: ["info", "groupCollapsed", "groupEnd", "error"] }],
    "prettier/prettier": ["error", { endOfLine: "auto", singleQuote: false }],
    "react/react-in-jsx-scope": 0,
    "no-use-before-define": ["error", "nofunc"],
    "@typescript-eslint/no-use-before-define": ["error", "nofunc"],
    "@typescript-eslint/explicit-module-boundary-types": ["off"],
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@root/**",
            group: "parent",
          },
          {
            pattern: "@api/**",
            group: "parent",
          },
          {
            pattern: "@assets/**",
            group: "parent",
          },
          {
            pattern: "@utils/**",
            group: "parent",
          },
          {
            pattern: "@pages/**",
            group: "parent",
          },
          {
            pattern: "@components/**",
            group: "parent",
          },
          {
            pattern: "@interfaces/**",
            group: "parent",
            position: "after",
          },
          {
            pattern: "@reducers/**",
            group: "parent",
          },
          {
            pattern: "./*.interface",
            group: "type",
            position: "after",
          },
          {
            pattern: "./**",
            patternOptions: { matchBase: true },
            group: "index",
          },
        ],
        pathGroupsExcludedImportTypes: ["builtin", "parent"],
        groups: ["builtin", "external", "internal", "parent", "sibling", "object", "type", "index"],
        "newlines-between": "always",
        alphabetize: { order: "asc" },
      },
    ],
    "import/named": "error",
    "import/default": "error",
    "import/namespace": "error",
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-cycle": "warn",
    "import/export": "error",
    "import/prefer-default-export": "off",
    "import/no-duplicates": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
