export const Popup = props => (
	<div className='Popup'>
		<p className='PopupTitle'>{props.response.status}</p>
		<p className='PopupText'>{props.response.message}</p>
	</div>
);
