import React from "react"
import styled from "@emotion/styled"

import { importAll } from "../../utils"
import links from "./links.json"

import GridView, { Row } from "./gridView/GridView"

const mobile = importAll(
  require.context("./mobile", false, /\.(png|jpe?g|svg)$/)
)
const apps = importAll(require.context("./apps", false, /\.(png|jpe?g|svg)$/))

const HeroContainer = styled("div")`
  background: green;
`

export default function Ecosystem(props) {
  return null
  return (
    <HeroContainer>
      <GridView>
        <h2>Apps Supporting ENS</h2>
        <Row list={mobile} title="s" links={links}>
          <h3>
            {/* <img className="wallet-icon" src={walletIcon} /> */}
            Wallets
          </h3>
        </Row>
        <Row list={apps} links={links}>
          <h3>
            {/* <img className="apps-icon" src={appsIcon} /> */}
            Apps
          </h3>
        </Row>
      </GridView>
      }
    </HeroContainer>
  )
}
