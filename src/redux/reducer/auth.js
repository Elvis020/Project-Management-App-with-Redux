import {LOGIN_ERROR, LOGIN_SUCCESS, SIGN_OUT_SUCCESS,SIGN_UP_SUCCESS, SIGN_UP_ERROR} from '../types/types'
const initialState = {
    authError: null
}



const auth = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_SUCCESS:
            console.log('Login Success')
            return {
                ...state,
                authError: null
            }
        case LOGIN_ERROR:
            console.log('Login failed')
            return {
                ...state,
                authError: 'Login Failed pal'
            }
        case SIGN_OUT_SUCCESS:
            console.log('Signout Success')
            return state;
        case SIGN_UP_SUCCESS:
            console.log('SignUp success')
            return {
                ...state,
                authErr: null
            }
        case SIGN_UP_ERROR:
            console.log('Sign Up Error')
            return {
                ...state,
                authErr: action.err.message
            }
        default:
            return state
    }
}


export default auth;