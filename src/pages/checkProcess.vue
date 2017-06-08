<template>
  <div>
    <div class="top">
      <p class="name">姓名:小丸子</p>
      <p class="code">条形码：123456789</p>
    </div>
    <ul>
      <li :class={done:item.status} v-for="item in list">
        <i></i>
        <p>{{item.tit}}</p>
        <span>{{item.time}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
// import router from '../router'
export default {
  name: 'mine',
  data () {
    return {
      list: [{
        tit: '送检信息已录入',
        time: '2017-06-05',
        status: true
      }, {
        tit: '样本已签收',
        time: '',
        status: true
      }, {
        tit: '实验室检测',
        time: '2017-06-05',
        status: false
      }, {
        tit: '检测结果录入',
        time: '2017-06-05',
        status: false
      }, {
        tit: '检测结果分析',
        time: '2017-06-05',
        status: false
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
div
  font-size:0.416rem;
.top
  height:2.8rem;
  iconBg(url("../assets/images/topBg.png"));
  padding-left:0.55rem;
  color:#fff;
  overflow:hidden;
  padding-top:0.3rem;
  box-sizing:border-box;
  p
    margin-top:0.4rem;
ul
  color:#555;
  margin-left:2.6rem;
  margin-top:0.65rem;
  li
    height:1.7rem;
    border-left:2px dotted #ccc;
    position:relative;
    padding-left:0.8rem;
    box-sizing:border-box;
    i
      position:absolute;
      width:0.695rem;
      height:0.695rem;
      iconBg(url("../assets/images/wait.png"));
      background-color:#fff;
      top:-0.1rem;
      left:0;
      transform:translateX(-50%);
    &.done
      border-left:2px dotted #cbb676;
      i
        iconBg(url("../assets/images/ok.png"));
        background-color:#fff;
    &:last-child
      border:none;
  span
    color:#888;
    font-size:0.36rem;
    margin-top:0.1rem;
</style>
