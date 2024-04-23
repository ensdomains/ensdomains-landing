import { clsx } from 'clsx';
import { CSSProperties, FC, HTMLAttributes } from 'react';

import ui from '../../styles/ui.module.css';
import type { Color } from '../../utils/types';
import styles from './FeaturePreview.module.css';

const Indicator = ({
    indicatorColor,
    isCurrent,
}: {
    indicatorColor: Color;
    isCurrent: boolean;
}) => {
    return (
        <div
            className={styles.dot}
            style={
                {
                    '--dot-color': isCurrent
                        ? 'var(--feature-text)'
                        : `var(--${indicatorColor})`,
                } as CSSProperties
            }
        ></div>
    );
};

export const FeaturePreview: FC<
    {
        title: string;
        text: string;
        backgroundColor: Color;
        textColor: Color;
        position: 0 | 1 | 2;
        indicatorColor: Color;
        gridSrc: `/${string}`;
    } & Omit<HTMLAttributes<HTMLDivElement>, 'title'>
> = ({
    title,
    text,
    children,
    className,
    backgroundColor,
    indicatorColor,
    textColor,
    style,
    position: currentPosition,
    gridSrc,
    ...properties
}) => {
    return (
        <div
            {...properties}
            title={title}
            style={
                {
                    backgroundImage: `url(${gridSrc})`,
                    ...style,
                    '--feature-bg': `var(--${backgroundColor})`,
                    '--feature-text': `var(--${textColor})`,
                } as CSSProperties
            }
            className={clsx(className, styles.container)}
        >
            <div className={clsx(ui.flex, ui.fle, styles.menubar)}>
                {[0, 1, 2].map((position) => (
                    <Indicator
                        indicatorColor={indicatorColor}
                        isCurrent={currentPosition === position}
                    />
                ))}
            </div>
            <div className={styles.headline}>
                <h4>{title}</h4>
                <p className={styles.text}>{text}</p>
            </div>
            {children}
        </div>
    );
};
