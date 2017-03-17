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
      <router-link to="/report">
        <button>Submit</button>
      </router-link>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
