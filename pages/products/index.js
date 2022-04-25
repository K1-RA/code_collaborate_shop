import { ProductsList } from '../../components/';
export default function Products({ items }) {
	return (
		<>
			{items &&
				items.map((item) => {
					return <ProductsList key={item._id} item={item} />;
				})}
		</>
	);
}

export async function getServerSideProps() {
	const res = await fetch('http://localhost:8080/api/products/');
	const items = await res.json();

	return {
		props: {
			items: items.products,
		},
	};
}
