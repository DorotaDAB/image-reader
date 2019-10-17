import React from 'react';
import './ImageList.css';
import Image from '../Image/Image'

class ImageList extends React.Component {
	constructor() {
		super();
	}
	render() {
		return (
			<div className="images-container">
				<h1>Here you will see images with descriptions and properties</h1>
				<Image />
			</div>
		)
	}
};

export default ImageList;