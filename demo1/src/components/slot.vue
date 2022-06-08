<template>
  <div>
    <li>{{items}}<button @click="remove()">删除</button></li>
  </div>
</template>
<script>
export default {
  name: 'slots',
  props: ['items','index'],
  methods: {
    remove: function (index){
      this.$emit('remove',index);//在点击事件发生时，会自定义一个remove事件，主模块只要检测到此事件就会调用删除的方法
    }
  }
}
</script>
