<template>
  <div class="mine">
    <div class="bg-gray"></div>
    <div class="info list">
      <span class="img">
        <img :src="infoMes.img" alt="">
      </span>
      <p class="heading">
        <span class="level">LV30 上校</span>
        <span class="level-icon"></span>
      </p>
      <span class="name">{{infoMes.name}}</span>
    </div> 
    <ul>
      <li class="list" v-for="(item,index) in list" @click="goToPages(index)">{{item.tit}}</li>
    </ul>
    <ul>
      <li class="list">咨询医生</li>
    </ul>
  </div>
</template>

<script>
import router from '../router'
export default {
  name: 'mine',
  data () {
    return {
      list: [
        {
          tit: '服务记录',
          link: {name: 'serviceRecord'}
        }, {
          tit: '生化基因',
          link: {name: 'bioGene'}
        }, {
          tit: '基因ds',
          link: {name: 'geneReport'}
        }
      ],
      infoMes: {
        img: require('../assets/images/user.jpg'),
        name: '小新丸子'
      }
    }
  },
  components: {
  },
  methods: {
    goToPages (index) {
      router.push(this.list[index].link)
    }
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
  background:#fff;
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
    border:1px solid #eee;
    margin-left:0.56rem;
    overflow:hidden;
    img
      width:100%;
      height:100%;
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
ul
  margin-top:0.55rem;
  li
    border-top:1px solid #eee;
    txtH(1.85rem)
    color:#AE8330;
    box-sizing:border-box;
    padding-left:0.56rem;
    &:first-child
      border:none;
</style>
