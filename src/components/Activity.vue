<template>
  <div class="actitity-wrapper">
    {{calActivities}}
    <mu-raised-button label="确认" primary/>
    <div class="activity-content">
      <mu-list-item v-for="(activity, index) in activities" class="activity" :key="index" :rows="1" :cols="1">
        <span class="text">{{activity.name}}</span>
        <mu-switch class="state" v-model="activity.active"/>
      </mu-list-item>
    </div>
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
  .activity-content
    margin-top 20px
    font-size 20px
</style>
