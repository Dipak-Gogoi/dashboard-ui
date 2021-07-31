import React from 'react'
import classes from './AllContents.module.css';
import OngoingProjects from './OngoingProjects';
import AllProjects from './AllProjects';
import ProjectStatus from './ProjectStatus';

const AllContents = () => {
    return (
        <div className={classes['container-project']}>
            <OngoingProjects />
            <AllProjects />
            <ProjectStatus />
        </div>
    )
}

export default AllContents;
