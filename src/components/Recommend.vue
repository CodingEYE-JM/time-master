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
        activityCounts: {
          eatingCount: 0,
          learningCount: 0,
          sportsCount: 0,
          workingCount: 0,
          sleepingCount: 0,
          readingCount: 0,
          playingCount: 0,
          shoppingCount: 0
        },
        userType: '',
      }
    },
    created() {
      if (sessionStorage.getItem('username') === null) {
        router.push('/');
        return;
      }
      this.$http.get('http://192.168.1.109:8088/api/activity/' + this.getYearMonth()
        + '?username=' + sessionStorage.getItem('username')).then((response) => {
        response = response.body;
        this.activityCounts = response;
        this.getUserType();
        this.$http.get('http://192.168.1.109:8088/api/recommend/' + this.userType).then((response) => {
          response = response.body;
          this.sameTypeUsers = response;
        });
      })
    },
    methods: {
      getYearMonth() {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        month = month < 10 ? "0" + month : month;
        return year + "/" + month;
      },
      getUserType() {
        let maxCount = 0;
        if (this.activityCounts.eatingCount > maxCount) {
          maxCount = this.activityCounts.eatingCount;
          this.userType = 'EATER';
        }
        if (this.activityCounts.learningCount > maxCount) {
          maxCount = this.activityCounts.learningCount;
          this.userType = 'LEARNER';
        }
        if (this.activityCounts.sportsCount > maxCount) {
          maxCount = this.activityCounts.sportsCount;
          this.userType = 'SPORTSMAN';
        }
        if (this.activityCounts.workingCount > maxCount) {
          maxCount = this.activityCounts.workingCount;
          this.userType = 'WORKER';
        }
        if (this.activityCounts.sleepingCount > maxCount) {
          maxCount = this.activityCounts.sleepingCount;
          this.userType = 'SLEEPER';
        }
        if (this.activityCounts.readingCount > maxCount) {
          maxCount = this.activityCounts.readingCount;
          this.userType = 'READER';
        }
        if (this.activityCounts.playingCount > maxCount) {
          maxCount = this.activityCounts.playingCount;
          this.userType = 'PLAYER';
        }
        if (this.activityCounts.shoppingCount > maxCount) {
          maxCount = this.activityCounts.shoppingCount;
          this.userType = 'SHOPPER';
        }
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
