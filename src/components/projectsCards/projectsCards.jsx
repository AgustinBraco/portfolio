import './projectsCards.scss';
import { Link } from 'react-router-dom';
import { DataProjects } from '../../data';

const ProjectsCards = () => {
	return (
		<div>
			{DataProjects.map(item => (
				<Link key={item.id} to={item.link}>
					<h3>{item.name}</h3>
					<img src={item.image} alt='image' />
				</Link>
			))}
		</div>
	);
};

export default ProjectsCards;
