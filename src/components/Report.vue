<template>
  <div class="main_content">
    <div id="report"></div>
    <MenuBar></MenuBar>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import MenuBar from './MenuBar.vue'
  export default {
    data() {
      return {
        chart: null,
        opinion: ['吃饭', '学习', '运动'],
        opinionData: [
          {value: 26, name: '吃饭'},
          {value: 31, name: '学习'},
          {value: 8, name: '运动'}
        ]
      }
    },
    methods: {
      drawPie(id) {
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption({
          title: {
            text: '当月情况',
            left: 'center',
            top: 10,
            textStyle: {
              fontSize: 24,
              fontFamily: 'Helvetica',
              fontWeight: 400
            }
          },
          tooltip: {
            trigger: 'item',
            formatte: '{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            left: 5,
            top: 10,
            data: this.opinion,
          },
          series: [
            {
              name: '当月情况',
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['50%', '55%'],
              avoidLabelOverlap: false,
              label: {
                emphasis: {
                  show: true,
                  textStyle: {
                    fontSize: '24',
                    fontWeight: 'bold'
                  }
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              data: this.opinionData,
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffset: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.drawPie('report')
      })
    },
    components: {
      MenuBar
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  #report
    position relative
    margin 0 auto
    min-width 360px
    min-height 550px
    width 80%
    border solid #D01257 1px
    box-shadow 0 0 8px #FB90B7
    border-radius 10px
</style>
