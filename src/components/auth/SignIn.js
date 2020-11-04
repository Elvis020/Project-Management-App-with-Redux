import React,{useState} from 'react';
import {connect} from 'react-redux';
import {signIn} from '../../redux/actions/authActions';
import {Redirect} from 'react-router-dom';

function SignIn({toSignIn, authErr, isLoggedInAuth}) {
    const [signIn, setSignIn] = useState({
        email: '',
        password: ''
    })


    const handleChange = (e) => {
      setSignIn({...signIn, [e.target.id]: e.target.value  })
    }

    // FUnctinon to take care of form Submission
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form Submitted');
      toSignIn(signIn);
      
    }

    if (isLoggedInAuth.uid) return <Redirect to='/' />

    return (
        <div className="container">
            <form onSubmit={handleSubmit}  className="white">
                <h5 className="grey-text text-darken-3" >Sign In</h5>
                <div className="input-field">
                    <label htmlFor='email' >Email</label>
                    <input type="email" id='email' onChange={handleChange} />
                </div>
                <div className="input-field">
                    <label htmlFor='password' >Password</label>
                    <input type="password" id='password' onChange={handleChange} />
                </div>
                <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Login</button>
                </div>
                <div className="red-text center">
                    {authErr ? (<small>{authErr}</small>) : null}
                </div>

            </form>
            
        </div>
    )
}


const mapStateToProps = state => {
    return{
        authErr: state.auth.authError,
        isLoggedInAuth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toSignIn: creds => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
