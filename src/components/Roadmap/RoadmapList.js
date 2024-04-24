import React from 'react';

import completed from './content/completed.json';
import inProgress from './content/inProgress.json';
import onPause from './content/onPause.json';
import upNext from './content/upNext.json';
import SectionCard from './SectionCard';

export default function RoadmapList() {
    return (
        <React.Fragment>
            {completed.length > 0 && (
                <SectionCard
                    title="Recently completed"
                    description="What we've done that is now live."
                    items={completed}
                    color="green"
                    expandable
                />
            )}
            {inProgress.length > 0 && (
                <SectionCard
                    title="In progress"
                    description="You'll see these soon because we're working on them."
                    items={inProgress}
                    color="blue"
                />
            )}
            {upNext.length > 0 && (
                <SectionCard
                    title="Up next"
                    description="We're going to discuss these next. This list is in no particular order."
                    items={upNext}
                    color="blue"
                />
            )}
            {onPause.length > 0 && (
                <SectionCard
                    title="On pause"
                    description="We began discussing or working on these, but have paused them to focus on other priorities."
                    items={onPause}
                    color="yellow"
                />
            )}
        </React.Fragment>
    );
}
