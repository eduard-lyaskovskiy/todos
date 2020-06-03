export const createTodo = (todo) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to DB
        const firestore = getFirestore();
        firestore.collection('todos').add({
            ...todo,
            authorFirstName: 'Eduard',
            authorLastName: 'Lyaskovsky',
            authorId: 7,
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