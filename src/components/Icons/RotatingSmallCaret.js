import React from "react"
import styled from "@emotion/styled"
import DefaultSmallCaret from "./SmallCaret"

const RotatingSmallCaretSide = styled(DefaultSmallCaret)`
  flex-shrink: 0;
  transform: ${p => (p.rotated ? "rotate(0)" : "rotate(-90deg)")};
  transition: 0.2s;
  path {
    fill: #717171;
  }
`

const RotatingSmallCaretTop = styled(DefaultSmallCaret)`
  path {
    fill: #717171;
  }
  flex-shrink: 0;
  transform: ${p => (p.rotated ? "rotate(-180deg)" : "rotate(0)")};
  transition: 0.2s;
  ${p =>
    p.highlight &&
    p.rotated &&
    `
      path {
        fill: #5284FF;
      }
  `}
`

export default function RotatingSmallCaret({
  start = "right",
  rotated,
  highlight = "false",
  testid,
}) {
  if (start === "right") {
    return (
      <RotatingSmallCaretSide
        rotated={rotated}
        highlight={highlight}
        data-testid={testid}
      />
    )
  } else if (start === "top") {
    return (
      <RotatingSmallCaretTop
        rotated={rotated}
        highlight={highlight}
        data-testid={testid}
      />
    )
  }
}
