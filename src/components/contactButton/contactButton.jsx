import './contactButton.scss';

const ContactButton = () => {
	return (
		<button type='submit'
		className='contactButtonContainer'>
			<div>
				<i className='contactButtonIcon'></i>
			</div>
			<span className='contactButtonText'>Send</span>
		</button>
	);
};

export default ContactButton;
