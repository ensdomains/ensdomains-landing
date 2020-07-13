import React from "react"
import styled from "@emotion/styled"
import statsBG from "./statsBG.jpg"

import { H2 } from "../../Typography"
import mq from "../../../mediaQuery"

const HeroContainer = styled("div")`
  padding: 120px 20px;
  background: url(${statsBG}) no-repeat;
  background-size: cover;
`

const Stats = styled("div")`
  display: flex;
  flex-direction: column;
  font-family: Karma;
  font-weight: 300;

  ${mq.small`
    flex-direction: row;
    justify-content: space-between;
  `}

  strong {
    font-size: 60px;
    color: #2c46a6;
    ${mq.small`
      font-size: 90px;
    `};

    ${mq.large`
      font-size: 120px;
    `};
  }
  span {
    font-size: 20px;
    color: black;
    text-transform: capitalize;
    ${mq.small`
      font-size: 24px;
    `};
    ${mq.large`
      font-size: 28px;
    `};
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default function Statistics(props) {
  return (
    <HeroContainer>
      <H2>ENS is the most widely integrated blockchain naming standard.</H2>
      <Stats>
        <p>
          <strong>463k</strong> <span>registered names</span>
        </p>
        <p>
          <strong>151</strong> <span>integrated services</span>
        </p>
        <p>
          <strong>24.5k</strong> <span>owners</span>
        </p>
      </Stats>
    </HeroContainer>
  )
}
