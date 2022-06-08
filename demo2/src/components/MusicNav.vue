<template>
  <div class="box" >
    <img :src="arr[dex].img">
    <a class="first-a" href="#" @click="removeIndex"></a>
    <a class="last-a" href="#" @click="moveIndex"></a>
    <ul>
      <li v-for="(im,index) in arr">
        <a  :class="getClass(index)" href="#" @click="findIndex(index)"></a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      dex:0,
      index:"",
      arr:[
        {
          img:require("../assets/images/10.jpg"),
          hov_class:""
        },
        {
          img:require("../assets/images/11.jpg"),
          hov_class:""
        },
        {
          img:require("../assets/images/12.jpg"),
          hov_class:""
        },
        {
          img:require("../assets/images/13.jpg"),
          hov_class:""
        },
        {
          img:require("../assets/images/14.jpg"),
          hov_class:""
        }
      ],
    }


  },
  methods:{
    getClass: function (index){
      if (index==this.dex){

        return  this.arr.hov_class = "hover-class"
      }
    },
    moveIndex: function (){
      if (this.dex > this.arr.length-2) {
        this.dex = 0
      } else {
        this.dex++;
      }
    },
    removeIndex: function (){
      if (this.dex < 0) {
        this.dex = this.arr.length-1;
      } else {
        this.dex--;
      }
    },
    findIndex: function (data){
      this.dex=data;
    }


  },
  mounted: function () {

      setInterval(() => {
        if (this.dex > this.arr.length-2) {
          this.dex = 0;
        } else {
          this.dex++;
        }
      }, 3000);
    }


}

</script>
<style scoped>
.box{
  width: 100%;
  height: 286px;
  background: url("../assets/images/9.jpg") no-repeat;
  background-size: cover;
}
.box img{
  height: 286px;
}
.first-a{
  display: inline-block;
  width: 37px;
  height: 63px;
  position: absolute;
  top: 171px;
  left: 274px;
  border-radius: 2px;
  background: url("../assets/images/banner.png") no-repeat 0px -360px;
}
.last-a{
  display: inline-block;
  width: 37px;
  height: 63px;
  position: absolute;
  top: 171px;
  right: 274px;
  border-radius: 2px;
  background: url("../assets/images/banner.png") no-repeat 0px -508px;
}
.first-a:hover {
  background: url("../assets/images/banner.png") no-repeat 0px -430px;
}
.last-a:hover{
  background: url("../assets/images/banner.png") no-repeat 0px -578px;
}
.box ul li a{
  display: inline-block;
  width: 20px;
  height: 20px;
  background: url("../assets/images/banner.png") no-repeat 3px -343px;
}
.box ul li{
  margin-left: 20px;
  float: left;
}
.box ul{
  position: absolute;
  top: 330px;
  left: 600px;
}
.hover-class{
  background: url("../assets/images/banner.png") no-repeat -15px -343px !important;
}
.box ul li a:hover{
  background: url("../assets/images/banner.png") no-repeat -15px -343px;
}
</style>
