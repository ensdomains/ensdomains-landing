/* eslint-disable unicorn/prevent-abbreviations */

import clsx from 'clsx';

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
        <div className="page">
            <Navbar t={t} lang={params.lang} />

            <Header
                tag={t('governance.hero.tag')}
                title={t('governance.hero.title')}
                description={t('governance.hero.text')}
                color=""
                cta={[
                    [t('governance.hero.cta1'), 'https://docs.ens.domains/dao'],
                    [
                        t('governance.hero.cta2'),
                        'https://docs.ens.domains/dao/proposals',
                    ],
                ]}
            />

            <div className={clsx(ui.sub1, ui['w-page'])}>
                $ENS: Power to the People H
            </div>

            <div className={ui['w-page']}>
                <div className={ui.sub3}>your vote your choice</div>
            </div>

            <div className={ui['w-page']}>
                <div className={ui.sub3}>empower through delegation</div>
            </div>

            <div className={ui['w-page']}>
                <div className={ui.sub3}>grants for game-changers</div>
            </div>

            <div className={ui['w-page']}>
                <div className={ui.sub3}>More Resources</div>
            </div>

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

            <div className={clsx(ui.sub2, ui['w-page'])}>
                Join the New Internet
            </div>

            <div className={ui['w-page']}>
                <div>A public good shaped by you. Join our community</div>
                <div>Join our community</div>
            </div>

            <Footer />
        </div>
    );
}
