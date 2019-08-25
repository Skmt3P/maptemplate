<template>
  <div class="app-map">
    <app-map
      :zoom="zoomLevel"
      :center="center"
      :bounds="bounds"
      :maxZoom="maxZoom"
      :minZoom="minZoom"
      :markers="markers"
      :tileProviders="tileProviders"
      :overlayTileProviders="overlayTileProviders"
      @zoom="zoomUpdated"
      @center="centerUpdated"
      @bounds="boundsUpdated"
      @controlClick="controlClick"
      @markerClick="markerClick"
      @mapReady="mapReady"
    ></app-map>
  </div>
</template>
<script>
import { latLng } from 'leaflet'
import { createNamespacedHelpers } from 'vuex'
import AppMap from '../organisms/AppMap'
import {
  tileProviders,
  maxMinZoom,
  sampleMarkers,
  overlayTileProviders
} from '../../config/map'

// store/mapのヘルパー作成
const {
  mapActions: mapActionsOfMaps,
  mapGetters: mapGettersOfMaps
} = createNamespacedHelpers('map')

export default {
  name: 'Map',
  components: {
    AppMap
  },
  data() {
    return {
      bounds: {},
      markers: sampleMarkers,
      maxZoom: maxMinZoom.maxZoom,
      minZoom: maxMinZoom.minZoom,
      tileProviders: tileProviders,
      overlayTileProviders: overlayTileProviders
    }
  },
  computed: {
    ...mapGettersOfMaps(['latLngZoom']),
    zoomLevel() {
      const { zoom } = this.$route.params
      if (zoom) {
        return parseFloat(zoom)
      } else {
        return this.latLngZoom.zoom ? this.latLngZoom.zoom : this.$config.zoom
      }
    },
    center() {
      const { lat, lng } = this.$route.params
      if ((lat, lng)) {
        return latLng(parseFloat(lat), parseFloat(lng))
      } else {
        return this.latLngZoom.lat !== null && this.latLngZoom.lng !== null
          ? latLng(this.latLngZoom.lat, this.latLngZoom.lng)
          : latLng(this.$config.lat, this.$config.lng)
      }
    }
  },
  methods: {
    ...mapActionsOfMaps(['setLatLng', 'setZoom', 'setbounds']),
    async zoomUpdated(zoom) {
      await this.setZoom({ zoom: zoom })
    },
    async centerUpdated(center) {
      await this.setLatLng({ lat: center.lat, lng: center.lng })
    },
    async boundsUpdated(bounds) {
      const b = {
        ne_lat: bounds.getNorthEast().lat,
        sw_lat: bounds.getSouthWest().lat,
        ne_lng: bounds.getNorthEast().lng,
        sw_lng: bounds.getSouthWest().lng
      }
      await this.setbounds(b)
    },
    controlClick() {
      window.alert(JSON.stringify(this.latLngZoom))
    },
    markerClick(marker) {
      console.log(marker)
    },
    mapReady() {
      console.log('initmap')
    }
  }
}
</script>
<style lang="scss" scoped>
.app-map {
  position: relative;
  height: 100%;
}
</style>
