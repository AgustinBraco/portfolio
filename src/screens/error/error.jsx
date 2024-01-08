import './error.scss';
import { useContext } from 'react';
import { Context } from '../../global/context.jsx';
import { ErrorContainer } from '../../components';

const Error = () => {
	// TOMAR DESDE ACA LOS DATOS Y PASARLOS
	const { setContactStatus } = useContext(Context);
	setContactStatus(false);
	return	<ErrorContainer />;
};

export default Error;
