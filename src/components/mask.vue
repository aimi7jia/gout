<template>
  <div class="mask" v-show="isShow">
	<div class="box">
		<div class="box_tit">{{tit}}</div>
		<div class="box_cont">
			<p class="question">今天是否摄入高嘌呤食物？</p>
			<p class="tips">温馨提示:<br/>每天至少喝2升以上的水，尽量选择在两餐之间快饮快排，有助于冲刷排出尿酸。</p>
			<slot></slot>
		</div>
		<div class="box_oper">
			<div class="boxBtn" @click="closeDialog">{{cancel}}</div>
			<div class="boxBtn" @click="sureBox">{{ok}}</div>
		</div>
	</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: {
        'color': 'red'
      },
      omg: 'omg'
    }
  },
  props: {
    tit: {
      default: '默认'
    },
    isShow: {
      type: Boolean,
      default: false
    },
    ok: {
      default: '确定'
    },
    cancel: {
      default: '取消'
    }
  },
  methods: {
    sureBox () {
      // 触发实例化参数
      this.$emit('operate', [this.data, this.omg])
    },
    closeDialog () {
      this.$emit('close')
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
			transition:all .3s;
			transform:translate(-50%,-50%);
			border-radius:0.148rem;
			font-size:0.416rem;
			&.scale
				transform:translate(-50%,-50%) scale(1);
			.box_tit
				text-align:center;
				border-bottom:1px solid #ccc;
				txtH(1.3rem);
			.box_cont
				min-height:2rem;
				padding: 0.35rem 0.7rem;
			.tips
				color: #999;
				line-height: 0.6rem;
			.question
				padding:0.3rem 0;
			.box_oper
				border-top:1px solid #ccc;
				display:flex;
				.boxBtn
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
