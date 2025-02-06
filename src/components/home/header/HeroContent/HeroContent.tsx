import { CSSProperties, SVGProps, useId } from 'react'
import { ExternalLink } from 'react-external-link'
import type { Color } from '~/utils/types'
import { generateMotionTiming } from '~/utils/svgAnimationUtils'
import styles from './HeroContent.module.css'

const HeroEnsLink = ({
  name,
  bgColor,
  color,
  style,
}: {
  name: `${string}.eth`
  bgColor: Color
  color: Color
  style?: CSSProperties
}) => (
  <ExternalLink
    href={`https://app.ens.domains/${name}`}
    className={styles['header-ens-link']}
    style={
      {
        '--bg-color': `var(--${bgColor})`,
        '--color': `var(--${color})`,
        ...(style || {}),
      } as CSSProperties
    }
  >
    {name}
  </ExternalLink>
)

const BGPattern = (props: SVGProps<SVGPatternElement>) => (
  <pattern id="bg-pattern" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse" {...props}>
    <rect x="-1" y="1" width="1" height="1" transform="rotate(-45 0 0)" opacity="0.8" />
  </pattern>
)

const SquareAnimation = ({ bgColor, color, ...props }: SVGProps<SVGSVGElement> & { bgColor: Color, color: Color }) => {
  const timing = generateMotionTiming({
    minDuration: 12,
    maxDuration: 16,
    pausePoints: {
      amount: 5,
      duration: 0.3,
    },
  })
  const id = useId()

  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <clipPath id={`${id}-clip-overflow`}>
          <rect width="200" height="200" rx="2" fill="white" />
        </clipPath>
        <BGPattern fill={`var(--${bgColor})`} id={`${id}-bg-pattern`} />
      </defs>

      <g clipPath={`url(#${id}-clip-overflow)`}>
        <rect width="200" height="200" fill="#F6F6F6" />
        <rect width="200" height="200" fill={`url(#${id}-bg-pattern)`} />
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

const RectangleAnimation = ({ bgColor, color, width = 400, ...props }: SVGProps<SVGSVGElement> & { bgColor: Color, color: Color, width: number }) => {
  const timing = generateMotionTiming({
    minDuration: 10 + (width / 400) * 6, // Adjust duration based on width to maintain relative speed
    maxDuration: 15 + (width / 400) * 6,
    pausePoints: {
      amount: 5,
      duration: 0.3,
    },
  })
  const cubeSize = 33
  const id = useId()

  return (
    <svg viewBox={`0 0 ${width} 100`} fill="none" xmlns="http://www.w3.org/2000/svg" width={width} {...props}>
      <defs>
        <clipPath id={`${id}-clip-overflow`}>
          <rect width={width} height="100" rx="2" fill="white" />
        </clipPath>
        <BGPattern fill={`var(--${bgColor})`} id={`${id}-bg-pattern`} />
      </defs>

      <g clipPath={`url(#${id}-clip-overflow)`}>
        <rect width={width} height="100" fill="#F6F6F6" />
        <rect width={width} height="100" fill={`url(#${id}-bg-pattern)`} />
        <path d={`M0 46H${width}`} stroke={`var(--${color})`} strokeWidth="58" />
        <path d={`M0 46H${width}`} stroke="#F6F6F6" strokeWidth="2" />
        <rect x={width} y={cubeSize - 4} width={cubeSize} height={cubeSize} rx="2" fill="#F6F6F6">
          <animateMotion
            begin={`${Math.random() * 3}s`}
            dur={`${timing.duration}s`}
            repeatCount="indefinite"
            keyPoints={timing.keyPoints}
            keyTimes={timing.keyTimes}
            path={Array.from({ length: 5 }, () => `M0,0 H-${width + cubeSize}`).join(' ')}
          />
        </rect>
      </g>
    </svg>
  )
}

const CornerAnimation = ({ bgColor, color, ...props }: SVGProps<SVGSVGElement> & { bgColor: Color, color: Color }) => {
  const timing = generateMotionTiming({
    minDuration: 14,
    maxDuration: 18,
    pausePoints: {
      amount: 5,
      duration: 0.3,
    },
  })
  const id = useId()

  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <defs>
        <clipPath id={`${id}-clip-overflow`}>
          <rect width="200" height="200" rx="2" fill="white" />
        </clipPath>
        <BGPattern fill={`var(--${bgColor})`} id={`${id}-bg-pattern`} />
      </defs>

      <g clipPath={`url(#${id}-clip-overflow)`}>
        <rect width="200" height="200" fill="#F6F6F6" />
        <rect width="200" height="200" fill={`url(#${id}-bg-pattern)`} />
        <path d="M0 46H133C144.598 46 154 55.402 154 67V200" stroke={`var(--${color})`} strokeWidth="58" />
        <path d="M0 46H133C144.598 46 154 55.402 154 67V200" stroke="#F6F6F6" strokeWidth="2" />
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
            path={Array.from({ length: 5 }, () => `M154 217 V67 C154 55 145 46 133 46 H-17`).join(' ')}
            rotate="auto"
          />
        </rect>
      </g>
    </svg>
  )
}

export const HeroContent = () => (
  <div className={styles['hero-wrapper']}>
    <div className={styles['hero-content']}>
      <SquareAnimation className={styles['anim-position']} width="200" bgColor="ens-green" color="ens-light-green" />
      <CornerAnimation className={styles['anim-position']} width="200" bgColor="ens-blue" color="ens-blue" />
      <RectangleAnimation className={styles['anim-position']} width={400} bgColor="ens-blue" color="ens-light-blue" />
      <CornerAnimation className={styles['anim-position']} width="200" bgColor="ens-magenta" color="ens-magenta" transform="rotate(180)" />
      <RectangleAnimation className={styles['anim-position']} width={222} bgColor="ens-magenta" color="ens-light-magenta" transform="rotate(45)" />
      <HeroEnsLink
        name="uni.eth"
        color="ens-magenta"
        bgColor="ens-light-magenta"
      />
      <HeroEnsLink
        name="base.eth"
        color="ens-dark-brown"
        bgColor="ens-light-yellow"
      />
      <HeroEnsLink
        name="dao.eth"
        color="ens-white"
        bgColor="ens-green"
      />
      <HeroEnsLink
        name="nba.eth"
        color="ens-blue"
        bgColor="ens-light-blue"
      />
      <HeroEnsLink
        name="linea.eth"
        color="ens-green"
        bgColor="ens-light-green"
      />
      <HeroEnsLink
        name="vitalik.eth"
        bgColor="ens-magenta"
        color="ens-light-magenta"
      />
    </div>
  </div>
)
