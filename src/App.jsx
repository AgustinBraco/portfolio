import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Projects, Error } from './screens';
import { Loader, Header, Footer } from './components';

const App = () => {
	return (
		<Router>
			<Loader />
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/projects' element={<Projects />} />
				<Route path='*' element={<Error />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default App;
