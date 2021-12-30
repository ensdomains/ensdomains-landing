import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { H2, P, Button } from "../../Typography"

import website1 from "./website1.png"
import website2 from "./website2.png"
import website3 from "./website3.png"
import blur1 from "./blur1.jpg"
import blur2 from "./blur2.jpg"
import { Anchor, AnchorContainer } from '../../Anchor'

const Container = styled("div")`
  background: white;
  padding: 120px 20px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

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
  const { t } = useTranslation()
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
    rootMargin: "-200px",
  })

  return (
    <Container id='home-decentralised-websites'>
      <AnchorContainer href={'#home-decentralised-websites'}>
        <H2>{t("home.decentralisedWebsites.title")}<Anchor /></H2>
      </AnchorContainer>

      <P>{t("home.decentralisedWebsites.text")}</P>
      <ImageAnimation ref={ref}>
        <ImageTransition>
          <motion.img src={website2} style={{ opacity: inView ? 0 : 1 }} />
          <motion.img src={blur1} style={{ opacity: inView ? 1 : 0 }} />
        </ImageTransition>
        <ImageTransition>
          <img src={website1} alt={t("website")} />
        </ImageTransition>
        <ImageTransition>
          <motion.img src={website3} animate={{ opacity: inView ? 0 : 1 }} />
          <motion.img src={blur2} animate={{ opacity: inView ? 1 : 0 }} />
        </ImageTransition>
      </ImageAnimation>
      <Button href="https://medium.com/the-ethereum-name-service/cloudflare-and-fleek-make-ens-ipfs-site-deployment-as-easy-as-ever-262c990a7514">
        {t("c.learnMore")}
      </Button>
    </Container>
  )
}
