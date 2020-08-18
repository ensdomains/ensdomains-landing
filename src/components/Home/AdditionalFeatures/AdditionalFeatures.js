import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import { H2 } from "../../Typography"

import cards from "./assets/cards.svg"
import attach from "./assets/attach.svg"
import dns from "./assets/dns.svg"
import file from "./assets/file.svg"
import onion from "./assets/onion.svg"
import usernames from "./assets/usernames.svg"

import mq from "../../../mediaQuery"

const features = [
  {
    name: "recordType",
    desc: "Create your project’s own record type.",
    img: file,
    link:
      "https://medium.com/the-ethereum-name-service/new-custom-text-records-means-every-project-can-have-its-own-ens-record-a68022bb8f86",
  },
  {
    name: "textRecord",
    desc: "Attach profile information to your ENS name with our text records.",
    img: attach,
    link:
      "https://medium.com/the-ethereum-name-service/new-text-records-now-available-for-ens-names-in-manager-a0ebb9cda73a",
  },
  {
    name: "subDomains",
    desc: "Create ENS subdomains as usernames for your project.",
    img: usernames,
    link:
      "https://docs.ens.domains/dapp-developer-guide/managing-names#creating-subdomains",
  },
  {
    name: "dns",
    desc: "Store and serve traditional DNS records with certain names.",
    img: dns,
    link:
      "https://medium.com/the-ethereum-name-service/ens-kred-major-integration-of-dns-and-ens-launches-e7efb4dd872a",
  },
  {
    name: "tor",
    desc: "Use ENS to more easily access Tor .onion hidden services.",
    img: onion,
    link:
      "https://medium.com/the-ethereum-name-service/list-of-ens-names-that-resolve-to-tor-onion-websites-99140a4c674f",
  },
  {
    name: "erc721",
    desc: ".ETH names are ERC721-compliant NFTs",
    img: cards,
    link: "https://eips.ethereum.org/EIPS/eip-721",
  },
]

const AdditionalFeaturesContainer = styled("div")`
  background: white;
  padding: 120px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FeaturesContainer = styled("div")`
  max-width: 960px;
  width: 100%;
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

  p {
    font-family: Karma;
    font-size: 20px;
    color: #2b2b2b;
    line-height: 30px;
  }

  a {
    font-family: Overpass;
    font-weight: 500;
    text-decoration: none;
    font-size: 20px;
    color: #5284ff;
    letter-spacing: 0;
  }
`

function Feature({ feature: f }) {
  const { t } = useTranslation()
  return (
    <FeatureContainer>
      <img src={f.img} />
      <p>{t(`home.additionalFeatures.${f.name}`)}</p>
      <a href={f.link}>{t("c.learnMore")}</a>
    </FeatureContainer>
  )
}

const Title = styled(H2)`
  margin-bottom: 100px;
`

export default function AdditionalFeatures(props) {
  const { t } = useTranslation()
  return (
    <AdditionalFeaturesContainer>
      <Title>{t("home.additionalFeatures.title")}</Title>
      <FeaturesContainer>
        {features.map(f => (
          <Feature feature={f} />
        ))}
      </FeaturesContainer>
    </AdditionalFeaturesContainer>
  )
}
