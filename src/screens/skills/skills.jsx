import './skills.scss';
import { useContext } from 'react';
import { Context } from '../../global/context.jsx';
import { SkillsCards } from '../../components';

const Skills = () => {
	const { setContactStatus } = useContext(Context);
	setContactStatus(false);
	return (
		<section id='skills'>
			<SkillsCards />
		</section>
	);
};

export default Skills;
