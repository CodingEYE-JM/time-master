<template>
  <div class="recommend-wrapper">
    <div class="text">推荐模块正在施工中...</div>
    <MenuBar :tabStates="tabStates"></MenuBar>
  </div>
</template>

<script type="text/ecmascript-6">
  import MenuBar from './MenuBar.vue'

  export default{
    data() {
      return {
        tabStates: {
          setting: "",
          report: "",
          recommend: "selected",
          about: ""
        }
      }
    },
    components: {
      MenuBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
