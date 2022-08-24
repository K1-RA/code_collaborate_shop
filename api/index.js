async function postToCart(data = {}) {
	const cartId = JSON.parse(localStorage.getItem('cartId'));
	console.log(cartId);
	if (!cartId) {
		const URL = 'https://skatebordslol.herokuapp.com/api/cart/';
		const response = await fetch(URL, {
			method: 'POST',
			// credentials: 'include',
			// mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.catch((err) => console.log(err));
		localStorage.setItem('cartId', JSON.stringify(response.cartId));
	} else if (cartId) {
		const URL = `https://skatebordslol.herokuapp.com/api/cart/${cartId}`;
		const response = await fetch(URL, {
			method: 'POST',
			// credentials: 'include',
			// mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.catch((err) => console.log(err));
		return response;
	}
}

export { postToCart };
