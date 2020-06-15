import React from "react"
import styled from "@emotion/styled"

const HeroContainer = styled("div")`
  background: green;
`

export default function Hero(props) {
  return (
    <HeroContainer>
      <h2>Decentralized naming for wallets, websites, &amp; more.</h2>
    </HeroContainer>
  )
}
