import { clsx } from 'clsx';
import { CSSProperties, FC, HTMLAttributes } from 'react';

import type { Color } from '../../utils/types';
import styles from './FeaturePreview.module.css';

export const FeaturePreview: FC<
    {
        title: string;
        text: string;
        backgroundColor: Color;
        textColor: Color;
    } & Omit<HTMLAttributes<HTMLDivElement>, 'title'>
> = ({
    title,
    text,
    children,
    className,
    backgroundColor,
    textColor,
    style,
    ...properties
}) => {
    return (
        <div
            {...properties}
            title={title}
            style={
                {
                    ...style,
                    '--feature-bg': `var(--${backgroundColor})`,
                    '--feature-text': `var(--${textColor})`,
                } as CSSProperties
            }
            className={clsx(className, styles.container)}
        >
            <div className={styles.menubar}></div>
            <div className={styles.headline}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
            {children}
        </div>
    );
};
