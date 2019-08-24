const map = {
  namespaced: true,
  state: {
    lat: null,
    lng: null,
    zoom: null,
    /**
     * {
     *   ne_lat: 表示されている地図の緯度が最も高い位置の緯度の値
     *   sw_lat: 表示されている地図の緯度が最も低い位置の緯度の値
     *   ne_lng: 表示されている地図の経度が最も東の位置の経度の値
     *   sw_lng: 表示されている地図の経度が最も西の位置の経度の値
     * }
     */
    bounds: null
  },
  mutations: {
    latLng(state, payload) {
      state.lat = payload.lat
      state.lng = payload.lng
    },
    zoom(state, payload) {
      state.zoom = payload.zoom
    },
    bounds(state, payload) {
      state.bounds = payload
    }
  },
  actions: {
    setLatLng({ commit }, { lat, lng }) {
      commit('latLng', { lat, lng })
    },
    setZoom({ commit }, { zoom }) {
      commit('zoom', { zoom })
    },
    setbounds({ commit }, bounds) {
      commit('bounds', bounds)
    }
  },
  getters: {
    latLngZoom: state => ({ lat: state.lat, lng: state.lng, zoom: state.zoom }),
    displayBounds: state => state.bounds
  }
}

export default map
