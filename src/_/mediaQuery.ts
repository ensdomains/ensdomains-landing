/* eslint-disable sonarjs/no-nested-template-literals */
import css from 'styled-jsx/css'

const breakpoints = {
  // Numerical values will result in a min-width query
  xs: 400,
  small: 576,
  medium: 768,
  large: 992,
  xLarge: 1200,
  // String values will be used as is
  tallPhone: '(max-width: 360px) and (min-height: 740px)',
} as const

const mq = Object.fromEntries(
  Object.keys(breakpoints).map((label) => {
    const prefix = typeof breakpoints[label] === 'string' ? '' : 'min-width:'
    const suffix = typeof breakpoints[label] === 'string' ? '' : 'px'

    return [
      label,
      cls =>
        css`
                    @media (${prefix + breakpoints[label] + suffix}) {
                        ${css`
                            ${cls};
                        `};
                    }
                `,
    ]
  }),
)

export default mq
