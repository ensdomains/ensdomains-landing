import type { CSSProperties } from 'react'
import { ExternalLink } from 'react-external-link'
import {
  CornerAnimation,
  RectangleAnimation,
  SquareAnimation,
} from '~/components/shared/animations/AnimatedShapes/AnimatedShapes'
import type { Color } from '~/utils/types'
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

export const HeroContent = () => (
  <div className={styles['hero-wrapper']}>
    <div className={styles['hero-content']}>
      <SquareAnimation
        className={styles['anim-position']}
        width="200"
        bgColor="ens-green"
        color="ens-light-green"
      />
      <CornerAnimation
        className={styles['anim-position']}
        width="200"
        bgColor="ens-blue"
        color="ens-blue"
      />
      <RectangleAnimation
        className={styles['anim-position']}
        width={400}
        bgColor="ens-blue"
        color="ens-light-blue"
      />
      <CornerAnimation
        className={styles['anim-position']}
        width="200"
        bgColor="ens-magenta"
        color="ens-magenta"
        transform="rotate(180)"
      />
      <RectangleAnimation
        className={styles['anim-position']}
        width={222}
        bgColor="ens-magenta"
        color="ens-light-magenta"
        transform="rotate(45)"
      />
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
      <HeroEnsLink name="dao.eth" color="ens-white" bgColor="ens-green" />
      <HeroEnsLink name="nba.eth" color="ens-blue" bgColor="ens-light-blue" />
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
