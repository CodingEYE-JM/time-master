<template>
  <div class="log-in">
    <h1>{{ msg }}</h1>
    <div class="form-container">
      <input type="text" name="username" class="username" placeholder="Username" @keydown="resetError">
      <input type="password" name="password" class="password" placeholder="Password" @keydown="resetError">
      <button class="sign-in" @click="validateSubmit">Sign In</button>
      <div class="error"><span>+</span></div>
    </div>
    <div class="connect">
      <p>Or connect with:</p>
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
  import jquery from 'jquery'
  import router from '../router'

  export default {
    name: 'log-in',
    data () {
      return {
        msg: 'Welcome to Time-Master',
        m_username: 'admin',
        m_password: 'admin'
      }
    },
    methods: {
      validateSubmit(){
        let username = jquery('.form-container .username').val();
        let password = jquery('.form-container .password').val();
        if (username === '') {
          jquery('.form-container .error').fadeOut('fast', function () {
            jquery(this).css('top', '27px');
          });
          jquery('.form-container .error').fadeIn('fast', function () {
            jquery(this).parent().find('.username').focus();
          });
          return;
        }
        if (password === '') {
          jquery('.form-container .error').fadeOut('fast', function () {
            jquery(this).css('top', '96px');
          });
          jquery('.form-container .error').fadeIn('fast', function () {
            jquery(this).parent().find('.password').focus();
          });
          return;
        }
        if (username === this.m_username && password === this.m_password) {
          router.push('/homepage')
        }
      },

      resetError(){
        jquery('.form-container .error').fadeOut('fast');
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  h1
    font-size 30px
    font-weight 700
    text-shadow 0 1px 4px rgba(0, 0, 0, .2)

  .log-in
    margin-top 100px

  .form-container
    position relative
    width 70%
    max-width 300px
    margin 15px auto 0 auto
    text-align center
    .username, .password
      width 80%
      height 42px
      margin-top 25px
      padding 0 9.5%
      background rgba(188, 208, 197, .3)
      border-radius 6px
      border 1px solid rgba(82, 136, 112, .15)
      box-shadow 0 2px 3px 0 rgba(0, 0, 0, .1) inset
      font-size 14px
      color 000
      text-shadow 0 1px 2px rgba(0, 0, 0, .1)
      transition all .2s
      &::placeholder
        color rgb(82, 136, 112)
      &:focus
        box-shadow 0 2px 3px 0 rgba(0, 0, 0, .1) inset, 0 2px 7px 0 rgba(0, 0, 0, .2)

    .sign-in
      cursor pointer
      width 100%
      height 44px
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

    .error
      display none
      position absolute
      right -18%
      width 40px
      height 40px
      background rgba(45, 45, 45, .25)
      border-radius 8px
      & span
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
        background url(../common/img/wechat.svg) center center no-repeat
        background-size 32px 35px
      &.qq
        background url(../common/img/qq.svg) center center no-repeat
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
    background url(../common/img/bg-image.jpg) no-repeat
    background-size cover

  @media screen and (max-width: 768px)
    .log-in
      margin-top 50px
    .bg-image
      background url(../common/img/bg-image-mobile.jpg) no-repeat
      background-size cover
</style>
