import clsx from 'clsx';
import { TFunction } from 'i18next';
import Link from 'next/link';
import { FC } from 'react';
import { ExternalLink } from 'react-external-link';

import ui from '../../styles/ui.module.css';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

export const Navbar: FC<{ t: TFunction<string, string> }> = ({ t }) => {
    return (
        <nav className={clsx(ui.flex, ui['flex-row'], styles.nav)}>
            <img
                src="/assets/ens_logo_text_dark.svg"
                height="30"
                alt="ENS"
                width="96"
            />
            <div className={clsx(ui.flex, ui['flex-row'], styles.right)}>
                <div className={clsx(ui.flex, ui['flex-row'], styles.links)}>
                    {['blog', 'governance', 'community', 'docs', 'roadmap'].map(
                        (item) => (
                            <Link href={`/${item}`}>{t(`nav.${item}`)}</Link>
                        )
                    )}
                </div>
                <LanguageSwitcher />
                <ExternalLink
                    href="https://app.ens.domains"
                    className={styles.launch}
                >
                    {t('nav.launch')}
                </ExternalLink>
            </div>
        </nav>
    );
};
