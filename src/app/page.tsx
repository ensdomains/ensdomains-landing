'use client';

import { clsx } from 'clsx';

import { Carousel } from '../components/Carousel/Carousel';
import { FeaturePreview } from '../components/FeaturePreview/FeaturePreview';
import { Header } from '../components/Header/Header';
import { Navbar } from '../components/Navbar/Navbar';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { fallbackLng, Language } from '../i18n/settings';
import { useTranslation } from '../i18n/useTranslation';
import ui from '../styles/ui.module.css';
import styles from './page.module.css';

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
                <div className={clsx(ui.flex, ui['flex-col'], styles.title)}>
                    <h2>{t('home.features.title')}</h2>
                    <p>{t('home.features.text')}</p>
                </div>
                <Carousel>
                    <FeaturePreview
                        title="lol"
                        text="kekw"
                        textColor="ens-blue"
                        backgroundColor="ens-light-blue"
                        indicatorColor="ens-white"
                        position={0}
                    />
                    <FeaturePreview
                        title="lol"
                        text="kekw2"
                        textColor="ens-magenta"
                        backgroundColor="ens-light-magenta"
                        indicatorColor="ens-white"
                        position={1}
                    />
                </Carousel>
            </section>
        </main>
    );
}
