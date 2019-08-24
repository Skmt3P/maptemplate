const map = {
  namespaced: true,
  state: {
    lat: null,
    lng: null,
    zoom: null
  },
  mutations: {
    latLng(state, payload) {
      state.lat = payload.lat
      state.lng = payload.lng
    },
    zoom(state, payload) {
      state.zoom = payload.zoom
    }
  },
  actions: {
    setLatLng({ commit }, { lat, lng }) {
      commit('latLng', { lat, lng })
    },
    setZoom({ commit }, { zoom }) {
      commit('zoom', { zoom })
    }
  },
  getters: {
    latLngZoom: state => ({ lat: state.lat, lng: state.lng, zoom: state.zoom })
  }
}

export default map
