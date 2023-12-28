import { useEffect } from 'react';
import './contactTimer.scss';

const ContactTimer = () => {
	useEffect(() => {
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
		setInterval(currentTime, 1000);
	}, []);

	return (
		<div className='timerContainer'>
			<span id='timer'></span>
		</div>
	);
};

export default ContactTimer;
