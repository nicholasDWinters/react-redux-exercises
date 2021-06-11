import React, { useState } from 'react';

function TodoForm({ addTodo }) {
    const INITIAL = { todo: '' };
    const [data, setData] = useState(INITIAL);
    const handleChange = e => {
        const { name, value } = e.target;

        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(data);
        setData(INITIAL);
    }

    return (
        <div style={{ marginBottom: '20px' }}>
            <h1>Todo Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="todo"
                    placeholder="todo"
                    value={data.todo}
                    onChange={handleChange}

                />
                <button>Add Todo</button>
            </form>
        </div>
    )
}

export default TodoForm;