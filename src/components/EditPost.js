// import React, { useState } from 'react';
// import axios from 'axios'

// const EditPost = () => {
//     const initialState = { title: '', date: '', body: '' }
//     const [editPost, setEditPost] = useState(initialState)

//     const handleChange = (e) => {
//         setEditPost({...post, [e.target.id]: e.target.value})
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()
//         axios(
//         {
//             method: 'PUT',
//             url: `http://localhost:8000/posts/${editPost.id}`,
//             headers: {
//                 'Authorization': 'Token f35dfde8e8a147440644b6519ea63483b941d717',
//             },
//             data: post
//         })
//         .then(res => setEditPost(res.data))
//         .catch(console.error)
//     }

//     useEffect(() => {
        
//     }, [])

//     return (
//         <div>
//             <form className="Edit-post" onSubmit={handleSubmit}>
//                 <label htmlFor="title">title:</label>
//                 <input 
//                 id="title"
//                 type="text"
//                 onChange={handleChange}
//                 />
//                 <label htmlFor="date">date:</label>
//                 <input 
//                 id="date"
//                 type="date"
//                 onChange={handleChange}
//                 />
//                 <label htmlFor="body">body:</label>
//                 <input 
//                 id="body"
//                 type="text"
//                 onChange={handleChange}
//                 />
//             <button className="submit-button">submit post</button>
//             </form>
//         </div>
//     );
// };

// export default EditPost;