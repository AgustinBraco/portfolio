import './worksCards.scss';
import { Link } from 'react-router-dom';
import { DataWorks } from '../../data';

const WorksCards = () => {
	return (
		<div>
			{DataWorks.map(item => (
				<Link key={item.id} to={item.link}>
					<h3>{item.name}</h3>
					<img src={item.image} alt='image' />
				</Link>
			))}
		</div>
	);
};

export default WorksCards;
