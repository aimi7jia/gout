<template>
  <a>{{btn}}</a>
</template>

<script>
export default {
  props: {
    btn: {
      default: '确定'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	a
	   flex:1;
	   color:#fff;
	   text-align:center;
	   border-left:1px solid #fff;
	   &:first-child
	   	  border:none;
</style>
