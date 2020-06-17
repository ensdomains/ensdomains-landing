import React from "react"
import styled from "@emotion/styled"
import { H2 } from "../../Typography"

import cards from "./assets/cards.svg"
import attach from "./assets/attach.svg"
import dns from "./assets/dns.svg"
import file from "./assets/file.svg"
import onion from "./assets/onion.svg"
import usernames from "./assets/usernames.svg"

const features = [
  {
    desc: "Create your project’s own record type.",
    img: file,
    link: "",
  },
  {
    desc: "Attach profile information to your ENS name with our text records.",
    img: attach,
    link: "",
  },
  {
    desc: "Create ENS subdomains as usernames for your project.",
    img: usernames,
    link: "",
  },
  {
    desc: "Store and serve traditional DNS records with certain names.",
    img: dns,
    link: "",
  },
  {
    desc: "Use ENS to more easily access Tor .onion hidden services.",
    img: onion,
    link: "",
  },
  {
    desc: ".ETH names are ERC721-compliant NFTs",
    img: cards,
    link: "",
  },
]

const HeroContainer = styled("div")`
  background: white;
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FeaturesContainer = styled("div")`
  max-width: 960px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 50px 50px;
`

const FeatureContainer = styled("div")`
  background: #ffffff;
  box-shadow: 2px 8px 25px 2px rgba(136, 149, 169, 0.12);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  img {
    display: block;
    max-width: 100%;
    margin-bottom: 20px;
  }
`

function Feature({ feature: f }) {
  return (
    <FeatureContainer>
      <img src={f.img} />
      <p>{f.desc}</p>
      <a href={f.link}>Learn More</a>
    </FeatureContainer>
  )
}

const Title = styled(H2)`
  margin-bottom: 100px;
`

export default function AdditionalFeatures(props) {
  return (
    <HeroContainer>
      <Title>Additional Features</Title>
      <FeaturesContainer>
        {features.map(f => (
          <Feature feature={f} />
        ))}
      </FeaturesContainer>
    </HeroContainer>
  )
}
