import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

require("dotenv").config();

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "0%"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Map
        containerStyle={containerStyle}
        google={this.props.google}
        zoom={17}
        style={{ height: "400px", width: "400px" }}
        initialCenter={{
          lat: this.props.coordinates.latitude,
          lng: this.props.coordinates.longitude
        }}
      >
        <Marker
          position={{
            lat: this.props.coordinates.latitude,
            lng: this.props.coordinates.longitude
          }}
        />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
