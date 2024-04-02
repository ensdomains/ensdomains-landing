
import tsParser from '@typescript-eslint/parser'
import ts from '@typescript-eslint/eslint-plugin'
import {builtinModules} from 'node:module'
import v3x from 'eslint-plugin-v3xlabs'
import stylistic from '@stylistic/eslint-plugin'

const globals = {}

builtinModules.forEach(m => globals[m] = true)

const files = ['src/**/*.ts', 'src/**/*.tsx','eslint.config.js']

/**
 * @type {import('eslint').Linter.Config[]}
 */
export default [
  stylistic.configs['recommended-flat'],
  {
    files,
  languageOptions: {
    globals: globals,
    parser: tsParser,
    parserOptions: {
      config: './tsconfig.json',
      ecmaFeatures: { modules: true },
      ecmaVersion: 'latest',
    },
  },
  plugins: {
    '@typescript-eslint': ts,
    ts,
    v3x,
    '@stylistic': stylistic
  },
  rules: {
    ...ts.configs['eslint-recommended'].rules,
    ...ts.configs['recommended'].rules,
    'no-var': 'error',
    '@stylistic/max-len': ['error', { code: 120 }]
  },
}
]