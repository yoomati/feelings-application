export const createProject = (newProject) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const state = getState();
        const profile = state.firebase.profile;
        const auth = state.firebase.auth;
        firestore.collection('project').add({
            ...newProject,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: auth.uid,
            comments: [],
            date: new Date()
        }).then(() => {
            dispatch({ type: "CREATE_NEW_POST" })
        }).catch((err) => {
            dispatch({ type: "ERROR_CREATE_NEW_POST", err })
        })
    }
}

export const addComment = (comment) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        const state = getState();

        const project = state.firestore.ordered.project.filter(project => {
            return (project.id == comment.projectId)
        })
        const project1 = project[0].comments;
        const profile = state.firebase.profile;
        console.log(profile);

        const comment1 = {
            id: project1.length,
            content: comment.text,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            createdAt: new Date
        }
        const allComments = {
            comments: [...project1, comment1]
        }

        firestore.update({ collection: 'project', doc: comment.projectId }, allComments)
    }
}