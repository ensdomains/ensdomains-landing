import React from 'react'

import ContractCard from './ContractCard'
import SubflowActionHorizontal from "./SubflowActionHorizontal"

export default function SubFlowItem({ type, idx, ...props }) {
  if (type === 'action' && idx === 1) return <SubflowActionHorizontal {...props}/>
  if (type === 'contract') return <ContractCard {...props}/>
  return null
}