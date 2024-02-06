import React from "react"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"
import favicon from "../assets/favicon.ico"
import ogImage from "../../static/og-image.png"

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
    <div style={{ paddingTop: 110 }}>
      <Helmet
        meta={[
          {
            name: "description",
            content:
              "Decentralised naming for the new internet. No more copying and pasting long addresses.",
          },
          {
            name: "keywords",
            content:
              "ENS, Ethereum, Ethereum Name Service, .eth domains, blockchain domains",
          },
          {
            name: "googlebot",
            content: "index, follow",
          },
          {
            name: "robots",
            content: "index, follow",
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
            content:
              "Decentralised naming for the new internet. No more copying and pasting long addresses.",
          },
          {
            property: "og:type",
            content: "website",
          },
          {
            property: "og:image",
            content: ogImage,
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
      >
        <script
          async=""
          defer=""
          data-domain="ens.domains, rollup.ens"
          src="https://plausible.io/js/script.outbound-links.js"
        ></script>
      </Helmet>
      <Global
        styles={css`
          html,
          body,
          #___gatsby,
          #gatsby-focus-wrapper {
            height: ${location?.pathname === "/governance"
              ? "100%"
              : "initial"};
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
    </div>
  )
}
