import {LOGIN_ERROR, LOGIN_SUCCESS} from '../types/types'
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
        default:
            return state
    }
}


export default auth;