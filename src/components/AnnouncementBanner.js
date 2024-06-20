import { Button, Typography } from '@ensdomains/thorin_next';
import { mq } from '@ensdomains/thorin_next';
import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';

const Banner = styled.div(
    ({ theme, $border }) => css`
        border-radius: ${theme.radii['2xLarge']};
        border: ${theme.borderWidths[1]} solid ${theme.colors.background};
        background: linear-gradient(90deg, #eef5ff 20.5%, #e7f4ef 76.5%);
        display: flex;
        flex-direction: column;
        padding: ${theme.space['5']};
        gap: ${theme.space['6']};
        text-align: center;
        background: linear-gradient(180deg, #eef5ff 20.5%, #e7f4ef 76.5%);

        ${$border &&
        css`
            border: ${theme.space['1']} solid ${theme.colors.background};
            box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.02);
        `}

        ${mq.md.min(css`
            flex-direction: row;
            background: linear-gradient(90deg, #eef5ff 20.5%, #e7f4ef 76.5%);
            padding: ${theme.space['6']};
            align-items: flex-start;
            gap: ${theme.space['6']};
            align-self: stretch;
            text-align: left;

            ${$border &&
            css`
                border: ${theme.space['2']} solid ${theme.colors.background};
            `}
        `)}
    `
);

const L2Container = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        gap: ${theme.space['6']};
    `
);

const DynamicTypography = styled(Typography)(
    ({ theme }) => css`
        text-align: center;
        ${mq.md.min(css`
            text-align: left;
        `)}
    `
);

const IconWrapper = styled.div(
    ({ theme }) => css`
        font-feature-settings: 'ss04' on, 'ss03' on, 'ss01' on;
        font-family: Satoshi;
        font-size: 54px;
        font-style: normal;
        font-weight: 700;
        line-height: 72px;
        text-align: center;
    `
);

const Content = styled.div(
    ({ theme }) => css`
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: ${theme.space['1']};
    `
);

const ButtonContainer = styled.div(
    ({ theme }) => css`
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        gap: ${theme.space['4']};

        ${mq.md.min(css`
            flex-direction: row;
            justify-content: flex-start;
        `)}
    `
);

const ButtonWrapper = styled.div(
    ({ theme }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.space['2']};
    `
);

const CustomButton = styled.a(
    ({ theme }) => css`
        background-color: ${theme.colors.background};
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: ${theme.space['4']};
        width: 100%;
        overflow: hidden;
        border-radius: ${theme.radii.large};
        transition: transform 0.2s, background-color 0.2s;
        &:hover {
            transform: translateY(-1px);
            background-color: ${theme.colors.greySurface};
        }

        ${mq.md.min(css`
            width: fit-content;
        `)}
    `
);

export default function AnnouncementBanner({
    title,
    description,
    primaryButton,
    secondaryButton,
    border = true,
}) {
    return (
        <Banner $border={border}>
            <IconWrapper>🎉</IconWrapper>
            <L2Container>
                <Content>
                    <DynamicTypography fontVariant="headingTwo">
                        {title}
                    </DynamicTypography>
                    <DynamicTypography fontVariant="body">
                        {description}
                    </DynamicTypography>
                </Content>
                <ButtonContainer>
                    {primaryButton && primaryButton.to && (
                        <Link to={primaryButton.to}>
                            <Button
                                colorStyle="greenPrimary"
                                suffix={primaryButton.suffix}
                            >
                                {primaryButton.label}
                            </Button>
                        </Link>
                    )}
                    {primaryButton && primaryButton.href && (
                        <div>
                            <Button
                                as="a"
                                target="_blank"
                                href={primaryButton.href}
                                colorStyle="greenPrimary"
                                suffix={primaryButton.suffix}
                            >
                                {primaryButton.label}
                            </Button>
                        </div>
                    )}
                    {secondaryButton && secondaryButton.href && (
                        <CustomButton
                            href={secondaryButton.href}
                            target="_blank"
                        >
                            <Typography
                                color="greenPrimary"
                                fontVariant="boldyBold"
                            >
                                {secondaryButton.label}
                            </Typography>
                        </CustomButton>
                    )}
                </ButtonContainer>
            </L2Container>
        </Banner>
    );
}
