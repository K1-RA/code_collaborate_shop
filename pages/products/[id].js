import { Product } from '../../components';

export const getStaticPaths = async () => {
	const res = await fetch('https://skatebordslol.herokuapp.com/api/products');
	console.log(res);
	const data = await res.json();
	console.log(data, 'data');

	const paths = data.products.map((product) => {
		return {
			params: { id: product._id },
		};
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = async (context) => {
	const id = context.params.id;
	const res = await fetch(
		`https://skatebordslol.herokuapp.com/api/products/${id}`
	);
	const data = await res.json();

	return {
		props: { product: data },
	};
};

const SingleProduct = ({ product }) => {
	return <Product product={product} />;
};

export default SingleProduct;
