import React from 'react'
import ProjectList from '../projects/ProjectList';
import Notification from './Notifications';
import {connect} from 'react-redux';

function Dashboard({projects}) {
    return (
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                    <ProjectList projects={projects}/>
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notification />
                </div>
            </div>
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
        projects: state.project.projectList
    }
}

export default connect(mapStateToProps)(Dashboard)
