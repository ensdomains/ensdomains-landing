import '../styles/global.css';

import { clsx } from 'clsx';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import { ReactNode } from 'react';

const inter = Inter({
    weight: 'variable',
    variable: '--ens-sans-fb',
    subsets: ['cyrillic'],
});

const ABCMonumentGrotesk = localFont({
    src: '../../fonts/variable.woff2',
    variable: '--ens-sans',
    fallback: ['var(--ens-sans-fb)', 'sans-serif'],
});

const ABCMonumentGroteskMono = localFont({
    src: [
        {
            weight: '400',
            path: '../../fonts/mono/regular.woff2',
            style: 'normal',
        },
        {
            weight: '400',
            path: '../../fonts/mono/italic.woff2',
            style: 'italic',
        },
        {
            weight: '500',
            path: '../../fonts/mono/medium.woff2',
            style: 'normal',
        },
        {
            weight: '500',
            path: '../../fonts/mono/medium-italic.woff2',
            style: 'italic',
        },
    ],
    variable: '--ens-mono',
});

const ABCMonumentGroteskSemiMono = localFont({
    src: [
        {
            weight: '400',
            path: '../../fonts/semi-mono/regular.woff2',
            style: 'normal',
        },
        {
            weight: '400',
            path: '../../fonts/semi-mono/italic.woff2',
            style: 'italic',
        },
        {
            weight: '500',
            path: '../../fonts/semi-mono/medium.woff2',
            style: 'normal',
        },
        {
            weight: '500',
            path: '../../fonts/semi-mono/medium-italic.woff2',
            style: 'italic',
        },
    ],
    variable: '--ens-semi-mono',
    fallback: ['monospace'],
});

const ABCMarist = localFont({
    src: [
        {
            weight: '400',
            path: '../../fonts/serif/regular.woff2',
            style: 'normal',
        },
        {
            weight: '400',
            path: '../../fonts/serif/italic.woff2',
            style: 'italic',
        },
    ],
    variable: '--ens-serif',
});

export const metadata: Metadata = {
    title: 'ENS',
    description: 'Making the Internet Feel Better',
    applicationName: 'ENS',
    openGraph: {
        url: 'https://ens.domains',
        type: 'website',
        title: 'ENS',
        siteName: 'ENS',
        description: 'Making the Internet Feel Better',
        images: 'http://ens.domains/og-image.png',
    },
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang="en"
            className={clsx(
                inter.variable,
                ABCMonumentGrotesk.variable,
                ABCMonumentGroteskMono.variable,
                ABCMonumentGroteskSemiMono.variable,
                ABCMarist.variable
            )}
        >
            <body>{children}</body>
        </html>
    );
}
