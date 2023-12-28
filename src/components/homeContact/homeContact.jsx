import './homeContact.scss';
import { IconGithub, IconGmail, IconLinkedin } from '../../assets';

const HomeContact = () => {
	return (
		<div>
			<a href='https://github.com/AgustinBraco' target='_blank'>
				<IconGithub width='5rem' height='5rem' />
			</a>
			<a href='' target='_blank'>
				<IconGmail width='5rem' height='5rem' />
			</a>
			<a href='https://www.linkedin.com/in/agust%C3%ADn-braco/' target='_blank'>
				<IconLinkedin width='5rem' height='5rem' />
			</a>
		</div>
	);
};

export default HomeContact;
