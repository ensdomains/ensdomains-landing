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
                <div>{t('developers.hero.tag')}</div>
                <h1 className={styles.h1}>{t('developers.hero.title')}</h1>
                <p className={styles.p}>{t('developers.hero.text')}</p>
            </header>

            <div>Resources</div>

            <LinkList
                links={[
                    {
                        title: 'Documentation',
                        href: 'https://docs.ens.domains',
                        description: 'Protocol Documentation.',
                    },
                    {
                        title: 'ENSjs',
                        href: 'https://github.com/ensdomains/ensjs-v3',
                        description:
                            'The ultimate ENS javascript library, with viem under the hood.',
                    },
                    {
                        title: 'CCIP Read',
                        href: 'https://docs.ens.domains/ccip',
                        description:
                            'The Cross Chain Interoperability Protocol (or CCIP Read for short), can load information by hitting a so called "Gateway".',
                    },
                    {
                        title: 'EVMGateway',
                        href: 'https://github.com/ensdomains/evmgateway',
                        description:
                            'This repository implements a generic CCIP-Read gateway for fetching state proofs of data on other EVM chains. The intended use is for contracts on L1 to be able to fetch and verify data from contracts on L2 in a read context.',
                    },
                    {
                        title: 'Thorin',
                        href: 'https://thorin.ens.domains',
                        description:
                            'Design system for ENS built with React and styled-components.',
                    },
                ]}
            />

            <div>grants for gamechangers</div>

            <div>our bug bounty your peace of mind</div>

            <Footer />
        </div>
    );
}

export { generateStaticParams } from '../../../utils/getStatic';
