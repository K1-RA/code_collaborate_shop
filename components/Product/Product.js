import Image from 'next/image';
import styles from './Product.module.scss';

export default function Product({ product }) {
	return (
		<div className={styles.productContainer}>
			<div className={styles.productImage}>
				<Image
					unoptimized={true} /* change to loader to optimise */
					width={1000}
					height={700}
					objectFit={'contain'}
					layout={'responsive'}
					alt={`${product.brand} ${product.name} ${product.type}`}
					src={product.imageUrl}
				></Image>
			</div>

			<p>{product.brand}</p>

			<p>
				{product.type}: {product.name}
			</p>
			<p> {product.price}</p>
		</div>
	);
}
