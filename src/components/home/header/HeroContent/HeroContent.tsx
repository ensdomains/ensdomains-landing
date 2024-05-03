import { CSSProperties } from 'react';
import { ExternalLink } from 'react-external-link';

import type { Color } from '~/utils/types';

import styles from './HeroContent.module.css';

const HeroEnsLink = ({
    name,
    bgColor,
    color,
    style = {},
}: {
    name: `${string}.eth`;
    bgColor: Color;
    color: Color;
    style?: CSSProperties;
}) => (
    <ExternalLink
        href={`https://app.ens.domains/${name}`}
        className={styles['header-ens-link']}
        style={
            {
                '--bg-color': `var(--${bgColor})`,
                '--color': `var(--${color})`,
                ...style,
            } as CSSProperties
        }
    >
        {name}
    </ExternalLink>
);

export const HeroContent = () => (
    <>
        <div className={styles['position-container']}>
            <div className={styles['animation-container']}>
                <img
                    src="/assets/magenta-animation-bg.svg"
                    alt=""
                    height={400}
                    width={400}
                />
                <div className={styles['animated-square']}></div>
            </div>
        </div>
        <img
            src="/assets/magenta-element.svg"
            width={200}
            height={200}
            alt=""
            className={styles['bg-element']}
        />
        <div className={styles['position-container']}>
            <div className={styles['animation-container']}>
                <img
                    src="/assets/green-animation-bg.svg"
                    alt=""
                    height={222}
                    width={293}
                />
                <div className={styles['animated-square']}></div>
            </div>
        </div>
        <div className={styles['position-container']}>
            <div className={styles['animation-container']}>
                <img
                    src="/assets/blue-animation-bg.svg"
                    alt=""
                    height={222}
                    width={222}
                />
                <div className={styles['animated-square']}></div>
            </div>
        </div>
        <HeroEnsLink
            name="domico.eth"
            color="ens-blue"
            bgColor="ens-light-blue"
        />
        <HeroEnsLink
            name="nick.eth"
            color="ens-magenta"
            bgColor="ens-light-magenta"
        />
        <HeroEnsLink
            name="dion.eth"
            color="ens-dark-brown"
            bgColor="ens-light-yellow"
        />
        <HeroEnsLink
            name="eskender.eth"
            bgColor="ens-magenta"
            color="ens-light-magenta"
        />
        <HeroEnsLink
            name="sadaf.eth"
            color="ens-green"
            bgColor="ens-light-green"
        />
    </>
);
