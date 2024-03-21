import styled from '@emotion/styled';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import mq from '../../mediaQuery';
import { ButtonSecondary } from '../Typography';

const Title = styled('h2')`
    font-size: 28px;
    font-weight: 700;
    color: var(--ens-dark-blue);
    text-align: center;
    max-width: 600px;

    ${mq.medium`
    margin-top: 0;
    font-size: 68px;
  `}
`;

const HeroContainer = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 32px;
    min-height: 70vh;
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`;

const Paragraph = styled.div`
    max-width: 420px;
    text-align: center;
    color: var(--ens-medium-blue);
    font-family: serif;
    font-size: 20px;
`;

export default function Hero(_properties) {
    const { t } = useTranslation();

    return (
        <HeroContainer>
            <Title>{t('home.hero.title')}</Title>
            <Paragraph>
                {
                    // eslint-disable-next-line prettier/prettier
                    "For every dreamer, creator, and change-maker tired of the old internet, Web3 is here. ENS is more than a protocol - it's a commitment to a better web, built for everyone."
                }
            </Paragraph>
        </HeroContainer>
    );
}
