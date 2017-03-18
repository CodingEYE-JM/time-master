<template>
  <div class="menu-bar">
    <router-link to="/homepage" class="menu-bar-item">设定</router-link>
    <router-link to="/report" class="menu-bar-item">报表</router-link>
    <router-link to="/recommend" class="menu-bar-item">推荐</router-link>
    <router-link to="/about" class="menu-bar-item">关于</router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .menu-bar
    position fixed
    left 0
    right 0
    bottom 0
    font-size 0
    height 4rem
    background-color rgba(0, 0, 0, 0.2)
    .menu-bar-item
      display inline-block
      width 25%
      margin-top 15px
      font-size 24px
</style>
