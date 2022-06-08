<template>
  <div>
    <h1>伈馨爱注册页面</h1>

    <form >
    姓名： <input v-model="user_name" type="text" name="user_name">
    <br>
    密码： <input v-model="pass_word" type="text" name="pass_word">
    <br>
    性别： 男<input v-model="gender" type="radio" name="sex" value="1">

    女<input v-model="gender" type="radio" name="sex" value="0">

    条件： 是否有车<input v-model="car"  type="checkbox" name="arr" value="car">

    是否有房<input v-model="house" type="checkbox" name="arr" value="house">

    是否初婚<input v-model="marry" type="checkbox" name="arr" value="mar">

    是否有存款<input v-model="money" type="checkbox" name="arr" value="money">
    <br>
    长相: <textarea v-model="face" name="des" id="" cols="30" rows="10"></textarea>
      <br>
      <button @click="fun">注册</button>
    </form>


  </div>
</template>

<script>
export default {
  name: 'test',
  data() {
    return {
      msg : 'v-model 数据绑定 ',
      user_name : '',
      pass_word : '',
      gender: '',
      car: '',
      house: '',
      marry: '',
      money: '',
      face: '',
      result : '',
    }
  },
  components : {

  },
  methods : {
    fun() {
      if(this.user_name == '刘能' && this.pass_word == '777888'){
        console.log('登录成功')
        alert('即将跳转')
        this.result = '登录成功'
      }else if(this.user_name !== '刘能'){
        console.log('用户名错误')
        alert('用户名错误，请重新登录')
        this.result = '用户名错误'
      }else if(this.pass_word !== '777888'){
        console.log('密码错误')
        alert('密码错误请重新登录')
        this.result = '密码错误'
      }else{
        console.log('登录失败，请重新登录')
        alert('登录失败')
        this.result = '登录失败'
      }
    }
  }
}
</script>
