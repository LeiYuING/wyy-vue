<template>
  <div id="app">
    <router-view/>
<!--    <MusicHead></MusicHead>-->
<!--<test></test>-->
  </div>

</template>

<script>
import test from "./components/404"
import MusicOne from "./components/MusicOne";
import MusicHead from "./components/MusicHead";
export default {
  components:{
    MusicHead,
    test,
    MusicOne
  },
  name: 'App'
}
</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
