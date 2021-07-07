import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


const Blogs = () => {
    const [blogs, setBlogs] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        axios(
        {
            method: 'GET',
            url: 'http://localhost:8000/posts/',
            headers: {
                'Authorization': 'Token f35dfde8e8a147440644b6519ea63483b941d717',
            },
            data: blogs
        })
        .then((res) => setBlogs(res.data))
        .catch(console.error)
    }, [])

    if (!blogs) {
        return "loading"
    }
    
    return (
        <div>
            <div className="home-image">
                <img src="https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="placeholder image" />
            </div>
            <div className="blog-gallery">
                {blogs.map((posts) => {
                    console.log(posts)
                    const url = `/blog/${posts.id}`
                    return (
                        <div className="blog-posts">
                            <Link className="header-links" to={url}><h3>{posts.title}</h3></Link>
                            <p>{posts.body}</p>
                            <h4>{posts.date}</h4>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
};

export default Blogs;