import { clsx } from 'clsx';
import { CSSProperties } from 'react';

import { ColorCards } from '~/components/ColorCards/ColorCards';
import { Header } from '~/components/Header/Header';
import { LinkList } from '~/components/LinkList/LinkList';
import { SmallLinkList } from '~/components/SmallLinkList/SmallLinkList';
import { useTranslation } from '~/i18n/useTranslation';

import styles from './page.module.css';
import ui from '~/styles/ui.module.css';
import { EcosystemList } from '~/components/ecosystem/EcosystemList';
import type { Metadata } from 'next';
import type { PageProps } from '~/utils/types';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { t } = await useTranslation(params.lang, 'translation');

    return {
        title: `${t('ecosystem.hero.tag')} | ENS`,
    };
};

export default async function Ecosystem({
    params,
}: PageProps) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <div
            style={
                {
                    '--page-text': 'var(--ens-blue)',
                    '--page-bg': 'var(--ens-light-blue)',
                    '--page-text-hover': 'var(--ens-hover-blue)',
                    '--page-bg-hover': 'var(--ens-hover-light-blue)',
                } as CSSProperties
            }
        >
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
                    <h2>{t('ecosystem.integration.title')}</h2>
                    <LinkList
                        links={[
                            {
                                title: t('ecosystem.integration.foundation.title'),
                                href: '',
                                description: t('ecosystem.integration.foundation.description'),
                            },
                            {
                                title: t('ecosystem.integration.trust.title'),
                                href: '',
                                description: t('ecosystem.integration.trust.description'),
                            },
                            {
                                title: t('ecosystem.integration.resources.title'),
                                href: '',
                                description:
                                t('ecosystem.integration.resources.description'),
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
                                link: 'mailto:contact@ens.domains',
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
        </div>
    );
}
