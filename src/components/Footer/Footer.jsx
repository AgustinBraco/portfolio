import { Link } from 'react-router-dom';

export const Footer = () => (
	<footer className='Footer'>
		<div>
			<p className='FooterTitle'>Contacto</p>
			<p className='FooterText'>bracoagustin@gmail.com</p>
			<Link
				target='_blank'
				className='FooterText'
				to={'https://www.linkedin.com/in/agust%C3%ADn-braco/'}
			>
				linkedin/agustin.braco
			</Link>
		</div>

		<div>
			<Link className='FooterLink' to={'/'}>
				Inicio
			</Link>
			<Link className='FooterLink' to={'/projects'}>
				Proyectos
			</Link>
		</div>

		<div>
			<hr />
			<p>Copyright © 2024 all rights reserved.</p>
		</div>
	</footer>
);
