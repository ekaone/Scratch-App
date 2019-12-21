import React, { useState } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import './Container.css'

export default function MapPortal() {

  const [latlong, setLatlong] = useState({
    lat: '',
    lng: ''
  })

  const handleLatLong = (e) => {
    let ll = e.latlng
    setLatlong({ lat: ll.lat, lng: ll.lng })
  }  
  
  console.log(latlong)

  return (
    <>
      <Map
        center={[-6.175110, 106.865036]}
        zoom={6}
        maxZoom={10}
        attributionControl={true}
        zoomControl={true}
        doubleClickZoom={true}
        scrollWheelZoom={true}
        dragging={true}
        animate={true}
        easeLinearity={0.35}
        onClick={handleLatLong}
      >
        <TileLayer
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        <Marker position={[-6.175110, 106.865036]}>
          <Popup>
            Popup for any custom information.
          </Popup>
        </Marker>
      </Map>
      <br />
      <pre>
        Lat: <b>{ latlong.lat }</b> -- Lng: <b>{ latlong.lng }</b>
      </pre>
    </>
  )
}
