import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"
import { Button, H2, P } from "../../Typography"

import mq from "../../../mediaQuery"
import { Anchor, AnchorContainer } from '../../Anchor'

const Container = styled("div")`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  padding-top: 120px;
`

const Desc = styled(P)`
  text-align: center;
`

const DomainDesc = styled(P)`
  max-width: 100%;
  padding-right: 30px;
  margin: 0;
  margin-bottom: 20px;

  ${mq.medium`
    max-width: 33%;
    flex-direction: row;
  `}
`

const DomainWrapper = styled("div")`
  display: flex;
  max-width: 900px;
  flex-direction: column;
  ${mq.medium`
    flex-direction: row;
  `}
`

const Domains = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  width: 100%;
  grid-gap: 0px 70px;

  ${mq.medium`
    width: 66%;
    flex-direction: row;
  `}
  li {
    font-family: Karma;
    font-weight: 300;
    font-size: 58px;
    padding-bottom: 0;
    font-size: 62px;
    color: #2c46a6;
    list-style: none;
    ${mq.medium`
    font-size: 62px;
    `}
  }
`

const domains = [".com", ".org", ".io", ".xyz", ".art", "& more"]

export default function TraditionalDomains(props) {
  const { t } = useTranslation()
  return (
    <Container id='home-traditional-domains'>
      <AnchorContainer href={'#home-traditional-domains'}>
        <H2>{t("home.dns.title")}<Anchor /></H2>
      </AnchorContainer>

      <Desc>{t("home.dns.text1")}</Desc>
      <DomainWrapper>
        <DomainDesc>{t("home.dns.text2")}</DomainDesc>
        <Domains>
          {domains.map(d => (
            <li>{d}</li>
          ))}
        </Domains>
      </DomainWrapper>
      <Button href="https://docs.ens.domains/dns-registrar-guide">
        {t("c.learnMore")}
      </Button>
    </Container>
  )
}
