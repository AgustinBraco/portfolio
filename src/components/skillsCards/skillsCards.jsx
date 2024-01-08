import './skillsCards.scss';
import { DataSkills } from '../../data';

const SkillsCards = () => {
	return (
		<div className='cardsContainer'>
			{DataSkills.map(item => (
				<div key={item.id} className='cardWrapper'>
					<h3 className='cardTitle'>{item.name}</h3>
					<img className='cardImage' src={item.icon} alt='icon' />
				</div>
			))}
		</div>
	);
};

export default SkillsCards;
