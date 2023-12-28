import './contactTimer.scss';
import { useEffect, useContext } from 'react';
import { Context } from '../../global/context.jsx';

const ContactTimer = () => {
	const { contactStatus } = useContext(Context);
	let startTimer;

	useEffect(() => {
		if (contactStatus) {
			const currentTime = () => {
				const element = document.getElementById('timer');
				let date = new Date();
				let hh = date.getHours();
				let mm = date.getMinutes();
				let ss = date.getSeconds();
				let time = `${hh}:${mm}:${ss}`;
				element.innerText = time;
			};
			currentTime();
			startTimer = setInterval(currentTime, 1000);
		}

		return () => {
			clearInterval(startTimer);
		}
	}, [contactStatus]);

	return (
		<div className='timerContainer'>
			<span id='timer'></span>
		</div>
	);
};

export default ContactTimer;
