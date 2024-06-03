import { mq } from '@ensdomains/thorin_next';
import React from 'react';
import styled, { css } from 'styled-components';

import content from './content/content.json';
import RoadMapPhase from './RoadMapPhase';

const Container = styled.div(
    () => css`
        ${mq.sm.min(css`
            display: flex;
            flex-direction: column;

            & > div {
                display: flex;
                flex-direction: row;
                width: calc(50% + 24px);
                align-self: flex-end;
            }

            & > div:nth-child(even) {
                align-self: flex-start;
                display: flex;
                flex-direction: row-reverse;
            }
        `)}
    `
);

export default function RoadMapFlow() {
    return (
        <Container>
            {content.map((item, index) => (
                <RoadMapPhase
                    key={item.title}
                    {...item}
                    color={index % 2 === 0 ? 'blue' : 'green'}
                    last={index === content.length - 1}
                />
            ))}
        </Container>
    );
}
