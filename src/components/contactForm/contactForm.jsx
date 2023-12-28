import './contactForm.scss';

const ContactForm = () => {
	return (
		<div className='formContainer'>
			<form action="">
				<label htmlFor="">
					<input type="text" />
				</label>

				<label htmlFor="">
					<input type="text" />
				</label>

				<label htmlFor="">
					<input type="text" />
				</label>

				<input type="submit" value="SEND" />
			</form>
		</div>
	);
};

export default ContactForm;
