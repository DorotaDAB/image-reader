import React from 'react';
import './Image.css';
import lang from '../../assets/lang/lang.json';

class Image extends React.Component {
	constructor() {
		super();

		this.getImage = this.getImage.bind(this);	
	}

  getImage() {
		let formattedSize = Math.round(this.props.size / 1024);

		let getCoords = () => {
			return (
				<>
					<p> {lang.latitude} {this.props.lat} </p>
					<p> {lang.longitude} {this.props.long} </p>
				</>	
			)
		}

		let gpsData = this.props.long !== undefined ? getCoords() : <p>Data not available</p>;

		return (
			<div className="item-container">
				<img src={this.props.file} alt={this.props.name} id={this.props.id} onLoad={this.props.imgLoaded}/>
				<div>
					<p>{lang.fileName}</p> 
					<p>{this.props.name} </p>
				</div>
				<div>
					<p>{lang.gps}</p>
					{gpsData}
				</div>
				<div>
					<p>{lang.size}</p> 
					<p>{formattedSize} {lang.kb} </p> 
				</div>
				<button className="btn btn-delete" onClick={this.props.imgDeleted}> {lang.delete} </button>
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