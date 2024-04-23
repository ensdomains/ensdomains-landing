/* eslint-disable unicorn/prevent-abbreviations */

import clsx from 'clsx';
import { CSSProperties } from 'react';

import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { LinkList } from '../../components/LinkList/LinkList';
import { Navbar } from '../../components/Navbar/Navbar';
import { Language } from '../../i18n/settings';
import { useTranslation } from '../../i18n/useTranslation';
import ui from '../../styles/ui.module.css';

export default async function Home({
    params,
}: {
    params: { lang: Language };
    searchParams?: any;
}) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <div
            className="page"
            style={
                {
                    '--page-text': 'var(--ens-blue)',
                    '--page-bg': 'var(--ens-light-blue)',
                } as CSSProperties
            }
        >
            <Navbar t={t} lang={params.lang} />

            <Header
                tag={t('ecosystem.hero.tag')}
                title={t('ecosystem.hero.title')}
                description={t('ecosystem.hero.text')}
                cta={[
                    [t('ecosystem.hero.cta1'), 'https://blog.ens.domains'],
                    [t('ecosystem.hero.cta2'), 'https://docs.ens.domains'],
                ]}
            />

            <div className={clsx(ui.sub1, ui['w-page'])}>
                Ready for integration?
            </div>

            <LinkList
                links={[
                    {
                        title: 'Robust Web3 Foundation',
                        href: '',
                        description:
                            'Gain access to a built-in audience, establishing your brand as a key player in the new internet era.',
                    },
                    {
                        title: 'Unparalleled Trust',
                        href: '',
                        description:
                            // eslint-disable-next-line quotes
                            "Trust isn't a buzzword, it's our foundation. As a non-profit, DAO-governed protocol, we're committed to security and integrity.",
                    },
                    {
                        title: 'Need more resources?',
                        href: '',
                        description:
                            'ENS is more powerful than you think. See below for more resources on how to integrate ENS into your organization.',
                    },
                ]}
            />

            <div className={clsx(ui.sub2, ui['w-page'])}>
                exploring a partnership?
            </div>

            <div className={clsx(ui.sub3, ui['w-page'])}>featured partners</div>

            <Footer />
        </div>
    );
}
