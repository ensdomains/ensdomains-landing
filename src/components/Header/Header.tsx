import { FC } from 'react';

import styles from './Header.module.css';

export const Header: FC<{
    title: string;
    tag?: string;
    description?: string;
}> = ({ title, tag, description }) => {
    return (
        <header className={styles.header}>
            <div>heading / header</div>
            <div>{tag}</div>
            <h1>{title}</h1>
            <div>{description}</div>
        </header>
    );
};
