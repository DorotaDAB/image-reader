import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  margin: '0% -40%',
  padding: '0',
  width: '80vw',
  height: '40vw',
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      images: this.props.images,
    }

    this.displayMap = this.displayMap.bind(this);
    this.displayMarkers = this.displayMarkers.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ 
      images: nextProps.images,
    });  
  }

  displayMap = () => {
    return(
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: 43.467448,
          lng: 11.885127
        }}
      >
        {this.displayMarkers()}
      </Map>
    )
  }

  displayMarkers = () => {
    return this.state.images
      .filter( (image) => {return image.hasOwnProperty('longitude')})
      .map((image) => {
        return (
          <Marker 
            key={image.id}
            position={{
              lat: image.latitude,
              lng: image.longitude
            }}
          />
        );
      });
  }

  render() {  
    return (
      <>
       {this.displayMap()}
      </>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'INSERT_YOUR_GOOGLE_API_KEY'
})(MapContainer);