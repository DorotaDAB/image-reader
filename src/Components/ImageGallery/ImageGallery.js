import React from 'react';
import './ImageGallery.css';
import Image from '../Image/Image';
import EXIF from '../../../node_modules/exif-js';
import lang from '../../assets/lang/lang.json';
import Map from '../Map/Map';

class ImageGallery extends React.Component {
	constructor() {
		super();

		this.state = {
			images: [],
			nextId: 1
		}

		this.fileInputChangedHandler = this.fileInputChangedHandler.bind(this);
		this.displayImages = this.displayImages.bind(this);
		this.imageDeletedHandler = this.imageDeletedHandler.bind(this);
		this.imageLoadedHandler = this.imageLoadedHandler.bind(this);
	}
  
	fileInputChangedHandler(event) {
		if (event.target.files.length > 0) {
			if (event.target.files[0].type !== "image/jpeg") {
				alert(lang.fileTypeNotSupported);
				return;
			}
			if (event.target.files[0].size > 1024*1024) {
				alert(lang.fileSizeNotSupported);
				return
			}

			this.setState({ 
				images: [ ...this.state.images, 
				{ file: URL.createObjectURL(event.target.files[0]), 
					name: event.target.files[0].name,
					size: event.target.files[0].size,
					type: event.target.files[0].type,
					id: this.state.nextId}] }
			);
			let currentNextId = this.state.nextId;
			this.setState({nextId: ++currentNextId});
		}
	}
 
	imageDeletedHandler(id) {
		let filteredImages = this.state.images.filter( (img) => {return img.id !== id});
		this.setState({images: filteredImages});
	}
 
	imageLoadedHandler(event) {
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
		})
	};

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
													imgDeleted={this.imageDeletedHandler.bind(this, image.id)}
													imgLoaded={this.imageLoadedHandler}/> 
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
				<h1>{lang.imgGallery}</h1>
				<input type="file" 
					className="upload-form" 
					accept="image/jpeg"
					onChange={this.fileInputChangedHandler}
					data-title={lang.chooseFile} 
					/>
				{this.displayImages()}
				<Map />
			</div>
		);
	}
};

export default ImageGallery;