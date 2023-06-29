import React from "react"
import {
  BrowserSVG,
  CheckCircleSVG,
  CogSVG,
  EthSVG,
  FastForwardSVG,
  FlameSVG,
  GasPumpSVG,
  HeartSVG,
  KeySVG,
  MoonSVG,
  NametagSVG,
  PersonSVG,
  PlusCircleSVG,
  SpannerAltSVG,
  UpCircleSVG,
} from "@ensdomains/thorin_next"

const DYNAMIC_ICONS = {
  Browser: BrowserSVG,
  CheckCircle: CheckCircleSVG,
  Cog: CogSVG,
  Eth: EthSVG,
  FastForward: FastForwardSVG,
  Flame: FlameSVG,
  GasPump: GasPumpSVG,
  Heart: HeartSVG,
  Key: KeySVG,
  Moon: MoonSVG,
  Nametag: NametagSVG,
  Person: PersonSVG,
  PlusCircle: PlusCircleSVG,
  SpannerAlt: SpannerAltSVG,
  UpCircle: UpCircleSVG,
}

export default function DynamicThorinIcon({ icon }) {
  const Icon = DYNAMIC_ICONS[icon]
  if (!Icon) return null
  return <Icon />
}
