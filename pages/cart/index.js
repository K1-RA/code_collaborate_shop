import { useState, useEffect } from 'react';

export default function Cart() {
	let id;
	if (typeof window !== 'undefined') {
		id = JSON.parse(localStorage.getItem('cartId'));
	}
	const [cartId, setCartId] = useState(id);
	const [cart, setCart] = useState(null);

	useEffect(() => {
		if (cartId) {
			fetch(`http://localhost:8080/api/cart/${cartId.cartId}`)
				.then((response) => response.json())
				.then((data) => setCart(data));
		}
	}, [cartId]);

	useEffect(() => {
		localStorage.setItem('cartId', JSON.stringify(cartId));
		setCartId(cartId);
	}, [cartId]);

	console.log(cart);
	return <div>This is a cart yooooooo</div>;
}
