import React from 'react';
import './ImageList.css';
import Image from '../Image/Image';

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
	}
  
	handleChange(event) {
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
 
	
	deleteImg(id) {
		let filteredImages = this.state.images.filter( (img) => {return img.id !== id});
		this.setState({images: filteredImages});
	}

	

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
													imgDeleted={this.deleteImg.bind(this, image.id)}/> 
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