import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import React,{ useEffect, useRef, useMemo } from "react";
import { Spinner } from "react-bootstrap";
import { lat, lng, MAP_KEY } from "./Config";


export default function MapComponent(){
const {isLoaded} = useLoadScript({googleMapsApiKey: MAP_KEY});

if(!isLoaded){
  return (<Spinner animation="border" />);
}
  return (<Map/>);
}


function Map(){
  return <GoogleMap zoom={14} center={{ lat: lat, lng: lng }} mapContainerClassName="map-container">
    <MarkerF position={{ lat: lat, lng: lng }}  cursor="I am here" />
  </GoogleMap>
}