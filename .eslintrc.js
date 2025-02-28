// Instead of module.exports, use export default
export default {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'eslint:all',
    'plugin:react/all'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: [
    'reportWebVitals.ts',
    'react-app-env.d.ts',
    'craco.config.js',
    'tailwind.config.js'
  ],
  plugins: ['react', 'jsx-a11y'],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'no-use-before-define': 'off',
    'import/no-unresolved': [2, { caseSensitive: false }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never'
      }
    ],
    'no-unused-vars': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
    'no-return-await': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto'
      }
    ]
  },
  settings: {
    react: {
      version: '18'
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['.']
      }
    }
  }
};
