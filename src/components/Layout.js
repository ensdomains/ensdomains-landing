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
            name: "googlebot",
            content:
              "index, follow",
          },
          {
            name: "robots",
            content:
              "index, follow",
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "twitter:title",
            content: "Ethereum Name Service",
          },
          {
            name: "twitter:site",
            content: "@ensdomains",
          },
          {
            property: "og:description",
            content: "Your web3 username, a readable name for all your cryptocurrency addresses, and decentralised websites.",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:image",
            content: `https://ens.domains/static/twitter-49d4bb2b55c07c5f5900e95860401fd0.png`,
          },
          {
            property: "og:image:alt",
            content: `Ethereum Name Service`,
          },
          {
            property: "og:image:width",
            content: `390px`,
          },
          {
            property: "og:image:height",
            content: `258px`,
          },
          {
            property: "og:site_name",
            content: `Ethereum Name Service`,
          },
          {
            property: "og:title",
            content: `Ethereum Name Service`,
          },
          {
            property: "og:url",
            content: `https://ens.domains`,
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
