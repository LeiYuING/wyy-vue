<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <router-link :to="{name: 'params',params:{id:1}}" >hello</router-link>-->
<!--    <router-link to="/goHello">go</router-link>-->
<!--    <router-view> </router-view>-->
<!--    <hello v-bind:hh="666"/>-->
    <axios/>
<!--    <ToSlot>-->
<!--      <slots solt="slot-title" v-for="(item,index) in toItems" :items="item" :index="index" @remove="remove(index)" :key="index"></slots>-->
<!--    </ToSlot>-->
<!--    <MusicIndex></MusicIndex>-->
<!--    <test></test>-->
<!--    <demo1>-->
<!--    </demo1>-->
  </div>
</template>

<script>
import hello from "./components/hello";
import axios from "./components/axios";
import slots from "./components/slot";
import toSlot from "./components/toSlot";
import MusicIndex from "./components/MusicIndex";
import test from "./components/test";
import params from "./components/params";
import demo1 from "./components/demo1";

export default {
  components: {MusicIndex,hello,axios,slots,toSlot,test,params,demo1},
  name: 'App',
  data(){
    return {
      toItems:['雷宇','哈哈','好好']
    }
  },
  methods:{
    remove: function (index){
      this.toItems.splice(index,1)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
