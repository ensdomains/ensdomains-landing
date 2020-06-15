import React from "react"
import styled from "@emotion/styled"

const FooterContainer = styled("footer")`
  background: green;
`

export default function AboutHero(props) {
  return (
    <FooterContainer>
      <p>Hero</p>
    </FooterContainer>
  )
}
