<template>
  <div>
      <li v-for="item in phoneList">
        <a href="#">
          <div class="im">
            <img :src="item.im">
          </div>
          <h3>{{item.name}}</h3>
          <p>{{item.fun}}</p>
          <p>{{item.price}}</p>
        </a>
      </li>
  </div>
</template>
<script>
export default {
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
        },
      ]
    }
  }

}
</script>
<style scoped>
ul li{
  /*box-shadow: gray 5px 5px 10px 15px;*/
  margin-left: 14px;
  margin-top: 14px;
  background-color: white;
  width: 234px;
  height: 300px;
  float: left;
}
ul li p:nth-child(4){
  margin-top: 10px;
  text-align: center;
  color:#ff6700 ;
}
ul li p:nth-child(3){
  margin-top: 10px;
  text-align: center;
  font-size: 12px;
  color: #b0b0b0;
}
ul li h3{
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #333;
}
ul li:hover{
  box-shadow: gray 2px 5px 10px 0px;
  position: relative;
  top: -1px;
}
</style>
