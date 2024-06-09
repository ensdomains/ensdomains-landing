import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';

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
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        jsx: true,
        semi: true,
    }),
    {
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            '@next/next': fixupPluginRules(nextPlugin),
            stylistic, 'jsx-a11y': jsxA11y,
            'react': fixupPluginRules(react),
        },
        rules: {
            // Next.js
            ...nextPlugin.configs.recommended.rules,
            // React
            ...jsxA11y.configs.recommended.rules,
            ...react.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
            '@next/next/no-img-element': 'off',
            'stylistic/no-multiple-empty-lines': ['error', { max: 1 }],
        },
    },
);

export default config;
