<template>
  <div class="Head">
    <div class="nav">
      <slot name="title"></slot>
<!--      <p>-->
<!--        手机-->
<!--      </p>-->
<!--      <p>-->
<!--        查看更多-->
<!--      </p>-->
    </div>
    <div class="list">
    <div class="left">
      <a href="#">
        <slot name="left-img"></slot>
<!--        <img src="../assets/image/leftPhone.jpg">-->
      </a>

    </div>
    <div class="right">
        <ul>
          <slot name="list"></slot>
<!--          <li v-for="item in phoneList">-->
<!--            <a href="#">-->
<!--            <div class="im">-->
<!--              <img :src="item.im">-->
<!--            </div>-->
<!--              <h3>{{item.name}}</h3>-->
<!--              <p>{{item.fun}}</p>-->
<!--              <p>{{item.price}}</p>-->
<!--            </a>-->
<!--          </li>-->
        </ul>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    list:null
  },
  data(){
    return{
      phoneList: [
        {
          im: require("../assets/image/list1.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("../assets/image/list2.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("../assets/image/list3.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("../assets/image/list4.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("../assets/image/list5.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("../assets/image/list6.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("../assets/image/list7.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("../assets/image/list8.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        }
      ]
    }
  }
}
</script>
<style scoped>
.Head{
  margin: auto;
  width: 1226px;

}
.nav{

  width: 1226px;
  height: 58px;
  display: flex;
  justify-content: space-between;
  align-items: end;

}
.nav p:first-child{
  font-size: 22px;
  color: gray;
}
.nav p:last-child{
  color: gray;
  font-size: 16px;
}
.nav p:last-child i{

}
.list{
  width: 1226px;
  display: flex;
  justify-content: space-between;
}
.left{
  margin-top: 14px;
  background-color: white;
  float: left;
}
.left img{
  width: 234px;
  height: 614px;
}
.right{
  height: 619px;
  width: auto;
  float: left;
}
.right img{
  width: 160px;
  height: 160px;
}
.right ul{
  float: left;
}
.right ul li{
  /*box-shadow: gray 5px 5px 10px 15px;*/
  margin-left: 14px;
  margin-top: 14px;
  background-color: white;
  width: 234px;
  height: 300px;
  float: left;
}
.right ul li p:nth-child(4){
  margin-top: 10px;
  text-align: center;
  color:#ff6700 ;
}
.right ul li p:nth-child(3){
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #b0b0b0;
}
.right ul li h3{
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #333;
}
.im{
  width: 160px;
  height: 160px;
  margin: 15px auto 18px;
}
.right ul li:hover{
  box-shadow: gray 2px 5px 10px 0px;
  position: relative;
  top: -1px;
}
.left:hover{
  box-shadow: gray 2px 5px 10px 0px;
  position: relative;
  top: -1px;
}
</style>
