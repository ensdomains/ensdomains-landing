import React from "react"
import styled from "@emotion/styled"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
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
  margin-bottom: 20px;
`

const ImageTransition = styled("div")`
  position: relative;
  margin: 0 20px;
  img:nth-child(1) {
    left: 10px;
    top: 10px;
    position: relative;
  }

  img:nth-child(2) {
    left: 0;
    top: 0;
    position: absolute;
  }
`

export default function DecentralisedWebsites(props) {
  const [ref, inView] = useInView({
    rootMargin: "200px 0px",
  })
  return (
    <HeroContainer>
      <H2>Decentralised Websites</H2>
      <motion.div ref={ref} style={{ opacity: inView ? 1 : 0 }}>
        <span aria-label="Wave">👋</span>
      </motion.div>
      <P>
        Launch censorship-resistant decentralized websites with ENS. Upload your
        website to IPFS in our Manager and access it with your ENS name.{" "}
      </P>
      <ImageAnimation>
        <ImageTransition>
          <motion.img
            src={website2}
            ref={ref}
            style={{ opacity: inView ? 0 : 1 }}
          />
          <motion.img
            src={blur1}
            ref={ref}
            style={{ opacity: inView ? 1 : 0 }}
          />
        </ImageTransition>
        <ImageTransition>
          <img src={website1} />
        </ImageTransition>
        <ImageTransition>
          <motion.img
            src={website3}
            ref={ref}
            animate={{ opacity: inView ? 0 : 1 }}
          />
          <motion.img
            src={blur2}
            ref={ref}
            animate={{ opacity: inView ? 1 : 0 }}
          />
        </ImageTransition>
      </ImageAnimation>
      <Button>Learn more</Button>
    </HeroContainer>
  )
}
