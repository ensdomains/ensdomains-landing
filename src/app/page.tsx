/* eslint-disable sonarjs/no-duplicate-string */
'use client';

import { clsx } from 'clsx';

import { Carousel } from '../components/Carousel/Carousel';
import { ColorCards } from '../components/ColorCards/ColorCards';
import { DappsAnimation } from '../components/DappsAnimation/DappsAnimation';
import { FeaturePreview } from '../components/FeaturePreview/FeaturePreview';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { MessageAnimation } from '../components/MessageAnimation/MessageAnimation';
import { Navbar } from '../components/Navbar/Navbar';
import { SearchInput } from '../components/SearchInput/SearchInput';
import { TwoCol } from '../components/TwoCol/TwoCol';
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
            <section className={clsx(ui['my-100'], ui['w-page'])}>
                <div className={clsx(ui.flex, ui['flex-col'], styles.title)}>
                    <h2>{t('home.features.title')}</h2>
                    <p>{t('home.features.text')}</p>
                </div>
                <Carousel>
                    <FeaturePreview
                        title={t('home.features.farewell.title')}
                        text={t('home.features.farewell.text')}
                        textColor="ens-blue"
                        backgroundColor="ens-light-blue"
                        indicatorColor="ens-white"
                        position={0}
                        gridSrc="blue-grid.svg"
                    >
                        {(mq) => <MessageAnimation mq={mq} />}
                    </FeaturePreview>
                    <FeaturePreview
                        title={t('home.features.consistent.title')}
                        text={t('home.features.consistent.text')}
                        textColor="ens-magenta"
                        backgroundColor="ens-light-magenta"
                        indicatorColor="ens-white"
                        position={1}
                        gridSrc="magenta-grid.svg"
                    >
                        {(mq) => <DappsAnimation t={t} />}
                    </FeaturePreview>
                    {/* <FeaturePreview
                        title={t('home.features.ownership.title')}
                        text={t('home.features.ownership.text')}
                        textColor="ens-green"
                        backgroundColor="ens-light-green"
                        indicatorColor="ens-white"
                        position={1}
                        gridSrc="green-grid.svg"
                    /> */}
                </Carousel>
                <div
                    className={clsx(
                        ui['w-page'],
                        ui['my-100'],
                        // eslint-disable-next-line sonarjs/no-duplicate-string
                        ui['space-y-40']
                    )}
                >
                    <h3>{t('home.gyow.title')}</h3>
                    <p className={clsx(ui['max-w-text'], ui.cursive)}>
                        {t('home.gyow.description')}
                    </p>
                    <div>{/* TODO: Train Tracks */}</div>
                    <ColorCards
                        cards={[
                            {
                                title: t('home.gyow.ens-app.title'),
                                description: t('home.gyow.ens-app.description'),
                            },
                            {
                                title: t('home.gyow.ens-dao.title'),
                                description: t('home.gyow.ens-dao.description'),
                            },
                            {
                                title: t('home.gyow.docs.title'),
                                description: t('home.gyow.docs.description'),
                            },
                        ]}
                    />
                    <div>{/* TODO: Train Tracks */}</div>
                </div>
                <div
                    className={clsx(
                        ui['w-page'],
                        ui['my-100'],
                        ui['space-y-40']
                    )}
                >
                    <h3>{t('home.gateway.title')}</h3>
                    <p className={clsx(ui['max-w-text'], ui.cursive)}>
                        {t('home.gateway.description')}
                    </p>

                    <div className={ui['space-y-40']}>
                        <div>{t('home.partners.tag')}</div>

                        <div>
                            <p className={clsx(ui['max-w-text'], ui.cursive)}>
                                {t('home.partners.description')}
                            </p>
                            <div>{/* TODO: partners here */}</div>
                        </div>

                        <button className={ui.button}>
                            {t('home.partners.button')}
                        </button>
                    </div>
                </div>
                <div
                    className={clsx(
                        ui['w-page'],
                        ui['my-100'],
                        ui['space-y-40']
                    )}
                >
                    <TwoCol
                        cols={[
                            {
                                tag: t('home.extra.governance.tag'),
                                title: t('home.extra.governance.title'),
                                description: t(
                                    'home.extra.governance.description'
                                ),
                                button: t('home.extra.governance.button'),
                                href: '/',
                            },
                            {
                                tag: t('home.extra.community.tag'),
                                title: t('home.extra.community.title'),
                                description: t(
                                    'home.extra.community.description'
                                ),
                                button: t('home.extra.community.button'),
                                href: '/',
                            },
                        ]}
                    />
                </div>
                <div
                    className={clsx(
                        ui['w-page'],
                        ui['my-100'],
                        ui['space-y-40']
                    )}
                >
                    <span>
                        {t('home.stats.names').replace('%s', '2,580,000+')}
                    </span>
                    <span>
                        {t('home.stats.integrations').replace('%s', '575+')}
                    </span>
                    <span>
                        {t('home.stats.owners').replace('%s', '745,000+')}
                    </span>
                </div>
            </section>
            <Footer t={t} />
        </main>
    );
}
