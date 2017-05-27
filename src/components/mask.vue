<template>
  <div class="mask" v-if="show">
	<div class="box" v-if="show">
		<div class="box_tit">{{tit}}</div>
		<div class="box_cont">dsdsds</div>
		<div class="box_oper">
			<div class="btn" v-on:click="closeMask">{{cancel}}</div>
			<div class="btn">{{ok}}</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  props: {
    tit: {
      default: '默认'
    },
    ok: {
      default: '确定'
    },
    cancel: {
      default: '取消'
    },
    showM: {
      default: true
    }
  },
  methods: {
    closeMask () {
      this.show = !this.show
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
	@import '../assets/css/base'
	.mask
		position:fixed;
		background:rgba(0,0,0,0.2);
		top:0;
		left:0;
		right:0;
		bottom:0;
		color:#555;
		.box
			position:fixed;
			top:50%;
			left:50%;
			width:8.9rem;
			background:#fff;
			transform:translate(-50%,-50%);
			border-radius:0.148rem;
			font-size:0.416rem;
			.box_tit
				text-align:center;
				border-bottom:1px solid #ccc;
				txtH(1.3rem);
			.box_cont
				min-height:2rem;
			.box_oper
				border-top:1px solid #ccc;
				display:flex;
				.btn
					flex:1;
					txtH(1.6rem);
					border-left:1px solid #ccc;
					box-sizing:border-box;
					text-align:center;
					color:#AE8330;
					font-size:0.46rem;
					&:first-child
						border:none;
</style>
