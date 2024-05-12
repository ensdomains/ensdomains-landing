import tsParser from '@typescript-eslint/parser';
import nextPlugin from '@next/eslint-plugin-next';
import stylistic from '@stylistic/eslint-plugin';

/**
 * @type {import('eslint').Linter.FlatConfig[]}
 */
const config = [
    {
        ignores: ['node_modules', 'dist', '.next'],
    },
    stylistic.configs.customize({
        indent: 4,
        quotes: 'single',
        jsx: true,
        semi: true,
    }),
    {
        files: ['src/**/*.ts', 'src/**/*.tsx'],
        languageOptions: {
            parser: tsParser,
            ecmaVersion: 'latest',
            sourceType: 'module',
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: { '@next/next': nextPlugin, stylistic },
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
            '@next/next/no-img-element': 'off',
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
        },
    },
];

export default config;
