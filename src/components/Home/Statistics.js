import React from "react"
import styled from "@emotion/styled"

const HeroContainer = styled("div")`
  background: green;
`

export default function Statistics(props) {
  return (
    <HeroContainer>
      <h2>
        {" "}
        ENS is the most widely integrated cryptocurrency wallet naming standard.
      </h2>
      <p>463k registered names</p>
      <p>175 integrated services</p>
      <p>24.5k owners</p>
    </HeroContainer>
  )
}
