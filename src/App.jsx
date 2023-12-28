import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Home, Skills, Projects, Contact, Error } from './screens';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/skills' element={<Skills />} />
				<Route exact path='/projects' element={<Projects />} />
				<Route exact path='/contact' element={<Contact />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	);
};

export default App;
