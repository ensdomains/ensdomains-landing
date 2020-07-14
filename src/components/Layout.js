import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import favicon from "../assets/favicon.ico"
import twitter from "../assets/twitter.png"

const Wrapper = styled("div")`
  overflow: hidden;
`

function getTitle(pathname) {
  switch (pathname) {
    case "/":
      return "ENS"
    case "/about":
      return "ENS | About"
    default:
      return "ENS"
  }
}

export default function Layout({ children, data, location }) {
  return (
    <Wrapper>
      <Helmet
        meta={[
          {
            name: "description",
            content: "Human readable names for the Ethereum network",
          },
          {
            name: "keywords",
            content: "ENS, Ethereum, Ethereum Name Service, Names, True Names",
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
    </Wrapper>
  )
}
