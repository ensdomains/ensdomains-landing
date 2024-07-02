import { clsx } from 'clsx';
import { CSSProperties } from 'react';
import type { Metadata } from 'next';

import { Header } from '~/components/Header/Header';
import { LinkList } from '~/components/LinkList/LinkList';
import { TwoCol } from '~/components/TwoCol/TwoCol';
import { useTranslation } from '~/i18n/useTranslation';
import ui from '~/styles/ui.module.css';
import styles from './page.module.css';
import { HeroContent } from '~/components/developers/header/HeroContent';
import { SectionWithPreview } from '~/components/SectionWithPreview/SectionWithPreview';
import { PageProps } from '~/utils/types';
import { StatsCounter } from '~/components/animation/StatsCounter';

import stats from '~/stats/grants.json';
import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage';

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const { t } = await useTranslation(params.lang, 'translation');

    return {
        title: `${t('developers.hero.tag')} | ENS`,
    };
};

export default async function Developers({
    params,
}: PageProps) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <div
            style={
                {
                    '--page-text': 'var(--ens-magenta)',
                    '--page-bg': 'var(--ens-light-magenta)',
                    '--page-text-hover': 'var(--ens-hover-magenta)',
                } as CSSProperties
            }
        >

            <Header
                tag={t('developers.hero.tag')}
                title={t('developers.hero.title')}
                description={t('developers.hero.text')}
                cta={[
                    [t('developers.hero.cta1'), 'https://docs.ens.domains'],
                    [
                        t('developers.hero.cta2'),
                        'https://github.com/ensdomains',
                    ],
                ]}
            >
                <HeroContent />
            </Header>

            <section className={clsx(ui['page'])}>
                <div className={clsx(ui.flex, ui['flex-col'], ui['h2-section'])}>
                    <h2>
                        {t('developers.resources.title')}
                    </h2>
                    <LinkList
                        links={[
                            {
                                title: t(
                                    'developers.resources.docs.title',
                                ),
                                href: 'https://docs.ens.domains',
                                description: t(
                                    'developers.resources.docs.description',
                                ),
                            },
                            {
                                title: 'ENSjs',
                                href: 'https://github.com/ensdomains/ensjs-v3',
                                description: t(
                                    'developers.resources.ensjs.description',
                                ),
                            },
                            {
                                title: 'CCIP Read',
                                href: 'https://docs.ens.domains/ccip',
                                description: t(
                                    'developers.resources.ccip-read.description',
                                ),
                            },
                            {
                                title: 'EVMGateway',
                                href: 'https://github.com/ensdomains/evmgateway',
                                description: t(
                                    'developers.resources.evmgateway.description',
                                ),
                            },
                            {
                                title: 'Thorin',
                                href: 'https://thorin.ens.domains',
                                description: t(
                                    'developers.resources.thorin.description',
                                ),
                            },
                        ]}
                    />
                </div>
                <div>
                    <TwoCol
                        cols={[
                            {
                                tag: t('developers.resources.quickstart.tag'),
                                title: t('developers.resources.quickstart.title'),
                                description: t('developers.resources.quickstart.description'),
                                href: 'https://docs.ens.domains/web/quickstart',
                                button: t('developers.resources.quickstart.tag'),
                            },
                            {
                                tag: t('developers.resources.pro.tag'),
                                title: t('developers.resources.pro.title'),
                                description: t('developers.resources.pro.description'),
                                button: t('developers.resources.pro.tag'),
                                href: 'https://docs.ens.domains/contracts',
                            },
                        ]}
                    />
                </div>
                <SectionWithPreview
                    title={t('developers.extra.grants.title')}
                    text={t('developers.extra.grants.text')}
                    cta={[
                        {
                            text: t('developers.extra.grants.cta.view'),
                            url: 'https://ensgrants.xyz/rounds',
                            buttonVariant: 'primary',
                        },
                        {
                            text: t('developers.extra.grants.cta.apply'),
                            url: 'https://ensgrants.xyz',
                            buttonVariant: 'secondary',
                        },
                    ]}
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
                <SectionWithPreview
                    title={t('developers.extra.bounty.title')}
                    text={t('developers.extra.bounty.text')}
                    cta={[
                        {
                            text: t('developers.extra.bounty.cta.learn'),
                            url: 'https://immunefi.com/bug-bounty/ens',
                            buttonVariant: 'primary',
                        },
                    ]}
                >
                    <StatsCounter stats={{ bounty: 250_000 }} captions={{ bounty: '' }} className={styles.counter}>
                        <ResponsiveImage
                            className={styles.folders}
                            sources={{
                                desktop: '/assets/developers/folders.svg',
                                tablet: '/assets/developers/folders-tablet.svg',
                                mobile: '/assets/developers/folders-mobile.svg',
                            }}
                            sourceProps={{
                                desktop: { width: 418, height: 233 },
                                tablet: { width: 281, height: 156 },
                                mobile: { width: 316, height: 176 },
                            }}
                            alt=""
                        />
                    </StatsCounter>

                </SectionWithPreview>
            </section>
        </div>
    );
}
