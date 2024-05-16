import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

import ui from '../../styles/ui.module.css';
import styles from './Header.module.css';

export const Header: FC<
    PropsWithChildren<{
        title: string;
        subtitle?: string;
        description?: string;
        tag?: string;
        cta?: [string, string][];
    }>
> = ({ title, subtitle, tag, description, children, cta }) => {
    return (
        <header
            className={clsx(
                ui['flex'],
                ui['flex-center'],
                ui['flex-col'],
                tag && ui['dots-bg'],
                styles.header,
            )}
        >
            {tag && <div className={styles.tag}>{tag}</div>}
            <h1 className={styles.h1}>
                {title}
                {subtitle && (
                    <>
                        <br />
                        <span className={styles.feelBetter}>{subtitle}</span>
                    </>
                )}
            </h1>
            {description && <p className={styles.p}>{description}</p>}
            <div className={styles.children}>{children}</div>
            {cta && (
                <div className={clsx(ui.flex, ui['flex-row'], styles.cta)}>
                    {cta.map(([text, url]) => (
                        <a key={url} href={url} className={clsx(ui.button)}>
                            {text}
                        </a>
                    ))}
                </div>
            )}
        </header>
    );
};
