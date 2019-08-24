<template>
  <div id="app">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>
<script>
import AppHeader from './components/organisms/AppHeader.vue'
import AppFooter from './components/organisms/AppFooter.vue'
export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>
<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Ubuntu,
    'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
    'Segoe UI Symbol', Arial, 'ヒラギノ角ゴ Pro W3', 'Hiragino Kaku Gothic Pro',
    メイリオ, Meiryo, 'ＭＳ Ｐゴシック', 'MS PGothic';
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 56px;
  bottom: 0;
  left: 0;
  right: 0;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>
