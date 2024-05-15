import React from 'react';
import styled, { css } from 'styled-components';
import { mq } from '@ensdomains/thorin_next';

const Container = styled.div(
    () => css`
        flex: 0 0 48px;
        width: 48px;
        position: relative;
    `
);

const Pathway = styled.div(
    ({ theme, $color }) => css`
        width: 16px;
        height: 100%;
        background: linear-gradient(
            to bottom,
            ${theme.colors.blueSurface} 24px,
            ${theme.colors.greenSurface} calc(100% - 24px)
        );
        position: absolute;
        left: 50%;
        top: 24px;
        transform: translateX(-50%);

        ${$color === 'green' &&
        css`
            background: linear-gradient(
                to bottom,
                ${theme.colors.greenSurface} 24px,
                ${theme.colors.blueSurface} calc(100% - 24px)
            );
        `}
    `
);

const Dot = styled.div(
    ({ theme, $color }) => css`
        background: ${theme.colors.blueSurface};
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;

        ${$color === 'green' &&
        css`
            background: ${theme.colors.greenSurface};
        `}
    `
);

export default function RoadMapPathway({ color, last }) {
    return (
        <Container>
            <Dot $color={color} />
            {!last && <Pathway $color={color} />}
        </Container>
    );
}
