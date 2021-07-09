import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios'

const CreatePost = () => {
    const initialState = { title: '', date: '', body: '' }
    const [post, setPost] = useState(initialState)
    const history = useHistory()


    const handleChange = (e) => {
        setPost({...post, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios(
        { 
            method: 'POST',
            url: 'https://steph-codes-blog.herokuapp.com/posts/',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
            },
            data: post
        })
        .then(() => {
            history.push('/')
        })
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