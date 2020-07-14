import React from "react"
import styled from "@emotion/styled"
import { H2 as H2Default } from "./Typography"

import mq from "../mediaQuery"
import mailingList from "../assets/mailingList.svg"
import documentation from "../assets/documentation.svg"
import community from "../assets/community.svg"
import forum from "../assets/forum.svg"

const links = [
  {
    img: mailingList,
    text: "Subscribe to our mailing list",
    cta: "Subscribe",
    link: "https://ensdomains.substack.com/p/coming-soon",
  },
  {
    img: community,
    text: "Join our Gitter community",
    cta: "Join Gitter",
    link: "https://gitter.im/ethereum/go-ethereum/name-registry",
  },
  {
    img: forum,
    text: "Discuss on our forum",
    cta: "Discuss",
    link: "https://discuss.ens.domains/",
  },
  {
    img: documentation,
    text: "Read our documentation",
    cta: "Read Docs",
    link: "https://docs.ens.domains/",
  },
]

const Container = styled("div")`
  background: #253c8f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 125px 20px;
`

const H2 = styled(H2Default)`
  color: white;
  margin-bottom: 100px;
`

const Links = styled("div")`
  max-width: 860px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 50px 50px;
  ${mq.medium`
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: minmax(100px, auto);
  `}
`

const LinkItem = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 20px 20px;
  grid-template-areas:
    "img"
    "title"
    "link";

  ${mq.medium`
    grid-template-columns: 80px 1fr;
    grid-template-rows: auto 100px;
    grid-template-areas:
    "img title"
    ". link";
  `};

  img {
    grid-area: img;
    justify-self: start;
    ${mq.medium`
      justify-self: end;
    `};
  }
  h3 {
    font-size: 34px;
    font-family: Karma;
    font-weight: 300;
    color: white;
    grid-area: title;
    margin: 0;

    ${mq.medium`
      font-size: 44px;
    `};
  }
  a {
    grid-area: link;
  }
`

const ExternalLink = styled("a")`
  color: #52e5ff;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;
`

export default function GetInvolved(props) {
  return (
    <Container>
      <H2>Get Involved</H2>
      <Links>
        {links.map(l => (
          <LinkItem>
            <img src={l.img} />
            <h3>{l.text}</h3>
            <ExternalLink href={l.link}>{l.cta}</ExternalLink>
          </LinkItem>
        ))}
      </Links>
    </Container>
  )
}
