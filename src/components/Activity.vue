<template>
  <div class="activity-wrapper" v-show="activities.length>0">
    {{calActivities}}
    <mu-raised-button label="确认" primary @click="modifyActivity"/>
    <div class="activity-content">
      <ul class="activity-list">
        <li v-for="(activity, index) in activities" class="activity"
            :key="index">
          <span class="text">{{activity.name}}</span>
          <mu-switch class="state" v-model="activity.active"/>
        </li>
      </ul>
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
        activities: [],
        activityData: {
          type: Object
        }
      }
    },
    computed: {
      calActivities() {
        if (this.selectedDate == '' || this.selectedDate == null) {
          return;
        }
        this.$http.get('http://192.168.1.109:8088/api/activity/' + this.selectedDate).then((response) => {
          response = response.body;
          this.activityData = response;
          this.activities = response.activities;
        });
      }
    },
    methods: {
      modifyActivity(){
        this.activityData.activities = this.activities;
        this.activities = [];
        this.$emit('modifyActivity');
      }
    }
  }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  .activity-wrapper
    .activity-content
      margin-top 20px
      .activity-list
        font-size 20px
        border-top 1px solid rgba(82, 136, 112, .35)
        .activity
          display flex
          justify-content space-around
          height 60px
          padding-top 20px
          border-bottom 1px solid rgba(82, 136, 112, .35)
</style>
