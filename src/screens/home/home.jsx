import './home.scss';
import { HomePicture, HomeDescription, HomeContact } from '../../components'

const Home = () => {
	return (
		<div>
			<HomePicture/>
			<HomeDescription />
			<HomeContact />
		</div>
	);
};

export default Home;
