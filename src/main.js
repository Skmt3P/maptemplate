import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import { store } from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import vconfig from './plugins/config'
import eventHub from './plugins/eventHub'

Vue.use(vconfig)
Vue.use(eventHub)

library.add(faExternalLinkAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
