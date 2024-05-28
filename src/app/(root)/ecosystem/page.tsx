import clsx from 'clsx';
import { CSSProperties } from 'react';

import { ColorCards } from '~/components/ColorCards/ColorCards';
import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { LinkList } from '~/components/LinkList/LinkList';
import { Navbar } from '~/components/Navbar/Navbar';
import { SmallLinkList } from '~/components/SmallLinkList/SmallLinkList';
import { Language } from '~/i18n/settings';
import { useTranslation } from '~/i18n/useTranslation';

import styles from './page.module.css';
import ui from '~/styles/ui.module.css';
import { EcosystemList } from '~/components/ecosystem/EcosystemList';

export default async function Home({
    params,
}: {
    params: { lang: Language };
}) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <main
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
                subtitle={t('ecosystem.hero.subtitle')}
                cta={[
                    [t('ecosystem.hero.cta1'), 'https://blog.ens.domains'],
                    [t('ecosystem.hero.cta2'), 'https://docs.ens.domains'],
                ]}
            >
                <EcosystemList />
            </Header>
            <section className={ui['page']}>
                <div className={clsx(ui.flex, ui['flex-col'], ui['h2-section'])}>
                    <h2>Ready for integration?</h2>
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

                                'Trust isn\'t a buzzword, it\'s our foundation. As a non-profit, DAO-governed protocol, we\'re committed to security and integrity.',
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

                <div className={clsx(ui.flex, ui['flex-col'], styles.partnersSection)}>
                    <div className={clsx(ui.flex, ui['flex-col'], ui['h3-section'])}>
                        <h3>Exploring a partnership?</h3>
                        <p className={ui['max-w-text']}>
                            Want to collaborate? Our Business Development team is
                            excited to discuss how an ENS partnership can help.
                        </p>
                    </div>
                    <ColorCards
                        cards={[
                            {
                                title: 'Business Development',
                                description:
                                'Speak with our Business Development team to chat about a partnership opportunity.',
                                color: 'ens-blue',
                                link: '#',
                            },
                            {
                                title: 'Explore Opportunities',
                                description: 'Get ideas on how to work with ENS.',
                                color: 'ens-green',
                                link: '#',
                            },
                        ]}
                    />
                </div>

                <div>
                    <h4 className={styles.h4}>Featured Partners</h4>
                    <SmallLinkList
                        links={[
                            { title: 'Coinbase', href: 'https://www.coinbase.com' },
                            { title: 'Base', href: 'https://www.base.org' },
                            { title: 'Uniswap', href: 'https://uniswap.org' },
                            { title: 'Brave', href: 'https://brave.com' },
                            { title: 'GoDaddy', href: 'https://www.godaddy.com' },
                            { title: 'Optimism', href: 'https://www.optimism.io' },
                            { title: 'Solana', href: 'https://solana.com' },
                            { title: 'Ethereum', href: 'https://ethereum.org' },
                            { title: 'Bitcoin', href: 'https://bitcoin.org' },
                            { title: 'Phantom', href: 'https://phantom.app' },
                            { title: 'Opensea', href: 'https://opensea.io' },
                            { title: 'Farcaster', href: 'https://www.farcaster.xyz' },
                            { title: 'Etherscan', href: 'https://etherscan.io' },
                            { title: 'Metamask', href: 'https://metamask.io' },
                            { title: 'Rainbow', href: 'https://rainbow.me' },
                            { title: 'Family', href: 'https://family.co' },
                        ]}
                    />
                </div>
            </section>

            <Footer t={t} />
        </main>
    );
}
