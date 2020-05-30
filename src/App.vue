<template>
  <div id="app">
    <MainContainer :params="site" :show-data="turnedOn"/>
    <button v-on:click="on">on</button>
    <button v-on:click="off">off</button>
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
  methods: {
    on: function() {
      this.turnedOn = true;
    },
    off: function() {
      this.turnedOn = false;
    }
  },
  data: function() {
    return {
      turnedOn: false,
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
}
</style>
