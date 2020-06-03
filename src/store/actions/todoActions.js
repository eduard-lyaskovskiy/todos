export const createTodo = (todo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to DB
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('todos').add({
            ...todo,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({
                type: 'CREATED_TODO',
                todo: todo
            })
        }).catch((err) => {
            dispatch({
                type: 'CREATED_TODO_ERROR',
                err: err
            })
        })
    }
}
export const deleteTodo = id => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('todos').doc(id)
            .delete()
            .then(() => {
                dispatch({ type: 'DELETE_PROJECT', id })
            }).catch(err => {
                dispatch({ type: 'DELETE_PROJECT_ERROR', err })
            })
    }
};