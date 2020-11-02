import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer';
// Initializing Store with rootredeucer

export const store = createStore(rootReducer)