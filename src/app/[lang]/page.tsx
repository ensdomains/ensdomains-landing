/* eslint-disable unicorn/prevent-abbreviations */

import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { LanguageSwitcher } from '../../components/LanguageSwitcher/LanguageSwitcher';
import { LinkList } from '../../components/LinkList/LinkList';
import { Navbar } from '../../components/Navbar/Navbar';
import { Language } from '../../i18n/settings';
import { useTranslation } from '../../i18n/useTranslation';

export default async function Home({
    params,
}: {
    params: { lang: Language };
    searchParams: any;
}) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <div className="page">
            <Navbar />
            <Header title={t('home.hero.title')} />
            <div>
                <div>Active Language: {params.lang}</div>
                <LanguageSwitcher />
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

            <Footer />
        </div>
    );
}

export { generateStaticParams } from '../../utils/getStatic';
