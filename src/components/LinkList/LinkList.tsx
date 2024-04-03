import { FC } from 'react';

import ui from '../../styles/ui.module.css';
import styles from './LinkList.module.css';

export type ILink = {
    title: string;
    href: string;
    description: string;
};

export const LinkList: FC<{ links: ILink[] }> = ({ links }) => {
    return (
        <div>
            <ul className={styles.list}>
                {links.map(({ title, href, description }) => (
                    <li>
                        <a href={href} target="_blank">
                            <span>{title}</span>
                            <span>&gt;</span>
                        </a>
                        <span className={ui.cursive}>{description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
