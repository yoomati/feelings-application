import React from 'react';
import SinglePost from './SinglePost';

const ProjectList = (props) => {
    const { projects } = props;
    const postList = projects ? projects.map(project => {
        return <SinglePost project={project} key={project.id} />
    }) : (<div className="center">Loading post...</div>)
    return (
        <div className="lists">
            {postList}
        </div>
    )
}
export default ProjectList;