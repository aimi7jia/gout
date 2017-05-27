<template>
  <div>
	<span>{{msg}}</span>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      default: '默认'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	div {
		background:linear-gradient(to bottom, #dbca8d 0%,#b59855 100%);
		width:6.48rem;
		height:1.11rem;
		line-height:1.11rem;
		font-size:0.5rem;
		text-align:center;
		color:#fff;
		border-radius:0.148rem;
		border-left:1px solid #fff;
	}
</style>
