import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"

const Nav = styled("nav")`
  background: blue;
`

const Links = styled("div")``

const Launch = styled("a")``

export default function Navigation() {
  return (
    <Nav>
      <div>ENS</div>
      <Links>
        <Link to="/about">About</Link>
        <a href="https://medium.com/the-ethereum-name-service">Blog</a>
      </Links>
      <Launch href="https://app.ens.domains">Launch App</Launch>
    </Nav>
  )
}
