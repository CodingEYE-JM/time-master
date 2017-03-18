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
      <router-link to="/homepage">
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

<style lang="stylus" rel="stylesheet/stylus">

</style>
