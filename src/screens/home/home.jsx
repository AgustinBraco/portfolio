import './home.scss';
import { useContext } from 'react';
import { HomePicture, HomeDescription, HomeContact } from '../../components';
import { Context } from "../../global/context.jsx";

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
