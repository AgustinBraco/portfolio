import './projects.scss';
import { useContext } from 'react';
import { Context } from '../../global/context.jsx';

const Projects = () => {
	const { setContactStatus } = useContext(Context);
	setContactStatus(false);
	return (
		<section id='projects'>
			<p>PROJECTS</p>
		</section>
	);
};

export default Projects;
