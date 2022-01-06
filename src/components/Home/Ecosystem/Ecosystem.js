import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import styled from "@emotion/styled"
import { motion } from "framer-motion"

import { H2 } from "../../Typography"
import { importAll } from "../../../utils"
import links from "../links.json"
import appSvg from "./app.svg"
import browserSvg from "./browser.svg"
import walletSvg from "./wallet.svg"
import { Anchor, AnchorContainer } from "../../Anchor"

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

const Container = styled("div")`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-top: 120px;
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

  :hover {
    h3 {
      color: #1256ff;
    }
  }
`

function GridItem({ app }) {
  const details = app
  return (
    <GridItemContainer href={details.link}>
      <img src={app.src.default} alt={`${details.name} logo`} />
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
  const { t } = useTranslation()
  const [wallets, setWallets] = useState([])
  const [apps, setApps] = useState([])
  const [browsers, setBrowsers] = useState([])
  const [moreWallets, setMoreWallets] = useState(false)
  const [moreApps, setMoreApps] = useState(false)
  const [moreBrowsers, setMoreBrowsers] = useState(false)

  useEffect(() => {
    async function getImages() {
      const walletsPromise = require.context(
        "./wallets",
        false,
        /\.(png|jpe?g|svg)$/
      )
      const appsPromise = require.context("./apps", false, /\.(png|jpe?g|svg)$/)
      const browsersPromise = require.context(
        "./browsers",
        false,
        /\.(png|jpe?g|svg)$/
      )
      const [wallets, apps, browsers] = await Promise.all([
        walletsPromise,
        appsPromise,
        browsersPromise,
      ])
      setApps(
        importAll(apps).map(item => {
          return {
            ...item,
            ...links[item.fileName],
          }
        })
      )
      setWallets(
        importAll(wallets).map(item => {
          return {
            ...item,
            ...links[item.fileName],
          }
        })
      )
      setBrowsers(
        importAll(browsers).map(item => {
          return {
            ...item,
            ...links[item.fileName],
          }
        })
      )
    }

    getImages()
  }, [])

  const sortedWallets = sortApps(wallets, "featuredWallet")
  const sortedApps = sortApps(apps, "featuredApp")
  const sortedBrowsers = sortApps(browsers, "featuredBrowser")

  return (
    <Container id="home-ecosystem">
      <AnchorContainer href={"#home-ecosystem"}>
        <H2>
          {t("home.ecosystem.title")}
          <Anchor />
        </H2>
      </AnchorContainer>
      <Section>
        <h3>
          <img src={walletSvg} alt="wallet svg" />
          {t("home.ecosystem.wallets")}
        </h3>
        <Grid animate={{ height: moreWallets ? "auto" : "200px" }}>
          {sortedWallets.map(app => (
            <GridItem app={app} key={app.name} />
          ))}
        </Grid>
        <More href="#" onClick={() => setMoreWallets(!moreWallets)}>
          {moreWallets
            ? `${t("home.ecosystem.seeLess")} -`
            : `${t("home.ecosystem.seeMore")} +`}
        </More>
      </Section>
      <Section>
        <h3>
          <img src={appSvg} alt="app svg" />
          {t("home.ecosystem.apps")}
        </h3>
        <Grid animate={{ height: moreApps ? "auto" : "200px" }}>
          {sortedApps.map(app => (
            <GridItem app={app} key={app.name} />
          ))}
        </Grid>
        <More href="#" onClick={() => setMoreApps(!moreApps)}>
          {moreApps
            ? `${t("home.ecosystem.seeLess")} -`
            : `${t("home.ecosystem.seeMore")} +`}
        </More>
      </Section>
      <Section>
        <h3>
          <img src={browserSvg} alt="browser svg" />
          {t("home.ecosystem.browsers")}
        </h3>
        <Grid animate={{ height: moreBrowsers ? "auto" : "200px" }}>
          {sortedBrowsers.map(app => (
            <GridItem app={app} key={app.name} />
          ))}
        </Grid>
        <More href="#" onClick={() => setMoreBrowsers(!moreBrowsers)}>
          {moreBrowsers
            ? `${t("home.ecosystem.seeLess")} -`
            : `${t("home.ecosystem.seeMore")} +`}
        </More>
      </Section>
    </Container>
  )
}
