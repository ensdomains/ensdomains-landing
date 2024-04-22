import clsx from 'clsx';
import { TFunction } from 'i18next';
import Link from 'next/link';
import { FC } from 'react';
import { ExternalLink } from 'react-external-link';

import ui from '../../styles/ui.module.css';
import { mq, useMq } from '../../utils/useMq';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';

export const Navbar: FC<{ t: TFunction<string, string> }> = ({ t }) => {
    const isTablet = useMq(mq.tablet);

    return (
        <nav className={clsx(ui.flex, ui['flex-row'], styles.nav)}>
            <Link href="/">
                <img
                    src={`/assets/ens_logo_${isTablet ? '' : 'text_'}dark.svg`}
                    height="30"
                    alt="ENS"
                    width="96"
                />
            </Link>
            <div className={clsx(ui.flex, ui['flex-row'], styles.right)}>
                <div className={clsx(ui.flex, ui['flex-row'], styles.links)}>
                    {['blog', 'governance', 'community', 'docs', 'roadmap'].map(
                        (item) => (
                            <Link href={`/${item}`} className={styles.link}>
                                {t(`nav.${item}`)}
                            </Link>
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
