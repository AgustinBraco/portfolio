import { useState } from 'react';
import { Logo, MenuButton, Menu } from '..';

export const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<div>
			<header className='Header'>
				{isMenuOpen ? <Logo mode='open' /> : <Logo mode='close' />}
				{isMenuOpen ? (
					<MenuButton mode='open' onClick={toggleMenu} />
				) : (
					<MenuButton mode='close' onClick={toggleMenu} />
				)}
			</header>
			{isMenuOpen && <Menu toggleMenu={toggleMenu} />}
		</div>
	);
};
