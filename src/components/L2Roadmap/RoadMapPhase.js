import { mq, Typography } from '@ensdomains/thorin_next';
import React from 'react';
import styled, { css } from 'styled-components';

import ContractCard from './ContractCard';
import RoadMapPathway from './RoadmapPathway';

const Container = styled.div(
    ({ theme }) => css`
        display: flex;
        gap: ${theme.space['4']};
        min-height: 100px;
        ${mq.sm.min(css`
            gap: ${theme.space['6']};
        `)}
    `
);

const Content = styled.div(
    ({ theme, $color }) => css`
        display: flex;
        align-items: flex-start;
        flex-direction: column;
        gap: ${theme.space['4']};
        width: ${theme.space.full};
        padding-bottom: ${theme.space['4']};

        ${mq.sm.min(css`
            gap: ${theme.space['6']};
            padding-bottom: ${theme.space['6']};
            ${$color === 'green' &&
            css`
                align-items: flex-end;
            `}
        `)}
    `
);

const Title = styled.div(
    ({ theme }) => css`
        background: ${theme.colors.greySurface};
        min-height: ${theme.space['12']};
        padding: ${theme.space['3']} ${theme.space['4']};
        border-radius: ${theme.radii.large};
        width: fit-content;
    `
);

export default function RoadMapPhase({ title, color, items, last }) {
    return (
        <Container>
            <RoadMapPathway {...{ color, last }} />
            <Content $color={color}>
                <Title>
                    <Typography fontVariant="extraLargeBold">
                        {title}
                    </Typography>
                </Title>
                {items.map((item) => (
                    <ContractCard
                        key={item.title}
                        {...{ phase: title, color, ...item }}
                    />
                ))}
            </Content>
        </Container>
    );
}
