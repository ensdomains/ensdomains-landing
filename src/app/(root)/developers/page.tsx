import clsx from 'clsx';
import { CSSProperties } from 'react';

import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { LinkList } from '~/components/LinkList/LinkList';
import { Navbar } from '~/components/Navbar/Navbar';
import { TwoCol } from '~/components/TwoCol/TwoCol';
import { Language } from '~/i18n/settings';
import { useTranslation } from '~/i18n/useTranslation';

import ui from '~/styles/ui.module.css';
import { HeroContent } from '~/components/developers/header/HeroContent';
import { SectionWithPreview } from '~/components/SectionWithPreview/SectionWithPreview';

export default async function Home({
    params,
}: {
    params: { lang: Language };
}) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <main
            style={
                {
                    '--page-text': 'var(--ens-magenta)',
                    '--page-bg': 'var(--ens-light-magenta)',
                } as CSSProperties
            }
        >
            <Navbar t={t} lang={params.lang} />

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

            <section className={clsx(ui['w-page'])}>
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
                    title="Grants for Game-Changers"
                    text="some text"
                    cta={[
                        {
                            text: 'View Grants',
                            url: '#',
                            buttonVariant: 'primary',
                        },
                        {
                            text: 'Apply',
                            url: '#',
                            buttonVariant: 'secondary',
                        },
                    ]}
                >
                    hello
                </SectionWithPreview>
                <SectionWithPreview
                    title="Our Bug Bounty: Your Peace of Mind"
                    text="some more"
                    cta={[
                        {
                            text: 'Learn More',
                            url: '#',
                            buttonVariant: 'primary',
                        },
                    ]}
                >
                    hi
                </SectionWithPreview>
            </section>

            <Footer t={t} />
        </main>
    );
}
