



<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <Top/>
  </div>
</template>



<script>


import HelloWorld from './components/HelloWorld'
import Top from './components/Top'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Top
  }
}
</script>



<style>
body{
  background-color: red;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: blue;
}
</style>
