import React from 'react'
import styled, { css } from 'styled-components'

const SocialIconWrapper = styled.a(
  ({ theme }) => css`
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.space['6']};
    min-height: ${theme.space['6']};
  `,
)

const StyledIcon = styled.div(
  ({ theme, $iconColor }) => css`
    height: 100%;
    position: absolute;
    transition: 0.15s all ease-in-out;
    fill: ${theme.colors.greyPrimary};

    ${SocialIconWrapper}:hover && {
      fill: ${$iconColor};
    }
  `,
)

const StyledColoredIcon = styled.div(
  () => css`
    height: 100%;
    position: absolute;
    transition: 0.15s all ease-in-out;
    opacity: 0;

    ${SocialIconWrapper}:hover && {
      opacity: 1;
    }
  `,
)

export default function SocialIcon({
  Icon,
  ColoredIcon,
  color,
  href,
}) {
  return (
    <SocialIconWrapper href={href} target='_blank'>
      <StyledIcon key={href} $iconColor={color} as={Icon} />
      {ColoredIcon && <StyledColoredIcon as={ColoredIcon} />}
    </SocialIconWrapper>
  )
}
