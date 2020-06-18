import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Logo from "./Logo"
import { Button } from "./Typography"

const Nav = styled("nav")`
  background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  position: sticky;
  z-index: 100000;
  top: 0;
`

const Links = styled("div")`
  display: flex;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    margin-right: 20px;
  }
`

const Launch = styled(Button)``

const Separator = styled("div")`
  width: 1px;
  height: 25px;
  background: white;
  margin-right: 20px;
`

export default function Navigation() {
  return (
    <Nav>
      <Link to="/">
        <Logo />
      </Link>
      <Links>
        <Link to="/about">About</Link>
        <a href="https://medium.com/the-ethereum-name-service">Blog</a>
        <Separator />
        <Launch href="https://app.ens.domains">Launch App</Launch>
      </Links>
    </Nav>
  )
}
