import React, { useState } from 'react'
import classes from './AllContents.module.css';
import OngoingProjects from './OngoingProjects';
import AllProjects from './AllProjects';
import ProjectStatus from './ProjectStatus';

const AllContents = (props) => {
    const [openMoreProjects, setOpenMoreProjects] = useState(false);


    const handleClick = () => {
        setOpenMoreProjects(!openMoreProjects);
    }

    return (
        <div className={classes['container-project']}>
            <OngoingProjects handleClick={handleClick} openMoreProjects={openMoreProjects} />
            {openMoreProjects ? '' : <AllProjects />}
            {openMoreProjects ? '' : <ProjectStatus />}
        </div>
    )
}

export default AllContents;
