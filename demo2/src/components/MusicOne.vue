<template>
  <div class="box">

    <!-- <h1> {{ msg}}</h1> -->
    <!-- 头部 -->
    <div class="title">
      <!--左边导航栏   -->
      <div class="left-title">
        <i></i>
        <h2> <a href="#">热门推荐</a> </h2>
        <ul>
          <li v-for="array in arr" :key="array" >
            <a href="#">
              {{array}}
            </a>
          </li>
        </ul>
      </div>
      <!-- 右边更多 -->
      <div class="right-title">
        <span class="more"> <a href="#">更多</a> </span>
        <i></i>
      </div>
    </div>

    <MusicList></MusicList>

  </div>
</template>
<script>
import MusicList from "./MusicList";
export default {
  data(){
    return{
      msg: '网易云小案例',
      arr : [
        '华语',
        '流行',
        '摇滚',
        '民谣',
        '电子',
      ]
    }
  },
  components:{
    MusicList
  },
  methods:{
    fun: function () {


      this.axios({
        method:'get',
        url:'',
        data:''
      }).then(
        function (response) {
          // super.arr=response;
          // this.$router.push("/main");

        }
      )
    }

  }
}

</script>
<style scoped>
.box{
  background-color: white;
  width: 689px;
  height: 469px;
  margin:  auto;
  padding: 5px 14px;
  border-left: #333 solid 1px;
  border-right: #333 solid 1px;
}
.title{
  /* 让盒子里的子盒子内容两端分开 */
  justify-content: space-between;
  height: 33px;
  line-height: 33px;
  display: flex;
}
.left-title{
  display: flex;
}
.left-title i{
  width: 35px;
  vertical-align: middle;
  background: url("../assets/images/index.png") no-repeat -225px -154px;
  margin-left: 3px;
}
.left-title ul{

  display: flex;
  margin-left: 10px;
}
.left-title h2{
  margin-left: 3px;
}
.left-title h2 a{
  font-size: 20px;
  font-weight: normal;
  line-height: 12px;
  color: #333;
}
.left-title ul li a{
  font-size: 12px;
  color: #666;
}
.left-title ul li:last-child{
  border: none;
}
.left-title ul li a:hover{
  text-decoration: underline;
}
.left-title ul li{
  height: 12px;
  line-height: 12px;
  border-right: 1px solid #ccc;
  margin-top: 11px;
  padding: 0px 10px;

}
.right-title i{
  display: inline-block;
  height: 15px;
  width: 30px;
  vertical-align: middle;
  background: url('../assets/images/index.png') no-repeat 0 -238px;
}
.title{
  border-bottom: 2px solid #C10D0C;
}
.more a{
  color: #666;
  font-size: 12px;
}
.more a:hover{

  text-decoration: underline;
}
</style>
