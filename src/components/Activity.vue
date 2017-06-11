<template>
  <div class="actitity-wrapper">
    {{calActivities}}
    <div class="activity-header">
      <button class="confirm">Confirm</button>
    </div>
    <li v-for="(activity, index) in activities" class="activity">
      <span class="text">{{activity.name}}</span>
      <mu-switch class="state" v-model="activity.active"/>
      <br/>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      selectedDate: {
        type: String
      }
    },
    data() {
      return {
        activities: []
      }
    },
    computed: {
      calActivities() {
        if (this.selectedDate == '' || this.selectedDate == null) {
          return;
        }
        this.$http.get('http://192.168.1.109:8088/api/activity/' + this.selectedDate).then((response) => {
          response = response.body;
          this.activities = response.activities;
        });
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .actitity-wrapper
    .activity-header
      display inline-block
      .confirm
        text-align right
    .activity
      .text
        text-align left
        font-size 20px
      .state
        text-align right
</style>
