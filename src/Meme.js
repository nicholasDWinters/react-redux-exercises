import React from 'react';
import './Meme.css';

function Meme({ id, top, bottom, url, deleteMeme }) {

    const handleDelete = () => {
        deleteMeme(id);

    }
    return (
        <div>
            <div className='Meme-container'>
                <section className='top'>{top}</section>
                <section className='bottom'>{bottom}</section>
                <img src={url} alt='meme pic' style={{ height: '300px' }}></img>
                <button onClick={handleDelete}>X</button>
            </div>
        </div>
    )
}

export default Meme;