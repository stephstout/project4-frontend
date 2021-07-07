import React, { useState } from 'react';
import axios from 'axios'

const CreatePost = () => {
    const initialState = { title: '', date: '', body: '' }
    const [post, setPost] = useState(initialState)

    const handleChange = (e) => {
        setPost({...post, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios(
        { 
            method: 'POST',
            url: 'http://localhost:8000/posts/',
            headers: {
                'Authorization': 'Token f35dfde8e8a147440644b6519ea63483b941d717',
            },
            data: post
        })
        .then(console.log)
        .catch(console.error)
    }


    return (
        <div>
            <form className="create-post" onSubmit={handleSubmit}>
                <label htmlFor="title">title:</label>
                <input 
                id="title"
                type="text"
                onChange={handleChange}
                />
                <label htmlFor="date">date:</label>
                <input 
                id="date"
                type="date"
                onChange={handleChange}
                />
                <label htmlFor="body">body:</label>
                <input 
                id="body"
                type="text"
                onChange={handleChange}
                />
            <button className="submit-button">submit post</button>
            </form>
        </div>
    );
};

export default CreatePost;