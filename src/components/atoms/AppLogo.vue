<template>
  <div class="app-logo">
    <img :src="src" :style="logoStyle" />
  </div>
</template>

<script>
export default {
  name: 'AppLogo',
  props: {
    src: {
      type: String,
      default: require('../../assets/logo_b.svg')
    },
    logoStyle: {
      type: Object,
      default: () => ({
        width: '100px',
        height: '35px'
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
