import Image from 'next/image';
import styles from './ProductsList.module.scss';
import Link from 'next/dist/client/link';

export default function ProductsList({ item }) {
	return (
		<>
			<Image
				unoptimized={true} /* change to loader to optimise */
				width={180}
				height={200}
				objectFit={'contain'}
				layout={'responsive'}
				alt={`${item.brand} ${item.name} ${item.type}`}
				src={item.imageUrl}
			/>
			<Link href={`/products/${item._id}`}>
				<a>
					{item.brand} {item.name} {item.type}
				</a>
			</Link>
			<p>{item.price} SEK</p>
		</>
	);
}
