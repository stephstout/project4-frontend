import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { FaComments } from 'react-icons/fa'
import SignUp from './SignUp';


const Blogs = () => {
    const [blogs, setBlogs] = useState()
    const [error, setError] = useState(false)

    useEffect(() => {
        axios(
        {
            method: 'GET',
            url: 'https://steph-codes-blog.herokuapp.com/posts/',
            headers: {
                'Authorization': `Token ${localStorage.getItem('token')}`,
            },
            data: blogs
        })
        .then((res) => setBlogs(res.data))
        .catch(console.error)
    }, [])

    if (!blogs) {
        return <SignUp />
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
                            <h4><em>{posts.date}</em></h4><FaComments size="2em"/>
                        </div>
                    )
                })}
                
            </div>
        </div>
    );
};

export default Blogs;