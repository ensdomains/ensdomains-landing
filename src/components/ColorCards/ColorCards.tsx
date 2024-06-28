import { CSSProperties, FC } from 'react';

import styles from './ColorCards.module.css';
import ui from '~/styles/ui.module.css';

import type { Color } from '~/utils/types';
import { clsx } from 'clsx';
import { ExternalLink } from 'react-external-link';

const getSquareVars = (color: Color): CSSProperties => {
    switch (color) {
        case 'ens-green':
            return {
                '--img': 'url("/assets/cards/green-normal.svg")',
                '--img-hover': 'url("/assets/cards/green-hover.svg")',
            } as CSSProperties;
        case 'ens-blue':
            return {
                '--img': 'url("/assets/cards/blue-normal.svg")',
                '--img-hover': 'url("/assets/cards/blue-hover.svg")',
            } as CSSProperties;
        case 'ens-magenta':
            return {
                '--img': 'url("/assets/cards/pink-normal.svg")',
                '--img-hover': 'url("/assets/cards/pink-hover.svg")',
            } as CSSProperties;
    }
};

export const ColorCards: FC<{
    cards: { title: string; description: string; color: Color; link: string }[];
}> = ({ cards }) => {
    return (
        <div className={styles.grid}>
            {cards.map(({ title, description, color, link }) => (
                <ExternalLink href={link} key={title} className={clsx(ui.flex, ui['flex-col'], styles.card)} style={{ '--bg': `var(--${color})`, '--bg-hover': `var(--${color.replace('ens-', 'ens-hover-')})` } as CSSProperties}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.text}>{description}</div>
                    <div
                        className={styles.box}
                        style={getSquareVars(color)}
                    />
                </ExternalLink>
            ))}
        </div>
    );
};
