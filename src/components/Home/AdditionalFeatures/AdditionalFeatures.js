import React from "react"
import styled from "@emotion/styled"
import { H2 } from "../../Typography"

const HeroContainer = styled("div")`
  background: white;
  padding: 120px 0;
`

const features = [
  {
    desc: "Create your project’s own record type.",
  },
  {
    desc: "Attach profile information to your ENS name with our text records.",
  },
  {
    desc: "Create ENS subdomains as usernames for your project.",
  },
  {
    desc: "Store and serve traditional DNS records with certain names.",
  },
  {
    desc: "Use ENS to more easily access Tor .onion hidden services.",
  },
  {
    desc: ".ETH names are ERC721-compliant NFTs",
  },
]

const FeatureContainer = styled("div")``

function Feature({ desc }) {
  return (
    <FeatureContainer>
      <img src="" />
      {desc}
    </FeatureContainer>
  )
}

export default function AdditionalFeatures(props) {
  return (
    <HeroContainer>
      <H2>Additional Features</H2>
      {features.map(f => (
        <Feature desc={f.desc} />
      ))}
    </HeroContainer>
  )
}
