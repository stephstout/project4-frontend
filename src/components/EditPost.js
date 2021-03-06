import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const EditPost = ( {match} ) => {
    const [editPost, setEditPost] = useState({ title: '', date: '', body: '' })
    const history = useHistory()
    const handleChange = (e) => {
        setEditPost({...editPost, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios(
            {
                method: 'PUT',
                url: `https://steph-codes-blog.herokuapp.com/posts/${match.params.id}`,
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                },
                data: editPost
            })
            .then(res => {
                history.push('/')
            })
            .catch(console.error)
        }


    return (
        <div>
            <form className="edit-post" onSubmit={handleSubmit}>
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
            <button className="submit-button">edit post</button>
            </form>
        </div>
    );
};

export default EditPost;