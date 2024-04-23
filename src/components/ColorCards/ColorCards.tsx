import { FC } from 'react';

import styles from './ColorCards.module.css';

export const ColorCards: FC<{
    cards: { title: string; description: string }[];
}> = ({ cards }) => {
    return (
        <div className={styles.cards}>
            {cards.map(({ title, description }) => (
                <div>
                    <div>{title}</div>
                    <div>{description}</div>
                </div>
            ))}
        </div>
    );
};
