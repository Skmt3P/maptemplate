<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <app-logo></app-logo>
    <AppLink
      label="ONE COMPATH"
      path="https://onecompath.com/"
      :isNewWindow="true"
    />
    <app-button :label="'ボタン'" @click="click"></app-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import AppLogo from '../atoms/AppLogo.vue'
import AppLink from '../atoms/AppLink'
import AppButton from '../atoms/AppButton.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    AppLogo,
    AppLink,
    AppButton
  },
  methods: {
    click(e) {
      window.console.log(e)
    }
  }
}
</script>
