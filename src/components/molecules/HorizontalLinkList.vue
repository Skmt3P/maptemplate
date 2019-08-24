<template>
  <div v-if="links.length !== 0" class="horizontal-link-list">
    <ul>
      <template v-for="link in links">
        <li :key="link.label">
          <AppLink :label="link.name" :path="link.path" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import AppLink from '../atoms/AppLink'
export default {
  name: 'HorizontalLinkList',
  components: {
    AppLink
  },
  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>
<style lang="scss" scoped>
.horizontal-link-list {
  ul {
    padding-left: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    li {
      display: inline-block;
    }
  }
}
</style>
