import './home.css';
import { HomePicture, HomeDescription } from '../../components'

const Home = () => {
	return (
		<div className='center'>
			<HomePicture/>
			<HomeDescription />
		</div>
	);
};

export default Home;
