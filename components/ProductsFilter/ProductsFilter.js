import styles from './ProductsFilter.module.scss';
export default function ProductsFilter() {
	return (
		<fieldset className={styles.fieldsetClass}>
			<legend className={styles.legendtext}> products leg</legend>
			<div className={styles.containerDiv}>
				<div>
					<input type='radio' id='decks' name='filter' value='decks' />
					<label className={styles.labelContent} htmlFor='decks'>
						Decks
					</label>
				</div>
				<div>
					<input type='radio' id='trucks' name='filter' value='trucks' />
					<label className={styles.labelContent} htmlFor='trucks'>
						Trucks
					</label>
				</div>
				<div>
					<input type='radio' id='wheels' name='filter' value='wheels' />
					<label className={styles.labelContent} htmlFor='wheels'>
						Wheels
					</label>
				</div>
				<div>
					<input
						type='radio'
						id='bearings'
						name='filter'
						value='bearings'
						disabled={true}
					/>
					<label className={styles.labelContent} htmlFor='bearings'>
						Bearings
					</label>
				</div>
				<div>
					<input
						type='radio'
						id='griptape'
						name='filter'
						value='griptape'
						disabled={true}
					/>
					<label className={styles.labelContent} htmlFor='griptape'>
						Griptape
					</label>
				</div>
				<div>
					<input type='radio' id='complete' name='filter' value='complete' />
					<label className={styles.labelContent} htmlFor='complete'>
						Complete Skateboard
					</label>
				</div>
				<div>
					<input
						type='radio'
						id='tools'
						name='filter'
						value='tools'
						disabled={true}
					/>
					<label className={styles.labelContent} htmlFor='tools'>
						Tools
					</label>
				</div>
				<div>
					<input
						type='radio'
						id='nutsandbolts'
						name='filter'
						value='nutsandbolts'
						disabled={true}
					/>
					<label className={styles.labelContent} htmlFor='nutsandbolts'>
						Nuts and bolts
					</label>
				</div>
			</div>
		</fieldset>
	);
}
