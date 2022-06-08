<template>
  <div id="app">
    <phone>
      <template v-slot:title>
        <p>
          手机
        </p>
        <p>
          查看更多
        </p>
      </template>
      <template v-slot:left-img>
        <img src="./assets/image/leftPhone.jpg">
      </template>
      <template v-slot:list>
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
      </template>
    </phone>

    <phone>
      <template v-slot:title>
        <p>
          笔记本 | 平板
        </p>
        <p>
          热门
        </p>
      </template>
      <template v-slot:left-img>
        <img src="./assets/image/cLeftPhone.jpg">
      </template>
      <template v-slot:list>
        <li v-for="item in phoneList2">
          <a href="#">
            <div class="im">
              <img :src="item.im">
            </div>
            <h3>{{item.name}}</h3>
            <p>{{item.fun}}</p>
            <p>{{item.price}}</p>
          </a>
        </li>
      </template>
    </phone>
  </div>
</template>

<script>
import phone from "./components/PhoneListSlot"
import first from "./components/first";
import ToNavSlot from "./components/ToNavSlot"
export default {
  name: 'App',
  components:{
    first,
    phone,
    ToNavSlot
  },
  data() {
    return {
      phoneList: [
        {
          im: require("./assets/image/list1.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/list2.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/list3.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/list4.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/list5.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/list6.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/list7.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/list8.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
      ],
      phoneList2: [
        {
          im: require("./assets/image/clist1.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/clist2.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/clist3.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/clist4.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/clist5.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/clist6.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/clist7.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
        {
          im: require("./assets/image/clist8.jpg"),
          name: "Redmi 10A",
          fun: "大电量、大音量、大屏幕",
          price: "699元起"
        },
      ]
    }
  }
}
</script>

<style>
#app {
  /*display: flex;*/
  /*justify-content: center;*/
  background-color: #f5f5f5;
  height: 100%;
}
</style>
