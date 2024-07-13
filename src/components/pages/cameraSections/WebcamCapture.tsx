import scss from './WebcamCapture.module.scss';

const WebcamCapture = () => {
	return (
		<section className={scss.WebcamCapture}>
			<div className="container">
				<div className={scss.content}>
					<h1>Camera</h1>
				</div>
			</div>
		</section>
	);
};

export default WebcamCapture;
