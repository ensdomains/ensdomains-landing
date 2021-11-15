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
            content: "Your web3 username, a name for all your cryptocurrency addresses, and decentralised websites."
          },
          {
            name: "keywords",
            content: "ENS, Ethereum, Ethereum Name Service, .eth domains, blockchain domains"
          },
          {
            name: "twitter:card",
            content: "summary"
          },
          {
            name: "twitter:title",
            content: "Ethereum Name Service"
          },
          {
            property: "og:image",
            content: `https://ens.domains${twitter}`
          }
        ]}
        title={getTitle(location.pathname)}
        link={[
          { rel: "shortcut icon", type: "image/x-icon", href: `${favicon}` }
        ]}
      />
      <Global
        styles={css`
          @font-face {
            font-family: "JakartaSans";
            src: url("../assets/webfonts/PlusJakartaSans-Regular.woff2") format("woff2"),
            url("../assets/webfonts/PlusJakartaSans-Regular.woff") format("woff");
            font-weight: normal;
          }

          @font-face {
            font-family: "JakartaSans";
            src: url("../assets/webfonts/PlusJakartaSans-Bold.woff2") format("woff2"),
            url("../assets/webfonts/PlusJakartaSans-Bold.woff") format("woff");
            font-weight: bold;
          }

          body {
            font-family: Overpass;
          }
        `}
      />
      {children}
    </>
  )
}
