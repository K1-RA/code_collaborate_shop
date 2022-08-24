import Image from 'next/image';
import Button from '../Button/Button';
import styles from './ProductsList.module.scss';
import Link from 'next/link';
import { useState } from 'react';
export default function ProductsList({ item }) {
	const [isActive, setActive] = useState('false');

	const setFalse = () => {
		setActive('false');
	};

	return (
		item && (
			<>
				<Link
					passHref={true}
					href={`https://skatebordslol.netlify.app/products/${item._id}`}
				>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '0.5em',
							justifyContent: 'space-between',
							width: '180px',
						}}
						className={styles.productItem}
					>
						<div
							style={{ height: '300px', width: '100%', position: 'relative' }}
						>
							<Image
								unoptimized={true}
								// width={180}
								// height={200}
								objectFit={'contain'}
								layout={'fill'}
								alt={`${item.brand} ${item.name} ${item.type}`}
								src={item.imageUrl}
							/>
						</div>
						<h2>
							{item.brand} {item.name}{' '}
							{item.type === 'skateboard' ? (
								<span>Skate&shy;board</span>
							) : (
								`${item.type}`
							)}
						</h2>

						<p className={styles.productPrice}>{item.price} SEK</p>
						{/* <Button text={'Buy'} /> */}
					</div>
				</Link>
			</>
		)
	);
}
