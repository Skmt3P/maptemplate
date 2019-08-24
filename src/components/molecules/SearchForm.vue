<template>
  <div class="search-form">
    <AppInput
      :type="inputType"
      :value="value"
      :placeholder="inputPlaceholder"
      @input="handleInput"
      @change="handleChange"
    />
    <AppButton label="Search" @click="searchClick" />
  </div>
</template>

<script>
import AppButton from '../atoms/AppButton'
import AppInput from '../atoms/AppInput'
export default {
  name: 'SearchForm',
  components: {
    AppButton,
    AppInput
  },
  props: {
    inputType: {
      type: String,
      default: 'text'
    },
    inputPlaceholder: {
      type: String,
      default: 'キーワード入力'
    },
    value: {
      type: [String, Number],
      required: true
    }
  },
  methods: {
    handleInput(val) {
      this.$emit('input', val)
    },
    handleChange(val) {
      this.$emit('change', val)
    },
    searchClick(e) {
      if (this.value) this.$emit('searchClick', e)
    }
  }
}
</script>
<style lang="scss" scoped></style>
