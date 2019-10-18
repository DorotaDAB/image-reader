import React from 'react';
import './Image.css';

class Image extends React.Component {
	constructor() {
		super();

		this.getImage = this.getImage.bind(this);
	}
	
  getImage() {
		let formattedSize = Math.round( this.props.size / 1024);

		return (
			<div className="item-container">
				<img src={this.props.file} alt={this.props.name}/>
				<p>File Name: {this.props.name} </p>
				<p>Size: {formattedSize} KB </p> 
		</div>
		)
	}

	render() {
		return (
			this.getImage()
		);
	}
}

export default Image;