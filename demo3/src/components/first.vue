<template>
  <div class="wide">
    <div class="title">
      <span>
        <p>
        相关人物
       </p>
      </span>
      <a href="#">
        展开 ^
      </a>
    </div>

    <div class="first">
      <Frame>
        <template v-slot:first-slot>
          <li v-for="arr in imgArr1" :key="arr">
            <div class="one">
              <img :src="arr.im">
              <a href="#">{{arr.ch}}</a>
            </div>


          </li>
        </template>
      </Frame>
    </div>
    <div class="last">
      <Frame>
        <template v-slot:first-slot>
          <li v-for="arr in imgArr2" :key="arr">
            <div class="one">
              <img :src="arr.im">
              <a href="#">{{arr.ch}}</a>
            </div>
          </li>
        </template>
      </Frame>
    </div>
  </div>
</template>
<script>
import Frame from "./Frame";
export default {
  components:{
    Frame
  },
    data(){
      return{
        imgArr1:[
          {
            im:require("../assets/image/1.jpg"),
            ch:'雷杰多奥特曼'
          },
          {
            im:require("../assets/image/2.jpg"),
            ch:'平成系奥特曼'
          },
          {
            im:require("../assets/image/3.jpg"),
            ch:'黑暗奥特曼'
          },
          {
            im:require("../assets/image/4.jpg"),
            ch:'帕瓦特奥特曼'
          }
        ],
        imgArr2:[
          {
            im:require("../assets/image/5.jpg"),
            ch:'假奥特曼'
          },
          {
            im:require("../assets/image/6.jpg"),
            ch:'史考特奥特曼'
          },
          {
            im:require("../assets/image/7.jpg"),
            ch:'黑暗扎基'
          },
          {
            im:require("../assets/image/8.jpg"),
            ch:'加拉雷斯'
          }
        ]
      }
    }
}
</script>
<style scoped>
.wide{
  height: 296px;
  width: 368px;
}
.wide p{
  display: inline-block;

}
.title{
  display: flex;
  justify-content: space-between;
}
.title a{
  font-size: 12px;
  color: gray;
}
li{
  font-size: 14px;
  text-align: left;
}
li a:hover{
  text-decoration: underline;
}

a:hover{
  text-decoration: underline;
}
.one{
  width: 80px;
  height: 118px;
}
.first li:first-child{
  margin-left: 0px;
}
.first li{
  margin-left: 17px;
}
.first{
  margin-top: 6px;
}
.last{
  margin-top: 10px;
}
.last li:first-child{
  margin-left: 0px;
}
.last li{
  margin-left: 17px;
}
img{
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
</style>
