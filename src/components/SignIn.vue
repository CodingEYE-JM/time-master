<template>
  <div class="sign-in-wrapper" @keydown="submitInfo()">
    <h1>{{ msg }}</h1>
    <div class="form-container">
      <input type="text" class="username" placeholder="用户名" @keydown="resetError" v-model="username">
      <input type="password" class="password" placeholder="密码" @keydown="resetError" v-model="password">
      <button class="sign-in" @click="validateSubmit" v-show="mode==='SignIn'">登录</button>
      <span class="link-sign-up" @click="changeMode('SignUp')" v-show="mode==='SignIn'">没有账号，去注册</span>
      <button class="sign-up" @click="signUp" v-show="mode==='SignUp'">注册</button>
      <span class="link-sign-in" @click="changeMode('SignIn')" v-show="mode==='SignUp'">已有账号，去登录</span>
      <div class="error"><span>+</span></div>
    </div>
    <div class="connect">
      <p>快速登录:</p>
      <p>
        <a class="we-chat" href="#"></a>
        <a class="qq" href="#"></a>
      </p>
    </div>
    <div class="bg"></div>
    <div class="bg-image"></div>
    <div>
    </div>
  </div>
</template>

<script>
  import $ from '../../static/js/jquery-vendor.js'
  import router from '../router'

  export default {
    data () {
      return {
        msg: '欢迎来到【时趣】',
        username: '',
        password: '',
        mode: 'SignIn'
      }
    },
    created() {
      if (sessionStorage.getItem('username')) {
        router.push('/homepage');
      }
    },
    methods: {
      validateSubmit(){
        if (this.username === '') {
          $('.form-container .error').fadeOut('fast', function () {
            $(this).css('top', '27px');
          });
          $('.form-container .error').fadeIn('fast', function () {
            $(this).parent().find('.username').focus();
          });
          return;
        }
        if (this.password === '') {
          $('.form-container .error').fadeOut('fast', function () {
            $(this).css('top', '96px');
          });
          $('.form-container .error').fadeIn('fast', function () {
            $(this).parent().find('.password').focus();
          });
          return;
        }
        this.$http.post('http://192.168.1.109:8088/api/user/signin?username=' + this.username + '&password=' + this.password).then((response) => {
          response = response.body;
          if (response.username) {
            sessionStorage.setItem('username', response.username);
            sessionStorage.setItem('type', response.type);
            router.push('/homepage');
          }
        });
      },

      signUp() {
        this.$http.post('http://192.168.1.109:8088/api/user/signup?username=' + this.username + '&password=' + this.password).then((response) => {
          response = response.body;
          this.username = response.username;
          if (this.username) {
            sessionStorage.setItem('username', this.username);
            router.push('/homepage');
          }
        });
      },

      resetError(){
        $('.form-container .error').fadeOut('fast');
      },

      submitInfo() {
        if (event.keyCode === 13) {
          if (this.mode === 'SignIn') {
            $('.sign-in').click();
          }else if (this.mode === 'SignUp') {
            $('.sign-up').click();
          }
        }
      },

      changeMode(mode)
      {
        this.mode = mode;
      }

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sign-in-wrapper
    margin-top 10%
    h1
      font-size 30px
      font-weight 700
      text-shadow 0 1px 4px rgba(0, 0, 0, .2)

    .form-container
      position relative
      width 70%
      max-width 300px
      margin 15px auto 0 auto
      text-align center
      .username, .password
        height 42px
        line-height 21px
        width 100%
        margin-top 25px
        padding 0 7%
        background rgba(188, 208, 197, .3)
        border-radius 6px
        border 1px solid rgba(82, 136, 112, .15)
        box-shadow 0 2px 3px 0 rgba(0, 0, 0, .1) inset
        font-size 14px
        color 000
        text-shadow 0 1px 2px rgba(0, 0, 0, .1)
        transition all .2s
        &::placeholder, &::-webkit-input-placeholder
          color #528870
          opacity 1
        &:focus
          box-shadow 0 2px 3px 0 rgba(0, 0, 0, .1) inset, 0 2px 7px 0 rgba(0, 0, 0, .2)

      .sign-in, .sign-up
        cursor pointer
        height 44px
        width 100%
        margin-top 25px
        padding 0
        background #528870
        border-radius 6px
        border 1px solid #528870
        box-shadow 0 15px 30px 0 rgba(255, 255, 255, .25) inset, 0 2px 7px 0 rgba(0, 0, 0, .2)
        font-size 14px
        font-weight 700
        color #fff
        text-shadow 0 1px 2px rgba(0, 0, 0, .1)
        transition all .2s
        &:hover
          box-shadow 0 15px 30px 0 rgba(255, 255, 255, .15) inset, 0 2px 7px 0 rgba(0, 0, 0, .2)
        &:active
          box-shadow 0 5px 8px 0 rgba(0, 0, 0, .1) inset, 0 1px 4px 0 rgba(0, 0, 0, .1)
          border 0

      .link-sign-up, .link-sign-in
        display block
        margin-top 10px
        color #1d2f3b
        cursor pointer
        text-decoration underline

      .link-sign-up
        text-align right

      .link-sign-in
        text-align left

      .error
        display none
        position absolute
        right -18%
        width 40px
        height 40px
        background rgba(45, 45, 45, .25)
        border-radius 8px
        & span
          font-family 'Avenir', Arial
          display inline-block
          margin-left 2px
          font-size 40px
          font-weight 700
          line-height 40px
          text-shadow 0 1px 2px rgba(0, 0, 0, .1)
          transform rotate(45deg)

    .connect
      width 305px
      margin 35px auto 0 auto
      font-size 18px
      font-weight 700
      text-shadow 0 1px 3px rgba(0, 0, 0, .2)
      & a
        display inline-block
        width 32px
        height 35px
        margin-top 15px
        transition all .2s
        &.we-chat
          background url(../../static/img/wechat.svg) center center no-repeat
          background-size 32px 35px
        &.qq
          background url(../../static/img/qq.svg) center center no-repeat
          background-size 32px 35px
        &:hover
          opacity .7

    .bg, .bg-image
      position absolute
      left 0
      top 0
      width 100%
      height 100%

    .bg
      z-index -1
      background rgba(242, 242, 242, .5)

    .bg-image
      filter blur(10px)
      z-index -2
      background url(../../static/img/bg-image.jpg) no-repeat
      background-size cover

  @media screen and (max-width: 768px)
    .sign-in-wrapper
      margin-top 20%
      .bg-image
        background url(../../static/img/bg-image-mobile.jpg) no-repeat
        background-size cover
</style>
