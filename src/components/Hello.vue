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
      <button>Submit</button>
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
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
