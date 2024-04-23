import clsx from 'clsx';
import React from 'react';

import ui from '../../styles/ui.module.css';
import styles from './Footer.module.css';

const footerItems = [
    {
        title: 'Join the community',
        entries: [
            { title: 'Blog', link: 'https://blog.ens.domains' },
            { title: 'Feedback', link: '' },
            {
                title: 'Discord',
                link: 'https://chat.ens.domains',
            },
            {
                title: 'Twitter',
                link: 'https://x.com/ensdomains',
            },
            {
                title: 'Github',
                link: 'https://github.com/ensdomains',
            },
            {
                title: 'Youtube',
                link: 'https://youtube.com/ensdomains',
            },
            {
                title: 'Forums',
                link: 'https://discuss.ens.domains',
            },
        ],
    },
    {
        title: 'Need help?',
        entries: [
            {
                title: 'Support',
                link: 'https://support.ens.domains',
            },
            { title: 'Contact', link: '' },
        ],
    },
    {
        title: 'ENS',
        entries: [
            { title: 'Privacy Policy', link: '' },
            { title: 'Terms of Use', link: '' },
            {
                title: 'Bug Bounty',
                link: 'https://docs.ens.domains/bugs',
            },
            {
                title: 'Brand',
                link: 'https://github.com/ensdomains/media-kit',
            },
            { title: 'Jobs', link: 'https://' },
        ],
    },
];

export default function Footer() {
    return (
        <>
            <footer className={styles.container}>
                <div className={styles.columns}>
                    {footerItems.map((list) => (
                        <ul className={styles.ul}>
                            <div className={styles.h3}>{list.title}</div>
                            {list.entries.map((entry) => (
                                <li>
                                    <a href={entry.link} target="_blank">
                                        {entry.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </footer>
            <div className={clsx(styles.extra, ui['dots-bg'])}></div>
        </>
    );
}
