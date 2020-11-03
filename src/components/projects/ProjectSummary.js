import React from "react";

function ProjectSummary({project}) {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span style={{textTransform: 'capitalize'}} className="card-title"> {project.title} </span>

        <p>Posted by sPaCeY</p>
        <p className="grey-text">3rd Octeber, 2020</p>
      </div>
    </div>
  );
}


export default ProjectSummary;
