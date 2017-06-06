<template>
  <div class="mine">
    <div class="bg-gray"></div>
    <div class="info list">
      <span class="img">
        <img src="" alt="">
      </span>
      <p class="heading">
        <span class="level">LV30 上校</span>
        <span class="level-icon"></span>
      </p>
      <span class="name">小丸子</span>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../assets/css/base'
middle()
  position:absolute;
  top:50%;
  transform:translateY(-50%);
  -webkit-transform:translateY(-50%)
.mine 
  font-size:0.416rem;
.list
  position:relative;
  &::after
    content:'';
    middle()
    width:0.27rem;
    height:0.45rem;
    iconBg(url("../assets/images/arrow.png"))
    right:0.46rem;
.info 
  height:2.3rem;
  box-sizing:border-box;
  .img
    middle()
    width:1.5rem;
    height:1.5rem;
    border-radius:50%;
    border:1px solid #ccc;
    margin-left:0.56rem;
  .heading
    position:absolute;
    left:2.44rem;
    top:0.6rem;
    .level
      display:inline-block;
      color:#fff;
      txtH(0.55rem)
      padding:0 0.2rem;
      background:#555;
      border-radius:0.08rem;
      font-size:0.36rem;
  .name
    position:absolute;
    top:1.3rem;
    left:2.44rem;
    color:#AE8330;
</style>
