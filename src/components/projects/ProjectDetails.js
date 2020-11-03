import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

function ProjectDetails(props) {
    const {projectUpdate} = props;
    if(projectUpdate) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{projectUpdate.title}</span>
                        <p> {projectUpdate.content} </p>
                    </div>
                    <div className="card-action grey lighten-5 grey-text">
                        <div>Posted by {projectUpdate.authorFirstName}{projectUpdate.authorLastName} 😻</div>
                        <div>2nd September, 2020 2am</div>
                    </div>
                </div>
            </div>
        )
    }else {
        return (
            <div className="container center">
                <p>Loading details...</p> 
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    const id = ownProps.match.params.id;
    const projects = state.fireStore.data.Projects;
    const project = projects ? projects[id] : null
    return {
        projectUpdate:  project
    }
}


export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Projects'}
    ])
)(ProjectDetails)


