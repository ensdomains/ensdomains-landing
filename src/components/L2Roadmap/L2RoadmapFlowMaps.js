import { Card, PersonSVG, Select, Typography } from "@ensdomains/thorin_next";
import React from "react";
import styled, { css } from "styled-components";

import resolution from "./content/resolution.json";
import FlowAction from "./FlowAction";
import FlowItem from "./FlowItem";

const FLOW_MAPS = {
  resolution,
}

const SelectCard = styled.div(({ theme }) => css`
  background: ${theme.colors.backgroundSecondary};
  display: flex;
width: ${theme.space.full};
padding: ${theme.space["6"]};
flex-direction: column;
justify-content: center;
align-items: flex-start;
gap: ${theme.space["2"]};
border-radius: ${theme.radii.large};
`);

const FlowMap = styled.div(({ theme }) => css`
  display: flex;
  flex-direction: column;
  gap: ${theme.space["4"]};
  width: 100%;
`);

export default function L2RoadmapFlowMaps() {
  const [flowMapName, setFlowMapName] = React.useState("resolution");
  const flowMap = FLOW_MAPS[flowMapName];
  return <Card > 
    <SelectCard>
      <Typography fontVariant="bodyBold">Select which flow to view</Typography>
    <Select 
      value={flowMapName}
      options={[{
      value: "resolution",
      label: "Default resolution for .eth"
    },
    {
      value: "setRecord",
      label: "Set a record"
    }]} />
    </SelectCard>
    <FlowMap>
    {flowMap.map((action) => <FlowItem {...action}/>)}
    </FlowMap>
  </Card>
}