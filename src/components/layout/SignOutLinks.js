import React from 'react'
import {NavLink} from 'react-router-dom';



function SignOutLinks() {
    return (
        <ul className="right">
            <li> <NavLink to='/signup'>SignUp</NavLink>  </li>
            <li> <NavLink to='/signin'>Signin </NavLink> </li>
        </ul>
    )
}

export default SignOutLinks
