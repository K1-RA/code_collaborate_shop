import styles from './orders.module.scss';
import { useState, useEffect } from 'react';

const Orders = () => {
	const [order, setOrders] = useState([]);

	useEffect(() => {
		fetch('http://localhost:8080/api/orders/')
			.then((res) => res.json())
			.then((json) => setOrders(json))
			.catch((err) => console.log(err.message));
	}, []);

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
