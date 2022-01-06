import React, { useState } from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import Logo from "./Logov2"
import { Button } from "@ensdomains/thorin"

import mq from "../mediaQuery"
import LanguageSwitcher from "./LanguageSwitcherv2"

import close from "../assets/close.svg"
import menu from "../assets/menu.svg"

const Nav = styled("nav")`
  ${p =>
    p.menuOpen &&
    `
    background: #121d46;
  `};
  transition: 0.2s;
  display: flex;
  justify-content: space-between;
  padding: 30px 40px 20px 40px;
  position: sticky;
  z-index: 100000;
  top: 0;
  background: #f6f7fa;

  ${mq.medium`
      padding: 60px 60px 10px 60px;
    `};

  .mobile-nav {
    ${mq.medium`
      display: none;
    `};
  }

  .reset {
    background: none;
    border: none;
    padding-top: 6px;
  }
`

const Links = styled("div")`
  display: none;
  align-items: center;

  a:last-child {
    margin-right: 0px;
  }

  ${mq.medium`
    display: flex;
  `};
`

const MobileLinks = styled("ul")`
  background: #f6f7fa;
  font-family: JakartaSans;
  font-size: 22px;
  color: #717171;
  text-align: center;
  padding: 0;
  margin: 0;
  transform: translateY(-100%);
  transition: 0.3s;
  position: absolute;
  left: 0;
  width: 100%;
  top: 100%;
  opacity: 0;
  z-index: -1;
  ${p =>
    p.menuOpen &&
    `
    opacity: 1;
    transform: translateY(0);
    z-index: 1;
  `}

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 36px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  li {
    list-style: none;
    padding: 20px 0px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
  }

  a {
    color: #717171;
    font-weight: bold;
    text-decoration: none;
  }

  ${mq.medium`
    display: none;
  `};
`

const Launch = styled(Button)`
  padding: 13px 30px !important;
  font-family: JakartaSans;
`

const Separator = styled("div")`
  width: 1px;
  height: 48px;
  background: #717171;
  opacity: 0.3;
  margin-right: 20px;
  margin-left: 16px;
`

const NavLink = styled("a")`
  font-family: "JakartaSans";
  text-decoration: none;
  margin-right: 20px;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: -0.01em;
  color: #717171;
  opacity: 0.6;

  transition: all 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 1;
  }

  ${p => p.active && `color: #4D90F1; opacity: 1;`}
`

export default function Navigation() {
  const { t } = useTranslation()
  // const location = useLocation();
  // const pathname = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Nav menuOpen={menuOpen}>
      <Link to="/">
        <Logo />
      </Link>

      <div className="mobile-nav">
        <button
          type="button"
          className="reset"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            <img
              src={menu}
              width="36"
              css={menuOpen ? { opacity: "1" } : { opacity: "0.3" }}
              alt={menu}
            />
          ) : (
            <img src={close} width="36" alt="Close" />
          )}
        </button>
      </div>

      <Links menuOpen={menuOpen}>
        <NavLink href="/governance" active={true}>
          Governance
        </NavLink>
        <NavLink href="https://chat.ens.domains/">Community</NavLink>
        <NavLink href="/about">Team</NavLink>
        <NavLink href="https://docs.ens.domains/">Docs</NavLink>

        <Separator />
        <LanguageSwitcher />
        <a href="https://app.ens.domains">
          <Launch style={{ opacity: 1 }} text={t("nav.launch")} />
        </a>
      </Links>

      <MobileLinks menuOpen={menuOpen}>
        <li>
          <a href="/governance">Governance</a>
        </li>
        <li>
          <a href="https://chat.ens.domains/">Community</a>
        </li>
        <li>
          <Link to="/about">Team</Link>
        </li>
        <li>
          <a href="https://docs.ens.domains/">Docs</a>
        </li>
        <li>
          <a href="https://app.ens.domains">
            <Launch text={t("nav.launch")} />
          </a>
        </li>
      </MobileLinks>
    </Nav>
  )
}
