import './works.scss';
import { useContext } from 'react';
import { Context } from '../../global/context.jsx';
import { WorksCards } from '../../components';

const Works = () => {
	const { setContactStatus } = useContext(Context);
	setContactStatus(false);
	return (
		<section id='works'>
			<WorksCards />
		</section>
	);
};

export default Works;
