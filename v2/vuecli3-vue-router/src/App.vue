<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      <!--      默认是a标签，tag可以修改标签-->
      <router-link to="/about" tag="button">About</router-link>
      <!--      replace 不可以在浏览器中使用返回   -->
      <router-link to="/about" tag="button" replace>About</router-link>
      <router-link :to="'/user/'+userid" tag="button" replace>User</router-link>
      <router-link :to="{path:'/profile',query:{'name':'yan',age:25} }" tag="button" replace>｜Profile</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>

export default {
  name: 'App',
  data() {
    return {
      userid: 111,
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
