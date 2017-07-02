<template>
  <div class="menu-bar">
    <router-link to="/homepage" class="menu-bar-item" :class="tabStates['homepage']">
      <i class="icon icon-home"></i>
      <div class="text">主页</div>
    </router-link>
    <router-link to="/report" class="menu-bar-item" :class="tabStates['report']">
      <i class="icon icon-report"></i>
      <div class="text">报表</div>
    </router-link>
    <router-link to="/recommend" class="menu-bar-item" :class="tabStates['recommend']">
      <i class="icon icon-recommend"></i>
      <div class="text">推荐</div>
    </router-link>
    <router-link to="/settings" class="menu-bar-item" :class="tabStates['settings']">
      <i class="icon icon-settings"></i>
      <div class="text">设定</div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    props: {
      tabStates: {}
    }
  }
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
      font-size 12px
      color #1d2f3b
      &.selected
        color rgb(253, 185, 51)
        .icon
          filter grayscale(0%)
      &:last-child
        border-right 0
      .icon
        display block
        margin 2px auto
        width 32px
        height 32px
        filter grayscale(100%)
        &.icon-home
          background url(../../static/img/home.svg) center center no-repeat
          background-size 30px 30px
        &.icon-report
          background url(../../static/img/chart.svg) center center no-repeat
          background-size 30px 30px
        &.icon-recommend
          background url(../../static/img/recommend.svg) center center no-repeat
          background-size 30px 30px
        &.icon-settings
          background url(../../static/img/settings.svg) center center no-repeat
          background-size 30px 30px
</style>
