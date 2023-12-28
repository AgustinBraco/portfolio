import './contact.scss';
import { ContactTimer, ContactForm, ContactPicture } from '../../components';
import { useContext } from 'react';
import { Context } from '../../global/context.jsx';

const Contact = () => {
	const { setContactStatus } = useContext(Context);
	setContactStatus(true);
	return (
		<section id='contact'>
			<ContactPicture />
			<ContactForm />
			<ContactTimer />
		</section>
	);
};

export default Contact;
