import './home.scss';
import { HomePicture, HomeDescription, HomeContact } from '../../components';

const Home = () => {
	return (
		<section id='home'>
			<HomePicture />
			<HomeDescription />
			<HomeContact />
		</section>
	);
};

export default Home;
