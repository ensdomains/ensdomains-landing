/* eslint-disable sonarjs/no-nested-template-literals */
import { mq, Tag, Typography } from '@ensdomains/thorin_next';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import styled, { css } from 'styled-components';

import DynamicThorinIcon from './DynamicThorinIcon';

const Container = styled.div(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.space['4']};
    `
);

const IconWrapper = styled.div(
    ({ theme, $color }) => css`
        color: ${theme.colors[`${$color}Primary`]};
        background: ${theme.colors[`${$color}Surface`]};
        flex: 0 0 ${theme.space['12']};
        width: ${theme.space['12']};
        height: ${theme.space['12']};
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: ${theme.radii.full};
    `
);

const Content = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: ${theme.space['1']};

        a {
            color: ${theme.colors.bluePrimary};
            font-weight: bold;
        }
    `
);

const Header = styled.div(({ theme }) => [
    css`
        display: flex;
        flex-direction: column;
        gap: ${theme.space['1']};
    `,
    mq.sm.min(css`
        flex-direction: row;
        gap: ${theme.space['4']};
    `),
]);

const StyledTag = styled(Tag)(
    ({ theme }) => css`
        white-space: nowrap;
        height: ${theme.space['5.5']};
    `
);

export default function SectionItem({ title, description, icon, tag, color }) {
    return (
        <Container>
            <IconWrapper $color={color}>
                <DynamicThorinIcon icon={icon} />
            </IconWrapper>
            <Content>
                <Header>
                    <Typography fontVariant="largeBold">{title}</Typography>
                    {tag && (
                        <StyledTag
                            size="small"
                            colorStyle={`${color}Secondary`}
                        >
                            {tag}
                        </StyledTag>
                    )}
                </Header>
                <Typography fontVariant="body">
                    <ReactMarkdown children={description} />
                </Typography>
            </Content>
        </Container>
    );
}
