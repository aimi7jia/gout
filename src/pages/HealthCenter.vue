<template>
  <div>
    <div class="progress"></div>
    <div class="content">
      <div class="content_tit">血尿酸趋势<span>（单位：umol/L）</span></div>
      <div class="echart_box" id="echartLine"></div>
      <div class="content_tit">今日任务<span>（8个任务）</span><i></i></div>
      <ul class="task_list">
        <li>
          <h4>服药一瓶</h4>
          <p>已服药</p>
          <i></i>
        </li>
      </ul>
    </div>
    <div class="footer">
      <bottom-btn btn="健康中心"></bottom-btn>
      <bottom-btn btn="我的"></bottom-btn>
    </div>
  </div>
</template>

<script>
import bottomBtn from '../components/bottomBtn.vue'
import echarts from 'echarts'
export default {
  name: 'healthcenter',
  data () {
    return {
    }
  },
  components: {
    'bottom-btn': bottomBtn
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
  div
    font-size:0.416rem;
    .content_tit
      color: #333;
      txtH(1rem);
      background: #F1F3F4;
      padding-left: 0.57rem;
      span
        font-size: 0.35rem;
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
      h4
        color: #ae8330;
        font-size: 0.416rem;
        font-weight: normal;
        margin-top:0.44rem;
      p
        color: #888888;
        font-size: 0.36rem;
        margin-top: 0.1rem;
</style>
