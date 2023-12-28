import './contact.scss';
import { ContactTimer, ContactForm, ContactPicture } from '../../components';

const Contact = () => {
	return (
		<section id='contact'>
			<ContactPicture />
			<ContactForm />
			<ContactTimer />
		</section>
	);
};

export default Contact;
