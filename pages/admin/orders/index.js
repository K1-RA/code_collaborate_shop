import styles from './orders.module.scss';

const Orders = () => {
	return (
		<div>
			<h1>Orders</h1>
			<div>
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
			</div>
		</div>
	);
};
export default Orders;
