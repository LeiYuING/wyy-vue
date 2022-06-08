<template>
  <div>
    <p>{{info.userCode}}</p>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "axios",
  data(){
    return {
      info:{
          userCode:null
          },
          url: null
      }
    },

  mounted() {
    // fetch("./src/data.json").then(res=>res.json()).then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
    axios.get('http://localhost:8080/unnamed/user.do?method=ucexist&userCode=admin').then(response=>{
      this.info = response.data
      console.log(response.data)
      console.log(12334)
    }).catch((err=>{
      console.log(err)
    }))
  }

}
</script>
