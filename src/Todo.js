import React from 'react';

const Todo = ({ todo, id, deleteTodo }) => {
    const handleDelete = () => {
        deleteTodo(id);
    }
    return (
        <div>
            <p>{todo}</p>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Todo;