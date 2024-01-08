import './skillsCards.scss';
import { DataSkills } from '../../data';

const SkillsCards = () => {
	return (
		<div>
			{DataSkills.map(item => (
				<div key={item.id}>
					<h3>{item.name}</h3>
					<img src={item.icon} alt='icon' />
				</div>
			))}
		</div>
	);
};

export default SkillsCards;
