import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import {connect} from 'react-redux';

function Navbar({isAuth, profile}) {
    return (
        <nav className="nav-wrapper grey darken-2">
            <div className="container">
                <Link to='/'  className="brand-logo">Spacey's Plan</Link>
                {isAuth.uid ? (
                    <SignInLinks profile={profile} />
                    ):(
                    <SignOutLinks />
                )}
            </div>

        </nav>
    )
}


const mapStateToProps = state => {
    console.log(state)
    return {
        isAuth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar)
