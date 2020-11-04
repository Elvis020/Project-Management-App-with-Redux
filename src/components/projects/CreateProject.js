import React,{useState} from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../redux/actions/projectActions';
import {Redirect} from 'react-router-dom';

function CreateProject({newProject, auth}) {
    const [createProject, setCreateProject] = useState({
        title: '',
        content: ''
    })


    const handleChange = (e) => {
      setCreateProject({...createProject, [e.target.id]: e.target.value  })
    }

    // Functinon to take care of form Submission
    const handleSubmit = (e) => {
      e.preventDefault();
      newProject(createProject);
      
    }

    if(!auth.uid) return <Redirect to='/signin' />
    return ( 
        <div className="container">
            <form onSubmit={handleSubmit}  className="white">
                <h5 className="grey-text text-darken-3" >Create New Project  </h5>
                <div className="input-field">
                    <label htmlFor='title' >Title</label>
                    <input type="text" id='title' onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor='content' >Project Content</label>
                    <textarea id='content'onChange={handleChange} className="materialize-textarea" ></textarea>
                </div>
                <div className="input-field">
                    <button onClick={() => <Redirect to='/' />} className="btn pink lighten-1 z-depth-0">Create</button>
                </div>

            </form>
            
        </div>
    )
}
// Mapping State to Props
const mapStateToProps = state => {
    return {
        auth: state.firebase.auth
    }
}

// Mapping dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        newProject: (proj) => dispatch(createProject(proj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
