import React from 'react'
// components
import Tag from "../Tag"
import Stored from "../Stored"
import Camera from '../Camera'
import MapBoxGL from '../MapBoxGL'

export const Components = [
  { id: 0, component: <MapBoxGL />, label: 'Mapbox' },
  { id: 1, component: <Tag />, label: 'Tag' },
  { id: 2, component: <Stored />, label: 'Mapbox' },
  { id: 3, component: <Camera />, label: 'Camera' }
]