'use client'

import { type CSSProperties, useEffect, useState } from 'react'
import type { BrandColorObject } from '~/utils/types'
import styles from './BrandColor.module.css'

const ColorButton = ({
  color,
  colorName,
}: {
  color: string
  colorName: string
}) => {
  const [isCopied, setIsCopied] = useState(false)

  useEffect(() => {
    if (isCopied) {
      const t = setTimeout(() => {
        setIsCopied(false)
      }, 1000)

      return () => clearTimeout(t)
    }
  }, [isCopied])

  return (
    <button
      type="button"
      onClick={() => {
        navigator.clipboard.writeText(color)

        setIsCopied(true)
      }}
    >
      <span>{colorName}</span>
      <span>{isCopied ? 'Copied' : color}</span>
    </button>
  )
}

export const BrandColor = (color: BrandColorObject) => (
  <div
    className={styles.brandColor}
    style={
      {
        '--color': color.hex,
        color: color.textColor,
        border: color.name === 'White' ? '1px solid var(--ens-gray-2)' : 'none',
      } as CSSProperties
    }
  >
    <div className={styles.colorName}>{color.name}</div>
    <div className={styles.colorList}>
      <ColorButton color={color.hex} colorName="HEX" />
      <ColorButton color={color.RGB} colorName="RGB" />
      <ColorButton color={color.CMYK} colorName="CMYK" />
    </div>
  </div>
)
