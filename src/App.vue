<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    created() {
      sessionStorage.setItem('host', 'http://localhost:8080/time-master-server');
      sessionStorage.getItem('host')
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    text-align center
    color #1D2F3B
    margin-top 30px
    margin-bottom 50px
</style>
