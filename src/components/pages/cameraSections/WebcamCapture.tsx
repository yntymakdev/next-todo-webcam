'use client';

import Webcam from 'react-webcam';
import scss from './WebcamCapture.module.scss';
import { useState, useRef } from 'react';
import axios from 'axios';

const WebcamCapture = () => {
	const webCam = useRef<Webcam>(null);
	const [images, setImages] = useState([]);

	const screenshot = async () => {
		const imgSrc = webCam.current?.getScreenshot();
		if (imgSrc) {
			await uploadImg(imgSrc);
		} else {
			console.error('Failed to capture image');
		}
	};

	const uploadImg = async (base64ImageUrl: string) => {
		try {
			const blob = await fetch(base64ImageUrl).then((res) => res.blob());
			const formData = new FormData();
			formData.append('file', blob, 'screenshot.png');

			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_UPLOAD_URL}/upload/file`,
				formData
			);

			const { data: responseData } = await axios.post(
				process.env.NEXT_PUBLIC_API_URL!,
				{
					img: response.data.url
				}
			);
			console.log(responseData);
		} catch (error) {
			console.error('Error uploading image:', error);
		}
	};

	return (
		<section className={scss.WebcamCapture}>
			<div className="container">
				<div className={scss.content}>
					<h1>Camera</h1>
					<Webcam
						audio={false}
						ref={webCam}
						screenshotFormat="image/png"
						width={500}
						height={500}
					/>
					<button onClick={screenshot}>Capture Image</button>
					<div className={scss.imagesContainer}>
						{images.map((img, index) => (
							<img key={index} src={img} alt={`Image ${index + 1}`} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default WebcamCapture;
