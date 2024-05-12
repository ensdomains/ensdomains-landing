import clsx from 'clsx';
import { TFunction } from 'i18next';
import React, { FC } from 'react';

import ui from '../../styles/ui.module.css';
import styles from './Footer.module.css';

export const Footer: FC<{ t: TFunction<string, string> }> = ({ t }) => {
    const footerItems = [
        {
            title: t('footer.community'),
            entries: [
                { title: t('footer.blog'), link: 'https://blog.ens.domains' },
                { title: t('footer.feedback'), link: '' },
                {
                    title: t('footer.discord'),
                    link: 'https://chat.ens.domains',
                },
                {
                    title: t('footer.twitter'),
                    link: 'https://x.com/ensdomains',
                },
                {
                    title: t('footer.github'),
                    link: 'https://github.com/ensdomains',
                },
                {
                    title: t('footer.youtube'),
                    link: 'https://youtube.com/ensdomains',
                },
                {
                    title: t('footer.forums'),
                    link: 'https://discuss.ens.domains',
                },
            ],
        },
        {
            title: t('footer.help'),
            entries: [
                {
                    title: t('footer.support'),
                    link: 'https://support.ens.domains',
                },
                { title: t('footer.contact'), link: '' },
            ],
        },
        {
            title: t('footer.ens'),
            entries: [
                { title: t('footer.privacy-policy'), link: '' },
                { title: t('footer.tou'), link: '' },
                {
                    title: t('footer.bugs'),
                    link: 'https://docs.ens.domains/bugs',
                },
                {
                    title: t('footer.brand'),
                    link: 'https://github.com/ensdomains/media-kit',
                },
                { title: t('footer.jobs'), link: 'https://' },
            ],
        },
    ];

    return (
        <>
            <footer className={styles.container}>
                <div className={styles.columns}>
                    {footerItems.map(list => (
                        <ul className={styles.ul}>
                            <div className={styles.h3}>{list.title}</div>
                            {list.entries.map(entry => (
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
};
