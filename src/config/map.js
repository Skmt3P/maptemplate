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
