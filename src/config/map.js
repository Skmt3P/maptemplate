export const tileProviders = [
  {
    name: 'OpenStreetMap',
    visible: true,
    attribution:
      '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  {
    name: 'OpenTopoMap',
    visible: false,
    url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
    attribution:
      'Map data: &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  }
]

export const attributionPrefix = 'ONECOMPATH'

export const positions = {
  topLeft: 'topleft',
  topRight: 'topright',
  bottomLeft: 'bottomleft',
  bottomRight: 'bottomright'
}

export const maxMinZoom = {
  minZoom: 1,
  maxZoom: 18
}

export const mapOptions = {
  zoomControl: false,
  attributionControl: false,
  zoomSnap: true
}

export const sampleMarkers = [
  {
    id: 'm1',
    position: { lat: 35.65378754697234, lng: 139.60930893906243 },
    tooltip: 'tooltip for marker1',
    draggable: true,
    visible: true
  },
  {
    id: 'm2',
    position: { lat: 35.641703820724466, lng: 139.74982533089906 },
    tooltip: 'tooltip for marker2',
    draggable: true,
    visible: true
  },
  {
    id: 'm3',
    position: { lat: 35.643081422943744, lng: 139.75059780709535 },
    tooltip: 'tooltip for marker3',
    draggable: true,
    visible: true
  },
  {
    id: 'm4',
    position: { lat: 35.644860064097266, lng: 139.7479585134247 },
    tooltip: 'tooltip for marker4',
    draggable: true,
    visible: true
  },
  {
    id: 'm5',
    position: { lat: 35.643482492543626, lng: 139.744589658902 },
    tooltip: 'tooltip for marker5',
    draggable: true,
    visible: true
  }
]
