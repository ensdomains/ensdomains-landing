import { clsx } from 'clsx';
import { CSSProperties } from 'react';

import { Header } from '~/components/Header/Header';
import { LinkList } from '~/components/LinkList/LinkList';
import { TwoCol } from '~/components/TwoCol/TwoCol';
import { useTranslation } from '~/i18n/useTranslation';

import ui from '~/styles/ui.module.css';
import { HeroContent } from '~/components/developers/header/HeroContent';
import { SectionWithPreview } from '~/components/SectionWithPreview/SectionWithPreview';
import { ResponsiveImage } from '~/components/ResponsiveImage/ResponsiveImage';
import { PageProps } from '~/utils/types';
import type { Metadata } from 'next';

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
                                    'developers.resources.documentation.title',
                                ),
                                href: 'https://docs.ens.domains',
                                description: t(
                                    'developers.resources.documentation.description',
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
                                tag: 'Quickstart Guide',
                                title: 'New to Web3?',
                                description:
                                'Starting in web3 should be exhilarating, not intimidating. Dive into our straightforward guides to begin with ease and confidence.',
                                href: '',
                                button: 'Quickstart Guide',
                            },
                            {
                                tag: 'ENS Contracts',
                                title: 'For the Web3 wizards',
                                description:
                                'Need more depth? Our comprehensive documentation offers deep insights and expert tips for the web3 savvy.',
                                button: 'ENS Contracts',
                                href: '',
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
                            url: '#',
                            buttonVariant: 'primary',
                        },
                        {
                            text: t('developers.extra.grants.cta.apply'),
                            url: '#',
                            buttonVariant: 'secondary',
                        },
                    ]}
                >
                    <ResponsiveImage
                        sources={{
                            desktop: '/assets/developers/grants.png',
                            tablet: '/assets/developers/grants-tablet.png',
                            mobile: '/assets/developers/grants-mobile.png',
                        }}
                        sourceProps={{
                            mobile: {
                                height: 360,
                                width: 358,
                            },
                            tablet: {
                                height: 335,
                                width: 333,
                            },
                            desktop: {
                                height: 360,
                                width: 550,
                            },
                        }}
                    />
                </SectionWithPreview>
                <SectionWithPreview
                    title={t('developers.extra.bounty.title')}
                    text={t('developers.extra.bounty.text')}
                    cta={[
                        {
                            text: t('developers.extra.bounty.cta.learn'),
                            url: '#',
                            buttonVariant: 'primary',
                        },
                    ]}
                >
                    <ResponsiveImage
                        sources={{
                            desktop: '/assets/developers/bounties.png',
                            tablet: '/assets/developers/bounties-tablet.png',
                            mobile: '/assets/developers/bounties-mobile.png',
                        }}
                        sourceProps={{
                            mobile: {
                                height: 360,
                                width: 358,
                            },
                            tablet: {
                                height: 335,
                                width: 333,
                            },
                            desktop: {
                                height: 360,
                                width: 550,
                            },
                        }}
                    />
                </SectionWithPreview>
            </section>
        </div>
    );
}
