import { mq } from '@ensdomains/thorin_next';
import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div(
    () => css`
        position: relative;
        flex: 0 0 32px;
        width: 32px;

        ${mq.md.min(css`
            flex: 0 0 48px;
            width: 48px;
        `)}
    `
);

const Pathway = styled.div(
    ({ theme, $color }) => css`
        height: 100%;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        width: 8px;
        top: 16px;
        background: linear-gradient(
            to bottom,
            ${theme.colors.blueSurface} 16px,
            ${theme.colors.greenSurface} calc(100% - 16px)
        );

        ${mq.md.min(css`
            width: 16px;
            top: 24px;
            background: linear-gradient(
                to bottom,
                ${theme.colors.blueSurface} 24px,
                ${theme.colors.greenSurface} calc(100% - 24px)
            );
        `)}

        ${$color === 'green' &&
        css`
            background: linear-gradient(
                to bottom,
                ${theme.colors.greenSurface} 16px,
                ${theme.colors.blueSurface} calc(100% - 16px)
            );

            ${mq.md.min(css`
                background: linear-gradient(
                    to bottom,
                    ${theme.colors.greenSurface} 24px,
                    ${theme.colors.blueSurface} calc(100% - 24px)
                );
            `)}
        `};
    `
);

const Dot = styled.div(
    ({ theme, $color }) => css`
        background: ${theme.colors.blueSurface};
        width: 32px;
        height: 32px;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;

        ${$color === 'green' &&
        css`
            background: ${theme.colors.greenSurface};
        `}

        ${mq.md.min(css`
            width: 48px;
            height: 48px;
        `)}
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
