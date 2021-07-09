import React, { useState, useEffect } from 'react';
import axios from 'axios'

const DeletePost = ( {match} ) => {
    // const initialState = {  }
    const [editPost, setEditPost] = useState()

    const handleChange = (e) => {
        setEditPost({editPost, [e.target.id]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios(
            {
                method: 'DELETE',
                url: `https://steph-codes-blog.herokuapp.com/${match.params.id}`,
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`
                },
                data: editPost
            })
            .then(res => setEditPost(res.data))
            .catch(console.error)
        }
        


    return (
        <div>
            <form className="delete-post">
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
            <button className="submit-button" onSubmit={handleSubmit}>delete post</button>
            </form>
        </div>
    );
};

export default DeletePost;