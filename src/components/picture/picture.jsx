import './picture.css';

const Picture = ({ width, height }) => {
	return (
		<div className="pictureContainer" style={{ width, height }}>
			<div className="picture"></div>
		</div>
	);
};

export default Picture;
