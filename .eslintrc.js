module.exports = {
  env: {
    browser: true,
    es2024: true
  },
  extends: [
    'plugin:jsx-a11y/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'standard',
    'eslint:recommended'
  ],
  globals: {
    __PATH_PREFIX__: true
  },
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    project: ['./tsconfig.json'],
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks'
  ],
  settings: {
    react: { version: 'detect' }
  }
}
