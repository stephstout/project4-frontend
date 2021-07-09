import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';



const LoginForm = ({ setUser }) => {
    const [formUser, setFormUser] = useState({email: "", password: ""})
	const [error, setError] = useState(false);
	let history = useHistory();

	//Setting email and password to user state
	const handleChange = (event) => {
		setFormUser({ ...formUser, [event.target.id]: event.target.value });
	};

	//Sending user email and password to database, and awaiting return of token.  Setting the token to local storage and the user id to the activeUser state to allow access to components.
	const handleSignIn = (event) => {
		event.preventDefault();
        const url = `https://steph-codes-blog.herokuapp.com/token/login`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(formUser),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                localStorage.setItem('token', data.auth_token)
            })
            .catch(() => setError(true));
		// console.log(data)

	
			// history.push('/gallery');
	
	};
	return (
		<div>
			<div className='form'>
				<form onSubmit={handleSignIn}>
					<label htmlFor='email'>Email</label>
					<input id='email' type='text' onChange={handleChange} />
					<label htmlFor='password'>Password</label>
					<input id='password' type='text' onChange={handleChange} />
					<button type='submit' className='submit-button'>
						submit
					</button>
					{error ? (
						<p>password or email is incorrect, please try again.</p>
					) : null}
					<p>
						need an account? sign-up{' '}
						<Link to='/signup'>
							<span>here</span>
						</Link>
						.
					</p>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
