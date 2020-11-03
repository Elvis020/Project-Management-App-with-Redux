import * as actions from '../types/types';

// Action Creator to dispatch action to reducer
export const createProject = (project) => (dispatch, getState,{getFirebase, getFirestore }) => {
    // Making async call to db
    const fireStore = getFirestore();
    fireStore.collection('Projects').add({
        ...project,
        authorFirstName: 'Elvis',
        authorLastName: 'Amoako',
        authorId: 12345,
        createdAt: new Date()
    }).then(
        // Dispatching actions to reducer with the help of thunk when operation is succesful
        dispatch({
            type: actions.CREATE_PROJECT,
            payload: project
        })
    ).catch(err => {
        // Dispatching actions to reducer with the help of thunk when operation is succesful
        dispatch({
            type: actions.CREATE_PROJECT_ERROR,
            payload: err
        })
    })

}