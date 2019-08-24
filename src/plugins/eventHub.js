/**
 * @example
 * 親子関係にないcomponent1
 * methods: {
 *   emit(){
 *     this.$eventHub.$emit('eventclick')
 *   }
 * }
 * 親子関係にないcomponent2
 * // 受け取りイベント設定
 * created() {
 *   this.$eventHub.$on('eventclick', this.getClick)
 * },
 * // イベント削除
 * beforeDestroy() {
 *   this.$eventHub.$off('eventclick')
 * },
 * methods: {
 *   getClick(){
 *     console.log('click')
 *   }
 */
const eventHub = {
  // eslint-disable-next-line no-unused-vars
  install: function(Vue, options) {
    Vue.prototype.$eventHub = new Vue()
  }
}
export default eventHub
