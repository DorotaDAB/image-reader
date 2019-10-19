import React from 'react';
import './ImageList.css';
import Image from '../Image/Image';
import EXIF from '../../../node_modules/exif-js';

class ImageList extends React.Component {
	constructor() {
		super();

		this.state = {
			images: [],
			nextId: 1
		}

		this.handleChange = this.handleChange.bind(this);
		this.displayImages = this.displayImages.bind(this);
		this.deleteImg = this.deleteImg.bind(this);
		this.onLoadHandler = this.onLoadHandler.bind(this);
	}
  
	handleChange(event) {
		if (event.target.files.length > 0) {
			this.setState({ 
				images: [ ...this.state.images, 
					{ file: URL.createObjectURL(event.target.files[0]), 
						name: event.target.files[0].name,
						size: event.target.files[0].size,
						type: event.target.files[0].type,
						id: this.state.nextId}] }
			);
		}
  
		let currentNextId = this.state.nextId;
		this.setState({nextId: ++currentNextId});
	}
 
	deleteImg(id) {
		let filteredImages = this.state.images.filter( (img) => {return img.id !== id});
		this.setState({images: filteredImages});
	}
 
	onLoadHandler(event) {
		let component = this;
		
		EXIF.getData(event.target, function() {
		let long = EXIF.getTag(this, 'GPSLongitude');
		let lat = EXIF.getTag(this, 'GPSLatitude');
		
		let loadedImageId = Number(this.id);
		let foundedIndex = component.state.images.findIndex((image) => { return image.id === loadedImageId}); 
		
		let currentImages = component.state.images;
		let foundedImage = currentImages[foundedIndex];
		foundedImage.longitude = long;
		foundedImage.latitude = lat;

		component.setState({
			images: currentImages});
	})};

	displayImages() {
		if (this.state.images.length > 0) {
			return (
				<div className="images-container">
					{this.state.images.map( (image) => {
										return (
											<div className="list-item" key={image.id}>
												<Image 
													file={image.file} 
													name={image.name}
													type={image.type}
													size={image.size}
													id={image.id}
													long={image.longitude}
													lat={image.latitude}
													imgDeleted={this.deleteImg.bind(this, image.id)}
													loaded={this.onLoadHandler}/> 
											</div>
										)
									})
							}
				</div>
			) 
		} 
	}

	render() {
		return (
			<div className="main-cointainer">
				<h1>Your image gallery</h1>
				<input type="file" name="file" id="file" className="btn btn-upload" onChange={this.handleChange} />
				<label htmlFor="file">Choose a file</label>
				{this.displayImages()}
			</div>
		);
	}
};

export default ImageList;