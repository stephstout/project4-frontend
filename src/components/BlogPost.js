import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
// import EditPost from './EditPost';

const BlogPost = ( {match} ) => {
    const history = useHistory()
    const [post, setPost] = useState()

    useEffect(() => {
        axios(
        {
            method: 'GET',
            url: `https://steph-codes-blog.herokuapp.com/posts/${match.params.id}`,
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
            },
            data: post
        })
        .then((res) => setPost(res.data))
        .catch(console.error)
    }, [])

    const deletePost = () => {
        axios(
            {
                method: 'DELETE',
                url: `https://steph-codes-blog.herokuapp.com/posts/${match.params.id}`,
                headers: {
                    'Authorization': `Token ${localStorage.getItem('token')}`,
                }
            }
        )
        .then(() => {
            history.push('/')
        })
    }

    if (!post) {
        return "loading"
    }
    
    return (

        <div className="blog-post">
            <div className="post-border">
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <h4>{post.date}</h4>
            </div>
            <button className="submit-button"><Link to={`/editpost/${match.params.id}`}>edit</Link></button>
            <button className="submit-button" onClick={deletePost}>delete</button>
        </div>
    );
};

export default BlogPost;