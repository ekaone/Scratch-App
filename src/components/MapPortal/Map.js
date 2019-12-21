import React, { useEffect } from 'react'
import L from "leaflet";

const style = {
  width: "100%",
  height: "300px"
};

export default function Map({ markerPosition }) {

  useEffect(() => {
    const map = L.map("map", {
      center: [-6.175110, 106.865036],
      zoom: 16,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });
    const marker = L.marker(markerPosition).addTo(map);
    if (markerPosition !== markerPosition) {
      marker.setLatLng(markerPosition);
    }
  }, [])
  

  return (
    <>
      <div id="map" style={style} />
    </>
  )
}
