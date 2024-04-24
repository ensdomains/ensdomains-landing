import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import Logo from "../Logov2"
import { Typography, mq } from "@ensdomains/thorin_next"

import Hamburger from "./Hamburger"

const Nav = styled.nav(({ theme }) => [
  css`
    position: sticky;
    display: flex;
    justify-content: space-between;
    max-width: 940px;
    margin: 0 auto;
    padding: ${theme.space["6"]} ${theme.space["4"]};
  `,
  mq.md.min(css`
    padding: ${theme.space["10"]};
  `),
])

const NavRight = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space[5]};
  `
)

const StyledLink = styled(Link)(({ theme }) => css`
  color: ${theme.colors.greyPrimary};
  transition: color 0.2s;
  &:hover {
    color: ${theme.colors.accentPrimary};
  }
`)

export default function Navigation() {
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <NavRight>
        <StyledLink to="/">
          <Typography fontVariant="bodyBold" color="inherit">
            ENS Domains
          </Typography>
        </StyledLink>
        <StyledLink to="l2-roadmap">
          <Typography fontVariant="bodyBold" color="inherit">
            L2 Roadmap
          </Typography>
        </StyledLink>
        <Hamburger />
      </NavRight>
    </Nav>
  )
}
