<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <label>User Name:</label>
      <input type="text">
    </div>
    <div>
      <label>Password:</label>
      <input type="password">
    </div>
    <div>
      <router-link to="/homepage" class="submit">Submit</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Time-Master'
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  div
    margin-top 10px
  .submit
    display block
    margin 0 auto
    width 80%
    border-radius 2px
    background-color powderblue
    font-size 12px
    font-weight bold
    padding 5px 0
    color #1E90FF
</style>
