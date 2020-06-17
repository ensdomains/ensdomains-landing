import React from "react"
import styled from "@emotion/styled"
import { H2, P } from "../../Typography"

const HeroContainer = styled("div")`
  background: white;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2,
  p {
    text-align: center;
    max-width: 750px;
  }
`

export default function DecentralisedWebsites(props) {
  return (
    <HeroContainer>
      <H2>Decentralised Websites</H2>
      <P>
        Launch censorship-resistant decentralized websites with ENS. Upload your
        website to IPFS in our Manager and access it with your ENS name.{" "}
      </P>
    </HeroContainer>
  )
}
