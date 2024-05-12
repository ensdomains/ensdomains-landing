import { CSSProperties, FC } from 'react';

import styles from './ColorCards.module.css';
import ui from '~/styles/ui.module.css';

import type { Color } from '~/utils/types';
import { clsx } from 'clsx';
import { ExternalLink } from 'react-external-link';

export const ColorCards: FC<{
    cards: { title: string; description: string; color: Color; link: string }[];
}> = ({ cards }) => {
    return (
        <div className={styles.grid}>
            {cards.map(({ title, description, color, link }) => (
                <ExternalLink href={link} className={clsx(ui.flex, ui['flex-col'], styles.card)} style={{ '--bg': `var(--${color})`, '--bg-hover': `var(--${color.replace('ens-', 'ens-light-')})` } as CSSProperties}>
                    <div>{title}</div>
                    <div>{description}</div>
                </ExternalLink>
            ))}
        </div>
    );
};
