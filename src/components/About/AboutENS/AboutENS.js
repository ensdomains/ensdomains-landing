import React from "react"
import styled from "@emotion/styled"

import mq from "../../../mediaQuery"

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

  p {
    font-family: Karma;
    font-size: 24px;
    color: #2b2b2b;
    font-weight: 200;
    text-align: center;
    line-height: 1.3em;
    max-width: 850px;

    ${mq.medium`
      font-size: 42px;
    `}
  }
`

export default function AboutENS(props) {
  return (
    <AboutENSContainer>
      <h3>About ENS</h3>
      <p>
        Initially started at the Ethereum Foundation in early 2017, ENS spun off
        as a separate organization in 2018. ENS is managed by the Singaporean
        non-profit True Names LTD.
      </p>
    </AboutENSContainer>
  )
}
