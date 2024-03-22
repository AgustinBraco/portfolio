export const MenuButton = props => (
	<button className={`MenuButton ${props.mode}`} onClick={props.onClick}>
		<img
			src={`/assets/menu_${props.mode}.png`}
			alt='menu_icon'
			className={`MenuIcon ${props.mode}`}
		/>
	</button>
);
