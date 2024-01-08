import { useContext } from 'react';
import { Context } from '../global/context.jsx';
import { SkillsCards } from '../components/index.js';

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
