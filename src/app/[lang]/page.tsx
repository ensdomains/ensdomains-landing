/* eslint-disable unicorn/prevent-abbreviations */

import Footer from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { LanguageSwitcher } from '../../components/LanguageSwitcher/LanguageSwitcher';
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

            <div>yourname.eth</div>

            <div>your web3 username</div>

            <div>farewell to complexity</div>

            <div>consistent accross the web</div>

            <div>true ownership</div>

            <div>go on your way</div>

            <div>your gateway to the new internet</div>

            <div>
                <div>a public good shaped by you</div>
                <div>join our community</div>
            </div>

            <div>stats (names, integrations, owners)</div>

            <Footer />
        </div>
    );
}

export { generateStaticParams } from '../../utils/getStatic';
