import styles from './checkout.module.scss';
import { Button } from '../../../components';
import { useState } from 'react';

export default function Checkout() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		adress: '',
		city: '',
	});
	const { name, email, adress, city } = formData;

	const onChange = async (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = async (e) => {
		e.preventDefault();

		if (!name || !email || !adress || !city) {
			alert('Please fill in all fields');
			return;
		}

		await fetch('http://localhost:8080/api/orders/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name,
				email,
				adress,
				city,
			}),
		}).then((res) => res.json());
	};

	return (
		<div className={'formContainer'}>
			<h1>Checkout</h1>
			<form onSubmit={onSubmit} className={'classForm'}>
				<input
					type='text'
					name='name'
					id='name'
					placeholder='Enter full name'
					value={name}
					onChange={onChange}
				/>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='Enter your email'
					value={email}
					onChange={onChange}
				/>
				<input
					type='text'
					name='adress'
					id='adress'
					placeholder='Enter your address'
					value={adress}
					onChange={onChange}
				/>
				<input
					type='text'
					name='city'
					id=''
					placeholder='City'
					value={city}
					onChange={onChange}
				/>

				<Button type='submit' text='Place order' />
			</form>
		</div>
	);
}
