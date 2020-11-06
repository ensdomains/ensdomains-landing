import React, { useState } from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import Logo from "./Logo"
import { Button } from "./Typography"

import mq from "../mediaQuery"
import LanguageSwitcher from "./LanguageSwitcher"

const Nav = styled("nav")`
  background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);
  ${p =>
    p.menuOpen &&
    `
    background: #121d46;
  `};
  transition: 0.2s;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  position: sticky;
  z-index: 100000;
  top: 0;

  .mobile-nav {
    ${mq.medium`
      display: none;
    `};
  }

  .hamburger {
    padding: 10px 0 15px 15px;
    display: inline-block;
    cursor: pointer;
    transition-property: opacity, filter;
    transition-duration: 0.15s;
    transition-timing-function: linear;
    font: inherit;
    color: inherit;
    text-transform: none;
    background-color: transparent;
    border: 0;
    margin: 0;
    overflow: visible;
    &:is-active {
      padding-top: 15px;
    }
  }
  .hamburger:hover {
    opacity: 0.7;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 30px;
    height: 1px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }

  .hamburger-inner::after {
    content: "";
    display: none;
  }

  .hamburger-inner::before {
    top: -10px;
  }
  .hamburger-inner::after {
    bottom: -10px;
  }

  .hamburger--collapse-r .hamburger-inner {
    top: auto;
    bottom: 0;
    transition-duration: 0.13s;
    transition-delay: 0.13s;
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  .hamburger--collapse-r .hamburger-inner::after {
    top: -20px;
    transition: top 0.2s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      opacity 0.1s linear;
  }
  .hamburger--collapse-r .hamburger-inner::before {
    transition: all 0.12s 0.2s cubic-bezier(0.33333, 0.66667, 0.66667, 1),
      transform 0.13s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  .hamburger--collapse-r.is-active .hamburger-inner {
    transform: translate3d(0, -10px, 0) rotate(45deg);
    transition-delay: 0.22s;
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  .hamburger--collapse-r.is-active .hamburger-inner::after {
    top: 0;
    opacity: 0;
    transition: all 0.2s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      opacity 0.1s 0.22s linear;
  }
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    top: 0;
    transform: rotate(90deg);
    transition: all 0.1s 0.16s cubic-bezier(0.33333, 0, 0.66667, 0.33333),
      transform 0.13s 0.25s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  .hamburger--collapse-r.is-active .hamburger-inner,
  .hamburger--collapse-r.is-active .hamburger-inner::after,
  .hamburger--collapse-r.is-active .hamburger-inner::before {
    background: #fff;
  }
`

const Links = styled("div")`
  display: none;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
    margin-right: 20px;
  }

  ${mq.medium`
    display: flex;
  `};
`

const MobileLinks = styled("ul")`
  background: #121d46;
  font-family: Overpass;
  font-size: 22px;
  color: #ffffff;
  text-align: center;
  padding: 0;
  margin: 0;
  transform: translateX(-100%);
  transition: 0.3s;
  position: absolute;
  left: 0;
  width: 100%;
  top: 100%;
  opacity: 0;
  ${p =>
    p.menuOpen &&
    `
    opacity: 1;
    transform: translateX(0);
  `}

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  li {
    list-style: none;
    padding: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    width: 100%;
  }

  a {
    color: white;
    text-decoration: none;
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
  const { t } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <Nav menuOpen={menuOpen}>
      <Link to="/">
        <Logo />
      </Link>

      <div className="mobile-nav">
        <button
          className={`hamburger hamburger--collapse-r ${
            menuOpen ? "is-active" : ""
          }`}
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </div>

      <Links menuOpen={menuOpen}>
        <Link to="/about">About</Link>
        <a href="https://medium.com/the-ethereum-name-service">
          {t("nav.blog")}
        </a>

        <Separator />
        <LanguageSwitcher />
        <Launch href="https://app.ens.domains">{t("nav.launch")}</Launch>
      </Links>

      <MobileLinks menuOpen={menuOpen}>
        <LanguageSwitcher mobile={true} />
        <li>
          <Link to="/about">{t("nav.about")}</Link>
        </li>
        <li>
          <a href="https://medium.com/the-ethereum-name-service">
            {t("nav.blog")}
          </a>
        </li>
        <li>
          <Launch href="https://app.ens.domains">{t("nav.launch")}</Launch>
        </li>
      </MobileLinks>
    </Nav>
  )
}
