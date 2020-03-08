import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

require("dotenv").config();

export class MapContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={{ height: "40%", width: "40%" }}
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
