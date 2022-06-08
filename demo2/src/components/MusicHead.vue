<template>
  <div>
<div class="head">
  <div class="head-title">
    <router-link to="/">
    <h1 class="head-text">
      <a href="#"><p>

      </p></a>
    </h1>
    </router-link>
  </div>
  <div class="choice-list">
    <ul>
      <li>
        <router-link active-class="link"  to="/">
          发现音乐
          <i></i>
        </router-link>
        <!--        <a href="#"><p>{{item}}</p></a>-->
      </li>
      <li v-for="item in head_list" :key="item">
        <router-link active-class="link" :to="item.link">
          {{item.name}}
          <i></i>
        </router-link>
<!--        <a href="#"><p>{{item}}</p></a>-->
      </li>
    </ul>
  </div>
  <div class="select">
    <i></i>
    <input type="text" placeholder="音乐/视频/电台/用户">
  </div>
  <div class="create-center">
    <p><a href="#">创作者中心</a></p>
  </div>
  <div class="login">
    <a href="#">登录</a>
  </div>
</div>
<!--  <music-nav></music-nav>-->
    <router-view></router-view>
<!--  <MusicOne></MusicOne>-->
  </div>
</template>
<script>
import MusicOne from "./MusicOne";
import MusicNav from "./MusicNav";
import MusicHead from "./MusicHead";
export default {
  components: {
    MusicOne,
    MusicHead,
    MusicNav
  },
  data(){
    return{
      head_list:[
        // {
        //   name:'发现音乐',
        //   link:'/'
        // },
        {
          name:'我的音乐',
          link:'/MyMusic'
        },
        {
          name:'关注',
          link:'/attention'
        },
        {
          name:'商城',
          link: '/Shopping'
        },
        {
          name:'音乐人',
          link: '/MusicMan'
        },
        {
          name:'下载客户端',
          link:'/Download'
        }
      ]
    }
  }

}
</script>
<style scoped>
.head{

  height: 70px;
  background-color: #242424;
  display: flex;
}
.head-text{
  width: 162px;
  height: 55px;
  background: url("../assets/images/topbar.png") no-repeat 0 0;
}
.head-text h1 a{

}
.head-text a{
  font-size: 26px;
  line-height: 65px;
  font-family: 宋体;
  color: #cccccc;
}
.head-title{
  margin-left: 150px;
  float: left;
}
.choice-list{

  float: left;
}
.choice-list ul{
  margin-left: 15px;
  float: left;
}
.choice-list ul li{
  height: 70px;
  float: left;
}
.choice-list ul li a{
  line-height: 74px;
  padding-left: 15px;
  padding-right: 15px;
  display: block;
  height: 70px;
  font-size: 14px;
  color: #cccccc;
}
.choice-list ul li:hover{
      background-color: black;
}
.select{
  width: 159px;
  height: 30px;
  background: white;
  border-radius: 26px;
  margin-left: 40px;
  margin-top: 20px;

}
.select a{
  display: inline-block;
}
.select i{
  background: url("../assets/images/topbar.png") no-repeat -5px -105px;
  display: inline-block;
  width: 20px;
  height: 20px;
  position: relative;
  top: 6px;
  left: -2px;
}
.select input{
  vertical-align: center;
  font-size: 11px;
  display: inline-block;
  width: 115px;
  height: 16px;
  border: white;
  outline:none;
  box-shadow:none;
}
.create-center{
  width: 89px;
  height: 28px;
  margin-top: 20px;

  border: gray solid 1px;
  border-radius: 26px;
  margin-left: 10px;
}
.create-center p a{
  line-height: 29px;
  color: white;
  font-size: 12px;
  display: block;
}
.create-center:hover{
  border-radius: 26px;
  border: white solid 1px;
}
.login{
  margin-left: 20px;
  margin-top: 23px;
}
.login a{
  color: gray;
  font-size: 12px;
}
.login a:hover{
  color: white;
}
.link{
  background-color: black;
}
.link  i{
  display: block;
  position: relative;
  left: 43%;
  top: -17%;
  width:12px;
  height: 10px;
  background: url("../assets/images/topbar.png") no-repeat -225px 1px ;
}
</style>
