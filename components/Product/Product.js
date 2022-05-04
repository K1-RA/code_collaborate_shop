import Image from 'next/image';
import styles from './Product.module.scss';
import Button from '../Button/Button';
import { postToCart } from '../../api';
export default function Product({ product }) {
	return (
		<div
			className={styles.productContainer}
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				gap: '0.5em',
			}}
		>
			<div
				className={styles.productImage}
				style={{
					height: '400px',
					width: '40%',
					position: 'relative',
					minWidth: '325px',
				}}
			>
				<Image
					unoptimized={true} /* change to loader to optimise */
					// width={1000}
					// height={700}
					objectFit={'contain'}
					layout={'fill'}
					alt={`${product.brand} ${product.name} ${product.type}`}
					src={product.imageUrl}
				/>
			</div>
			<div
				className={styles.productDetails}
				style={{ display: 'flex', flexDirection: 'column' }}
			>
				<p>{product.brand}</p>

				<p>
					{product.type}: {product.name}
				</p>
				<p> {product.price} SEK</p>
				<i className={product.inStock ? styles.inStock : styles.outOfStock}>
					{product.inStock
						? 'In Stock'
						: 'Out of Stock. Notify me when available!'}
					<Button
						inStock={product.inStock ? false : true}
						onClick={() => {
							postToCart({ id: product._id });
							alert('Added to cart :)');
						}}
						text={'Add to cart'}
					/>
				</i>
			</div>
		</div>
	);
}
