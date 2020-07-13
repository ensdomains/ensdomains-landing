import React from "react"
import styled from "@emotion/styled"

import mq from "../../../mediaQuery"
import { importAll } from "../../../utils"

const partners = importAll(
  require.context("./partners", false, /\.(png|jpe?g|svg)$/)
)

const associated = importAll(
  require.context("./associated", false, /\.(png|jpe?g|svg)$/)
)

const AboutENSContainer = styled("div")`
  background: white;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${mq.medium`
    padding: 80px 0;
  `};

  h3 {
    font-family: Overpass;
    font-weight: 200;
    font-size: 28px;
    color: #2b2b2b;
    text-align: center;
  }

  p.prelede {
    font-family: Karma;
    font-size: 24px;
    color: #2b2b2b;
    font-weight: 200;
    text-align: center;
    line-height: 1.3em;
    max-width: 850px;
    padding: 0 20px;

    ${mq.medium`
      font-size: 42px;
    `}
  }
`

const Support = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px 20px;
  padding: 0 20px;
  max-width: 830px;

  p {
    font-family: Overpass;
    font-weight: 200;
    font-size: 22px;
    color: #2b2b2b;
    line-height: 1.3em;

    ${mq.medium`
      height: 100px;
    `};
  }
`

const Logos = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px 20px;

  flex-direction: column;
  align-items: flex-start;

  img {
    max-width: 100%;
    margin-bottom: 30px;
    justify-self: center;
    align-self: center;
  }
`

const List1 = styled("div")``

const List2 = styled("div")``
export default function AboutENS(props) {
  return (
    <AboutENSContainer>
      <h3>About ENS</h3>

      <p className="prelede">
        Initially started at the Ethereum Foundation in early 2017, ENS spun off
        as a separate organization in 2018. ENS is managed by the Singaporean
        non-profit True Names LTD and is a{" "}
        <a href="https://medium.com/the-ethereum-name-service/who-should-own-the-naming-system-of-the-future-ens-as-a-public-good-10e4a0ab71d8">
          public good
        </a>
        , a basic piece of Internet infrastructure that belongs to the
        community. We welcome all feedback and contributions!
      </p>
      <Support>
        <List1>
          <p>We have received generous support from:</p>
          <Logos>
            {partners.map(logo => (
              <img src={logo.src} alt={logo.name} />
            ))}
          </Logos>
        </List1>
        <List2>
          <p>
            Representatives of ENS participate in the greater Internet
            community:
          </p>

          <Logos>
            {associated.map(logo => (
              <img src={logo.src} alt={logo.name} />
            ))}
          </Logos>
        </List2>
      </Support>
    </AboutENSContainer>
  )
}
