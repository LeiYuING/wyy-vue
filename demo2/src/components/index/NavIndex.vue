<template>
<div>
  <div class="nav-top">
    <ul>
      <li v-for="item in list">
        <router-link :to="item.url">
          <p>
            {{item.name}}
          </p>
        </router-link>
      </li>
    </ul>
  </div>
  <router-view></router-view>
</div>
</template>

<script>
import MusicOne from "../MusicOne";
import MusicHead from "../MusicHead";
import MusicNav from "../MusicNav";

export default {
  data(){
    return{
      list:[
        {
          url:'/recommend',
          name:"推荐"
        },
        {
          url:'/top',
          name:"排行榜"
        },
        {
          url:'/playlist',
          name:"歌单"
        },
        {
          url:'/radio',
          name:"主播电台"
        },
        {
          url:'/singers',
          name:"歌手"
        },
        {
          url:'/new',
          name:"新碟上架"
        },
      ]
    }
  },
  components: {
    MusicOne,
    MusicHead,
    MusicNav
  },
  name: "index1"
}
</script>

<style scoped>
.nav-top{
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #c20c0c;
}
ul{
  position: relative;
  left: 23.9%;
}
li{
  margin-left: 15px;
  float: left;
}
li a{
  display: block;
  color: white;
  font-size: 12px;
}
li a p{
    padding: 3px 12px 4px 12px;
}
li:hover{
  border-radius: 20px;
  background-color: #9b0909;
  font-size: 12px;
}
.router-link-active{
  border-radius: 20px;
  background-color: #9b0909;
  font-size: 12px;
}
</style>
