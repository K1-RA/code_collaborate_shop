import styles from './orders.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
const Orders = () => {
	const [orders, setOrders] = useState([]);
	const router = useRouter();

	useEffect(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			router.push('/admin');
		}
		console.log(token);
		fetch('http://localhost:8080/api/orders/admin', {
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

	return (
		<div>
			<h1>Orders</h1>
			<div>
				{orders &&
					orders.map((order) => {
						return (
							<table className={styles.table} key={order._id}>
								<tr>
									<td className={styles.tdOrders} colSpan='2'>
										{order.cartId}
									</td>
								</tr>
								<tr>
									<td className={styles.tdTag}>Name</td>
									<td>{order.name}</td>
								</tr>
								<tr>
									<td>Adress</td>
									<td>{order.address}</td>
								</tr>
								<tr>
									<td> Order status: </td>
									<td>
										{' '}
										<input type='radio' /> Sent{' '}
									</td>
								</tr>
							</table>
						);
					})}
			</div>
		</div>
	);
};
export default Orders;
