import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import stylistic from '@stylistic/eslint-plugin';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import react from 'eslint-plugin-react';

const config = tseslint.config(
    {
        files: ['src/**/*.ts', 'src/*.tsx'],
        ignores: ['node_modules', 'dist', '.next'],
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
        plugins: { '@next/next': nextPlugin, stylistic, 'jsx-a11y': jsxA11y, react },
        rules: {
            // Next.js
            '@next/next/google-font-display': 'warn',
            '@next/next/google-font-preconnect': 'warn',
            '@next/next/next-script-for-ga': 'warn',
            '@next/next/no-async-client-component': 'warn',
            '@next/next/no-before-interactive-script-outside-document': 'warn',
            '@next/next/no-css-tags': 'warn',
            '@next/next/no-head-element': 'warn',
            '@next/next/no-html-link-for-pages': 'warn',
            '@next/next/no-styled-jsx-in-document': 'warn',
            '@next/next/no-sync-scripts': 'warn',
            '@next/next/no-title-in-document-head': 'warn',
            '@next/next/no-typos': 'warn',
            '@next/next/no-unwanted-polyfillio': 'warn',
            '@next/next/inline-script-id': 'error',
            '@next/next/no-assign-module-variable': 'error',
            '@next/next/no-document-import-in-page': 'error',
            '@next/next/no-head-import-in-document': 'error',
            '@next/next/no-script-component-in-head': 'error',

            // React
            ...jsxA11y.configs.recommended.rules,
            'react/no-unknown-property': 'error',
        },
    },
);

export default config;
