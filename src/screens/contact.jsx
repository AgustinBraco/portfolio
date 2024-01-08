import { useContext } from 'react';
import { Context } from '../global/context.jsx';
import { ContactTimer, ContactForm, ContactPicture } from '../components';

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
