import React, { useState } from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import { H2 } from "../../Typography"
import { importAll } from "../../../utils"
import links from "../links.json"
import appSvg from "./app.svg"
import browserSvg from "./browser.svg"
import walletSvg from "./wallet.svg"

function sortApps(array, property) {
  return array.sort((a, b) => {
    if (a[property] && b[property]) {
      return a[property] < b[property] ? -1 : 1
    }
    if (a[property]) {
      return -1
    }

    if (b[property]) {
      return 1
    }

    return a.name < b.name
  })
}

const wallets = sortApps(
  importAll(require.context("./wallets", false, /\.(png|jpe?g|svg)$/)).map(
    item => {
      return {
        ...item,
        ...links[item.fileName],
      }
    }
  ),
  "featuredWallet"
)

const apps = sortApps(
  importAll(require.context("./apps", false, /\.(png|jpe?g|svg)$/)).map(
    item => {
      return {
        ...item,
        ...links[item.fileName],
      }
    }
  ),
  "featuredApp"
)

const browsers = sortApps(
  importAll(require.context("./browsers", false, /\.(png|jpe?g|svg)$/)).map(
    item => {
      return {
        ...item,
        ...links[item.fileName],
      }
    }
  ),
  "featuredBrowser"
)

const Container = styled("div")`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  padding: 20px 40px;
  margin-bottom: 30px;
  border-radius: 20px;
  box-shadow: 2px 8px 25px 2px rgba(136, 149, 169, 0.12);

  > h3 {
    > img {
      margin-right: 8px;
    }
    display: flex;
    align-items: center;
    font-weight: 500;
    font-size: 22px;
  }
`

const Grid = styled(motion.div)`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 50px;
  width: 100%;
  height: 200px;
`

const GridItemContainer = styled("a")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;

  img {
    border-radius: 50%;
    width: 105px;
    box-shadow: 4px 10px 20px 0 rgba(136, 149, 169, 0.25);
  }

  h3 {
    font-family: Overpass;
    font-weight: 400;
    font-size: 20px;
    color: #5284ff;
    text-align: center;
  }
`

function GridItem({ app }) {
  const details = app
  return (
    <GridItemContainer href={details.link}>
      <img src={app.src} alt={`${details.name} logo`} />
      <h3>{details.name ? details.name : "name not defined in links.json"}</h3>
    </GridItemContainer>
  )
}

const More = styled("p")`
  font-size: 20px;
  color: #2c46a6;
  letter-spacing: 0;
  text-align: center;

  &:hover {
    cursor: pointer;
  }
`

export default function Ecosystem(props) {
  const [moreWallets, setMoreWallets] = useState(false)
  const [moreApps, setMoreApps] = useState(false)
  const [moreBrowsers, setMoreBrowsers] = useState(false)
  return (
    <Container>
      <H2>ENS Ecosystem</H2>
      <Section>
        <h3>
          <img src={walletSvg} alt="wallet svg" />
          Wallets
        </h3>
        <Grid animate={{ height: moreWallets ? "auto" : "200px" }}>
          {wallets.map(app => (
            <GridItem app={app} />
          ))}
        </Grid>
        <More href="#" onClick={() => setMoreWallets(!moreWallets)}>
          {moreWallets ? "See less - " : "See more +"}
        </More>
      </Section>
      <Section>
        <h3>
          <img src={appSvg} alt="app svg" />
          Apps
        </h3>
        <Grid animate={{ height: moreApps ? "auto" : "200px" }}>
          {apps.map(app => (
            <GridItem app={app} />
          ))}
        </Grid>
        <More href="#" onClick={() => setMoreApps(!moreApps)}>
          {moreApps ? "See less - " : "See more +"}
        </More>
      </Section>
      <Section>
        <h3>
          <img src={browserSvg} alt="browser svg" />
          Browsers
        </h3>
        <Grid animate={{ height: moreBrowsers ? "auto" : "200px" }}>
          {browsers.map(app => (
            <GridItem app={app} />
          ))}
        </Grid>
        <More href="#" onClick={() => setMoreBrowsers(!moreBrowsers)}>
          {moreBrowsers ? "See less - " : "See more +"}
        </More>
      </Section>
    </Container>
  )
}
