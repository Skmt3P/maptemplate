import { config } from '../config'
const Config = {
  // eslint-disable-next-line no-unused-vars
  install: function(Vue, options) {
    Vue.prototype.$config = config
  }
}
export default Config
