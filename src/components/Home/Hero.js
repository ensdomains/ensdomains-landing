import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "gatsby-plugin-react-i18next"
import mq from "../../mediaQuery"

import { Button } from "../Typography"

const Title = styled("h1")`
  font-size: 24px;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 0.4em;
  color: white;
  text-align: center;
  max-width: 800px;
  padding: 40px 20px 0;

  ${mq.medium`
    padding: 120px 20px 0;
    font-size: 68px;
  `}
`

const HeroContainer = styled("div")`
  background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);
  display: flex;
  justify-content: center;

  position: relative;
  flex-direction: column;
  align-items: center;
`

const Launch = styled(Button)`
  margin: 0 auto 0;
  margin-block-end: 2em;
`

export default function Hero(props) {
  const { t } = useTranslation()
  return (
    <HeroContainer>
      <Title>{t("home.hero.title")}</Title>
      <Launch href="https://app.ens.domains">
        {t("home.carousel.launch")}
      </Launch>
    </HeroContainer>
  )
}
