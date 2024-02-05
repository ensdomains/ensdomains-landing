import React from "react"
import styled from "@emotion/styled"

const IconBase = styled("svg")`
  path {
    opacity: 0.7;
    transition: 0.2s;
  }

  &:hover path {
    opacity: 1;
  }
  ${p =>
    p.active &&
    `
    g {
      opacity: 1
    }
  `}
`

export default function Icon({ active, children, className, width, height }) {
  return (
    <IconBase
      active={active}
      className={className}
      width={width}
      height={height}
    >
      {children}
    </IconBase>
  )
}
