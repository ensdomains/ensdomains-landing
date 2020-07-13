import React from "react"
import styled from "@emotion/styled"
import { H2, P } from "../../Typography"

import mq from "../../../mediaQuery"

const Container = styled("div")`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`

const Desc = styled(P)`
  text-align: center;
`

const DomainDesc = styled(P)`
  max-width: 100%;
  padding-right: 30px;

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
    font-family: Karma-Light;
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

const domains = [".com", ".org", ".io", ".kred", ".luxe", ".art"]

export default function TraditionalDomains(props) {
  return (
    <Container>
      <H2> Use Traditional Domains</H2>
      <Desc>
        The native name suffix for ENS is .ETH, which has the full security
        benefits of being blockchain-native.
      </Desc>
      <DomainWrapper>
        <DomainDesc>
          You can also use ENS with DNS names you already own. ENS supports most
          DNS names, some examples include:
        </DomainDesc>
        <Domains>
          {domains.map(d => (
            <li>{d}</li>
          ))}
        </Domains>
      </DomainWrapper>
    </Container>
  )
}
