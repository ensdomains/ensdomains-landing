'use client';

import { Header } from '../components/Header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { fallbackLng, Language } from '../i18n/settings';
import { useTranslation } from '../i18n/useTranslation';
import ui from '../styles/ui.module.css';

/* eslint-disable unicorn/prevent-abbreviations */
export default async function Home({
    lang = fallbackLng,
}: {
    lang?: Language;
}) {
    const { t } = await useTranslation(lang, 'translation');

    return (
        <main>
            <Navbar t={t} lang={lang} />
            <Header
                title={t('home.hero.title')}
                subtitle={t('home.hero.subtitle')}
                description={t('home.hero.text')}
            />
            <SearchInput t={t} />
            <section className={ui['w-page']}>
                <h2>{t('home.features.title')}</h2>
                <p>{t('home.features.text')}</p>
            </section>
        </main>
    );
}
