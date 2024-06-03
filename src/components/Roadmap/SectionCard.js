import {
    Card,
    DownChevronSVG,
    mq,
    RightArrowSVG,
    Typography,
} from '@ensdomains/thorin_next';
import React from 'react';
import useTransition from 'react-transition-state';
import styled, { css } from 'styled-components';

import AnnouncementBanner from '../AnnouncementBanner';
import SectionItem from './SectionItem';

const DISPLAY_INTERVAL = 3;

const StyledCard = styled(Card)(
    () => css`
        width: 100%;
        display: block;
    `
);

const ContentWrapper = styled.div(({ theme }) => [
    css`
        margin: -${theme.space['4']};
        display: flex;
        flex-direction: column;
    `,
    mq.sm.min(css`
        margin: -${theme.space['6']};
    `),
]);

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
]);

const RotatableIcon = styled(DownChevronSVG)(
    ({ $direction }) => css`
        transform: rotate(0deg);
        transition: transform 0.3s ease-in-out;
        ${$direction === 'less' && 'transform: rotate(180deg);'}
    `
);

const ListWrapper = styled.div(
    () => css`
        overflow: hidden;
        transition: height 0.3s ease-in-out;
    `
);

const List = styled.div(({ theme }) => [
    css`
        display: flex;
        flex-direction: column;
        gap: ${theme.space['6']};
    `,
    mq.sm.min(css`
        gap: ${theme.space['8']};
    `),
]);

const DisplayMore = styled.div(
    ({ theme }) =>
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
        `
);

export default function SectionCard({
    title,
    description,
    color = 'blue',
    items = [],
    expandable = false,
    showAnnouncement = false,
}) {
    const [expanded, setExpanded] = React.useState(false);
    const displayedItems = React.useMemo(() => {
        if (!expandable) return items;

        if (expanded) return items;

        return items.slice(0, DISPLAY_INTERVAL);
    }, [items, expanded, expandable]);
    const showShowMore = expandable && items.length > DISPLAY_INTERVAL;
    const expandDirection =
        displayedItems.length < items.length ? 'more' : 'less';

    // Smooth expand/collapse
    const contentReference = React.useRef(null);
    const [height, setHeight] = React.useState();
    const [state, toggle] = useTransition({
        timeout: 500,
        preEnter: true,
        preExit: true,
    });

    React.useEffect(() => {
        if (['preEnter', 'preExit'].includes(state)) {
            const startingHeight =
                contentReference.current.getBoundingClientRect().height;

            setHeight(startingHeight);
            setExpanded(state === 'preEnter');
        }

        if (['entering', 'exiting'].includes(state)) {
            const endingHeight =
                contentReference.current.getBoundingClientRect().height;

            setHeight(endingHeight);
        }

        if (['entered', 'exited'].includes(state)) {
            setHeight();
        }
    }, [state, setHeight]);

    return (
        <StyledCard>
            <ContentWrapper>
                <Content>
                    <div>
                        <Typography fontVariant="headingTwo">
                            {title}
                        </Typography>
                        <Typography fontVariant="small" color="grey">
                            {description}
                        </Typography>
                    </div>
                    {showAnnouncement && (
                        <AnnouncementBanner
                            title="ENSv2: The Next Generation of ENS"
                            description="Our vision for the next iteration of the ENS protocol, on L2"
                            primaryButton={{
                                label: 'ENSv2 Roadmap',
                                to: '/l2-roadmap',
                                suffix: <RightArrowSVG />,
                            }}
                            secondaryButton={{
                                label: 'Read the announcement',
                                href: 'https://blog.ens.domains/post/ensv2',
                            }}
                            border={false}
                        />
                    )}
                    <ListWrapper style={{ height: height }}>
                        <List ref={contentReference}>
                            {displayedItems.map((properties) => (
                                <SectionItem
                                    key={properties.title}
                                    color={color}
                                    {...properties}
                                />
                            ))}
                        </List>
                    </ListWrapper>
                </Content>
                {showShowMore && (
                    <DisplayMore
                        $color={color}
                        onClick={() => {
                            toggle();
                        }}
                    >
                        <span>See {expandDirection}</span>
                        <RotatableIcon $direction={expandDirection} />
                    </DisplayMore>
                )}
            </ContentWrapper>
        </StyledCard>
    );
}
