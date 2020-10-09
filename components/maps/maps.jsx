import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

import { Container } from "./maps.style";

const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
  borderRadius: "5px",
  boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.2)",
};

const mapStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "5px",
};

var myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

const Maps = ({ google, latlong, title }) => {
  const latLong = latlong.split(", ");
  return (
    <Container>
      <Map
        google={google}
        zoom={14}
        style={mapStyles}
        styles={myStyles}
        containerStyle={containerStyle}
        initialCenter={{
          lat: Number(latLong[0]) + 0.0005,
          lng: Number(latLong[1]) - 0.0005,
        }}
      >
        <Marker
          position={{
            lat: Number(latLong[0]) + 0.0005,
            lng: Number(latLong[1]) - 0.0005,
          }}
          title={title}
          name={title}
          animation={google.maps.Animation.BOUNCE}
          icon={{
            url: "/logo.png",
            anchor: new google.maps.Point(32, 32),
            scaledSize: new google.maps.Size(40, 40),
          }}
        />
      </Map>
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBAVnqm6RoXqOOBe88VqV5aDaRFgL-YSQc",
  language: "en",
})(Maps);
