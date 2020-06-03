import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const ProjectDeatails = (props) => {
    console.log(props)
    const { todo, auth } = props;
    if (!auth.uid) return <Redirect to='/signin' />
    if (todo) {
        return (
            <div className="container section todo-details">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">{todo.title}</span>
                        <p>{todo.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {todo.authorFirstName} {todo.authorLastName}</div>
                        <div>01.06.2020 15:16</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container center">
                <p>Loading...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id
    const todos = state.firestore.data.todos
    const todo = todos ? todos[id] : null
    return {
        todo: todo,
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection: 'todos'
    }])
)(ProjectDeatails)