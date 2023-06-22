import React from 'react'
import { PlusCircleSVG, FastForwardSVG, FlameSVG, MoonSVG, HeartSVG, EthSVG, NametagSVG, GasPumpSVG, PersonSVG  } from '@ensdomains/thorin_next'

const DYNAMIC_ICONS = {
  PlusCircle: PlusCircleSVG,
  FastForward: FastForwardSVG,
  Flame: FlameSVG,
  Moon: MoonSVG,
  Heart: HeartSVG,
  Eth: EthSVG,
  Nametag: NametagSVG,
  GasPump: GasPumpSVG,
  Person: PersonSVG,
}

export default function DynamicThorinIcon({ icon }) {
  const Icon = DYNAMIC_ICONS[icon]
  if (!Icon) return null
  return <Icon />
}
