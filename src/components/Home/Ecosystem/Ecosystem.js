import React, { useState } from "react"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import { H2 } from "../../Typography"
import { importAll } from "../../../utils"
import links from "../links.json"

const wallets = importAll(
  require.context("./wallets", false, /\.(png|jpe?g|svg)$/)
)
const apps = importAll(require.context("./apps", false, /\.(png|jpe?g|svg)$/))

const browsers = importAll(
  require.context("./browsers", false, /\.(png|jpe?g|svg)$/)
)

const HeroContainer = styled("div")`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Grid = styled(motion.div)`
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  grid-gap: 50px;
  max-width: 800px;
  width: 100%;
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
  const details = links[app.fileName]
  return (
    <GridItemContainer href={details.link}>
      <img src={app.src} />
      <h3>{details.name ? details.name : "name not defined in links.json"}</h3>
    </GridItemContainer>
  )
}

const More = styled("p")`
  &:hover {
    cursor: pointer;
  }
`

export default function Ecosystem(props) {
  const [moreWallets, setMoreWallets] = useState(false)
  const [moreApps, setMoreApps] = useState(false)
  const [moreBrowsers, setMoreBrowsers] = useState(false)
  return (
    <HeroContainer>
      <H2>ENS Ecosystem</H2>
      <p className="instructions">
        <a href="">Instructions</a> to add your logo
      </p>
      <Section>
        <h3>Wallets</h3>
        <Grid animate={{ height: moreWallets ? "auto" : "200px" }}>
          {wallets.map(app => (
            <GridItem app={app} />
          ))}
        </Grid>
        <More href="#" onClick={() => setMoreWallets(!moreWallets)}>
          {moreWallets ? "See less" : "See more"}
        </More>
      </Section>
      <Section>
        <h3>Apps</h3>
        <Grid animate={{ height: moreApps ? "auto" : "200px" }}>
          {apps.map(app => (
            <GridItem app={app} />
          ))}
        </Grid>
        <More href="#" onClick={() => setMoreApps(!moreApps)}>
          {moreApps ? "See less" : "See more"}
        </More>
      </Section>
      <Section>
        <h3>Browsers</h3>
        <Grid animate={{ height: moreBrowsers ? "auto" : "200px" }}>
          {browsers.map(app => (
            <GridItem app={app} />
          ))}
        </Grid>
        <More href="#" onClick={() => setMoreBrowsers(!moreBrowsers)}>
          {moreBrowsers ? "See less" : "See more"}
        </More>
      </Section>
    </HeroContainer>
  )
}
