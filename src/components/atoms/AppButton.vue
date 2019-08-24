<template>
  <button
    :class="btnType"
    :style="btnStyle"
    :disabled="disabled"
    :type="type"
    @click="handleClick"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    label: {
      type: String,
      required: true
    },
    btnType: {
      type: String,
      // normal or round
      default: 'normal'
    },
    btnStyle: {
      type: Object,
      default: () => {}
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.normal {
  color: $primary;
  border-color: $primary;
  padding: 0.5em;
  box-shadow: 0.5px 0.5px;
  :hover {
    color: #ffffff;
    background-color: $primary;
  }
}
.round {
  color: #ffffff;
  background-color: $primary;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  padding: 6px 10px 6px 10px;
  border-radius: 20px;
  border-color: $primary;
}
</style>
