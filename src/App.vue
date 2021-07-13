<!--
 * @Author: your name
 * @Date: 2021-07-12 14:35:00
 * @LastEditTime: 2021-07-13 17:30:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \MyProject\shop\src\App.vue
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/about"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body{
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
