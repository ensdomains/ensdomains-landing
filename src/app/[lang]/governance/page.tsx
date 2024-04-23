/* eslint-disable unicorn/prevent-abbreviations */

import clsx from 'clsx';

import Footer from '../../../components/Footer/Footer';
import { LinkList } from '../../../components/LinkList/LinkList';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Language } from '../../../i18n/settings';
import { useTranslation } from '../../../i18n/useTranslation';
import ui from '../../../styles/ui.module.css';
import styles from './page.module.css';

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

            <header
                className={clsx(
                    ui['flex'],
                    ui['flex-center'],
                    ui['flex-col'],
                    styles.header
                )}
            >
                <div>{t('governance.hero.tag')}</div>
                <h1 className={styles.h1}>{t('governance.hero.title')}</h1>
                <p className={styles.p}>{t('governance.hero.text')}</p>
            </header>

            <div>$ENS: Power to the People</div>

            <div>your vote your choice</div>

            <div>empower through delegation</div>

            <div>grants for game-changers</div>

            <div>More Resources</div>

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

            <div>Join the New Internet</div>

            <div>A public good shaped by you. Join our community</div>

            <Footer />
        </div>
    );
}

export { generateStaticParams } from '../../../utils/getStatic';
