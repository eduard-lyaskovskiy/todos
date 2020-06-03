import React from 'react';

const TodoSummary = ({ todo }) => {
    return (
        <div className="card z-depth-0 todo-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{todo.title}</span>
                <p>Posted by {todo.authorFirstName} {todo.authorLastName}</p>
                <p className="grey-text">30.05.2020, 18:55</p>
            </div>
        </div>
    )
}

export default TodoSummary