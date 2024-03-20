import projects from './projects.json';

export const Cards = () => (
	<div className='Cards'>
		{projects.map(item => (
			<div key={item.id}>
			</div>
		))}
	</div>
);