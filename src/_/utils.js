/* eslint-disable sonarjs/cognitive-complexity */

export function modulate(value, rangeA, rangeB, limit) {
  if (limit == undefined) {
    limit = false
  }

  const [fromLow, fromHigh] = rangeA
  const [toLow, toHigh] = rangeB
  const result
        = toLow + ((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow)

  if (limit === true) {
    if (toLow < toHigh) {
      if (result < toLow) {
        return toLow
      }

      if (result > toHigh) {
        return toHigh
      }
    }
    else {
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

export function isElementInViewport(element) {
  const rect = element.getBoundingClientRect()

  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom
    <= (window.innerHeight
    || document.documentElement
      .clientHeight)
      && /* or $(window).height() */ rect.right
      <= (window.innerWidth
      || document.documentElement.clientWidth) /* or $(window).width() */
  )
}

export const importAll = (r, extraData = {}) =>
  r.keys().map((item) => {
    const fileName = item
      .replace(/\.(png|jpe?g|svg)$/, '')
      .replace('./', '')
    const parsed = item
      .replace(/\.(png|jpe?g|svg)$/, '')
      .replace(/([A-Z])/g, ' $1')
      .replace('./', '')
    const object = {
      fileName: fileName,
      name: parsed,
      src: r(item),
    }

    return {
      ...object,
      ...extraData[parsed],
    }
  })

export const loadIntegrations = async () => {
  const response = await fetch(
    'https://raw.githubusercontent.com/ensdomains/integrations/main/links.json',
  )

  return await response.json()
}
