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
            <Header />
            <div>
                <h1>{t('home.hero.title')}</h1>
                <div>Active Language: {params.lang}</div>
                <LanguageSwitcher />
            </div>

            <Footer />
        </div>
    );
}

export { generateStaticParams } from '../../utils/getStatic';
