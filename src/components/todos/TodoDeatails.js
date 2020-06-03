import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { deleteTodo } from '../../store/actions/todoActions';
import moment from 'moment';

const ProjectDeatails = (props) => {
    console.log(props)
    const { todo, auth, id } = props;
    console.log(id)
    const handleDelete = e => {
        e.preventDefault();
        props.deleteTodo(id);
        props.history.push('/')
    }
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
                        <div>{moment(todo.createdAt.toDate()).format('LTS')}</div>
                    </div>
                </div>
                <button onClick={handleDelete}>Done</button>
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
        auth: state.firebase.auth,
        id: id
    }
}

const mapDistpacthToProps = (dispatch) => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
}

export default compose(
    connect(mapStateToProps, mapDistpacthToProps),
    firestoreConnect([{
        collection: 'todos'
    }])
)(ProjectDeatails)