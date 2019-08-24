<template>
  <span class="app-tag">
    {{ label }}
  </span>
</template>

<script>
export default {
  name: 'AppTag',
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.app-tag {
  background-color: $primary;
  color: #fff;
  padding: 0 0.5em;
  border-radius: 3px;
}
</style>
