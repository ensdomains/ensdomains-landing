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
        color?: string;
    }>
> = ({ title, subtitle, tag, description, color, children }) => {
    return (
        <header
            className={clsx(
                ui['flex'],
                ui['flex-center'],
                ui['flex-col'],
                styles.header
            )}
        >
            {tag && <div>{tag}</div>}
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
            {children}
        </header>
    );
};
