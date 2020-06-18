import React from "react"
import styled from "@emotion/styled"
import { H2, P, Button } from "../../Typography"

import website1 from "./website1.png"
import website2 from "./website2.png"
import website3 from "./website3.png"
import blur1 from "./blur1.jpg"
import blur2 from "./blur2.jpg"

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

const ImageAnimation = styled("div")`
  display: flex;
  align-items: flex-start;
`

const ImageTransition = styled("div")`
  position: relative;
  img:nth-child(2) {
    left: 0;
    top: 0;
    position: absolute;
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
      <ImageAnimation>
        <ImageTransition>
          <img src={website2} />
          <img src={blur1} />
        </ImageTransition>

        <img src={website1} />
        <ImageTransition>
          <img src={website3} />
          <img src={blur2} />
        </ImageTransition>
      </ImageAnimation>
      <Button>Learn more</Button>
    </HeroContainer>
  )
}
