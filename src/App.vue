<template>
  <div id="app">
    <router-view></router-view>
<!--     <route-link :tp="{path:'hello'}">to hello</route-link>
    <route-link :tp="{path:'healthCenter'}">to hello</route-link> -->
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Ouhh my girl!'
    }
  }
}
</script>

<style lang="stylus">

</style>
