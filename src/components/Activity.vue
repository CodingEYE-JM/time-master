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
        },
        params: {
          type: String
        }
      }
    },
    computed: {
      calActivities() {
        if (this.selectedDate == '' || this.selectedDate == null) {
          return;
        }
        this.$http.get(sessionStorage.getItem('host') + '/api/activity/' + this.selectedDate
          + '?username=' + sessionStorage.getItem('username')).then((response) => {
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
        this.params = "?id=" + this.activityData.id
          + "&eating=" + this.activityData.activities[0].active
          + "&learning=" + this.activityData.activities[1].active
          + "&sports=" + this.activityData.activities[2].active
          + "&working=" + this.activityData.activities[3].active
          + "&sleeping=" + this.activityData.activities[4].active
          + "&reading=" + this.activityData.activities[5].active
          + "&playing=" + this.activityData.activities[6].active
          + "&shopping=" + this.activityData.activities[7].active
          + "&username=" + sessionStorage.getItem('username')
          + "&check=true";

        this.$http.post(sessionStorage.getItem('host') + '/api/activity/' + this.selectedDate + this.params).then((response) => {
        });

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
