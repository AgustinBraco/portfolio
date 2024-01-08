import { useContext } from 'react';
import { Context } from "../global/context.jsx";
import { HomePicture, HomeDescription, HomeContact } from '../components';

const Home = () => {
	const { setContactStatus } = useContext(Context);
	setContactStatus(false);
	return (
		<section id='home'>
			<HomePicture />
			<HomeDescription />
			<HomeContact />
		</section>
	);
};

export default Home;
