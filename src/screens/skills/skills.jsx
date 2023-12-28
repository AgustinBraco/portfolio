import './skills.scss';
import DataSkills from '../../data/skills.json';

const Skills = () => {
	return (
		<section id='skills'>
			<div>
				{DataSkills.map(item => (
					<div key={item.id}>
						<h3>{item.name}</h3>
						<img src={item.icon} alt='icon' />
					</div>
				))}
			</div>
		</section>
	);
};

export default Skills;
