import styles from './Button.module.scss';

export default function Button({ text, onClick, inStock }) {
	return (
		<>
			<button disabled={inStock} onClick={onClick} className={styles.button}>
				{text}
			</button>
		</>
	);
}
