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
    display flex
    left 0
    right 0
    bottom 0
    font-size 0
    height 50px
    border-top 1px solid rgba(82, 136, 112, .5)
    background-color #F5FAFA
    .menu-bar-item
      flex 1
      margin 12px 0
      font-size 20px
      border-right 1px solid rgba(82, 136, 112, .5)
      color #1d2f3b
      &:last-child
        border-right 0
</style>
