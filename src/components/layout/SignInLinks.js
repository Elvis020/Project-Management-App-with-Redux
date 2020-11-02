import React from 'react'
import {NavLink} from 'react-router-dom';



function SignInLinks() {
    return (
        <ul className="right">
            <li> <NavLink to='/create'>New Project</NavLink>  </li>
            <li> <NavLink to='/logout'>Log Out </NavLink> </li>
            <li> <NavLink to='/' className="btn btn-floating pink lighten-2">NN </NavLink> </li>
        </ul>
    )
}

export default SignInLinks
