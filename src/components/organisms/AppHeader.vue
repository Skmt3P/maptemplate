<template>
  <div class="app-navbar">
    <div class="nav-bar">
      <div class="nav-bar-cell left">
        <AppLogo />
      </div>
      <div class="nav-bar-cell center">
        <HorizontalLinkList :links="links" />
      </div>
      <div class="nav-bar-cell right">
        <AppLink
          label="ONE COMPATH"
          path="https://onecompath.com/"
          :isNewWindow="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppLink from '../atoms/AppLink'
import AppLogo from '../atoms/AppLogo'
import HorizontalLinkList from '../molecules/HorizontalLinkList'
import links from '../../router/link'
export default {
  name: 'AppHeader',
  components: {
    AppLink,
    AppLogo,
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
.app-navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),
    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);
  .nav-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 8px 16px;
    background-color: #fff;
    .left {
      text-align: left;
      flex: 1;
    }
    .center {
      text-align: center;
      flex: 4;
    }
    .right {
      text-align: right;
      flex: 1;
    }
  }
}
</style>
