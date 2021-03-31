<template>
  <div class="all">
    <nav-menu></nav-menu>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import NavMenu from '../components/common/NavMenu'
export default {
  name: 'Home',
  components:{
    NavMenu
  }
}
</script>
<style lang="less" scoped>
.all {
  text-align: center;
  background-color: #e2e2e2;
}
</style>
