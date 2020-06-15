import React from "react"
import styled from "@emotion/styled"

const FooterContainer = styled("footer")`
  background: green;
`

export default function Team(props) {
  return (
    <FooterContainer>
      <p>Team</p>
    </FooterContainer>
  )
}
