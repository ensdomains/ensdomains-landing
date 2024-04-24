import React from "react"
import styled from "@emotion/styled"
import logo from "../assets/logo.svg"

const LogoContainer = styled("div")`
  .ens-logo {
    width: 104px;
    margin-right: 10px;
    fill: red;
  }
`

export default function Logo({ className }) {
  return (
    <LogoContainer className={className}>
      <img src={logo} alt="ENS Logo" className="ens-logo" />
    </LogoContainer>
  )
}
