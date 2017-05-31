<template>
  <div class="hello">
  	<btn></btn>
  	<mask-box tit="測量尿酸值" @operate="goTo"></mask-box>
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  	dshdjsahfdjshfjsa
  </div>
</template>

<script>
import norBtn from '../components/btn.vue'
import maskBox from '../components/mask.vue'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'mask-box': maskBox,
    'btn': norBtn
  },
  methods: {
    goTo (param) {
      console.log('ok')
      console.log(param)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
