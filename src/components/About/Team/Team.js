import React from "react"
import styled from "@emotion/styled"
import { useTranslation } from "react-i18next"

import mq from "../../../mediaQuery"

import jeff from "./photos/jeff.png"
import nick from "./photos/nick.png"
import makoto from "./photos/makoto.png"
import brantly from "./photos/brantly.png"
import kevin from "./photos/kevin.png"
import leon from "./photos/leon.png"
import richard from "./photos/richard.png"
import muhammed from "./photos/muhammed.png"
import alisha from "./photos/alisha.png"
import taytems from "./photos/taytems.png"
import { Anchor, AnchorContainer } from "../../Anchor"
import { MainPageBannerContainer, DAOBannerContent } from "../../DAOBanner"

const team = [
  {
    name: "Nick Johnson",
    title: "Creator & Lead Developer",
    img: nick,
    link: "https://twitter.com/wekabot",
  },
  {
    name: "Jeff Lau",
    title: "Frontend & Solidity Developer",
    img: jeff,
    link: "https://twitter.com/_jefflau",
  },
  {
    name: "Makoto Inoue",
    title: "JS & Solidity Developer",
    img: makoto,
    link: "https://gist.github.com/makoto/c6f2e5abdaacb69b1d9a6bae990800c4",
  },
  {
    name: "brantly.eth",
    title: "Director of Operations",
    img: brantly,
    link: "https://twitter.com/BrantlyMillegan",
  },
  {
    name: "Kevin | validator.eth",
    title: "Support Lead",
    img: kevin,
    link: "https://twitter.com/ValidatorEth",
  },
  {
    name: "Leon Talbert",
    title: "Frontend Developer",
    img: leon,
    link: "https://twitter.com/talbert_leon",
  },
  {
    name: "Richard Moore",
    title: "Solidity Developer",
    img: richard,
    link: "https://twitter.com/ricmoo",
  },
  {
    name: "Muhammed Tanrıkulu",
    title: "Full Stack Developer",
    img: muhammed,
    link: "https://twitter.com/md_tanrikulu",
  },
  {
    name: "alisha.eth",
    title: "Community Manager",
    img: alisha,
    link: "https://twitter.com/futurealisha",
  },
  {
    name: "taytems.eth",
    title: "Frontend Developer",
    img: taytems,
    link: "https://twitter.com/taytemss",
  },
]

const TeamContainer = styled("div")`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 20px;

  h3 {
    font-family: Overpass;
    font-weight: 200;
    font-size: 28px;
    color: #2b2b2b;
    text-align: center;
  }

  ${mq.medium`
    padding-top: 80px;
  `};
`

const TeamMembers = styled("section")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const TeamMemberContainer = styled("a")`
  width: calc(50% - 40px);
  margin: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  text-decoration: none;

  ${mq.medium`
    width: calc(25% - 40px);
  `}

  .img-wrapper {
    width: 100%;
    margin-bottom: 0;
    position: relative;
    width: 170px;
    .hover {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      width: 100%;
      transition: 0.2s;
      z-index: 1;
    }
    &:hover .hover {
      transform: translate(-50%, -50%) scale(1.1);
      opacity: 1;
    }
  }

  .photo {
    display: block;
    width: 170px;
    height: 170px;
    position: relative;
    z-index: 2;
  }
  .hover {
    background-image: linear-gradient(44deg, #52e5ff 0%, #513eff 100%);
    height: 170px;
    width: 170px;
    border-radius: 50%;
    opacity: 0;
  }

  h4 {
    font-family: Karma;
    font-weight: 500;
    font-size: 24px;
    color: #5284ff;
    text-align: center;
    line-height: 32px;
    margin-bottom: 0;
  }

  p {
    margin: 0;
    font-family: Karma;
    font-size: 16px;
    color: #2b2b2b;
    text-align: center;
  }
`

function TeamMember({ member }) {
  return (
    <TeamMemberContainer href={member.link}>
      <div className="img-wrapper">
        <img src={member.img} className="photo" alt={member.name} />
        <div className="hover" />
      </div>
      <h4>{member.name}</h4>
      <p>{member.title}</p>
    </TeamMemberContainer>
  )
}

export default function Team(props) {
  const { t } = useTranslation()
  return (
    <TeamContainer id="about-team">
      <MainPageBannerContainer>
        <DAOBannerContent />
      </MainPageBannerContainer>

      <AnchorContainer href={"#about-team"}>
        <h3>
          {t("about.team.title")}
          <Anchor />
        </h3>
      </AnchorContainer>
      <TeamMembers>
        {team.map(member => (
          <TeamMember member={member} />
        ))}
      </TeamMembers>
    </TeamContainer>
  )
}
