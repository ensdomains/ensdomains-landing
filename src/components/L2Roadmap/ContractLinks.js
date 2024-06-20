import React from 'react';
import styled, { css } from 'styled-components';
import SocialGithub from '../../assets/social/SocialGithub.svg';
import { InfoCircleSVG, Typography } from '@ensdomains/thorin_next';

const Container = styled.div(
    ({ theme }) => css`
        display: flex;
        gap: ${theme.space['4']};
    `
);

const Link = styled.a(
    ({ theme, $color, $size, $hover }) => css`
        display: flex;
        align-items: center;
        gap: ${theme.space['1']};
        color: ${theme.colors[`${$color}Primary`]};
        transition: color 0.2s;

        ${$hover && css`
          :hover {
            color: ${theme.colors[`${$hover}Primary`]};
          }
        `}
        svg {
            width: 12px;
            height: 12px;

            ${$size === 'large' &&
            css`
                width: 16px;
                height: 16px;
            `}
        }
    `
);

const labelForType = (type) => {
    switch (type) {
        case 'github':
            return 'Github';
        case 'docs':
            return 'Docs';
        default:
            throw new Error('labelForType: Invalid type', type);
    }
};

const iconForType = (type) => {
    switch (type) {
        case 'github':
            return <SocialGithub />;
        case 'docs':
            return <InfoCircleSVG />;
        default:
            throw new Error('iconForType: Invalid type', type);
    }
};

export default function ContractLinks({
    links = [],
    color = 'blue',
    size,
    hover = color,
}) {
    const validatedLinks = links
        .map(({ url, type }) => {
            const label = labelForType(type);
            const icon = iconForType(type);
            if (!label || !icon) return null;
            return { label, icon, url };
        })
        .filter((link) => link !== null);

    if (validatedLinks.length === 0) return null;
    return (
        <Container>
            {validatedLinks.map(({ url, icon, label }) => (
                <Link
                    href={url}
                    $color={color}
                    key={label}
                    $size={size}
                    $hover={hover}
                >
                    {icon}
                    <Typography
                        fontVariant={
                            size === 'large' ? 'bodyBold' : 'extraSmallBold'
                        }
                        color="inherit"
                    >
                        {label}
                    </Typography>
                </Link>
            ))}
        </Container>
    );
}
