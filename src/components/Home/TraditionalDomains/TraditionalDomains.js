import React from "react"
import styled from "@emotion/styled"
import { H2, P } from "../../Typography"

const Container = styled("div")`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Desc = styled(P)`
  text-align: center;
`

const DomainDesc = styled(P)`
  padding-right: 30px;
`

const DomainWrapper = styled("div")`
  display: flex;
  max-width: 900px;
`

const Domains = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 0px 70px;
  li {
    padding-bottom: 0;
    font-size: 62px;
    color: #2c46a6;
    list-style: none;
  }
`

const domains = [".com", ".org", ".io", ".cred", ".luxe", ".art"]

export default function TraditionalDomains(props) {
  return (
    <Container>
      <H2> Integrate Traditional Domains</H2>
      <Desc>
        The native name suffix for ENS is .ETH, which has the full security
        benefits of being blockchain-native.
      </Desc>
      <DomainWrapper>
        <DomainDesc>
          Use ENS with DNS names you already own. ENS supports most DNS names,
          some examples include:
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
