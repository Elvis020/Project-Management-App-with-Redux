import React from 'react'
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../redux/actions/authActions';



function SignInLinks({toSignOut}) {
    return (
        <ul className="right">
            <li> <NavLink to='/create'>New Project</NavLink>  </li>
            <li> <NavLink onClick={toSignOut} to='/'>Sign Out </NavLink> </li>
            <li> <NavLink to='/' className="btn btn-floating pink lighten-2">NN </NavLink> </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        toSignOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignInLinks)
