<template>
  <div>
    <div class="bg-gray"></div>
    <div class="bio-report">
      <div class="top">
        <p class="tit">PK123456789第一次疗程生化报告</p>
        <p class="time">上传时间：2017/03/06 16:44</p>
        <p class="status">状态:审核未通过</p>
      </div>
      <div class="cont">
        <div class="img" v-for="item in img"><img :src="item.src" alt=""></div>
      </div>
      <div class="bot">重新提交</div>
    </div>
  </div>
</template>

<script>
// import router from '../router'
export default {
  name: 'mine',
  data () {
    return {
      img: [{
        src: require('../assets/images/user.jpg')
      }
      ]
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
.bio-report
  background:#fff;
  position:relative;
  font-size:0.416rem;
  .top
    padding-left:1.65rem;
    padding-top:0.574rem;
    &::before
      content:'';
      position:absolute;
      width:0.55rem;
      height:0.52rem;
      top:0.55rem;
      left:0.55rem;
      iconBg(url("../assets/images/bioReport.png"));
    .time,.status
      font-size:0.36rem;
      color:#888;
      margin-top:0.1rem;
  .bot
    border-top:1px solid #eee;
    txtH(1.74rem)
    text-align:center;
    color:#ae8330;
    font-size:0.5rem;
  .cont
    width:7.7rem;
    margin-left:1.66rem;
    display:flex;
    margin-bottom:0.685rem;
    margin-top:0.2rem;
    .img
      flex:1;
      border:1px solid #eee;
      img
        width:100%;
        height:auto;
        display:block;
</style>
