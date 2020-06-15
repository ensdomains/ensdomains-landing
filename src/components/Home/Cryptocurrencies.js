import React from "react"
import styled from "@emotion/styled"

const HeroContainer = styled("div")`
  background: green;
`

export default function Cryptocurrencies(props) {
  return (
    <HeroContainer>
      <h2>One Name For All of Your Cryptocurrencies</h2>
      <p>
        No more copying and pasting long addresses. Whether it’s ETH, BTC, or
        others, use your ENS name to receive payments and store all of your
        addresses.
      </p>
    </HeroContainer>
  )
}
