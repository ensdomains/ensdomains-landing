'use client';

import { clsx } from 'clsx';
import Link from 'next/link';
import { CSSProperties, FC, useState } from 'react';
import { ExternalLink } from 'react-external-link';

import { getLangPrefix } from '~/i18n/langPrefix';
import { fallbackLng, Language } from '~/i18n/settings';

import ui from '~/styles/ui.module.css';
import { LanguageSwitcher } from '../LanguageSwitcher/LanguageSwitcher';
import styles from './Navbar.module.css';
import { NavbarFade } from './NavbarFade';
import { EnsNavIcon } from '../icons';
import { usePathname } from 'next/navigation';

type Links = {
    blog: string;
    roadmap: string;
    developers: string;
    ecosystem: string;
    governance: string;
    launch: string;
};

export const Navbar: FC<{ lang: Language; links: Links }> = ({
    links,
    lang = fallbackLng,
}) => {
    const langPrefix = getLangPrefix((lang as Language) || fallbackLng);

    const items = Object.entries(links).filter(([k]) => !['blog', 'roadmap', 'launch'].includes(k));

    const [isOpen, setOpen] = useState(false);

    const pathname = usePathname();

    return (
        <nav id="nav" data-open={isOpen} className={clsx(ui.flex, styles.nav)}>
            <NavbarFade />
            <div className={clsx(ui.flex, ui['flex-row'], styles.mobileMenu)}>
                <Link href={langPrefix || '/'} onClick={() => setOpen(false)}>
                    <EnsNavIcon
                        className={(styles.logo, styles.tabletOnly)}
                    />
                    <img
                        src="/assets/ens_logo_text_dark.svg"
                        alt="ENS"
                        className={(styles.logo, styles.desktopOnly)}
                    />
                </Link>
                <button onClick={() => setOpen(!isOpen)} className={styles.menuButton}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="menu">
                            <rect id="Rectangle 2736" y="-0.000488281" width="4" height="4" rx="1" fill="currentColor" />
                            <rect id="Rectangle 2736_2" y="7.99951" width="4" height="4" rx="1" fill="currentColor" />
                            <rect id="Rectangle 2736_3" x="8" y="-0.000488281" width="4" height="4" rx="1" fill="currentColor" />
                            <rect id="Rectangle 2736_4" x="8" y="7.99951" width="4" height="4" rx="1" fill="currentColor" />
                        </g>
                    </svg>
                </button>
            </div>
            <div className={styles.navContent}>
                <div className={clsx(ui.flex, styles.links)}>
                    {items.map(([item, link]) => {
                        const url = `${langPrefix}/${item}`;

                        const color
                            = {
                                developers: '--ens-magenta',
                                ecosystem: '--ens-blue',
                                governance: '--ens-green',
                            }[item] || '--ens-hover-blue';

                        return (
                            <Link
                                onClick={() => setOpen(false)}
                                key={url}
                                href={url}
                                className={styles.link}
                                style={
                                    {
                                        '--current-link': url === pathname ? `var(${color})` : undefined,
                                        '--link-hover': `var(${color})`,
                                    } as CSSProperties
                                }
                            >
                                {link}
                            </Link>
                        );
                    })}
                    <ExternalLink href="https://blog.ens.domains" className={styles.link}>
                        {links.blog}
                    </ExternalLink>
                    <ExternalLink href="https://l2-roadmap-ui-fixes.ensdomains-v2.pages.dev/roadmap" className={styles.link}>
                        {links.roadmap}
                    </ExternalLink>
                </div>
                <div className={styles.langWithApp}>
                    <LanguageSwitcher lang={lang} />
                    <ExternalLink
                        href="https://app.ens.domains"
                        className={clsx(styles.launch, ui.button)}
                    >
                        {links.launch}
                    </ExternalLink>
                </div>
            </div>
        </nav>
    );
};
