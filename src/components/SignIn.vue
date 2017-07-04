<template>
  <div class="sign-in-wrapper" @keydown="submitInfo()">
    <h1>{{ msg }}</h1>
    <div class="form-container">
      <div class="error-message" v-show="err_msg.length>0">{{err_msg}}</div>
      <input type="text" class="username" placeholder="用户名" @keydown="resetError" v-model="username">
      <input type="password" class="password" placeholder="密码" @keydown="resetError" v-model="password">
      <button class="sign-in" @click="validateSubmit" v-show="mode==='SignIn'">登录</button>
      <span class="link-sign-up" @click="changeMode('SignUp')" v-show="mode==='SignIn'">没有账号，去注册</span>
      <input type="password" class="password" placeholder="再次输入密码" @keydown="resetError" v-show="mode==='SignUp'"
             v-model="dup_password">
      <button class="sign-up" @click="signUp" v-show="mode==='SignUp'">注册</button>
      <span class="link-sign-in" @click="changeMode('SignIn')" v-show="mode==='SignUp'">已有账号，去登录</span>
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
  import router from '../router'

  export default {
    data () {
      return {
        msg: '欢迎来到【时趣】',
        err_msg: '',
        username: '',
        password: '',
        dup_password: '',
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
          this.err_msg = '请输入用户名';
          return;
        }
        if (this.password === '') {
          this.err_msg = '请输入密码';
          return;
        }
        this.$http.post(sessionStorage.getItem('host') + '/api/user/signin?username=' + this.username + '&password=' + this.password).then((response) => {
          response = response.body;
          if (response.username) {
            sessionStorage.setItem('username', response.username);
            sessionStorage.setItem('type', response.type);
            router.push('/homepage');
          } else {
            this.err_msg = '用户名或密码不正确';
          }
        });
      },

      signUp() {
        if (this.username === '') {
          this.err_msg = '请输入用户名';
          return;
        }
        if (this.password === '') {
          this.err_msg = '请输入密码';
          return;
        }
        if (this.dup_password === '') {
          this.err_msg = '请再次输入密码';
          return;
        }
        if (this.password !== this.dup_password) {
          this.err_msg = '两次密码不一致';
          return;
        }
        this.$http.post(sessionStorage.getItem('host') + '/api/user/signup?username=' + this.username + '&password=' + this.password).then((response) => {
          response = response.body;
          if (response.username) {
            this.username = response.username;
            sessionStorage.setItem('username', this.username);
            router.push('/homepage');
          } else {
            this.err_msg = '用户名已存在';
          }
        });
      },

      resetError(){
        this.err_msg = '';
      },

      submitInfo() {
        if (event.keyCode === 13) {
          if (this.mode === 'SignIn') {
            this.validateSubmit();
          } else if (this.mode === 'SignUp') {
            this.signUp();
          }
        }
      },

      changeMode(mode)
      {
        this.mode = mode;
        this.username = '';
        this.password = '';
        this.dup_password = '';
        this.err_msg = '';
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
      .error-message
        height 21px
        line-height 21px
        width 100%
        margin-top 25px
        padding 0 7%
        background rgba(191, 10, 16, .3)
        border-radius 3px
        box-shadow 0 2px 3px 0 rgba(191, 10, 16, .1) inset
        font-size 14px
        color rgba(191, 10, 16, .8)
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

    .connect
      display none
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
