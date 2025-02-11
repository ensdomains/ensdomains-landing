import { mq, Typography } from '@ensdomains/thorin_next';
import React from 'react';
import styled, { css } from 'styled-components';

const Container = styled.div(({ theme }) => [
    css`
        display: flex;
        flex-direction: column;
        gap: ${theme.space['4']};
        width: 100%;
    `,
    mq.sm.min(css`
        flex-direction: row;
        justify-content: space-between;
        padding: 0 ${theme.space['4']};
    `),
]);

const SplitHeader = ({ leading, trailing }) => {
    return (
        <Container>
            <div>{leading}</div>
            <div>{trailing}</div>
        </Container>
    );
};

export default function RoadmapHeader() {
    return (
        <SplitHeader
            leading={
                <Typography fontVariant="headingOne">
                    ENS Labs roadmap
                </Typography>
            }
            trailing={null}
        />
    );
}
