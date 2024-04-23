/* eslint-disable unicorn/prevent-abbreviations */

import clsx from 'clsx';
import { CSSProperties } from 'react';

import { ColorCards } from '../../components/ColorCards/ColorCards';
import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { LinkList } from '../../components/LinkList/LinkList';
import { Navbar } from '../../components/Navbar/Navbar';
import { SmallLinkList } from '../../components/SmallLinkList/SmallLinkList';
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

            <div className={clsx(ui['my-100'], ui['space-y-40'])}>
                <h2 className={clsx(ui['w-page'])}>Ready for integration?</h2>

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
            </div>

            <div className={clsx(ui['w-page'], ui['my-100'], ui['space-y-40'])}>
                <h3>Exploring a partnership?</h3>
                <p className={ui['max-w-text']}>
                    Want to collaborate? Our Business Development team is
                    excited to discuss how an ENS partnership can help.
                </p>
                <ColorCards
                    cards={[
                        {
                            title: 'Business Development',
                            description:
                                'Speak with our Business Development team to chat about a partnership opportunity.',
                        },
                        {
                            title: 'Explore Opportunities',
                            description: 'Get ideas on how to work with ENS.',
                        },
                    ]}
                />
            </div>

            <div className={ui['my-100']}>
                <h4 className={clsx(ui['w-page'])}>Featured Partners</h4>
                <SmallLinkList
                    links={[
                        { title: 'Coinbase', href: '' },
                        { title: 'Base', href: '' },
                        { title: 'Uniswap', href: '' },
                        { title: 'Brave', href: '' },
                        { title: 'GoDaddy', href: '' },
                        { title: 'Optimism', href: '' },
                        { title: 'Solana', href: '' },
                        { title: 'Ethereum', href: '' },
                        { title: 'Bitcoin', href: '' },
                        { title: 'Phantom', href: '' },
                        { title: 'Opensea', href: '' },
                        { title: 'Farcaster', href: '' },
                        { title: 'Etherscan', href: '' },
                        { title: 'Metamask', href: '' },
                        { title: 'Rainbow', href: '' },
                        { title: 'Family', href: '' },
                    ]}
                />
            </div>

            <Footer />
        </div>
    );
}
