<template>
  <div>
    <footer class="app-footer">
      <div class="app-footer-content">
        <HorizontalLinkList :links="links" />
      </div>
    </footer>
  </div>
</template>
<script>
import HorizontalLinkList from '../molecules/HorizontalLinkList'
import links from '../../router/link'
export default {
  components: {
    HorizontalLinkList
  },
  data() {
    return {
      links: links
    }
  }
}
</script>
<style lang="scss" scoped>
.app-footer {
  padding: 12px;
  border-top: 0.5px solid #eee;
  &-content {
    flex: 1;
    text-align: center;
  }
}
</style>
