import '~/styles/global.css';

import { clsx } from 'clsx';
import { inter, ebGaramond, ABCMonumentGrotesk, ABCMonumentGroteskMono, ABCMonumentGroteskSemiMono, ABCMarist } from 'fonts';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Language } from '~/i18n/settings';
import { dir } from 'i18next';
import { useTranslation } from '~/i18n/useTranslation';
import { PageProps } from '~/utils/types';
import { Navbar } from '~/components/Navbar/Navbar';
import { Footer } from '~/components/Footer/Footer';

export { generateStaticParams } from '~/utils/getStatic';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { t } = await useTranslation(params.lang, 'translation');

    return {
        title: 'ENS',
        description: t('seo.description'),
        applicationName: 'ENS',
        openGraph: {
            url: 'https://ens.domains',
            type: 'website',
            title: 'ENS',
            siteName: 'ENS',
            description: t('seo.description'),
            images: 'http://ens.domains/og-image.png',
        },
    };
};

export default async function RootLayout({ children, params: { lang = 'en' } }: { children: ReactNode ; params: { lang?: Language } }) {
    const { t } = await useTranslation(lang, 'translation');

    const footerItems = [
        {
            title: t('footer.community'),
            entries: [
                { title: t('footer.blog'), link: 'https://blog.ens.domains' },
                { title: t('footer.feedback'), link: '' },
                {
                    title: t('footer.discord'),
                    link: 'https://chat.ens.domains',
                },
                {
                    title: t('footer.twitter'),
                    link: 'https://x.com/ensdomains',
                },
                {
                    title: t('footer.github'),
                    link: 'https://github.com/ensdomains',
                },
                {
                    title: t('footer.youtube'),
                    link: 'https://youtube.com/ensdomains',
                },
                {
                    title: t('footer.forums'),
                    link: 'https://discuss.ens.domains',
                },
            ],
        },
        {
            title: t('footer.help'),
            entries: [
                {
                    title: t('footer.support'),
                    link: 'https://support.ens.domains',
                },
                { title: t('footer.contact'), link: 'mailto:contact@ens.domains' },
            ],
        },
        {
            title: t('footer.ens'),
            entries: [
                { title: t('footer.privacy-policy'), link: 'https://app.ens.domains/legal/privacy-policy' },
                { title: t('footer.tou'), link: 'https://app.ens.domains/legal/terms-of-use' },
                {
                    title: t('footer.bugs'),
                    link: 'https://docs.ens.domains/bug-bounty-program',
                },
                {
                    title: t('footer.brand'),
                    link: '/brand',
                },
            ],
        },
    ];

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
            <body>
                <main>
                    <Navbar
                        links={{

                            developers: t('nav.developers'),
                            ecosystem: t('nav.ecosystem'),
                            governance: t('nav.governance'),
                            blog: t('nav.blog'),
                            roadmap: t('nav.roadmap'),
                            launch: t('nav.launch'),
                        }}
                        lang={lang}
                    />
                    {children}
                    <Footer footerItems={footerItems} copyrightNotice={t('footer.ltd')} />
                </main>
            </body>
        </html>
    );
}
