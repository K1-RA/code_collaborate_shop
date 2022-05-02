import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '../../components';

export default function Cart() {
	let id;
	if (typeof window !== 'undefined') {
		id = JSON.parse(localStorage.getItem('cartId'));
	}
	const [cartId, setCartId] = useState(id);
	const [cart, setCart] = useState('');
	const [totalPrice, setTotalPrice] = useState(0);
	console.log('tp', totalPrice);

	console.log(cartId);
	useEffect(() => {
		try {
			if (cartId) {
				fetch(`http://localhost:8080/api/cart/${cartId}`)
					.then((response) => response.json())
					.then((data) => setCart(data));
			}
		} catch (err) {
			console.log(err.message);
		}
	}, [cartId]);

	useEffect(() => {
		localStorage.setItem('cartId', JSON.stringify(cartId));
		setCartId(cartId);
	}, [cartId]);

	console.log(cart);
	return (
		<>
			{cart &&
				cart.products.map((item, i) => {
					{
						totalPrice += +item.price * cart.cart.products[i].qty;
					}
					{
						console.log('mtp', totalPrice);
					}
					return (
						<div key={i} className='cartItems'>
							<div className='cartItemsContent'>
								<h2>
									{item.brand} {item.name} {item.type}
								</h2>
								<div className='cartItemsFlex'>
									<div className='cartItemsImg'>
										<Image
											className='cartImage'
											unoptimized={true}
											objectFit='contain'
											layout='fill'
											alt={`${item.brand} ${item.name} ${item.type}`}
											src={item.imageUrl}
										/>
									</div>
									<div className='cartItemsButtons'>
										<Button
											className='cartItemsButtonButton'
											text={'-'}
											onClick={() => {
												fetch('');
											}}
										/>
										<p className='qtyText'>Qty: {cart.cart.products[i].qty}</p>
										<Button
											className='cartItemsButtonButton'
											text={'+'}
											onClick={() => {}}
										/>
										<Button
											className='cartItemsButtonButton'
											text={
												<svg
													xmlns='http://www.w3.org/2000/svg'
													viewBox='0 0 448 512'
												>
													<path d='M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z' />
												</svg>
											}
										/>
									</div>
									<p className='cartPrice'>{item.price}SEK</p>
								</div>
							</div>
						</div>
					);
				})}
			<div className='totalCartPrice'>
				<p>Total price: {totalPrice} SEK</p>
			</div>
			<Button text={'Checkout now!'} />
		</>
	);
}