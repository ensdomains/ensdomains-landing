import React from "react"

import { Card, Typography } from "@ensdomains/thorin_next"

export default function L2RoadmapIntroCard() {
  return (
    <Card title="ENS Chain Flow Maps">
      <Typography color="greyPrimary" fontVariant="small">
        Use the dropdown below to change which flow you'd like to see. Each contract can be clicked to view more information
      </Typography>
    </Card>
  )
}
