import clsx from 'clsx';
import { TFunction } from 'i18next';
import Link from 'next/link';
import { CSSProperties, FC } from 'react';
import { ExternalLink } from 'react-external-link';

import { getLangPrefix } from '../../i18n/langPrefix';
import { fallbackLng, Language } from '../../i18n/settings';
import ui from '../../styles/ui.module.css';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

export const Navbar: FC<{ t: TFunction<string, string>; lang: Language }> = ({
    t,
    lang = fallbackLng,
}) => {
    const langPrefix = getLangPrefix((lang as Language) || fallbackLng);

    return (
        <nav className={clsx(ui.flex, ui['flex-row'], styles.nav)}>
            <Link href={langPrefix || '/'}>
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
                    {[
                        'developers',
                        'ecosystem',
                        'governance',
                        'blog',
                        'roadmap',
                    ].map((item) => {
                        const url =
                            item == 'blog'
                                ? 'https://blog.ens.domains'
                                : // eslint-disable-next-line unicorn/no-nested-ternary
                                item == 'roadmap'
                                ? // placeholder url
                                  'https://v3x.fyi/s1'
                                : `${langPrefix}/${item}`;

                        const color =
                            {
                                developers: '--ens-magenta',
                                ecosystem: '--ens-blue',
                                governance: '--ens-green',
                            }[item] || '--ens-hover-blue';

                        return (
                            <Link
                                href={url}
                                className={styles.link}
                                style={
                                    {
                                        '--link-hover': 'var(' + color + ')',
                                    } as CSSProperties
                                }
                            >
                                {t(`nav.${item}`)}
                            </Link>
                        );
                    })}
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
