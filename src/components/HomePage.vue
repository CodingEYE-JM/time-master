<template>
  <div class="homepage-wrapper">
    <div class="homepage-content">
      <mu-date-picker hintText="请选择日期" v-model="selectedDate" format="YYYY/MM/DD"/><br/>
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
</style>
