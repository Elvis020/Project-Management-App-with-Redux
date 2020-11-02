import React from 'react'

function ProjectDetails(props) {
    console.log(props)
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Veniam officia reprehenderit est do in dolore. Veniam non cillum id laborum laboris incididunt nisi veniam consequat. Tempor labore commodo enim cupidatat ullamco.
                    </p>
                </div>
                <div className="card-action grey lighten-5 grey-text">
                    <div>Posted by sPaCeY 😻</div>
                    <div>2nd September, 2020 2am</div>
                </div>
            </div>
        </div>
    )
}



export default ProjectDetails


