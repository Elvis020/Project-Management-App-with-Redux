import React,{useState} from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../redux/actions/projectActions';

function CreateProject({newProject}) {
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
                    <button className="btn pink lighten-1 z-depth-0">Create</button>
                </div>

            </form>
            
        </div>
    )
}


// Mapping dispatch to props
const mapDispatchToProps = (dispatch) => {
    return {
        newProject: (proj) => dispatch(createProject(proj))
    }
}

export default connect(null, mapDispatchToProps)(CreateProject);
