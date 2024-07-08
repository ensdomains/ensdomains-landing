import { CrossSVG, Modal, mq, Typography } from '@ensdomains/thorin_next';
import React from 'react';
import styled, { css } from 'styled-components';

import ContractLinks from './ContractLinks';
import ContractStatus from './ContractStatus';

const Container = styled.div(
    ({ theme, $color }) => css`
        display: flex;
        position: relative;
        flex-direction: column;
        background: ${theme.colors[`${$color}Surface`]};
        min-height: 260px;
        width: 100vw;
        border-top-right-radius: ${theme.radii['2xLarge']};
        border-top-left-radius: ${theme.radii['2xLarge']};
        overflow: hidden;

        ${mq.sm.min(css`
            width: 100vw;
            max-width: 520px;
            border-bottom-left-radius: ${theme.radii['2xLarge']};
            border-bottom-right-radius: ${theme.radii['2xLarge']};
        `)}
    `
);

const Button = styled.button(
    ({ theme }) => css`
        position: absolute;
        top: ${theme.space['2']};
        right: ${theme.space['2']};
        z-index: 1;
        padding: ${theme.space['2']};
        border-radius: ${theme.radii.full};
        transition: all 300ms ease-in-out;
        cursor: pointer;

        svg {
            display: block;
        }

        :hover {
            transform: translateY(-1px);
            background: rgba(255, 255, 255, 0.4);
        }
    `
);

const Header = styled.div(
    ({ theme }) => css`
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: ${theme.space['4']};
        padding: ${theme.space['6']};
    `
);

const HeaderContent = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: ${theme.space['2']};
    `
);

const Footer = styled.div(
    ({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: ${theme.space['4']};
        background: ${theme.colors.background};
        padding: ${theme.space['4']} ${theme.space['6']};
    `
);

export default function ContractModal({
    title,
    description,
    status,
    phase,
    color,
    links,
    open,
    onDismiss,
}) {
    return (
        <Modal open={open} onDismiss={onDismiss}>
            <Button onClick={onDismiss}>
                <CrossSVG />
            </Button>
            <Container $color={color}>
                <Header>
                    <HeaderContent>
                        <Typography fontVariant="headingFour">
                            {title}
                        </Typography>
                        {description && (
                            <Typography fontVariant="body">
                                {description}
                            </Typography>
                        )}
                    </HeaderContent>
                    <ContractLinks links={links} color={color} size="large" />
                </Header>
                <Footer>
                    <ContractStatus status={status} />
                    <Typography
                        fontVariant="smallBold"
                        color={`${color}Primary`}
                    >
                        {phase}
                    </Typography>
                </Footer>
            </Container>
        </Modal>
    );
}
