import { Link } from 'react-router-dom';

export const Links = () => (
	<section className='Links'>
		<div>
			<p className='LinkTitle'>Desarrollo &</p>
			<p className='LinkTitle'>Diseño</p>
			<p className='LinkTextFirst'>Webs, APIs, mobile apps y experimentos.</p>
			<Link className='Button' to={'/projects'}>
				<span>Proyectos</span>
				<div className='Arrow'></div>
			</Link>
		</div>

		<hr />

		<div>
			<p className='LinkTitle'>Conexión &</p>
			<p className='LinkTitle'>Guía</p>
			<p className='LinkTextSecond'>
				Acompaño a desarrolladores y diseñadores en sus primeros pasos. Unite para colaborar.
			</p>
			<Link className='Button' target='_blank' to={'https://discord.gg/97mYUxBZA4'}>
				<span>Discord</span>
				<div className='Arrow'></div>
			</Link>
		</div>
	</section>
);
