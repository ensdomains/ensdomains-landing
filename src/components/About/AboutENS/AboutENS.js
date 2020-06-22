import React from "react"
import styled from "@emotion/styled"

const FooterContainer = styled("footer")`
  background: green;
`

export default function AboutENS(props) {
  return (
    <FooterContainer>
      <p>
        Initially started at the Ethereum Foundation in early 2017, ENS spun off
        as a separate organization in 2018. ENS is managed by the Singaporean
        non-profit True Names LTD.
      </p>
    </FooterContainer>
  )
}
