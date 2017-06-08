<template>
  <div class="box">
    <div class="progress"></div>
    <div class="content">
      <div class="content_tit">{{showOhr}}血尿酸趋势<span>（单位：umol/L）</span></div>
      <div class="echart_box" id="echartLine"></div>
      <div class="content_tit">今日任务<span>（8个任务）</span><i class="cal" @click="goToMine"></i></div>
      <ul class="task_list">
        <li v-for="(item,index) in rankList" @click="dialog(index)">
          <h4>{{item.name}}</h4>
          <p>{{item.ex}}</p>
          <i :class="item.status=='WAIT'?'oper':'done'"></i>
        </li>
      </ul>
    </div>
    <div class="footer">
      <bottom-btn btn="健康中心"></bottom-btn>
      <bottom-btn btn="我的"></bottom-btn>
    </div>
    <mask-box tit="測量尿酸值" :tit="maskTit" :is-show="show" @close="dialogShow">
      <p>服药时间<input type="text" class="txt"></p>
    </mask-box>
  </div>
</template>

<script>
import bottomBtn from '../components/bottomBtn.vue'
import maskBox from '../components/mask.vue'
import echarts from 'echarts'
import router from '../router'
export default {
  name: 'healthcenter',
  data () {
    return {
      rankList: [{
        type: 'MED',
        name: '服药一瓶',
        ex: '已服药',
        status: 'WAIT'
      }, {
        type: 'BUA',
        name: '测量血尿酸',
        ex: 'SUA:308',
        status: 'WAIT'
      }, {
        tyoe: 'BIO',
        name: '生化检测',
        ex: '建议每一疗程服药完毕前往医院检测一次',
        status: 'WAIT'
      }, {
        type: 'WINE',
        name: '戒酒',
        ex: '建议不喝酒',
        status: 'WAIT'
      }, {
        type: 'DRINK',
        name: '喝水',
        ex: '建议每天喝水2000ml以上',
        status: 'WAIT'
      }, {
        type: 'MEAT',
        name: '少肉',
        ex: '建议尽量食用低嘌呤食物',
        status: 'WAIT'
      }, {
        type: 'VEG',
        name: '蔬果',
        ex: '建议多吃高钾质食物',
        status: 'DONE'
      }
      ],
      show: false,
      dialogData: [{
        type: 'MED',
        tit: '第一疗程服药时间',
        cancel: '暂无收到药物',
        ok: '提交'
      }, {
        type: 'BUA',
        tit: '测量血尿酸',
        cancel: '取消',
        ok: '确定'
      }, {
        type: 'BIO',
        tit: '上传第一疗程生化报告',
        cancel: '不上传',
        ok: '上传'
      }, {
        type: 'WINE',
        tit: '戒酒',
        cancel: '取消',
        ok: '确定'
      }, {
        type: 'DRINK',
        tit: '喝水',
        cancel: '暂无收到药物',
        ok: '提交'
      }, {
        type: 'MEAT',
        tit: '少肉',
        cancel: '没摄入',
        ok: '有摄入'
      }, {
        type: 'VEG',
        tit: '蔬果',
        cancel: '没摄入',
        ok: '有摄入'
      }
      ],
      maskTit: 'ds '
    }
  },
  computed: {
    showOhr () {
      return !this.show
    }
  },
  components: {
    'bottom-btn': bottomBtn,
    'mask-box': maskBox
  },
  methods: {
    drawLine (id) {
      this.charts = echarts.init(document.getElementById(id))
      this.charts.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#eee111'
            }
          }
        },
        grid: {
          left: '10%',
          right: '10%',
          bottom: '5%',
          top: '12%',
          containLabel: true
        },
        xAxis: [
          {
            show: false,
            type: 'category',
            boundaryGap: false,
            axisTick: {
              show: false
            },
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
          }
        ],
        yAxis: [
          {
            type: 'value',
            splitNumber: 3,
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: '血尿酸趋势',
            type: 'line',
            stack: '总量',
            symbol: 'circle',
            lineStyle: {
              normal: {
                color: '#b59855'
              }
            },
            itemStyle: {
              normal: {
                color: '#b59855'
              }
            },
            areaStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#F1E3BE'
                  },
                  {
                    offset: 1,
                    color: '#ffffff'
                  }],
                  globalCoord: false
                }
              }
            },
            data: [450, 250, 300, 100, 250, 300, 300]
          }
        ]
      })
    },
    dialog (index) {
      if (this.rankList[index].status === 'WAIT') {
        let dailogMes = this.dialogData[index]
        this.maskTit = dailogMes.tit
        this.dialogShow()
      }
    },
    dialogShow () {
      this.show = !this.show
    },
    goToMine () {
      router.push({name: 'mine'})
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.drawLine('echartLine')
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  @import '../assets/css/base'
  .box
    padding-bottom:2rem;
  div
    font-size:0.416rem;
    .content_tit
      color: #333;
      txtH(1rem);
      background: #F1F3F4;
      padding-left: 0.57rem;
      position: relative;
      span
        font-size: 0.35rem;
      .cal
        display: inline-block;
        width: 0.56rem;
        height: 0.56rem;
        iconBg(url("../assets/images/cal.png"))
      i
        position: absolute;
        right:0.56rem;
        top:50%;
        margin-top:-0.28rem;
    .echart_box
      height:4.18rem;
  .footer
    position: fixed;
    width: 10rem;
    bottom: 0;
    left: 0;
    txtH(1.3rem);
    background: linear-gradient(to bottom, #dbca8d 0%,#b59855 100%);
    display: flex;
    font-size: 0.5rem;
  .task_list
    li
      padding-left: 0.57rem;
      height: 2rem;
      border-bottom: 1px solid #ccc;
      box-sizing: border-box;
      overflow:hidden;
      position:relative;
      h4
        color: #ae8330;
        font-size: 0.416rem;
        font-weight: normal;
        margin-top:0.44rem;
      p
        color: #888888;
        font-size: 0.36rem;
        margin-top: 0.1rem;
      i
        position: absolute;
        top: 50%;
        right: 0.56rem;
        width: 0.695rem;
        height: 0.695rem;
        margin-top: -0.348rem;
        &.oper
          iconBg(url("../assets/images/oper.png"));
        &.done
          iconBg(url("../assets/images/done.png"));
</style>
