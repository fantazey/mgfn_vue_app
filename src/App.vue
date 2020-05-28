<template>
  <div id="app">
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <MainContainer :params="site"/>
  </div>
</template>

<script>
import MainContainer from "./components/MainContainer";
import site from './assets/site';

export default {
  name: 'App',
  components: {
    MainContainer
  },
  data: function() {
    return {
      site
    };
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
  margin-top: 60px;
}
</style>
