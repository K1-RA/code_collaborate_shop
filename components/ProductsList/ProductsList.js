import Image from 'next/image';
import styles from './ProductsList.module.scss';

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
			<h2>
				{item.brand} {item.name} {item.type}
			</h2>
			<p>{item.price} SEK</p>
		</>
	);
}
