export const signIn = (credentials) => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(() => {
            dispatch({type: 'LOGIN_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
}


export const signOut = () => (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
        dispatch({type: 'SIGN_OUT_SUCCESS'})
    })
}


export const signUp = (newUser) => (dispatch, getState, {getFirebase, getFirestore}) => {
    const firebase = getFirebase();
    const fireStore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
        .then((res) => {
            return fireStore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            })
        }).then(() => {
            dispatch({type: 'SIGN_UP_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'SIGN_UP_ERROR', err})
        })
}