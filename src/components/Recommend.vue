<template>
  <div class="recommend-wrapper">
    <div class="title">与你相似</div>
    <mu-list>
      <mu-list-item v-for="(user, index) in sameTypeUsers" :key="index" class="user-list-item">
        <mu-avatar slot="leftAvatar"/>
        <span class="username">{{user.username}}</span>
        <mu-icon slot="right"/>
      </mu-list-item>
    </mu-list>
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
          recommend: "selected",
          about: ""
        },
        sameTypeUsers: [],
      }
    },
    created() {
      if (sessionStorage.getItem('username') === null) {
        router.push('/');
        return;
      }
      this.$http.get(sessionStorage.getItem('host') + '/api/user/type' + '?username='
        + sessionStorage.getItem('username')).then((response) => {
        response = response.body;
        if (response.type) {
          sessionStorage.setItem('type', response.type);
          this.$http.get(sessionStorage.getItem('host') + '/api/recommend/' + sessionStorage.getItem('type')
          + "?username=" + sessionStorage.getItem('username')).then((response) => {
            response = response.body;
            this.sameTypeUsers = response;
          });
        }

      })
    },
    methods: {
      getYearMonth() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        return year + "/" + month;
      }
    },
    components: {
      MenuBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .recommend-wrapper
    margin 0 auto
    width 95%
    .title
      font-size 24px
    .user-list-item
      border-bottom 1px solid rgba(82, 136, 112, .35)
      .username
        font-size 20px
</style>
