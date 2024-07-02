import { clsx } from 'clsx';
import { CSSProperties } from 'react';

import { ColorCards } from '~/components/ColorCards/ColorCards';
import { Header } from '~/components/Header/Header';
import { LinkList } from '~/components/LinkList/LinkList';
import { Language } from '~/i18n/settings';
import { useTranslation } from '~/i18n/useTranslation';

import ui from '~/styles/ui.module.css';
import styles from './page.module.css';
import { TwoCol } from '~/components/TwoCol/TwoCol';
import { SectionWithPreview } from '~/components/SectionWithPreview/SectionWithPreview';
import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage';
import { HeroContent } from '~/components/governance/HeroContent';
import type { PageProps } from '~/utils/types';
import type { Metadata } from 'next';
import { StatsCounter } from '~/components/animation/StatsCounter';
import stats from '~/stats/grants.json';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { t } = await useTranslation(params.lang, 'translation');

    return {
        title: `${t('governance.hero.tag')} | ENS`,
    };
};

export default async function Governance({
    params,
}: {
    params: { lang: Language };
}) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <div
            style={
                {
                    '--page-text': 'var(--ens-green)',
                    '--page-bg': 'var(--ens-light-green)',
                    '--page-text-hover': 'var(--ens-hover-green)',
                } as CSSProperties
            }
        >
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
                                desktop: '/assets/governance/vote.svg',
                                tablet: '/assets/governance/vote-tablet.svg',
                                mobile: '/assets/governance/vote-mobile.svg',
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
                                desktop: '/assets/governance/delegation.svg',
                                tablet: '/assets/governance/delegation-tablet.svg',
                                mobile: '/assets/governance/delegation-mobile.svg',
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
                        <StatsCounter
                            stats={stats}
                            captions={{
                                eth: t('developers.extra.grants.stat.eth'),
                                proposals: t('developers.extra.grants.stat.proposals'),
                                voters: t('developers.extra.grants.stat.voters'),
                            }}
                        />
                    </SectionWithPreview>
                </div>

                <div>
                    <h4>{t('governance.extra.resources.title')}</h4>
                    <LinkList
                        links={[
                            {
                                title: 'Discord',
                                href: 'https://chat.ens.domains',
                                description: t('governance.extra.resources.community'),
                            },
                            {
                                title: t('governance.extra.resources.docs.title'),
                                href: 'https://docs.ens.domains/dao',
                                description: t('governance.extra.resources.docs.description'),
                            },
                            {
                                title: t('governance.extra.resources.voting.title'),
                                href: 'https://tally.xyz/gov/ens',
                                description: t('governance.extra.resources.voting.description'),
                            },
                        ]}
                    />
                </div>

                <div className={clsx(ui.flex, ui['flex-col'], styles['join-section'])}>
                    <div className={clsx(ui.flex, ui['flex-col'], ui['h3-section'])}>
                        <h3>{t('governance.join.title')}</h3>
                        <p className={ui['max-w-text']}>
                            {t('governance.join.text')}
                        </p>
                    </div>
                    <ColorCards
                        cards={[
                            {
                                title: t('home.gyow.ens-dao.title'),
                                description: t('home.gyow.ens-dao.description'),
                                color: 'ens-blue',
                                link: 'https://ensdao.org',
                            },
                            {
                                title: 'Learn More',
                                description:
                                'Absorb the wealth of knowledge in our Governance docs.',
                                color: 'ens-green',
                                link: 'https://basics.ensdao.org',
                            },
                            {
                                title: 'Delegate Your Tokens',
                                description:
                                'Delegate your tokens to an engaged member of the community.',
                                color: 'ens-magenta',
                                link: 'https://delegate.ens.domains',
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
                            href: 'https://docs.ens.domains/dao',
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
        </div>
    );
}
