import {
  BrowserSVG,
  CheckCircleSVG,
  CogSVG,
  DotGridSVG,
  EyeSVG,
  FastForwardSVG,
  FlameSVG,
  GasPumpSVG,
  HeartSVG,
  HorizontalOutwardArrowsSVG,
  KeySVG,
  LinkSVG,
  MoonSVG,
  NametagSVG,
  PersonSVG,
  PersonPlusSVG,
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
  HorizontalOutwardArrows: HorizontalOutwardArrowsSVG,
  Nametag: NametagSVG,
  GasPump: GasPumpSVG,
  Person: PersonSVG,
  PersonPlus: PersonPlusSVG,
  Browser: BrowserSVG,
  UpCircle: UpCircleSVG,
  CheckCircle: CheckCircleSVG,
  SpannerAlt: SpannerAltSVG,
  Cog: CogSVG,
  Key: KeySVG,
  Link: LinkSVG,
  Eye: EyeSVG,
  DotGrid: DotGridSVG,
}

export default function DynamicThorinIcon({ icon }) {
  const Icon = DYNAMIC_ICONS[icon]
  if (!Icon) return null
  return <Icon />
}
