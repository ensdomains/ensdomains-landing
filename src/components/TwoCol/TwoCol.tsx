import { FC } from 'react';

import ui from '../../styles/ui.module.css';
import styles from './TwoCol.module.css';

export const TwoCol: FC<{
    cols: {
        tag: string;
        title: string;
        description: string;
        button: string;
        href: string;
    }[];
}> = ({ cols }) => (
    <div className={styles.cols}>
        {cols.map(({ tag, title, description, button, href }) => (
            <div className={ui['space-y-40']}>
                <span>{tag}</span>
                <div className={styles.split}>
                    <h4>{title}</h4>
                    <p className={ui.cursive}>{description}</p>
                    <a href={href} className={ui.button}>
                        {button}
                    </a>
                </div>
            </div>
        ))}
    </div>
);
