import { useState } from 'react';
import { useRouter } from 'next/router';
import style from './admin.module.scss';
import { Button } from '../../components';

const Admin = () => {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});
	const { email, password } = formData;
	const router = useRouter();

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();
		if (!email || !password) {
			alert(`Please enter both email and password`);
			return;
		}
		await fetch('http://localhost:8080/api/admin/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				localStorage.setItem('token', JSON.stringify(data.token));
				router.push('/admin/orders');
			})
			.catch((err) => {
				console.log(err);
				alert('Wrong email or password');
			});
	};

	return (
		<div className={style.adminContainer}>
			<h1 className={'h1Styling'}>Login</h1>
			<form onSubmit={onSubmit} className={style.adminForm}>
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
				<Button type='submit' text='Login' />
			</form>
		</div>
	);
};

export default Admin;
