import React from "react"
import styled from "@emotion/styled"

import DefaultLogo from "./Logo"
import twitter from "../assets/twitter.svg"
import github from "../assets/github.svg"
import medium from "../assets/medium.svg"

import mq from "../mediaQuery"

const Logo = styled(DefaultLogo)`
  margin-bottom: 20px;
  ${mq.medium`
    margin-bottom: 0;
  `};
`

const FooterContainer = styled("footer")`
  background: #1e3277;
  padding: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${mq.medium`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `};
`

const social = [
  {
    img: twitter,
    text: "Twitter",
    link: "https://twitter.com/ensdomains",
  },
  {
    img: medium,
    text: "Medium",
    link: "https://medium.com/the-ethereum-name-service",
  },
  {
    img: github,
    text: "Github",
    link: "https://github.com/ensdomains",
  },
]

const ExternalLink = styled("a")`
  font-family: Karma;
  font-size: 28px;
  color: white;
  text-decoration: none;
  font-weight: 300;
  margin-bottom: 20px;
  img {
    margin-right: 8px;
  }

  ${mq.medium`
    margin-bottom: 0px;
    padding: 0 25px 0;
    border-right: solid 1px rgba(255, 255, 255, 0.5);
    &:last-child {
      padding: 0 0 0 25px;
      border-right: none;
    }
  `};
`

const SocialContainer = styled("div")`
  display: flex;
  align-items: center;
  flex-direction: column;

  ${mq.medium`
    flex-direction: row;
  `};
`

const MailTo = styled("a")`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  ${mq.medium`
    align-items: flex-start;
  `};
`

export default function Footer(props) {
  return (
    <FooterContainer>
      <Logo />
      <SocialContainer>
        {social.map(s => (
          <ExternalLink href={s.link}>
            <img src={s.img} />
            {s.text}
          </ExternalLink>
        ))}
      </SocialContainer>
      <FooterColumn>
        <MailTo href="mailto:press@ens.domains">press@ens.domains</MailTo>
        <MailTo href="https://docs.ens.domains/bug-bounty-program">
          Bug Bounty
        </MailTo>
      </FooterColumn>
    </FooterContainer>
  )
}
