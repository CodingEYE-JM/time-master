<template>
  <div class="report-wrapper">
    <div id="report"></div>
    <MenuBar :tabStates="tabStates"></MenuBar>
  </div>
</template>
<script>
  import echarts from 'echarts'
  import MenuBar from './MenuBar.vue'
  import router from '../router'

  export default {
    data() {
      return {
        activityCounts: {
          eatingCount: 0,
          learningCount: 0,
          sportsCount: 0,
          workingCount: 0,
          sleepingCount: 0,
          readingCount: 0,
          playingCount: 0,
          shoppingCount: 0
        },
        chart: null,
        opinion: ['吃饭', '学习', '运动', '工作', '睡觉', '阅读', '游戏', '购物'],
        tabStates: {
          setting: "",
          report: "selected",
          recommend: "",
          about: ""
        }
      }
    },
    methods: {
      getYearMonth() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        return year + "/" + month;
      },
      drawPie(id) {
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption({
          title: {
            text: '当月情况',
            left: 'center',
            top: 10,
            textStyle: {
              fontSize: 16,
              fontFamily: 'Helvetica',
              fontWeight: 400
            }
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b}: {c} ({d}%)'
          },
          legend: {
            orient: 'horizontal',
            top: 40,
            data: this.opinion
          },
          series: [
            {
              name: '当月情况',
              type: 'pie',
              radius: ['50%', '70%'],
              center: ['50%', '55%'],
              avoidLabelOverlap: false,
              label: {
                normal: {
                  show: false,
                  position: 'center'
                },
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
              data: [
                {value: this.activityCounts.eatingCount, name: '吃饭'},
                {value: this.activityCounts.learningCount, name: '学习'},
                {value: this.activityCounts.sportsCount, name: '运动'},
                {value: this.activityCounts.workingCount, name: '工作'},
                {value: this.activityCounts.sleepingCount, name: '睡觉'},
                {value: this.activityCounts.readingCount, name: '阅读'},
                {value: this.activityCounts.playingCount, name: '游戏'},
                {value: this.activityCounts.shoppingCount, name: '购物'}
              ],
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
    created() {
      if (sessionStorage.getItem('username') === null) {
        router.push('/');
      }
    },
    mounted() {
      this.$nextTick(function () {
        this.$http.get('http://192.168.1.109:8088/api/activity/' + this.getYearMonth()).then((response) => {
          response = response.body;
          this.activityCounts = response;
          this.drawPie('report');
        });
      })
    },
    components: {
      MenuBar
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">

  #report
    margin 0 auto
    min-width 220px
    min-height 400px
    width 90%
    border 1px solid rgba(82, 136, 112, .5)
    box-shadow 0 0 8px rgb(188, 208, 197)
    border-radius 10px

  @media screen and (min-width: 960px)
    #report
      min-height 550px
</style>
