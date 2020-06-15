import React from "react"
import styled from "@emotion/styled"

const HeroContainer = styled("div")`
  background: green;
`

const links = [
  {
    text: "Subscribe to our mailing list",
    cta: "Subscribe",
    link: "",
  },
  {
    text: "Join our Gitter community",
    cta: "Join Gitter",
    link: "",
  },
  {
    text: "Discuss on our forum",
    cta: "Discuss",
    link: "",
  },
  {
    text: "Read our documentation",
    cta: "Read Docs",
    link: "",
  },
]

const ExternalLink = styled("a")``

export default function GetInvolved(props) {
  return (
    <HeroContainer>
      {links.map(l => (
        <>
          <h3>{l.text}</h3>
          <ExternalLink href={l.link}>{l.cta}</ExternalLink>
        </>
      ))}
    </HeroContainer>
  )
}
