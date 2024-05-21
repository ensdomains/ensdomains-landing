import { FC } from 'react';

import ui from '~/styles/ui.module.css';
import styles from './LinkList.module.css';
import { ExternalLink } from 'react-external-link';

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
                    <li key={title}>
                        <ExternalLink href={href}>
                            <span>{title}</span>
                            <span>
                                <svg
                                    width="13"
                                    height="14"
                                    viewBox="0 0 13 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.07143 12.4286L12 1.5M12 1.5H0M12 1.5V13.5"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    />
                                </svg>
                            </span>
                        </ExternalLink>
                        <span className={ui.serif}>{description}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
