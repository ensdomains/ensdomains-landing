import { clsx } from 'clsx';
import type { FC } from 'react';

import type { ButtonVariant } from '~/utils/types';

import ui from '../../styles/ui.module.css';
import styles from './TwoCol.module.css';

export const TwoCol: FC<{
    cols: {
        tag: string;
        title: string;
        description: string;
        button: string;
        buttonVariant?: ButtonVariant;
        href: string;
    }[];
}> = ({ cols }) => (
    <div className={styles.cols}>
        {cols.map(
            ({
                tag,
                title,
                description,
                button,
                href,
                buttonVariant = 'primary',
            }) => (
                <div>
                    <span>{tag}</span>
                    <div className={styles.split}>
                        <div className={clsx(ui.flex, styles.content)}>
                            <h4 className={styles.title}>{title}</h4>
                            <p className={ui.serif}>{description}</p>
                        </div>
                        <a
                            href={href}
                            className={clsx(
                                ui.button,
                                buttonVariant === 'secondary'
                                && ui['button-secondary'],
                            )}
                        >
                            {button}
                        </a>
                    </div>
                </div>
            ),
        )}
    </div>
);
