<template>
  <div class="homepage-wrapper">
    <div class="homepage-content">
      <mu-date-picker hintText="请选择日期" hintTextClass="date-picker-hintText" v-model="selectedDate"
                      format="YYYY/MM/DD" inputClass="date-picker-input" :underlineShow="false"/>
      <br/>
      <Activity :selected-date="selectedDate" v-on:modifyActivity="refreshDate"></Activity>
    </div>
    <MenuBar :tabStates="tabStates"></MenuBar>
  </div>
</template>

<script type="text/ecmascript-6">
  import MenuBar from './MenuBar.vue'
  import Activity from './Activity'
  import router from '../router'

  export default{
    data() {
      return {
        selectedDate: '',
        tabStates: {
          homepage: "selected",
          report: "",
          recommend: "",
          settings: ""
        }
      }
    },
    created() {
      if (sessionStorage.getItem('username') === null) {
        router.push('/');
      }
    },
    components: {
      MenuBar,
      Activity
    },
    methods: {
      refreshDate(){
        this.selectedDate = '';
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mu-date-picker
    .date-picker-hintText
      padding-left 20px
      color #528870
    .date-picker-input
      padding-left 20px
      border 1px solid rgba(82, 136, 112, .35)
      border-radius 3px
</style>
