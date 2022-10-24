import styled from "@emotion/styled"
import React from "react"
import { useTranslation } from "react-i18next"
import mq from "../../../mediaQuery"
import { Anchor, AnchorContainer } from "../../Anchor"

const Description = styled("div")`
  display: flex;
  justify-content: center;
  padding: 120px 20px;
  background: white;
`

const DescriptionInner = styled("div")`
  background: white;
  display: grid;
  max-width: 1000px;
  grid-template-columns: 1fr;
  grid-gap: 20px;

  ${mq.medium`
    grid-template-columns: 1fr 2.7fr;
    grid-gap: 50px;
  `}

  p {
    font-family: Overpass;
    font-weight: 200;
    font-size: 18px;
    color: #2b2b2b;
    line-height: 38px;
    margin: 0;

    ${mq.medium`
      font-size: 28px;
    `};
  }

  h2 {
    font-family: Karma;
    font-weight: 200;
    font-size: 24px;
    color: #2b2b2b;
    line-height: 56px;
    margin: 0;

    ${mq.medium`
      font-size: 42px;
    `};
  }
`

const members = [
  { name: "Nick Johnson", company: "ENS Labs Limited" },
  { name: "Sergey Nazarov", company: "Chainlink" },
  { name: "Dan Finlay", company: "Metamask" },
  { name: "Taylor Monahan", company: "MyCrypto" },
  { name: "Aron Fischer", company: "Colony" },
  { name: "Jason Carver", company: "Ethereum Foundation" },
  { name: "Martin Swende", company: "Ethereum Foundation" },
]

const Members = styled("dl")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px 20px;

  ${mq.small`
    grid-template-columns: 1fr 1fr;
  `}
`
const Member = styled("div")`
  display: flex;
  flex-direction: column;

  dt {
    font-family: Karma;
    font-weight: 200;
    font-size: 34px;
    color: #2b2b2b;
    line-height: 42px;
    text-align: center;

    ${mq.small`
      font-size: 44px;
      text-align: left;
    `}
  }

  dd {
    margin: 0;
    font-family: Karma;
    font-weight: 200;
    font-size: 18px;
    color: #2b2b2b;
    line-height: 42px;
    text-align: center;

    ${mq.small`
      font-size: 24px;
      text-align: left;
    `}
  }
`

export default function AboutDescription(props) {
  const { t } = useTranslation()
  return (
    <>
      <Description id="about-root">
        <DescriptionInner>
          <AnchorContainer href={"#about-root"}>
            <h2>
              {t("about.root.title")}
              <Anchor />
            </h2>
          </AnchorContainer>
          <p>{t("about.root.text")}</p>
          <div />
          <Members>
            {members.map(member => (
              <Member>
                <dt>{member.name}</dt> <dd>{member.company}</dd>
              </Member>
            ))}
          </Members>
        </DescriptionInner>
      </Description>
    </>
  )
}
