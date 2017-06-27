<template>
  <div class="about-wrapper">
    <mu-card class="user">
      <div class="username">{{username}}</div>
      <div class="type">{{type}}</div>
    </mu-card>
    <div class="team">
      <span class="text">开发: Jarman</span>
    </div>
    <div class="member-wrapper">
      <div class="avatar"></div>
      <div class="text"></div>
    </div>
    <div class="member-wrapper">
      <div class="avatar"></div>
      <div class="text"></div>
    </div>
    <div class="member-wrapper">
      <div class="avatar"></div>
      <div class="text"></div>
    </div>
    <div class="member-wrapper">
      <div class="avatar"></div>
      <div class="text"></div>
    </div>
    <button class="log-off" @click="logOff">退出</button>
    <MenuBar :tabStates="tabStates"></MenuBar>
  </div>
</template>

<script type="text/ecmascript-6">
  import MenuBar from './MenuBar.vue'
  import router from '../router'

  export default{
    data() {
      return {
        tabStates: {
          setting: "",
          report: "",
          recommend: "",
          about: "selected"
        },
        username: "",
        type: ""
      }
    },
    created() {
      if (sessionStorage.getItem('username') === null) {
        router.push('/');
      }
      this.username = sessionStorage.getItem('username');
      this.type = sessionStorage.getItem('type');
    },
    methods: {
      logOff() {
        sessionStorage.clear();
        router.push('/');
      }
    },
    components: {
      MenuBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .about-wrapper
    width 70%
    margin 0 auto
    .user
      text-align right
      padding 5px
      .username
        font-size 24px
      .type
        margin-top 5px
        font-size 12px
    .team
      position absolute
      bottom 130px
      left 50%
      transform translateX(-50%)
      .text
        font-size 20px
    .member-wrapper
      display inline-block
      .avatar
        border-radius 100px
        filter blur(10px)
    .log-off
      position absolute
      left 50%
      bottom 70px
      cursor pointer
      max-width 300px
      width 70%
      height 44px
      padding 0
      background #528870
      border-radius 6px
      border 1px solid #528870
      box-shadow 0 15px 30px 0 rgba(255, 255, 255, .25) inset, 0 2px 7px 0 rgba(0, 0, 0, .2)
      font-weight 700
      font-size 18px
      color #fff
      text-shadow 0 1px 2px rgba(0, 0, 0, .1)
      transform translateX(-50%)
      &:hover
        box-shadow 0 15px 30px 0 rgba(255, 255, 255, .15) inset, 0 2px 7px 0 rgba(0, 0, 0, .2)
      &:active
        box-shadow 0 5px 8px 0 rgba(0, 0, 0, .1) inset, 0 1px 4px 0 rgba(0, 0, 0, .1)
        border 0
</style>
