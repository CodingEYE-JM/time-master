<template>
  <div class="homepage-wrapper">
    <div class="homepage-content">
      <mu-date-picker hintText="请选择日期" hintTextClass="date-picker-hintText" v-model="selectedDate"
                      format="YYYY/MM/DD" inputClass="date-picker-input" :underlineShow="false" /><br/>
      <Activity :selected-date="selectedDate"></Activity>
    </div>
    <MenuBar></MenuBar>
  </div>
</template>

<script type="text/ecmascript-6">
  import MenuBar from './MenuBar.vue'
  import Activity from './Activity'

  export default{
    data() {
      return {
        selectedDate: ''
      }
    },
    components: {
      MenuBar,
      Activity
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mu-date-picker
    .date-picker-hintText
      padding-left 20px
      color #528870
    .date-picker-input
      padding-left 20px
      border 1px solid rgba(82, 136, 112, .35)
      border-radius 3px
</style>
