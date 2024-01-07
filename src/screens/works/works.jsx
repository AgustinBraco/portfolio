import './works.scss';
import { useContext } from 'react';
import { Context } from '../../global/context.jsx';

const Works = () => {
	const { setContactStatus } = useContext(Context);
	setContactStatus(false);
	return (
		<section id='works'>
			<p>WORKS</p>
		</section>
	);
};

export default Works;
