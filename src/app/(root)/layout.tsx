import '~/styles/global.css';

import { clsx } from 'clsx';
import { inter, ebGaramond, ABCMonumentGrotesk, ABCMonumentGroteskMono, ABCMonumentGroteskSemiMono, ABCMarist } from 'fonts';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Language } from '~/i18n/settings';
import { dir } from 'i18next';

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

export default function RootLayout({ children, params: { lang = 'en' } }: { children: ReactNode ; params: { lang?: Language } }) {
    return (
        <html
            lang={lang}
            dir={dir(lang)}
            className={clsx(
                inter.variable,
                ebGaramond.variable,
                ABCMonumentGrotesk.variable,
                ABCMonumentGroteskMono.variable,
                ABCMonumentGroteskSemiMono.variable,
                ABCMarist.variable,
            )}
        >
            <head>
                <link rel="icon" type="image/png" href="/favicon.png" />
            </head>
            <body>{children}</body>
        </html>
    );
}
