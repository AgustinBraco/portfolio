import './error.scss';
import { useContext } from 'react';
import { Context } from '../../global/context.jsx';

const Error = () => {
	const { setContactStatus } = useContext(Context);
	setContactStatus(false);
	return <div></div>;
};

export default Error;
