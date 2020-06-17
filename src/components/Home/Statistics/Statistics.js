import React from "react"
import styled from "@emotion/styled"
import statsBG from "./statsBG.jpg"

import { H2 } from "../../Typography"

const HeroContainer = styled("div")`
  padding: 120px; 0;
  background: url(${statsBG});
`

const Stats = styled("div")`
  display: flex;
  justify-content: space-between;
  font-family: Karma;
  font-weight: 300;

  strong {
    font-size: 120px;
    color: #2c46a6;
  }
  span {
    font-size: 28px;
    color: black;
    text-transform: capitalize;
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
      <H2>
        ENS is the most widely integrated cryptocurrency wallet naming standard.
      </H2>
      <Stats>
        <p>
          <strong>463k</strong> <span>registered names</span>
        </p>
        <p>
          <strong>148</strong> <span>integrated services</span>
        </p>
        <p>
          <strong>24.5k</strong> <span>owners</span>
        </p>
      </Stats>
    </HeroContainer>
  )
}
