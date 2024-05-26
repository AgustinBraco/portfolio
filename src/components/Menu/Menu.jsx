import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Menu = props => {
	const test = useRef(null);

	useEffect(() => {
		if (test.current && props.mode === 'fade') {
			const timer = setTimeout(() => {
				test.current.classList.add('close');
			}, 600);
			return () => clearTimeout(timer);
		}
	}, [props.mode]);

	return (
		<section ref={test} className={`Menu ${props.mode}`}>
			<div className='MenuLinks'>
				<Link onClick={props.toggleMenu} className='MenuLink' to={'/'}>
					Inicio
				</Link>
				<Link onClick={props.toggleMenu} className='MenuLink' to={'/projects'}>
					Proyectos
				</Link>
				<Link target='_blank' className='MenuLink' to={'https://discord.gg/97mYUxBZA4'}>
					Discord
				</Link>
			</div>

			<div className='MenuContact'>
				<p className='MenuContactTitle'>Contacto</p>
				<p className='MenuContactText'>bracoagustin@gmail.com</p>
				<Link
					target='_blank'
					className='MenuContactText'
					to={'https://www.linkedin.com/in/agust%C3%ADn-braco/'}
				>
					linkedin/agustin.braco
				</Link>
			</div>

			<div className='MenuSocial'>
				<Link target='_blank' to={'https://github.com/AgustinBraco'}>
					<div className='MenuGithub'></div>
				</Link>
				<Link target='_blank' to={'https://www.instagram.com/bracoagustin/'}>
					<div className='MenuInstagram'></div>
				</Link>
			</div>
		</section>
	);
};
