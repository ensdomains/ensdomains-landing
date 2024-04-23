import { Button, RightArrowSVG, Typography } from '@ensdomains/thorin_next';
import React from 'react';

import styled, { css } from 'styled-components';
import { mq } from '@ensdomains/thorin_next';
import { Link } from 'gatsby';

const Banner = styled.div(({ theme}) => css`
  border: 1px solid ${theme.colors.background};
  border-radius: ${theme.radii['2xLarge']};
  border: ${theme.borderWidths[1]} solid ${theme.colors.background};
  background: linear-gradient(90deg, #EEF5FF 20.5%, #E7F4EF 76.5%);
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  padding: ${theme.space['5']};
  gap: ${theme.space['4']};
  
  background: linear-gradient(180deg, #EEF5FF 20.5%, #E7F4EF 76.5%);
  ${mq.sm.min(css`
  background: linear-gradient(90deg, #EEF5FF 20.5%, #E7F4EF 76.5%);
  flex-direction: row;
    padding: ${theme.space['6']};
    align-items: center;
    gap: ${theme.space['6']};
    align-self: stretch;
  `)}

`)

const IconWrapper = styled.div(({ theme }) => css`
font-feature-settings: 'ss04' on, 'ss03' on, 'ss01' on;
font-family: Satoshi;
font-size: 54px;
font-style: normal;
font-weight: 700;
line-height: 72px;
text-align: center;
`)

const Content = styled.div(({ theme }) => css`
  flex: 1;
`)

const ButtonWrapper = styled.div(({ theme }) => css`
  display: flex;
  align-items: center;
  gap: ${theme.space['2']};
`)

export default function L2RoadmapBanner(){
  return <Banner background='red' title="We're making an L2!" >
    <IconWrapper>🎉</IconWrapper>
    <Content>
      <Typography fontVariant="largeBold">We're making an L2!</Typography>
      <Typography fontVariant="body">We've created a plan to build and launch the ENS Chain, our very own L2</Typography>
    </Content>
    <Link to="/l2-roadmap">
      <Button suffix={<RightArrowSVG/>} colorStyle="greenPrimary">L2 Roadmap</Button>  
    </Link>
  </Banner>
}