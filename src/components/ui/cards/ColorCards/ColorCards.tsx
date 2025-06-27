'use client'
import { clsx } from 'clsx'
import {
  type CSSProperties,
  type FC,
  type Ref,
  type SVGProps,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react'
import { ExternalLink } from 'react-external-link'
import ui from '~/styles/ui.module.css'
import type { Color } from '~/utils/types'
import styles from './ColorCards.module.css'

const getSquareVars = (color: Color): CSSProperties | undefined => {
  switch (color) {
    case 'ens-green':
      return {
        '--img': 'url("/assets/cards/green-normal.svg")',
        '--img-hover': 'url("/assets/cards/green-hover.svg")',
      } as CSSProperties
    case 'ens-blue':
      return {
        '--img': 'url("/assets/cards/blue-normal.svg")',
        '--img-hover': 'url("/assets/cards/blue-hover.svg")',
      } as CSSProperties
    case 'ens-magenta':
      return {
        '--img': 'url("/assets/cards/pink-normal.svg")',
        '--img-hover': 'url("/assets/cards/pink-hover.svg")',
      } as CSSProperties
  }
}

const CurvedPathAnimation: FC<{
  width: number
  anim?: SVGProps<SVGAnimateMotionElement>
  flip?: boolean
}> = ({ width, anim = undefined, flip = false }) => {
  const isSmallScreen = width <= 834

  // Extract constants to make the component more maintainable
  const DIMENSIONS = {
    bottomBuffer: 14,
    curveRadius: isSmallScreen ? 30 : 40,
    cubeSize: isSmallScreen ? 25 : 33,
  }

  const sectionHeight = DIMENSIONS.bottomBuffer + DIMENSIONS.curveRadius * 2

  // Memoize the path calculation to avoid recalculating on every render
  const path = useMemo(() => {
    const r = DIMENSIONS.curveRadius
    return `M${r} ${sectionHeight}
      V${r * 2}
      C${r} ${r * 1.45}
       ${r * 1.45} ${r}
       ${r * 2} ${r}
      H${width - r * 2}
      C${width - r * 1.45} ${r}
       ${width - r} ${r * 1.45}
       ${width - r} ${r * 2}
      V${sectionHeight}`
  }, [width, sectionHeight, DIMENSIONS.curveRadius])

  return (
    <svg
      className={styles.bgGraphic}
      viewBox={`0 0 ${width} ${sectionHeight}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform={flip ? 'scale(-1, -1)' : undefined}
      role="presentation"
    >
      <path
        d={path}
        stroke="#E5E5E5"
        strokeWidth={DIMENSIONS.curveRadius * 2}
      />
      <path d={path} stroke="#F6F6F6" strokeWidth={2} />
      <rect
        x={-DIMENSIONS.cubeSize / 2}
        y={-DIMENSIONS.cubeSize / 2}
        width={DIMENSIONS.cubeSize}
        height={DIMENSIONS.cubeSize}
        fill="#F6F6F6"
      >
        <animateMotion path={path} dur="6s" rotate="auto" {...anim} />
      </rect>
    </svg>
  )
}

type ColorCardsProps = {
  cards: { title: string; description: string; color: Color; link: string }[]
}

export const ColorCards = ({
  cards,
  ref,
}: ColorCardsProps & { ref?: Ref<HTMLDivElement> }) => {
  return (
    <div className={styles.grid} ref={ref}>
      {cards.map(({ title, description, color, link }) => (
        <ExternalLink
          href={link}
          key={title}
          className={clsx(ui.flex, ui['flex-col'], styles.card)}
          style={
            {
              '--bg': `var(--${color})`,
              '--bg-hover': `var(--${color.replace('ens-', 'ens-hover-')})`,
            } as CSSProperties
          }
        >
          <div className={styles.title}>{title}</div>
          <div className={styles.text}>{description}</div>
          <div className={styles.box} style={getSquareVars(color)} />
        </ExternalLink>
      ))}
    </div>
  )
}

export const ColorCardsWithPath = (props: ColorCardsProps) => {
  const gridRef = useRef<HTMLDivElement>(null)
  const [dimensions, setDimensions] = useState({ width: 1000, height: 488 })

  useEffect(() => {
    const updateDimensions = () => {
      if (gridRef.current) {
        const newWidth = gridRef.current.offsetWidth
        const newHeight = gridRef.current.offsetHeight

        // We need to run initially once to get the correct width and height
        // eslint-disable-next-line @eslint-react/hooks-extra/no-direct-set-state-in-use-effect
        setDimensions((prev) => {
          if (prev.width !== newWidth || prev.height !== newHeight) {
            return { width: newWidth, height: newHeight }
          }
          return prev
        })
      }
    }

    updateDimensions()
    const resizeObserver = new ResizeObserver(updateDimensions)
    if (gridRef.current) resizeObserver.observe(gridRef.current)
    return () => resizeObserver.disconnect()
  }, [])

  const id = useId()

  return (
    <div className={styles.wrapper}>
      <CurvedPathAnimation
        width={dimensions.width}
        anim={{
          id: `${id}-top`,
          dur: '6s',
          begin: `0s;${id}-top.end+6.75s`,
        }}
      />
      <ColorCards {...props} ref={gridRef} />
      <CurvedPathAnimation
        width={dimensions.width}
        anim={{
          id: `${id}-bottom`,
          begin: `6.5s;${id}-bottom.end+6.75s`,
        }}
        flip
      />
    </div>
  )
}
