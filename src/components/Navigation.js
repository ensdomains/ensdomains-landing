import React from "react"
import styled from "@emotion/styled"
import { Link } from "gatsby"
import Logo from "./Logo"

const Nav = styled("nav")`
  background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  position: sticky;
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

const Launch = styled("a")`
  background: #5284ff;
  box-shadow: 0 10px 21px 0 rgba(38, 61, 145, 0.26);
  border-radius: 23px;
  font-family: Overpass;
  font-weight: 500;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 13px 30px;
  text-decoration: none;
`

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
