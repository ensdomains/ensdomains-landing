import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import nextPlugin from '@next/eslint-plugin-next'
import stylistic from '@stylistic/eslint-plugin'
import react from '@eslint-react/eslint-plugin'
import { fixupPluginRules } from '@eslint/compat'
import globals from 'globals'

const config = tseslint.config(
  {
    files: ['src/**/*.ts', 'src/*.tsx'],
    ignores: ['node_modules', 'dist', '.next'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.recommended,
  stylistic.configs.customize({
    indent: 2,
    quotes: 'single',
    jsx: true,
    semi: false,
  }),
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      '@next/next': fixupPluginRules(nextPlugin),
      stylistic,
      react,
    },
    rules: {
      // Next.js
      ...nextPlugin.configs.recommended.rules,
      '@next/next/no-img-element': 'off',
      'stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
    },
  },
)

export default config
