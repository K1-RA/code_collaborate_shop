async function postToCart(data = {}, items) {
	if (!items) {
		const URL = 'http://localhost:8080/api/cart/';
		const response = await fetch(URL, {
			method: 'POST',
			credentials: 'include',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((res) => res.json())
			.catch((err) => console.log(err));
		return response;
	} else if (items) {
		const URL = `http://localhost:8080/api/cart/${items.cartId}`;
		const response = await fetch(URL, {
			method: 'POST',
			credentials: 'include',
			mode: 'cors',
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
