import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {signUp} from '../../redux/actions/authActions';

function SignUp({auth, toSignUp, authError}) {
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
      toSignUp(signUp);
      
    }
    if (auth.uid) return <Redirect to='/' />

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
                <div className="red-text center">
                    {authError ? (<small>{authError}</small>) : null}
                </div>
            </form>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authErr
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        toSignUp: (newUser) => dispatch(signUp(newUser))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
