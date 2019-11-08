import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  margin: '0% -30%',
  padding: '0',
  width: '60vw',
  height: '40vw',
};

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
  
    this.displayMap = this.displayMap.bind(this);
    this.displayMarkers = this.displayMarkers.bind(this);
  }

  displayMap = () => {
    let long = this.props.images.length > 0 ? this.props.images[0].longitude : 21.006953;
    let lat = this.props.images.length > 0 ? this.props.images[0].latitude : 52.234334

    return(
      <Map
        google={this.props.google}
        zoom={15}
        style={mapStyles}
        initialCenter={{
          lat: lat,
          lng: long
        }}
        center={{
          lat: lat,
          lng: long
        }}
      >
        {this.displayMarkers()}
      </Map>
    )
  }

  displayMarkers = () => {
    return this.props.images.map((image) => {
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