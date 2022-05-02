import styles from './checkout.module.scss';
import { Button } from '../../components';

export default function Checkout() {
	return (
		<div className={'formContainer'}>
			<form className={'classForm'}>
				<input
					type='text'
					name='name'
					id='name'
					placeholder='Enter full name'
				/>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='Enter your email'
				/>
				<input
					type='text'
					name='address'
					id='address'
					placeholder='Enter your address'
				/>
				<input type='text' name='city' id='' placeholder='City' />

				<Button type='submit' text='Send' />
			</form>
		</div>
	);
}
