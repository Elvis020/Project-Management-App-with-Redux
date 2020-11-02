import React,{useState} from 'react'

function CreateProject() {
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
      console.log(createProject);
      
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

export default CreateProject
