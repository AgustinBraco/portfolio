import { useEffect, useRef } from 'react';
import { Cards } from '../components';

export const Projects = () => {
	const scroll = useRef(null);

	useEffect(() => {
		scroll.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}, []);

	return (
		<section ref={scroll}>
			<Cards />
		</section>
	);
};
