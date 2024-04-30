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
