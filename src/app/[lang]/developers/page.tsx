/* eslint-disable unicorn/prevent-abbreviations */

import Footer from '../../../components/Footer/Footer';
import { LinkList } from '../../../components/LinkList/LinkList';
import { Navbar } from '../../../components/Navbar/Navbar';
import { Language } from '../../../i18n/settings';
import { useTranslation } from '../../../i18n/useTranslation';

export default async function Home({
    params,
}: {
    params: { lang: Language };
    searchParams: any;
}) {
    const { t } = await useTranslation(params.lang, 'translation');

    return (
        <div className="page">
            <Navbar t={t} />

            <div>Resources</div>

            <LinkList
                links={[
                    {
                        title: 'Documentation',
                        href: '',
                        description: 'Protocol Documentation.',
                    },
                    {
                        title: 'ENSjs',
                        href: '',
                        description:
                            'The ultimate ENS javascript library, with viem under the hood.',
                    },
                    {
                        title: 'CCIP Read',
                        href: '',
                        description:
                            'The Cross Chain Interoperability Protocol (or CCIP Read for short), can load information by hitting a so called "Gateway".',
                    },
                    {
                        title: 'EVMGateway',
                        href: '',
                        description:
                            'This repository implements a generic CCIP-Read gateway for fetching state proofs of data on other EVM chains. The intended use is for contracts on L1 to be able to fetch and verify data from contracts on L2 in a read context.',
                    },
                    {
                        title: 'Thorin',
                        href: '',
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
