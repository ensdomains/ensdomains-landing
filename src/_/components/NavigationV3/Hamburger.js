import {
    CrossSVG,
    DynamicPopover,
    MenuSVG,
    Modal,
} from '@ensdomains/thorin_next';
import React from 'react';
import styled, { css } from 'styled-components';

import { useBreakpoint } from '../../utils/BreakpointProvider';
import MainMenu from './Menu';

const Button = styled.button(
    ({ theme, $active }) => css`
        position: relative;
        padding: ${theme.space['2']};
        border-radius: ${theme.radii.full};

        transition: all 0.15s ease-in-out;

        cursor: pointer;
        color: ${theme.colors.grey};

        & > svg {
            display: block;
            width: ${theme.space['4']};
            height: ${theme.space['4']};
        }

        &:hover {
            background-color: ${theme.colors.greyLight};
        }

        ${$active &&
        css`
            background-color: ${theme.colors.greyLight};
            color: ${theme.colors.textPrimary};
        `}
    `
);

const MobileCard = styled.div(
    ({ theme }) => css`
        width: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;

        border-radius: ${theme.radii['2xLarge']};
        background-color: ${theme.colors.background};

        transition: all 0.2s ease-out;

        border-top-left-radius: 0;
        border-top-right-radius: 0;
    `
);

const CloseButton = styled.button(
    ({ theme }) => css`
        border-radius: ${theme.radii.full};
        background-color: ${theme.colors.background};

        position: absolute;
        bottom: -${theme.space['4']};
        left: 50%;
        transform: translate(-50%, 100%);

        display: flex;
        align-items: center;
        justify-content: center;

        padding: ${theme.space['2']};

        svg {
            display: block;
            width: ${theme.space['4']};
            height: ${theme.space['4']};
        }
    `
);

const DesktopDropdownCard = styled.div(
    ({ theme }) => css`
        overflow: hidden;
        position: relative;
        background-color: ${theme.colors.background};
        border-radius: ${theme.radii['2xLarge']};
        border: 1px solid ${theme.colors.border};
        transition: all 0.2s ease-out;
    `
);

export default function Hamburger() {
    const breakpoints = useBreakpoint();

    const containerReference = React.useRef(null);
    const buttonReference = React.useRef(null);

    const [isOpen, setIsOpen] = React.useState(false);

    // close the menu when the user clicks outside of the menu
    React.useEffect(() => {
        const handleClick = (event) => {
            if (
                !containerReference.current?.contains(event.target) &&
                !buttonReference.current?.contains(event.target) &&
                event.target.isConnected
            ) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            window.addEventListener('click', handleClick);
        } else {
            window.removeEventListener('click', handleClick);
        }

        return () => {
            window.removeEventListener('click', handleClick);
        };
    }, [isOpen]);

    const button = (
        <Button
            ref={buttonReference}
            $active={isOpen}
            onClick={() => setIsOpen((previous) => !previous)}
        >
            {isOpen ? <CrossSVG /> : <MenuSVG />}
        </Button>
    );

    return (
        <>
            {button}
            {breakpoints.sm ? (
                <DynamicPopover
                    isOpen={isOpen}
                    anchorRef={buttonReference}
                    popover={
                        <DesktopDropdownCard ref={containerReference}>
                            <MainMenu />
                        </DesktopDropdownCard>
                    }
                    placement="bottom"
                    width={320}
                    transitionDuration={150}
                    align="end"
                />
            ) : (
                <Modal
                    open={isOpen}
                    onDismiss={() => setIsOpen(false)}
                    alignTop
                >
                    <MobileCard ref={containerReference}>
                        <MainMenu />
                    </MobileCard>
                    <CloseButton onClick={() => setIsOpen(false)}>
                        <CrossSVG />
                    </CloseButton>
                </Modal>
            )}
        </>
    );
}
