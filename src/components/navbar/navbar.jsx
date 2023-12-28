import './navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className='navbarContainer'>
			<nav className='navbar'>
				<ul className='navbarList'>
					<li className='navbarItem'>
						<Link className='navbarLink' to='/'>
							Home
						</Link>
					</li>
					<li className='navbarItem'>
						<Link className='navbarLink' to='/skills'>
							Skills
						</Link>
					</li>
					<li className='navbarItem'>
						<Link className='navbarLink' to='/projects'>
							Projects
						</Link>
					</li>
					<li className='navbarItem'>
						<Link className='navbarLink' to='/contact'>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
