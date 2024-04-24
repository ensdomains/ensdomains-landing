import React from "react"

import FlowUser from "./FlowUser"
import FlowAction from "./FlowAction"
import FlowSubflow from "./FlowSubflow"

export default function FlowItem({ type, ...other }) {
  if (type === 'user') return <FlowUser/>
  if (type === 'action') return <FlowAction {...other}/>
  if (type === 'subflow') return <FlowSubflow {...other}/>
  throw new Error(`FlowItem: Invalid type ${type}`)
}