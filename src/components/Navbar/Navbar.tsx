import clsx from 'clsx';
import { TFunction } from 'i18next';
import Link from 'next/link';
import { FC } from 'react';
import { ExternalLink } from 'react-external-link';

import { Language } from '../../i18n/settings';
import ui from '../../styles/ui.module.css';
// import { mq, useMq } from '../../utils/useMq';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

export const Navbar: FC<{ t: TFunction<string, string>; lang: Language }> = ({
    t,
    lang,
}) => {
    // const isTablet = useMq(mq.tablet);

    return (
        <nav className={clsx(ui.flex, ui['flex-row'], styles.nav)}>
            <Link href="/">
                <img
                    src={'/assets/ens_logo_dark.svg'}
                    height="30"
                    alt="ENS"
                    width="96"
                    className={(styles.logo, styles.tabletOnly)}
                />
                <img
                    src={'/assets/ens_logo_text_dark.svg'}
                    height="30"
                    alt="ENS"
                    width="96"
                    className={(styles.logo, styles.desktopOnly)}
                />
            </Link>
            <div className={clsx(ui.flex, ui['flex-row'], styles.right)}>
                <div className={clsx(ui.flex, ui['flex-row'], styles.links)}>
                    {['blog', 'governance', 'community', 'docs', 'roadmap'].map(
                        (item) => (
                            <Link
                                href={`/${lang}/${item}`}
                                className={styles.link}
                            >
                                {t(`nav.${item}`)}
                            </Link>
                        )
                    )}
                </div>
                <LanguageSwitcher lang={lang} />
                <ExternalLink
                    href="https://app.ens.domains"
                    className={(styles.launch, ui.button)}
                >
                    {t('nav.launch')}
                </ExternalLink>
            </div>
        </nav>
    );
};
