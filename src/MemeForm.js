import React, { useState } from 'react';

function MemeForm({ addMeme }) {

    const INITIAL = { top: '', bottom: '', url: '' };
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
        addMeme(data);
        setData(INITIAL);
    }

    return (
        <div style={{ marginBottom: '20px' }}>
            <h1>Meme Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="top"
                    placeholder="top text"
                    value={data.top}
                    onChange={handleChange}
                    style={{ marginRight: '10px', width: '300px' }}
                />
                <input
                    type="text"
                    name="bottom"
                    placeholder="bottom text"
                    value={data.bottom}
                    onChange={handleChange}
                    style={{ marginRight: '10px', width: '300px' }}
                />
                <input
                    type="text"
                    name="url"
                    placeholder="image url"
                    value={data.url}
                    onChange={handleChange}
                    style={{ marginRight: '10px', width: '400px' }}
                />
                <button>Add Meme</button>
            </form>
        </div>
    )
}

export default MemeForm;