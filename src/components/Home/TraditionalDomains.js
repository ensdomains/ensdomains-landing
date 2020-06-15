import React from "react"
import styled from "@emotion/styled"

const Container = styled("div")`
  background: green;
`

const domains = [".com", ".org", "io", ".cred", ".luxe", ".art"]

export default function TraditionalDomains(props) {
  return (
    <Container>
      <h2> Integrate Traditional Domains</h2>
      <p>
        The native name suffix for ENS is .ETH, which has the full security
        benefits of being blockchain-native.
      </p>
      <h3>
        Use ENS with DNS names you already own. ENS supports most DNS names,
        some examples include:
      </h3>
      {domains.map(d => (
        <li>{d}</li>
      ))}
    </Container>
  )
}
