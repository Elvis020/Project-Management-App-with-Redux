
import { combineReducers } from 'redux';
import auth from './auth';
import project from './project';
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';


const rootReducer = combineReducers({
    auth: auth,
    project: project,
    fireStore: firestoreReducer,
    firebase: firebaseReducer
})

export default rootReducer;