<template>
  <div class="homepage-wrapper">
    <table class="datepickers-cont">
      <tr>
        <td>
          <div class="datepicker ll-skin-cangas"></div>
        </td>
      </tr>
    </table>
    <MenuBar></MenuBar>
  </div>
</template>

<script type="text/ecmascript-6">
  import $ from '../../static/js/jquery-vendor.js'
  import '../../static/js/jquery-ui-1.10.1.min'
  import MenuBar from './MenuBar.vue'

  export default{
    components: {
      MenuBar
    },
    created() {
      this.$nextTick(() => {
        $('.datepicker').datepicker();
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../static/css/cangas.datepicker.css"
  @import "../../static/css/jquery-ui-1.10.1.css"

  .datepickers-cont
    margin 0 auto
</style>
