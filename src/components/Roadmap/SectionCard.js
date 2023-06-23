import React from 'react'
import styled, { css } from 'styled-components'

import { Card, DownChevronSVG, Typography, mq } from '@ensdomains/thorin_next'

import SectionItem from './SectionItem'

const DISPLAY_INTERVAL = 3

const StyledCard = styled(Card)(
  () => css`
    width: 100%;
    display: block;
  `,
)

const ContentWrapper = styled.div(({ theme }) => [
  css`
    margin: -${theme.space['4']};
    display: flex;
    flex-direction: column;
  `,
  mq.sm.min(css`
    margin: -${theme.space['6']};
  `),
])

const Content = styled.div(({ theme }) => [
  css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space['6']};
    padding: ${theme.space['8']} ${theme.space['6']};
  `,
  mq.sm.min(css`
    gap: ${theme.space['8']};
    padding: ${theme.space['8']};
  `),
])

const RotatableIcon = styled(DownChevronSVG)(
  ({ $direction }) => css`
    transform: rotate(0deg);
    transition: transform 0.3s ease-in-out;
    ${$direction === 'less' && `transform: rotate(180deg);`}
  `,
)

const DisplayMore = styled.div(({ theme }) => [
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${theme.space['2']};
    border-top: 1px solid ${theme.colors.border};
    padding: ${theme.space['2']};
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
  `,
  mq.sm.min(css``),
])

export default function SectionCard({ title, description, color = 'blue', items = [], expandable = false }) {
  const [expanded, setExpanded] = React.useState(false)
  const displayedItems = React.useMemo(() => {
    if (!expandable) return items
    if (expanded) return items
    return items.slice(0, DISPLAY_INTERVAL)
  }, [items, expanded, expandable])
  const showShowMore = expandable && items.length > DISPLAY_INTERVAL
  const expandDirection = displayedItems.length < items.length ? 'more' : 'less'
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
          {displayedItems.map((props) => (
            <SectionItem color={color} {...props} />
          ))}
        </Content>
        {showShowMore && (
          <DisplayMore
            $color={color}
            onClick={() => {
              if (expandDirection === 'more')
                return setExpanded(true)
              setExpanded(false)
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
