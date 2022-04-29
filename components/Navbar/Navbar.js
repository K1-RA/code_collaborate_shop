import Link from 'next/link';
import styles from './Navbar.module.scss';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
	const [isActive, setActive] = useState('false');
	// const router = useRouter();

	// useEffect(() => {
	// 	if (!isActive) {
	// 		setActive(isActive);
	// 	}
	// }, [router.asPath, isActive]);

	const handleToggle = () => {
		setActive(!isActive);
	};

	// const setFalse = () => {
	// 	setActive('false');
	// };

	console.log(isActive);

	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles.hamburgerLi}>
					<button className={styles.hamburger} onClick={handleToggle}>
						<svg
							className={styles.hamburgerColor}
							xmlns='http://www.w3.org/2000/svg'
							viewBox='0 0 448 512'
						>
							<path d='M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z' />
						</svg>
					</button>
				</li>

				<li className={styles.logo}>
					<Link href='/'>
						<a> Skatebords LOL</a>
					</Link>
				</li>

				<li className={styles.cart}>
					<a>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
							<path d='M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z' />
						</svg>
					</a>
				</li>

				<li
					className={`${styles.hideLinks} ${
						!isActive ? styles.showLinks : null
					}`}
				>
					<Link href='/products'>
						<a onClick={handleToggle}>Products</a>
					</Link>
				</li>
				<li
					className={`${styles.hideLinks} ${
						!isActive ? styles.showLinks : null
					}`}
				>
					<a onClick={handleToggle}>Admin</a>
				</li>
			</ul>
		</nav>
	);
}
{
}
