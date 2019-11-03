import React from 'react';
import { Map, GoogleApiWrapper  } from 'google-maps-react';

const mapStyles = {
  margin: '0% -40%',
  padding: '0',
  width: '80vw',
  height: '40vw',
};

export class MapContainer extends React.Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 52.235639,
         lng: 20.998219
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'INSERT_YOUR_API_KEY'
})(MapContainer);