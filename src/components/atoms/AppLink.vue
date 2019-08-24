<template>
  <a v-if="isNewWindow" class="app-link" :href="path" target="_blank">
    {{ label }}
    <template v-if="isAwesomeIcon">
      <font-awesome-icon icon="external-link-alt" />
    </template>
  </a>
  <router-link v-else class="app-link" :to="path">
    {{ label }}
  </router-link>
</template>

<script>
export default {
  name: 'AppLink',
  props: {
    label: {
      type: String,
      required: true
    },
    path: {
      type: String,
      required: true
    },
    isNewWindow: {
      type: Boolean,
      default: false
    },
    isAwesomeIcon: {
      type: Boolean,
      default: true
    }
  }
}
</script>
<style lang="scss" scoped>
.app-link {
  color: #4fc08d;
  text-decoration: none;
  margin: 0 4px 0 4px;
  &:hover {
    color: #fff;
    background-color: #4fc08d;
  }
}
.router-link-exact-active {
  margin-bottom: 4px;
  border-bottom: 2px solid #4fc08d;
}
</style>
