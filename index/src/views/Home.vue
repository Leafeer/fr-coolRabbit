<template>
  <div>
    <nav-menu></nav-menu>
    <router-view/>
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
