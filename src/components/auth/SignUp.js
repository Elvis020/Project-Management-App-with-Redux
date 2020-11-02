import React,{useState} from 'react'

function SignUp() {
    const [signUp, setSignUp] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })


    const handleChange = (e) => {
      setSignUp({...signUp, [e.target.id]: e.target.value  })
    }

    // FUnctinon to take care of form Submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Submitted');
      console.log(signUp);
      
    }


    return (
        <div className="container">
            <form onSubmit={handleSubmit}  className="white">
                <h5 className="grey-text text-darken-3" >Sign Up</h5>
                <div className="input-field">
                    <label htmlFor='email' >Email</label>
                    <input type="email" id='email' onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor='password' >Password</label>
                    <input type="password" id='password' onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor='firstName' >First Name</label>
                    <input type="text" id='firstName' onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor='lastName' >Last Name</label>
                    <input type="text" id='lastName' onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>

            </form>
            
        </div>
    )
}

export default SignUp
