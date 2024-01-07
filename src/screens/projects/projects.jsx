import './projects.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../global/context.jsx';
import { DataProjects } from '../../data';

const Projects = () => {
	const { setContactStatus } = useContext(Context);
	setContactStatus(false);
	return (
		<section id='projects'>
			<div>
				{DataProjects.map(item => (
					<Link key={item.id} to={item.link}>
						<h3>{item.name}</h3>
						<img src={item.image} alt='image' />
					</Link>
				))}
			</div>
		</section>
	);
};

export default Projects;
