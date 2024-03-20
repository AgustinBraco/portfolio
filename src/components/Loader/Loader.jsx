import { useRef, useState, useEffect } from 'react';

export const Loader = () => {
	const loaderContainer = useRef(null);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
			loaderContainer.current.classList.add('loaded');
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<div className='loaderContainer' ref={loaderContainer}>
			{isLoading && <div className='loader'></div>}
		</div>
	);
};