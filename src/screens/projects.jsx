import { useContext } from 'react';
import { Context } from '../global/context.jsx';
import { ProjectsCards } from '../components';

const Projects = () => {
	const { setContactStatus } = useContext(Context);
	setContactStatus(false);
	return (
		<section id='projects'>
			<ProjectsCards />
		</section>
	);
};

export default Projects;
