/** biome-ignore-all lint/nursery/useUniqueElementIds: <explanation> */

import { Fragment, useId } from 'react'
import { generateMotionTiming, randomMaxMin } from '~/utils/svgAnimationUtils'

type Path = {
  path: string
  color: string
}

const PATHS: Path[] = [
  {
    path: 'M1911.64 214.587H1649.13C1430.33 214.587 1385 390.236 1235.91 366.661C1086.83 343.086 1061.04 67.9014 878.718 112.342C696.399 156.782 894.531 524.181 415.013 532.981',
    color: 'ens-green',
  },
  {
    path: 'M2063.15 311.462L1649.13 311.461C1431.72 311.461 1267.29 483.454 1080.11 453.856C892.925 424.258 1001.04 211.752 741.048 184.575C481.057 157.399 591.751 539.216 236.415 392.696',
    color: 'ens-blue',
  },
  {
    path: 'M1940.05 408.017L1649.13 408.016C1377.77 408.016 1368 743.901 1116.38 725.861C864.765 707.821 888.95 209.3 636.866 318.421C384.782 427.541 335.481 638.741 45.2588 459.661',
    color: 'ens-magenta',
  },
  {
    path: 'M2034.74 505.256L1649.14 505.256C1424.75 505.256 1379.63 325.021 1182.89 170.141C986.157 15.2613 942.903 705.017 712.213 604.862C481.523 504.707 730.352 2.94119 166.185 48.7012',
    color: 'ens-green',
  },
  {
    path: 'M1986.95 602.495L1649.14 602.496C1510.33 602.496 1451.05 469.066 1316.38 538.861C1181.71 608.656 1151.58 654.746 908.486 538.861C665.393 422.976 502.918 527.421 433.153 907.581',
    color: 'ens-blue',
  },
  {
    path: 'M1849.33 699.599L1649.13 699.599C1468.47 699.599 1386.14 468.902 1216.38 533.142C1046.62 597.382 901.973 902.302 635.936 832.342C369.899 762.382 404.781 475.502 197.347 646.799',
    color: 'ens-magenta',
  },
]

const HeaderGraphicsPath = ({ path, color }: Path) => {
  const id = useId()

  const timing = generateMotionTiming({
    minDuration: 6 * 1,
    maxDuration: 7 * 1,
    reverse: true,
  })

  return (
    <>
      <g style={{ mixBlendMode: 'darken' }} opacity="0.8">
        <mask id={`${id}-mask`} maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <path d={path} stroke="black" strokeWidth="2" strokeLinecap="round" />
        </mask>
        <path
          d={path}
          stroke={`var(--color-${color})`}
          strokeWidth="90"
          strokeLinecap="round"
          mask={`url(#${id}-mask)`}
        />
      </g>
      <rect
        y="-20"
        x="-20"
        width="40"
        height="40"
        fill="var(--color-ens-white)"
      >
        <animateMotion
          begin={`${randomMaxMin(2)}s`}
          dur={`${timing.duration}s`}
          repeatCount="indefinite"
          keyPoints={timing.keyPoints}
          keyTimes={timing.keyTimes}
          path={Array.from({ length: 1 }, () => path).join(' ')}
          rotate="auto"
        />
      </rect>
      <rect
        y="-20"
        x="-20"
        width="40"
        height="40"
        fill="var(--color-ens-white)"
        rx="4"
      >
        <animateMotion
          begin={`${randomMaxMin(4, 1.5)}s`}
          dur={`${timing.duration}s`}
          repeatCount="indefinite"
          keyPoints={timing.keyPoints}
          keyTimes={timing.keyTimes}
          path={Array.from({ length: 1 }, () => path).join(' ')}
          rotate="auto"
        />
      </rect>
    </>
  )
}

export const HeaderGraphics = () => {
  return (
    <svg
      width="2109"
      height="953"
      viewBox="0 0 2109 953"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      className="absolute top-0 right-0 h-full object-cover object-right"
    >
      {PATHS.map((path, index) => (
        <HeaderGraphicsPath
          // biome-ignore lint/suspicious/noArrayIndexKey: PATHS is a constant making index stable
          key={index}
          {...path}
        />
      ))}
    </svg>
  )
}
