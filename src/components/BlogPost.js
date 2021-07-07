import React, { useState, useEffect } from 'react';
import axios from 'axios'

const BlogPost = ( {match} ) => {

    const [post, setPost] = useState()

    useEffect(() => {
        axios(
        {
            method: 'GET',
            url: `http://localhost:8000/posts/${match.params.id}`,
            headers: {
                'Authorization': 'Token f35dfde8e8a147440644b6519ea63483b941d717',
            },
            data: post
        })
        .then((res) => setPost(res.data))
        .catch(console.error)
    }, [])

    if (!post) {
        return "loading"
    }
    
    return (

        <div className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <h4>{post.date}</h4>
            <button>edit</button>
            <button>delete</button>
        </div>
    );
};

export default BlogPost;