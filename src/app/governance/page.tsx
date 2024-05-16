import clsx from 'clsx';
import { CSSProperties } from 'react';

import { ColorCards } from '~/components/ColorCards/ColorCards';
import { Footer } from '~/components/Footer/Footer';
import { Header } from '~/components/Header/Header';
import { LinkList } from '~/components/LinkList/LinkList';
import { Navbar } from '~/components/Navbar/Navbar';
import { Language } from '~/i18n/settings';
import { useTranslation } from '~/i18n/useTranslation';

import ui from '../../styles/ui.module.css';

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
            />

            <section className={ui['w-page']}>
                <div className={clsx(ui.flex, ui['flex-col'], ui['h2-section'])}>
                    <h2>
                        $ENS: Power to the People
                    </h2>
                    <div>
                        <h4>your vote your choice</h4>
                    </div>
                    <div>
                        <h4>empower through delegation</h4>
                    </div>
                    <div>
                        <h4>grants for game-changers</h4>
                    </div>
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

                <div>
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
                                color: 'ens-blue', // TODO: update color & link
                                link: '#',
                            },
                            {
                                title: 'Learn More',
                                description:
                                'Absorb the wealth of knowledge in our Governance docs.',
                                color: 'ens-blue', // TODO: update color & link
                                link: '#',
                            },
                            {
                                title: 'Delegate Your Tokens',
                                description:
                                'Delegate your tokens to an engaged member of the community.',
                                color: 'ens-blue', // TODO: update color & link
                                link: '#',
                            },
                        ]}
                    />
                </div>

                <div>
                    <h4>A public good shaped by you.</h4>
                    <h4>Join our community</h4>

                </div>
            </section>

            <Footer t={t} />
        </main>
    );
}
