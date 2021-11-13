import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import favicon from "../assets/favicon.ico"
import twitter from "../assets/twitter.png"

function getTitle(pathname) {
  switch (pathname) {
    case "/":
      return "ENS | Ethereum Name Service"
    case "/about":
      return "ENS | Organization"
    default:
      return "ENS | Ethereum Name Service"
  }
}

export default function Layout({ children, data, location }) {
  return (
    <>
      <Helmet
        meta={[
          {
            name: "description",
            content: "Your web3 username, a name for all your cryptocurrency addresses, and decentralised websites.",
          },
          {
            name: "keywords",
            content: "ENS, Ethereum, Ethereum Name Service, .eth domains, blockchain domains",
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
          body {
            font-family: Overpass;
          }
        `}
      />
      {children}
    </>
  )
}
