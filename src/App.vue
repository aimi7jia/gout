<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
@import 'assets/css/base'
</style>
