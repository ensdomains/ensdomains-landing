/** biome-ignore-all lint/nursery/useUniqueElementIds: Used for svg patterns */
import type { SVGProps } from 'react'
import { generateMotionTiming } from '~/utils/svgAnimationUtils'
import type { Color } from '~/utils/types'

// BGPattern component used in all animations
const BGPattern = (props: SVGProps<SVGPatternElement>) => (
  <pattern
    id="bg-pattern"
    x="0"
    y="0"
    width="6"
    height="6"
    patternUnits="userSpaceOnUse"
    {...props}
  >
    <rect
      x="-1"
      y="1"
      width="1"
      height="1"
      transform="rotate(-45 0 0)"
      opacity="0.8"
    />
  </pattern>
)

// SquareAnimation Component
export type SquareAnimationProps = SVGProps<SVGSVGElement> & {
  bgColor: Color
  color: Color
  noBackground?: boolean
}

export const SquareAnimation = ({
  bgColor,
  color,
  noBackground = false,
  ...props
}: SquareAnimationProps) => {
  const timing = generateMotionTiming({
    minDuration: 12,
    maxDuration: 16,
    pausePoints: {
      amount: 5,
      duration: 0.3,
    },
  })
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      {...props}
    >
      <defs>
        <clipPath id="clip-overflow-200x200">
          <rect width="200" height="200" rx="2" fill="white" />
        </clipPath>
        {!noBackground && (
          <BGPattern fill={`var(--${bgColor})`} id={`bg-pattern-${bgColor}`} />
        )}
      </defs>
      <g clipPath="url(#clip-overflow-200x200)">
        {!noBackground && (
          <>
            <rect width="200" height="200" fill="#F6F6F6" />
            <rect
              width="200"
              height="200"
              fill={`url(#bg-pattern-${bgColor})`}
            />
          </>
        )}
        <path d="M0 46H200" stroke={`var(--${color})`} strokeWidth="58" />
        <path d="M0 46H200" stroke="#F6F6F6" strokeWidth="2" />
        <rect x="200" y="29" width="33" height="33" rx="2" fill="#F6F6F6">
          <animateMotion
            begin={`${Math.random() * 3}s`}
            dur={`${timing.duration}s`}
            repeatCount="indefinite"
            keyPoints={timing.keyPoints}
            keyTimes={timing.keyTimes}
            path={Array.from({ length: 5 }, () => `M-233,0 H0`).join(' ')}
          />
        </rect>
      </g>
    </svg>
  )
}

// RectangleAnimation Component
export type RectangleAnimationProps = SVGProps<SVGSVGElement> & {
  bgColor: Color
  color: Color
  width?: number
  height?: number
  noBackground?: boolean
}

export const RectangleAnimation = ({
  bgColor,
  color,
  width = 400,
  noBackground = false,
  ...props
}: RectangleAnimationProps) => {
  const timing = generateMotionTiming({
    minDuration: 10 + (width / 400) * 6,
    maxDuration: 15 + (width / 400) * 6,
    pausePoints: {
      amount: 5,
      duration: 0.3,
    },
  })
  const cubeSize = 33

  return (
    <svg
      viewBox={`0 0 ${width} ${noBackground ? 58 : 100}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      role="presentation"
      {...props}
    >
      <defs>
        <clipPath id={`clip-overflow-${width}x100`}>
          <rect width={width} height="100" rx="2" fill="white" />
        </clipPath>
        {!noBackground && (
          <BGPattern fill={`var(--${bgColor})`} id={`bg-pattern-${bgColor}`} />
        )}
      </defs>
      <g clipPath={`url(#clip-overflow-${width}x100)`}>
        {!noBackground && (
          <>
            <rect width={width} height="100" fill="#F6F6F6" />
            <rect
              width={width}
              height="100"
              fill={`url(#bg-pattern-${bgColor})`}
            />
          </>
        )}
        <path
          d={`M0 ${noBackground ? 29 : 46}H${width}`}
          stroke={`var(--${color})`}
          strokeWidth="58"
        />
        <path
          d={`M0 ${noBackground ? 29 : 46}H${width}`}
          stroke="#F6F6F6"
          strokeWidth="2"
        />
        <rect
          x={width}
          y={noBackground ? cubeSize / 2 - 4 : cubeSize - 4}
          width={cubeSize}
          height={cubeSize}
          rx="2"
          fill="#F6F6F6"
        >
          <animateMotion
            begin={`${Math.random() * 3}s`}
            dur={`${timing.duration}s`}
            repeatCount="indefinite"
            keyPoints={timing.keyPoints}
            keyTimes={timing.keyTimes}
            path={Array.from(
              { length: 5 },
              () => `M0,0 H-${width + cubeSize}`,
            ).join(' ')}
          />
        </rect>
      </g>
    </svg>
  )
}

// CornerAnimation Component
export type CornerAnimationProps = SVGProps<SVGSVGElement> & {
  bgColor: Color
  color: Color
  noBackground?: boolean
}

export const CornerAnimation = ({
  bgColor,
  color,
  noBackground = false,
  ...props
}: CornerAnimationProps) => {
  const timing = generateMotionTiming({
    minDuration: 14,
    maxDuration: 18,
    pausePoints: {
      amount: 5,
      duration: 0.3,
    },
  })

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      {...props}
    >
      <defs>
        <clipPath id="clip-overflow-200x200">
          <rect width="200" height="200" rx="2" fill="white" />
        </clipPath>
        {!noBackground && (
          <BGPattern fill={`var(--${bgColor})`} id={`bg-pattern-${bgColor}`} />
        )}
      </defs>
      <g clipPath="url(#clip-overflow-200x200)">
        {!noBackground && (
          <>
            <rect width="200" height="200" fill="#F6F6F6" />
            <rect
              width="200"
              height="200"
              fill={`url(#bg-pattern-${bgColor})`}
            />
          </>
        )}
        <path
          d="M0 46H133C144.598 46 154 55.402 154 67V200"
          stroke={`var(--${color})`}
          strokeWidth="58"
        />
        <path
          d="M0 46H133C144.598 46 154 55.402 154 67V200"
          stroke="#F6F6F6"
          strokeWidth="2"
        />
        <rect
          width="33"
          height="33"
          rx="2"
          fill="#F6F6F6"
          transform="translate(-16.5, -16.5)"
        >
          <animateMotion
            begin={`${Math.random() * 3}s`}
            dur={`${timing.duration}s`}
            repeatCount="indefinite"
            keyPoints={timing.keyPoints}
            keyTimes={timing.keyTimes}
            path={Array.from(
              { length: 5 },
              () => `M154 217 V67 C154 55 145 46 133 46 H-17`,
            ).join(' ')}
            rotate="auto"
          />
        </rect>
      </g>
    </svg>
  )
}
