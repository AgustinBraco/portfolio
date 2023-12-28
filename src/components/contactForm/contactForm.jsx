import './contactForm.scss';
import { ContactButton } from '../';

const ContactForm = () => {
	return (
		<div className='formContainer'>
			<form action=''>
				<label htmlFor=''>
					<input type='text' />
				</label>

				<label htmlFor=''>
					<input type='text' />
				</label>

				<label htmlFor=''>
					<input type='text' />
				</label>

				<input type='submit' value='SEND' />
				<ContactButton />
			</form>
		</div>
	);
};

export default ContactForm;
