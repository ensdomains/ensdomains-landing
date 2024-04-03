import React from 'react';

// import blog from '../../../../public/assets/blog.svg';
// import github from '../assets/github.svg';
// import x from '../assets/x.svg';
import styles from './Footer.module.css';

const social = [
    {
        // img: x,
        text: 'X',
        link: 'https://x.com/ensdomains',
    },
    {
        // img: blog,
        text: 'Blog',
        link: 'https://blog.ens.domains',
    },
    {
        // img: github,
        text: 'GitHub',
        link: 'https://github.com/ensdomains',
    },
];

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <div>
                {social.map((s) => (
                    <a href={s.link} key={s.link}>
                        {/* <img src={s.img} alt={s.text} height={24} /> */}
                        {s.text}
                    </a>
                ))}
            </div>
            <div>
                <a href="mailto:press@ens.domains">press@ens.domains</a>
                <a href="https://docs.ens.domains/bug-bounty-program">
                    Bug Bounty
                </a>
                <a href="https://github.com/ensdomains/media-kit/releases/latest/">
                    Media Kit
                </a>
            </div>
        </footer>
    );
}
