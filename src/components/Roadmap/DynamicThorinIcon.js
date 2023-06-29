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
import React from "react"

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
  Browser: BrowserSVG,
  UpCircle: UpCircleSVG,
  CheckCircle: CheckCircleSVG,
  SpannerAlt: SpannerAltSVG,
  Cog: CogSVG,
  Key: KeySVG,
}

export default function DynamicThorinIcon({ icon }) {
  const Icon = DYNAMIC_ICONS[icon]
  if (!Icon) return null
  return <Icon />
}
