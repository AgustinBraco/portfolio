import { useEffect, useRef } from 'react';
import { Profile, Info, Links, Contact } from '../components';

export const Home = () => {
	const scroll = useRef(null);

	useEffect(() => {
		scroll.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}, []);

	return (
		<main ref={scroll}>
			<Profile />
			<Info />
			<Links />
			<Contact />
		</main>
	);
};
