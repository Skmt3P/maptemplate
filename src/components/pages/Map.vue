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
      @zoom="zoomUpdated"
      @center="centerUpdated"
      @bounds="boundsUpdated"
      @controlClick="controlClick"
      @markerClick="markerClick"
    ></app-map>
  </div>
</template>
<script>
import { latLng } from 'leaflet'
import { createNamespacedHelpers } from 'vuex'
import AppMap from '../organisms/AppMap'
import { tileProviders, maxMinZoom } from '../../config/map'

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
      tileProviders: tileProviders,
      maxZoom: maxMinZoom.maxZoom,
      minZoom: maxMinZoom.minZoom,
      bounds: {},
      markers: []
    }
  },
  computed: {
    ...mapGettersOfMaps(['latLngZoom']),
    zoomLevel() {
      return this.latLngZoom.zoom ? this.latLngZoom.zoom : this.$config.zoom
    },
    center() {
      return this.latLngZoom.lat !== null && this.latLngZoom.lng !== null
        ? latLng(this.latLngZoom.lat, this.latLngZoom.lng)
        : latLng(this.$config.lat, this.$config.lng)
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
