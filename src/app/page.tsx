'use client';

import { clsx } from 'clsx';

import { Carousel } from '../components/Carousel/Carousel';
import { ColorCards } from '../components/ColorCards/ColorCards';
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
                        title={t('home.features.farewell.title')}
                        text={t('home.features.farewell.text')}
                        textColor="ens-blue"
                        backgroundColor="ens-light-blue"
                        indicatorColor="ens-white"
                        position={0}
                        gridSrc="/assets/blue-grid.svg"
                    />
                    <FeaturePreview
                        title={t('home.features.consistent.title')}
                        text={t('home.features.consistent.text')}
                        textColor="ens-magenta"
                        backgroundColor="ens-light-magenta"
                        indicatorColor="ens-white"
                        position={1}
                        gridSrc="/assets/magenta-grid.svg"
                    />
                    <FeaturePreview
                        title={t('home.features.ownership.title')}
                        text={t('home.features.ownership.text')}
                        textColor="ens-green"
                        backgroundColor="ens-light-green"
                        indicatorColor="ens-white"
                        position={1}
                        gridSrc="/assets/green-grid.svg"
                    />
                </Carousel>

                <div
                    className={clsx(
                        ui['w-page'],
                        ui['my-100'],
                        // eslint-disable-next-line sonarjs/no-duplicate-string
                        ui['space-y-40']
                    )}
                >
                    <h3>Go your own way</h3>
                    <p className={clsx(ui['max-w-text'], ui.cursive)}>
                        Find your unique path in the ENS ecosystem. No matter
                        where you start, we're all going toward a better
                        internet.
                    </p>
                    <div>{/* TODO: Train Tracks */}</div>
                    <ColorCards
                        cards={[
                            {
                                title: 'ENS App',
                                description:
                                    'Your ENs journey begins here, by registering your name.',
                            },
                            {
                                title: 'ENS DAO',
                                description:
                                    'Join the ENS community to contribute alongside a global collective.',
                            },
                            {
                                title: 'Developer Docs',
                                description:
                                    // eslint-disable-next-line prettier/prettier
                                    'You\'re a developer, and you want to build on the new internet.',
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
                    <h3>Your gateway to the New Internet</h3>
                    <p className={clsx(ui['max-w-text'], ui.cursive)}>
                        Imagine a world where every product is interconnected
                        between the internet and web3, creating a unified,
                        innovative experience.
                    </p>

                    <div className={ui['space-y-40']}>
                        <div>Key Partners</div>

                        <div>
                            <p className={clsx(ui['max-w-text'], ui.cursive)}>
                                These collaborators are raising the bar in
                                improving the internet, establishing themselves
                                as key partners with ENS.
                            </p>
                            <div>{/* TODO: partners here */}</div>
                        </div>

                        <button className={ui.button}>
                            Discover the ENS Ecosystem
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
                    <div>
                        <div>
                            <div>Governance</div>
                            <div>
                                <div>A public good, shaped by you</div>
                                <p className={ui.cursive}>
                                    ENS is more than a non-profit -- it's a
                                    community-governed beacon of trust. Take
                                    part in shaping an internet where everyone
                                    has a voice.
                                </p>
                            </div>
                            <a className={ui.button} href="/">
                                Learn about ENS Governance
                            </a>
                        </div>
                        <div>
                            <div>Community</div>
                            <div>
                                <div>Join our community</div>
                                <p className={ui.cursive}>Lorem ipsum.</p>
                            </div>
                            <a className={ui.button} href="/">
                                Where to follow us
                            </a>
                        </div>
                    </div>
                </div>
                <div
                    className={clsx(
                        ui['w-page'],
                        ui['my-100'],
                        ui['space-y-40']
                    )}
                >
                    <span>2,580,000+ names</span>
                    <span>575+ integrations</span>
                    <span>745,000 owners</span>
                </div>
            </section>
        </main>
    );
}
