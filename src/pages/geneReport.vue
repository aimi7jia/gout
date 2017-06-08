<template>
  <ul>
    <li>
      <i></i>
      <p>帅锅的基因报告</p>
      <span>PK123456789</span>
      <div class="btn-box">
        <a href="javascript:;" @click="checkProcess">查看进度</a>
        <a href="javascript:;">下载报告</a>
      </div>
    </li>
    <li>
      <i></i>
      <p>帅锅的基因报告</p>
      <span>PK123456789</span>
      <div class="btn-box">
        <a href="javascript:;">查看进度</a>
        <a href="javascript:;">下载报告</a>
      </div>
    </li>
  </ul>
</template>

<script>
import router from '../router'
export default {
  name: 'mine',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    checkProcess () {
      console.log('查看进度')
      router.push({name: 'checkProcess'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
@import '../assets/css/base'
ul
  margin-top:0.61rem;
  li
    width:8.88rem;
    background:#CBB676;
    height:3.44rem;
    margin:0 auto;
    border-radius:0.09rem;
    position:relative;
    box-sizing:border-box;
    font-size:0.416rem;
    padding-top:0.45rem;
    padding-left:2.22rem;
    border:1px solid #eee;
    overflow:hidden;
    margin-bottom:0.296rem;
    i
      position:absolute;
      left:0.66rem;
      top:0.3rem;
      width:1rem;
      height:1.29rem;
      iconBg(url("../assets/images/report-icon.png"));
    p
      color:#fff;
    span
      color:#fff;
      margin-top:0.1rem;
    .btn-box
      position:absolute;
      display:flex;
      background:#fff;
      txtH(1.27rem)
      bottom:0;
      left:0;
      width:100%;
      a
        flex:1;
        text-align:center;
        color:#555;
        border-left:1px solid #eee;
        &:first-child
          border:none;
</style>
