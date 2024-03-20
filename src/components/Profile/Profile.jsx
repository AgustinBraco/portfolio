import { Picture } from '..';

export const Profile = () => (
	<section className='Profile'>
		<div>
			<div>
				<h2 className='ProfileTitle'>Full Stack</h2>
				<h1 className='ProfileTitle'>Developer</h1>
			</div>

			<p className='ProfileSubtitle'>
				Desarrollo productos sólidos y escalables, enfocados en calidad, accesibilidad y usabilidad.
			</p>
		</div>

		<div className='ProfileTextsContaienr'>
			<div>
				<p className='ProfileText'>
					<b>Frontend</b>
				</p>
				<p className='ProfileText'>
					Interfaces progresivas y fluidas. Diseñadas en pos de la experiencia del usuario.
				</p>
			</div>

			<div>
				<p className='ProfileText'>
					<b>Backend</b>
				</p>
				<p className='ProfileText'>
					Aplicaciones eficientes y optimizadas. Diseñadas en pos de la calidad del producto.
				</p>
			</div>
		</div>

		<Picture />
	</section>
);
