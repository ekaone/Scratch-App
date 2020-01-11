import React, { useEffect, useState, useRef } from 'react'
import mapboxgl from 'mapbox-gl';
import './site.css'

export default function MapBoxGL() {
  const refContainer = useRef(null);
  const [maps, setMaps] = useState({
    lng: 113,
    lat: 2,
    zoom: 2
  })

  mapboxgl.accessToken = 'pk.eyJ1IjoiZGFubnlla2EiLCJhIjoiY2s1MjBjNmFrMDk4eDNvcGd3Ym82NmV4ZCJ9.brJ_6tFfzImlWtaWIr44_w';
  
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: refContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [maps.lng, maps.lat],
      zoom: maps.zoom
    });

    map.on('move', () => {
      setMaps({
        lng: map.getCenter().lng.toFixed(4),
        lat: map.getCenter().lat.toFixed(4),
        zoom: map.getZoom().toFixed(2)
        });
      });
  }, [])

  return (
    <>
      <div className='sidebarStyle'>
        <div>Longitude: {maps.lng} | Latitude: {maps.lat} | Zoom: {maps.zoom}</div>
      </div>
      <div ref={refContainer} className='mapContainer' />
    </>
  )
}
