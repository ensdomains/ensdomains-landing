import React from "react"
import styled from "@emotion/styled"
import logo from "../assets/ensLogo.svg"
import logoText from "../assets/ensLogoText.svg"

const LogoContainer = styled("div")`
  height: 48px;
  display: flex;

  img {
    display: block;
  }

  .ens-logo {
    width: 35px;
    margin-right: 10px;
  }

  .ens-logo-text {
    width: 57px;
  }
`

export default function Logo({ className }) {
  return (
    <LogoContainer className={className}>
      <img src={logo} alt="ENS Logo" className="ens-logo" />
      <img src={logoText} alt="ENS Logo text" className="ens-logo-text" />
    </LogoContainer>
  )
}
