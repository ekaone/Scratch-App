import React, { useState } from 'react'
import Map from './Map'

export default function MapPortal2() {

  const [markerPosition , setmarkerPosition] = useState({
    lat: -6.175110, 
    lng: 106.865036
  })

  const moveMarker = () => {
    setmarkerPosition({
      lat: markerPosition.lat + 0.0001,
      lng: markerPosition.lng + 0.0001
    })
  }

  return (
    <>
      <Map markerPosition={markerPosition} />
      <div>Current markerPosition: lat: {markerPosition.lat}, lng: {markerPosition.lng}</div>
      <button
        onClick={moveMarker}
      >
        Move marker
      </button>
    </>
  )
}
