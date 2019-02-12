export const createUser = (credentials) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(resp => {
            return firestore.collection('user').doc(resp.user.uid).set({
                firstName: credentials.firstName,
                lastName: credentials.lastName,
                initials: credentials.firstName[0] + credentials.lastName[0],
                date: new Date()
            })
        }).then(() => {
            dispatch({ type: "CREATE_USER" })
        }).catch(err => {
            dispatch({ type: "CREATE_USER_ERROR", err })
        })
    }
}

export const signIn = (credentials) => {
    return (dispatch, getState, { getFirestore, getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: "LOGIN_SUCCESS" })
        }).catch(err => {
            dispatch({ type: "LOGIN_ERROR", err })
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getfirestore, getFirebase }) => {
        const firebase = getFirebase();
        firebase
            .auth()
            .signOut()
            .then(() => {
                dispatch({ type: "SIGNOUT_SUCCESS" })
            })
    }
}