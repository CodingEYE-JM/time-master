<template>
  <div class="homepage-wrapper">
    <mu-date-picker hintText="Select Date" v-model="selectedDate" format="YYYY/MM/DD"/><br/>
    <Activity :selected-date="selectedDate"></Activity>
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
