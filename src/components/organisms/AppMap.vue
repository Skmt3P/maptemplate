<template>
  <div id="map">
    <l-map
      :zoom="zoom"
      :center="center"
      :bounds="bounds"
      :style="mapStyle"
      :options="mapOptions"
      :min-zoom="minZoom"
      :max-zoom="maxZoom"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
      @ready="mapReady"
    >
      <l-control-layers
        :position="layersPosition"
        :collapsed="true"
        :sort-layers="true"
      />
      <l-tile-layer
        v-for="tileProvider in tileProviders"
        :key="tileProvider.name"
        :name="tileProvider.name"
        :visible="tileProvider.visible"
        :url="tileProvider.url"
        :attribution="tileProvider.attribution"
        layer-type="base"
      />
      <l-layer-group
        v-for="overlay in overlayTileProviders"
        :key="overlay.name"
        :visible="overlay.visible"
        :name="overlay.name"
        layer-type="overlay"
      >
        <l-tile-layer
          :name="overlay.name"
          :visible="overlay.visible"
          :url="overlay.url"
          :options="overlay.options"
          layer-type="overlay"
        />
      </l-layer-group>
      <l-control-zoom :position="zoomPosition" />
      <l-control-attribution
        :position="attributionPosition"
        :prefix="attributionPrefix"
      />
      <l-control-scale
        :position="scalePosition"
        :imperial="imperial"
        :metric="metric"
      />
      <l-marker
        v-for="marker in markers"
        :key="marker.id"
        :visible="marker.visible"
        :draggable="marker.draggable"
        :lat-lng="marker.position"
        :icon="marker.icon"
        @click="markerClick(marker)"
      >
        <l-popup :content="marker.tooltip" />
      </l-marker>
      <l-control :position="customControlPosition">
        <app-button @click="clickHandler" :label="'getCenter'"> </app-button>
      </l-control>
    </l-map>
  </div>
</template>
<script>
import {
  LMap,
  LMarker,
  LPopup,
  LControl,
  LTileLayer,
  LLayerGroup,
  LControlZoom,
  LControlScale,
  LControlLayers,
  LControlAttribution
} from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'
import AppButton from '../atoms/AppButton.vue'
import { Icon } from 'leaflet'
delete Icon.Default.prototype._getIconUrl
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
import { attributionPrefix, mapOptions } from '../../config/map'

export default {
  name: 'AppMap',
  components: {
    LMap,
    LPopup,
    LMarker,
    LControl,
    LTileLayer,
    LLayerGroup,
    LControlZoom,
    LControlScale,
    LControlLayers,
    LControlAttribution,
    AppButton
  },
  props: {
    mapStyle: {
      type: Object,
      default: () => ({
        height: '100%',
        width: '100%'
      })
    },
    zoom: {
      type: Number,
      required: true
    },
    center: {
      type: [Array, Object],
      required: true
    },
    bounds: {
      type: Object,
      default: () => {}
    },
    maxZoom: {
      type: Number,
      required: true
    },
    minZoom: {
      type: Number,
      required: true
    },
    layersPosition: {
      type: String,
      default: 'topright'
    },
    tileProviders: {
      type: Array,
      required: true
    },
    overlayTileProviders: {
      type: Array,
      default: () => []
    },
    zoomPosition: {
      type: String,
      default: 'topleft'
    },
    attributionPosition: {
      type: String,
      default: 'bottomright'
    },
    scalePosition: {
      type: String,
      default: 'bottomleft'
    },
    customControlPosition: {
      type: String,
      default: 'bottomleft'
    },
    imperial: {
      type: Boolean,
      default: false
    },
    metric: {
      type: Boolean,
      default: true
    },
    markers: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      mapOptions: mapOptions,
      attributionPrefix: attributionPrefix
    }
  },
  methods: {
    zoomUpdated(zoom) {
      this.$emit('zoom', zoom)
    },
    centerUpdated(center) {
      this.$emit('center', center)
    },
    boundsUpdated(bounds) {
      this.$emit('bounds', bounds)
    },
    clickHandler() {
      this.$emit('controlClick')
    },
    markerClick(marker) {
      this.$emit('markerClick', marker)
    },
    mapReady(map) {
      this.zoomUpdated(map.getZoom())
      this.centerUpdated(map.getCenter())
      this.boundsUpdated(map.getBounds())
      this.$emit('mapReady')
    }
  }
}
</script>
<style lang="scss" scoped>
#map {
  position: relative;
  height: 100%;
}
/deep/ .leaflet-control-container:after {
  content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAA11AAANdQBXmXlCAAAAClJREFUKJFjYMAC/jMw/P/PwPAfmxwTNkF8YBBqYMTlOarZgBUM92AFAPM4CgrOWqaXAAAAAElFTkSuQmCC);
  z-index: 1000;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
