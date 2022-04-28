import styles from './Button.module.scss';

export default function Button({ text, onClick }) {
	return (
		<>
			<button onClick={onClick} className={styles.button}>
				{text}
			</button>
		</>
	);
}
