import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import mq from "../../mediaQuery"

const Hero = styled("section")`
  background-image: linear-gradient(90deg, #513eff 0%, #52e5ff 100%);
  padding: 40px 20px;
  display: flex;
  justify-content: center;

  ${mq.medium`
    padding: 120px 20px;
  `};

  p {
    font-family: Overpass;
    font-weight: 200;
    font-size: 28px;

    color: #ffffff;
    letter-spacing: 0;
    text-align: center;
    line-height: 1.3em;
    margin: 0;
    max-width: 880px;
    ${mq.medium`
      font-size: 56px;
    `}
  }
`

export default function AboutHero(props) {
  const { t } = useTranslation()
  return (
    <Hero>
      <p>{t("about.hero")}</p>
    </Hero>
  )
}
