import React from "react"
import styled from "@emotion/styled"

const HeroContainer = styled("div")`
  background: green;
`

export default function DecentralisedWebsites(props) {
  return (
    <HeroContainer>
      <h2>Decentralised Websites</h2>
      <p>
        Launch censorship-resistant decentralized websites with ENS. Upload your
        website to IPFS in our Manager and access it with your ENS name.{" "}
      </p>
    </HeroContainer>
  )
}
