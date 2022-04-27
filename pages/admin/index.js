import { useState } from 'react';
import style from './admin.module.scss';

const Admin = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		const user = await fetch('http://localhost:8080/api/admin/login', {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: {
				email,
				password,
			},
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	return (
		<div>
			<h1 className={style.h1Styling}>Login</h1>
			<form onSubmit={onSubmit}>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='Enter your email'
					value={email}
					onChange={onChange}
				/>
				<input
					type='password'
					name='password'
					id='password'
					placeholder='Enter your password'
					value={password}
					onChange={onChange}
				/>
				<button type='submit'>Login</button>
			</form>
		</div>
	);
};

export default Admin;
