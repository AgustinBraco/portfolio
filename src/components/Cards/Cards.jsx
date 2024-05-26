import projects from './projects.json';
import { Link } from 'react-router-dom';

export const Cards = () => (
	<div className='Cards'>
		{projects.map(item => (
			<div key={item.id} className='Card'>
				<div className='CardImage' style={{ backgroundImage: `url(${item.image})` }}></div>
				<p className='CardTitle'>{item.title}</p>
				<p className='CardText'>
					{item.type} | {item.rol}
				</p>

				<div className='CardLinks'>
					<Link className='CardLink' to={item.repository} target='_blank'>
						<img className='CardLogo' src={`/assets/card_github.png`} alt='github_logo' />
					</Link>
					<Link className='CardLink' to={item.deploy} target='_blank'>
						<img className='CardLogo' src={`/assets/card_link.png`} alt='link_logo' />
					</Link>
				</div>
			</div>
		))}
	</div>
);
