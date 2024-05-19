import clsx from 'clsx';
import { inter, ebGaramond, ABCMonumentGrotesk, ABCMonumentGroteskMono, ABCMonumentGroteskSemiMono, ABCMarist } from 'fonts';
import { dir } from 'i18next';
import { ReactNode } from 'react';
import { Language } from '~/i18n/settings';

import '~/styles/global.css';

export default function RootLayout({ children, params }: { children: ReactNode; params: { lang: Language } }) {
    return (
        <html
            lang={params.lang}
            dir={dir(params.lang)}
            className={clsx(
                inter.variable,
                ebGaramond.variable,
                ABCMonumentGrotesk.variable,
                ABCMonumentGroteskMono.variable,
                ABCMonumentGroteskSemiMono.variable,
                ABCMarist.variable,
            )}
        >
            <body>{children}</body>
        </html>
    );
}
