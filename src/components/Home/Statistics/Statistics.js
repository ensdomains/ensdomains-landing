import React from "react"
import styled from "@emotion/styled"
import statsBG from "./statsBG.jpg"
import { useTranslation } from "react-i18next"

import { H2 as DefaultH2 } from "../../Typography"
import mq from "../../../mediaQuery"
import integrations from "../links.json"

const HeroContainer = styled("div")`
  padding: 60px 20px;
  background: url(${statsBG}) no-repeat;
  background-size: cover;

  ${mq.medium`
    padding: 120px 20px;
  `}
`

const H2 = styled(DefaultH2)`
  font-family: Karma;
  color: #2b2b2b;
  text-align: center;
  max-width: 900px;
  margin: 0 auto 20px;
  font-size: 28px;
  line-height: 36px;

  ${mq.medium`
    font-weight: 300;
    font-size: 52px;
    line-height: 62px;
    margin: 0 auto 50px;
  `}
`

const Stats = styled("div")`
  display: flex;
  flex-direction: column;
  font-family: Karma;
  font-weight: 300;
  margin: 0 auto 0;
  max-width: 800px;

  ${mq.small`
    flex-direction: row;
    justify-content: space-between;
  `}

  strong {
    font-size: 60px;
    color: #2c46a6;
    ${mq.small`
      font-size: 90px;
    `};

    ${mq.large`
      font-size: 120px;
    `};
  }
  span {
    font-size: 20px;
    color: black;
    text-transform: capitalize;
    ${mq.small`
      font-size: 24px;
    `};
    ${mq.large`
      font-size: 28px;
    `};
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default function Statistics(props) {
  const { t } = useTranslation()
  const integrationsCount = Object.keys(integrations).length
  return (
    <HeroContainer>
      <H2>{t("home.statistics.title")}</H2>
      <Stats>
        <p>
          <strong>187k</strong> <span>{t("home.statistics.names")}</span>
        </p>
        <p>
          <strong>{integrationsCount}</strong>{" "}
          <span>{t("home.statistics.services")}</span>
        </p>
        <p>
          <strong>50.5k</strong> <span>{t("home.statistics.owners")}</span>
        </p>
      </Stats>
    </HeroContainer>
  )
}
