import { Link } from 'react-router-dom';

export const Logo = props => {
	return (
		<Link to={'/'}>
			<div className={`LogoImage ${props.mode}`}></div>
		</Link>
	);
};
