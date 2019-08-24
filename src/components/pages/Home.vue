<template>
  <div class="home">
    <app-logo
      :logoStyle="{
        width: '300px',
        height: '150px'
      }"
    ></app-logo>

    <h2>Atoms</h2>
    <div>ロゴ</div>
    <app-logo></app-logo>

    <div>リンク</div>
    <AppLink
      label="ONE COMPATH"
      path="https://onecompath.com/"
      :isNewWindow="true"
    />

    <div>インプット</div>
    <app-input></app-input>

    <div>ボタン</div>
    <app-button :label="'ボタン'" @click="click"></app-button>
    <app-button
      :label="'roundボタン'"
      :btnType="'round'"
      @click="click"
    ></app-button>

    <div>タグ</div>
    <app-tag :label="'タグラベル'"></app-tag>

    <h2>molecules</h2>
    <div>サーチinput</div>
    <search-form v-model="searchInput" @searchClick="search"></search-form>
    <span>{{ searchInput }}</span>
    click<span>{{ timestamp }}</span>
  </div>
</template>

<script>
// @ is an alias to /src
import AppTag from '../atoms/AppTag.vue'
import AppLink from '../atoms/AppLink'
import AppLogo from '../atoms/AppLogo.vue'
import AppInput from '../atoms/AppInput.vue'
import AppButton from '../atoms/AppButton.vue'
import SearchForm from '../molecules/SearchForm.vue'

export default {
  name: 'home',
  components: {
    AppTag,
    AppLogo,
    AppLink,
    AppInput,
    AppButton,
    SearchForm
  },
  data() {
    return {
      searchInput: 'initial',
      timestamp: ''
    }
  },
  methods: {
    click(e) {
      window.console.log(e)
    },
    search(e) {
      this.timestamp = e.timeStamp
    }
  }
}
</script>
