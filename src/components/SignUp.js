// import React, { useState } from 'react';
// import { Link, useHistory } from 'react-router-dom';

// const token = localStorage.getItem('token');

// const SignUp = () => {
// 	const [error, setError] = useState(false);
//     const [user, setUser] = useState()

//     const postSignUp = () => {
//         const url = `https://steph-codes-blog.herokuapp.com/token/login`;
//         fetch(url, {
//             method: 'POST',
//             headers: {
//                 'Content-type': 'application/json; charset=UTF-8',
//             },
//             body: JSON.stringify(user),
//         })
//             .then((res) => res.json())
//             .then((data) => console.log(data))
//             .catch(() => setError(true));

// 	const handleChange = (event) => {
// 		setUser({ ...user, [event.target.id]: event.target.value });
// 	};

// 	let history = useHistory();

// 	const handleSignUp = (event) => {
// 		event.preventDefault();
// 		if (user.password === user.confirm) {
// 			SignUp(user, setError);
// 			history.push('/signin');
// 		} else {
// 			setError(true);
// 		}
// 	};

// 	return (
// 		<div className='form'>
// 			<form onSubmit={handleSignUp}>
// 				<label htmlFor='email'>Email</label>
// 				<input id='email' type='text' onChange={handleChange} />
// 				<label htmlFor='password'>Password</label>
// 				<input id='password' type='text' onChange={handleChange} />
// 				<label htmlFor='Confirm password'> Confirm Password</label>
// 				<input id='confirm' onChange={handleChange} type='text' />
// 				<button type='submit' className='submit-button'>
// 					submit
// 				</button>
// 				<p>
// 					already have an account? sign in{' '}
// 					<Link to='/signin'>
// 						<span>here</span>
// 					</Link>
// 					.
// 				</p>
// 				{error ? (
// 					<p>passwords do not match. please try again.</p>
// 				) : null}
// 			</form>
// 		</div>
// 	);
// }};

// export default SignUp;
