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

export default function Navigation() {
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <NavRight>
        <Typography fontVariant="bodyBold" color="grey">
          ENS Domains
        </Typography>
        <Hamburger />
      </NavRight>
    </Nav>
  )
}
