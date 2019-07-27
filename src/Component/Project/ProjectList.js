import React from "react";
import SinglePost from "./SinglePost";

const ProjectList = props => {
  const { projects } = props;
  console.log(projects);
  if (projects !== undefined) {
    if (projects.length >= 2) {
      projects.sort((a, b) => b.date.seconds - a.date.seconds);
    }
  }

  const postList = projects ? (
    projects.map(project => {
      return <SinglePost project={project} key={project.id} />;
    })
  ) : (
    <div className="center">Loading post...</div>
  );
  return <div className="lists">{postList}</div>;
};
export default ProjectList;
