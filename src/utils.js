import React from "react"
import styled from "@emotion/styled"

export function modulate(value, rangeA, rangeB, limit) {
  let fromHigh, fromLow, result, toHigh, toLow
  if (limit == null) {
    limit = false
  }
  fromLow = rangeA[0]
  fromHigh = rangeA[1]
  toLow = rangeB[0]
  toHigh = rangeB[1]
  result = toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow)
  if (limit === true) {
    if (toLow < toHigh) {
      if (result < toLow) {
        return toLow
      }
      if (result > toHigh) {
        return toHigh
      }
    } else {
      if (result > toLow) {
        return toLow
      }
      if (result < toHigh) {
        return toHigh
      }
    }
  }
  return result
}

export function isElementInViewport(el) {
  var rect = el.getBoundingClientRect()

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  )
}

export const importAll = (r, extraData = {}) =>
  r.keys().map(item => {
    let fileName = item.replace(/\.(png|jpe?g|svg)$/, "").replace("./", "")
    let parsed = item
      .replace(/\.(png|jpe?g|svg)$/, "")
      .replace(/([A-Z])/g, " $1")
      .replace("./", "")
    let obj = {
      fileName: fileName,
      name: parsed,
      src: r(item),
    }

    return {
      ...obj,
      ...extraData[parsed],
    }
  })

export const Gap = styled('div')`
  width: 100%;
  height: ${p => p.size * 4}px;
`
