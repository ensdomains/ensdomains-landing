import React from "react"
import styled, { css } from "styled-components"

import { Card, DownChevronSVG, Typography, mq } from "@ensdomains/thorin_next"

import SectionItem from "./SectionItem"
import useTransition from "react-transition-state"

const DISPLAY_INTERVAL = 3

const StyledCard = styled(Card)(
  () => css`
    width: 100%;
    display: block;
  `
)

const ContentWrapper = styled.div(({ theme }) => [
  css`
    margin: -${theme.space["4"]};
    display: flex;
    flex-direction: column;
  `,
  mq.sm.min(css`
    margin: -${theme.space["6"]};
  `),
])

const Content = styled.div(({ theme }) => [
  css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["6"]};
    padding: ${theme.space["8"]} ${theme.space["6"]};
  `,
  mq.sm.min(css`
    gap: ${theme.space["8"]};
    padding: ${theme.space["8"]};
  `),
])

const RotatableIcon = styled(DownChevronSVG)(
  ({ $direction }) => css`
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out;
    ${$direction === "less" && `transform: rotate(180deg);`}
  `
)

const ListWrapper = styled.div(() => css`
  overflow: hidden;
  transition: height 0.3s ease-in-out;
`)

const List = styled.div(({theme}) => [
  css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space["6"]};
  `,
  mq.sm.min(css`
    gap: ${theme.space["8"]};
  `),
])

const DisplayMore = styled.div(
  ({ theme }) =>
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: ${theme.space["2"]};
      border-top: 1px solid ${theme.colors.border};
      padding: ${theme.space["2"]};
      color: ${theme.colors.bluePrimary};
      cursor: pointer;
      transition: all 0.3s ease-in-out;

      svg {
        width: 12px;
        height: 12px;
      }

      :hover {
        transform: translateY(-1px);
        color: ${theme.colors.blueActive};
      }
    `
)

export default function SectionCard({
  title,
  description,
  color = "blue",
  items = [],
  expandable = false,
}) {
  const [expanded, setExpanded] = React.useState(false)
  const displayedItems = React.useMemo(() => {
    if (!expandable) return items
    if (expanded) return items
    return items.slice(0, DISPLAY_INTERVAL)
  }, [items, expanded, expandable])
  const showShowMore = expandable && items.length > DISPLAY_INTERVAL
  const expandDirection = displayedItems.length < items.length ? "more" : "less"
  
  // Smooth expand/collapse
  const contentRef = React.useRef(null)
  const [height, setHeight] = React.useState(undefined)
  const [state, toggle] = useTransition({
    timeout: 500,
    preEnter: true,
    preExit: true,
  })
  React.useEffect(() => {
    if (['preEnter', 'preExit'].includes(state)) {
      const startingHeight = contentRef.current.getBoundingClientRect().height
      setHeight(startingHeight)
      setExpanded(state === 'preEnter')
    }
    if (['entering', 'exiting'].includes(state)) {
      const endingHeight = contentRef.current.getBoundingClientRect().height
      setHeight(endingHeight)
    }
    if (['entered', 'exited'].includes(state)) {
      setHeight(undefined)
    }
  }, [state, setHeight])

  return (
    <StyledCard>
      <ContentWrapper>
        <Content>
          <div>
            <Typography fontVariant="headingTwo">{title}</Typography>
            <Typography fontVariant="small" color="grey">
              {description}
            </Typography>
          </div>
          <ListWrapper style={{height: height}}>
            <List ref={contentRef}>
              {displayedItems.map(props => (
                <SectionItem key={props.title} color={color} {...props} />
              ))}
            </List>
          </ListWrapper>
        </Content>
        {showShowMore && (
          <DisplayMore
            $color={color}
            onClick={() => {
              toggle()
            }}
          >
            <span>See {expandDirection}</span>
            <RotatableIcon $direction={expandDirection} />
          </DisplayMore>
        )}
      </ContentWrapper>
    </StyledCard>
  )
}
