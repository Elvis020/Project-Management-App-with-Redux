import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducer';
import thunk from 'redux-thunk';
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';
import firebaseConfig from '../../config/firebaseConfig';

// Middlewares available
// const middleWare = [thunk];


// Initializing Store with rootreducer and 3 store enhancers
export const store = createStore(
rootReducer, 
compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {useFirestoreForProfile:true, userProfile: 'users', attachAuthIsReady: true})
    )
);

// In combining several store enhancers we use compose to combine them