import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Skills, Works, Projects, Contact, Error } from './screens';
import { Navbar } from './components';

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/skills' element={<Skills />} />
				<Route exact path='/works' element={<Works />} />
				<Route exact path='/projects' element={<Projects />} />
				<Route exact path='/contact' element={<Contact />} />
				<Route path='*' element={<Error />} />
			</Routes>
		</Router>
	);
};

export default App;
