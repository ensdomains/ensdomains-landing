import React from "react"
import styled from "@emotion/styled"

const Title = styled("h2")`
  font-size: 68px;
  font-weight: 300;
  margin-top: 0;
  color: white;
  text-align: center;
  max-width: 800px;
  padding-top: 120px;
`

const HeroContainer = styled("div")`
  background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);
  display: flex;
  justify-content: center;
`

export default function Hero(props) {
  return (
    <HeroContainer>
      <Title>Decentralized naming for wallets, websites, &amp; more.</Title>
    </HeroContainer>
  )
}
