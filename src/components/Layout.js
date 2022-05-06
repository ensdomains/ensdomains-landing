import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import favicon from "../assets/favicon.ico"
import twitter from "../assets/twitter.png"

function getTitle(pathname) {
  switch (pathname) {
    case "/governance":
      return "Governance"
    case "/about":
      return "About ENS"
    default:
      return "Ethereum Name Service"
  }
}

export default function Layout({ children, data, location }) {
  return (
    <>
      <Helmet
        meta={[
          {
            name: "description",
            content:
              "Your web3 username, a name for all your cryptocurrency addresses, and decentralised websites.",
          },
          {
            name: "keywords",
            content:
              "ENS, Ethereum, Ethereum Name Service, .eth domains, blockchain domains",
          },
          {
            name: "twitter:card",
            content: "summary",
          },
          {
            name: "twitter:title",
            content: "Ethereum Name Service",
          },
          {
            property: "og:image",
            content: `https://ens.domains${twitter}`,
          },
        ]}
        title={getTitle(location.pathname)}
        link={[
          { rel: "shortcut icon", type: "image/x-icon", href: `${favicon}` },
        ]}
      />
      <Global
        styles={css`
          html, body, #___gatsby, #gatsby-focus-wrapper {
            height: ${location?.pathname === '/governance' ? '100%' : 'initial'};
          }
          body {
            font-family: Overpass;
          }
          #gatsby-focus-wrapper {
            height: 100vh;
          }
        `}
      />
      {children}
    </>
  )
}
