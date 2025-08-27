import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import prettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import importErrors from 'eslint-plugin-import/config/flat/errors.js';
import importWarnings from 'eslint-plugin-import/config/flat/warnings.js';

const flatCompat = new FlatCompat();

export default tseslint.config(
  ...fixupConfigRules(flatCompat.extends('eslint-config-airbnb')),
  {
    extends: [...tseslint.configs.recommended, prettier],
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      prettier: eslintPluginPrettier,
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['./', 'src'],
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      ...importErrors.rules,
      ...importWarnings.rules,
      /** ***********************************************************************************
       *                                                                                    *
       * Основные правила                                                                   *
       *                                                                                    *
       ************************************************************************************ */
      'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'never',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
      'prettier/prettier': ['error'],
      'import/named': 'error',
      'import/no-named-default': 'error',
      'import/default': 'error',
      'padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['multiline-block-like', 'return', 'multiline-expression', 'switch', 'try'],
        },
        {
          blankLine: 'always',
          prev: ['multiline-block-like', 'export', 'multiline-expression', 'switch', 'try'],
          next: '*',
        },
      ],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [
            {
              pattern: 'src/*',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['builtin'],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: [
            'acc',
            'accumulator',
            'e',
            'ctx',
            'context',
            'req',
            'request',
            'res',
            'response',
            '$scope',
            'staticContext',
            'draft',
          ],
        },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            // Запрещаем все импорты из src, кроме src/entities
            'src/*', // Блокирует все импорты из src/
            '!src/entities', // Разрешаем импорт из src/entities
          ],
          paths: [
            {
              // Запрет дефолтного импорта
              name: 'lodash',
              importNames: ['default'],
              message: 'Forbidden use default direct',
            },
          ],
        },
      ],
      'func-style': ['error', 'expression'],
      'import/no-extraneous-dependencies': 'error',
      'max-len': ['warn', { code: 100, ignorePattern: '^import .*' }],
      'jsx-a11y/no-static-element-interactions': 'warn', // TODO: Должно быть error, требуется много изменений
      'no-console': ['error', { allow: ['warn', 'error', 'info', 'groupCollapsed', 'groupEnd'] }],
      'jsx-a11y/click-events-have-key-events': 'warn', // TODO: Должно быть error, требуется много изменений
      'jsx-a11y/img-redundant-alt': 'error',
      'react/jsx-props-no-spreading': 'off',
      'template-curly-spacing': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'import/prefer-default-export': 'off',
      'import/no-cycle': [2, { maxDepth: 2 }], // TODO: После перехода на FSD удалить
      'no-nested-ternary': 'error',
      'react/display-name': 'warn',
      curly: ['error', 'all'],
      'import/no-default-export': 'error',
      'react/prop-types': 'error', // TODO: Перейти на TS, удалить. Должно быть error, требуется много изменений
      'no-plusplus': 'warn', // TODO: Заменить
      'no-underscore-dangle': ['warn', { allow: ['_env'] }],
      'react/forbid-prop-types': 'error',
      'react/no-array-index-key': 'warn', // TODO: Должно быть error, требуется много изменений
      'no-alert': 'error',
      'react/forbid-component-props': [
        // Предупреждение о запрете использования style-аттрибута
        'warn',
        {
          forbid: ['style'],
        },
      ],
      // Отключение правил после обновления конфига
      'react/function-component-definition': 'off',
      'default-param-last': 'warn', // TODO: Исправить, нужно много изменений
      'react/react-in-jsx-scope': 'off',
      // Отключение правил после обновления конфига. End
      'no-undef': 'error', // Проверка неопределенных переменных
    },
  },
  {
    files: ['*.config.*'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
      'import/no-unresolved': 'off',
      'import/extensions': 'warn',
    },
  },
  {
    // Дефолтный экспорт для TS деклараций
    files: ['**/*.d.ts'],
    rules: { 'import/no-default-export': 'off' },
  },
  {
    // Отмена правила для иконок
    files: ['./**/Icons/*.jsx', './src/shared/assets/icons/**/*.jsx'],
    rules: {
      'max-len': 'off',
    },
  },
  {
    files: [
      './webpack.config.dev.js',
      './webpack.config.prod.js',
      'src/shared/configs/config.js',
      'webpack.config.alias.js',
      'webpack.config.devServer.js',
      'src/shared/utils/customSchema/index.js',
      'src/shared/utils/reactSnap/utils.js',
    ],
    rules: {
      'global-require': 'warn',
      'import/no-dynamic-require': 'warn',
      '@typescript-eslint/no-require-imports': 'warn',
    },
  },
  {
    files: ['./src/**/index.{js,jsx,ts,tsx}'],
    rules: {
      'max-len': 'off',
    },
  },
  {
    // FSD import restrictions
    rules: {
      'import/no-restricted-paths': [
        'warn',
        {
          zones: [
            // features не может импортировать из pages, widgets, app
            {
              target: ['./src/features'],
              from: ['./src/pages', './src/widgets', './src/app'],
            },
            // entities не может импортировать из features, pages, widgets, app
            {
              target: ['./src/entities'],
              from: ['./src/features', './src/pages', './src/widgets', './src/app'],
            },
            // shared не может импортировать из entities, features, pages, widgets, app
            {
              target: ['./src/shared'],
              from: [
                './src/entities',
                './src/features',
                './src/pages',
                './src/widgets',
                './src/app',
              ],
            },
            // widgets не может импортировать из pages, app
            {
              target: ['./src/widgets'],
              from: ['./src/pages', './src/app'],
            },
            // pages не может импортировать из app
            {
              target: ['./src/pages'],
              from: ['./src/app'],
            }
          ],
        },
      ],
    },
  },
);
