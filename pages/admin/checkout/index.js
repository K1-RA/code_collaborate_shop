import styles from './checkout.module.scss';
import { Button } from '../../../components';
import { useState } from 'react';
import Link from 'next/link';

export default function Checkout() {
	const [complete, setComplete] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		address: '',
		city: '',
	});
	const { name, email, address, city } = formData;

	const onChange = async (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	let cartId;
	if (typeof window !== 'undefined') {
		cartId = JSON.parse(localStorage.getItem('cartId'));
	}

	const onSubmit = async (e) => {
		e.preventDefault();

		if (!name || !email || !address || !city) {
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
				address,
				city,
				cartId: cartId,
			}),
		}).then((res) => res.json());
		setComplete(true);
	};

	return (
		<div className={'formContainer'}>
			{complete ? (
				<>
					<h1>Thank you for your order</h1>
					<Link href='/'>
						<a>Go back to home page</a>
					</Link>
				</>
			) : (
				<>
					{' '}
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
							name='address'
							id='address'
							placeholder='Enter your address'
							value={address}
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
				</>
			)}
		</div>
	);
}
