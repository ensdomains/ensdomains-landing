import clsx from 'clsx';
import { CSSProperties } from 'react';

import { ColorCards } from '~/components/ColorCards/ColorCards';
import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { LinkList } from '~/components/LinkList/LinkList';
import { Navbar } from '~/components/Navbar/Navbar';
import { Language } from '~/i18n/settings';
import { useTranslation } from '~/i18n/useTranslation';

import ui from '~/styles/ui.module.css';
import styles from './page.module.css';
import { TwoCol } from '~/components/TwoCol/TwoCol';
import { SectionWithPreview } from '~/components/SectionWithPreview/SectionWithPreview';
import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage';
import { HeroContent } from '~/components/governance/HeroContent';

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
                    '--page-text': 'var(--ens-green)',
                    '--page-bg': 'var(--ens-light-green)',
                } as CSSProperties
            }
        >
            <Navbar t={t} lang={params.lang} />
            <Header
                tag={t('governance.hero.tag')}
                title={t('governance.hero.title')}
                description={t('governance.hero.text')}
                cta={[
                    [t('governance.hero.cta1'), 'https://docs.ens.domains/dao'],
                    [
                        t('governance.hero.cta2'),
                        'https://docs.ens.domains/dao/proposals',
                    ],
                ]}
            >
                <HeroContent />
            </Header>

            <section className={ui['page']}>
                <div className={clsx(ui.flex, ui['flex-col'], ui['h2-section'])}>
                    <h2>
                        {t('governance.extra.title')}
                    </h2>
                    <SectionWithPreview
                        title={t('governance.extra.vote.title')}
                        text={t('governance.extra.vote.text')}
                    >
                        <ResponsiveImage
                            sources={{
                                desktop: '/assets/governance/vote.png',
                                tablet: '/assets/governance/vote-tablet.png',
                                mobile: '/assets/governance/vote-mobile.png',
                            }}
                            sourceProps={{
                                mobile: {
                                    height: 240,
                                    width: 358,
                                },
                                tablet: {
                                    height: 220,
                                    width: 333,
                                },
                                desktop: {
                                    height: 360,
                                    width: 686,
                                },
                            }}
                        />
                    </SectionWithPreview>
                    <SectionWithPreview
                        title={t('governance.extra.delegation.title')}
                        text={t('governance.extra.delegation.text')}
                    >
                        <ResponsiveImage
                            sources={{
                                desktop: '/assets/governance/delegation.png',
                                tablet: '/assets/governance/delegation-tablet.png',
                                mobile: '/assets/governance/delegation-mobile.png',
                            }}
                            sourceProps={{
                                mobile: {
                                    height: 240,
                                    width: 358,
                                },
                                tablet: {
                                    height: 220,
                                    width: 333,
                                },
                                desktop: {
                                    height: 360,
                                    width: 686,
                                },
                            }}
                        />
                    </SectionWithPreview>
                    <SectionWithPreview
                        title={t('governance.extra.grants.title')}
                        text={t('governance.extra.grants.text')}
                    >
                        <ResponsiveImage
                            sources={{
                                desktop: '/assets/governance/grants.png',
                                tablet: '/assets/governance/grants-tablet.png',
                                mobile: '/assets/governance/grants-mobile.png',
                            }}
                            sourceProps={{
                                mobile: {
                                    height: 240,
                                    width: 358,
                                },
                                tablet: {
                                    height: 220,
                                    width: 333,
                                },
                                desktop: {
                                    height: 360,
                                    width: 686,
                                },
                            }}
                        />
                    </SectionWithPreview>
                </div>

                <div>
                    <h4>Resources</h4>
                    <LinkList
                        links={[
                            {
                                title: 'Discord',
                                href: '',
                                description: 'Join the community on Discord.',
                            },
                            {
                                title: 'DAO Documentation',
                                href: '',
                                description: 'Documentation for the DAO.',
                            },
                            {
                                title: 'Tally Voting',
                                href: '',
                                description:
                                'This repository implements a generic CCIP-Read gateway for fetching state proofs of data on other EVM chains. The intended use is for contracts on L1 to be able to fetch and verify data from contracts on L2 in a read context.',
                            },
                        ]}
                    />
                </div>

                <div className={clsx(ui.flex, ui['flex-col'], styles['join-section'])}>
                    <div className={clsx(ui.flex, ui['flex-col'], ui['h3-section'])}>
                        <h3>Join the New Internet</h3>
                        <p className={ui['max-w-text']}>
                            Your engagement in ENS governance is more than a vote. It&apos;s
                            your stake in an internet that is democratic, resilient, and
                            truly centered around its users.
                        </p>
                    </div>
                    <ColorCards
                        cards={[
                            {
                                title: 'ENS DAO',
                                description:
                                'You want to join the ENS community and contribute.',
                                color: 'ens-blue',
                                link: '#',
                            },
                            {
                                title: 'Learn More',
                                description:
                                'Absorb the wealth of knowledge in our Governance docs.',
                                color: 'ens-green',
                                link: '#',
                            },
                            {
                                title: 'Delegate Your Tokens',
                                description:
                                'Delegate your tokens to an engaged member of the community.',
                                color: 'ens-magenta',
                                link: '#',
                            },
                        ]}
                    />
                </div>

                <TwoCol
                    cols={[
                        {
                            tag: t('home.extra.governance.tag'),
                            title: t('home.extra.governance.title'),
                            description: t(
                                'home.extra.governance.description',
                            ),
                            button: t('home.extra.governance.button'),
                            buttonVariant: 'secondary',
                            href: '/',
                        },
                        {
                            tag: t('home.extra.community.tag'),
                            title: t('home.extra.community.title'),
                            description: t(
                                'home.extra.community.description',
                            ),
                            button: t('home.extra.community.button'),
                            buttonVariant: 'secondary',
                            href: '/',
                        },
                    ]}
                />
            </section>

            <Footer t={t} />
        </main>
    );
}
