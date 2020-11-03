import React from 'react'
import ProjectList from '../projects/ProjectList';
import Notification from './Notifications';
import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

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
    console.log(state)
    return {
        projects: state.fireStore.ordered.Projects
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'Projects'}
    ])
)(Dashboard)
