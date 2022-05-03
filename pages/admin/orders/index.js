import styles from './orders.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const Orders = () => {
	const [order, setOrders] = useState([]);
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			router.push('/admin');
		}
		console.log(token);
		fetch('http://localhost:8080/api/orders', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				token,
			}),
		})
			.then((res) => res.json())
			.then((json) => setOrders(json))
			.catch((err) => console.log(err.message));
	}, [router]);

	console.log(order);

	// 	useEffect(async () => {
	// const data = await loadOrders()
	// 	setOrders(data)

	// 	}, [orders]);

	// 	const loadOrders = async () => {
	// 		const res = await fetch('http://localhost:8080/api/orders/');
	// 		const data = await res.json();
	// 		setOrders(data);
	// 		console.log(order);

	// 		return data;
	// 	};

	return (
		<div>
			<h1>Orders</h1>
			{/* <div>
				<table className={styles.table}>
					<tr>
						<td className={styles.tdOrders} colSpan='2'>
							#2123123123
						</td>
					</tr>
					<tr>
						<td className={styles.tdTag}>Name</td>
						<td>Julia Wos</td>
					</tr>
					<tr>
						<td>Adress</td>
						<td>dfafjnvkdfj</td>
					</tr>
					<tr>
						<td> Order status: </td>
						<td>
							{' '}
							<input type='radio' /> Sent{' '}
						</td>
					</tr>
				</table>
			</div> */}
		</div>
	);
};
export default Orders;
