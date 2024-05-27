import { LeftArrowSVG, Typography } from '@ensdomains/thorin_next';
import { Link } from 'gatsby';
import React from 'react';

import styled, { css} from 'styled-components';

const StyledLink = styled.div(({ theme }) => css`
  display: flex;
  align-items: center;
  gap: ${theme.space['2']};
  text-decoration: none;
  color: ${theme.colors.accent};

`)

export default function L2RoadmapHeader() {
  return <div>
    <Link to="/roadmap">
      <StyledLink>
      <LeftArrowSVG/>
      <Typography fontVariant="smallBold" color="inheret">Back to Roadmap</Typography>
      </StyledLink>
    </Link>
    <Typography fontVariant="headingOne">ENS v2 Roadmap</Typography>
  </div>
}