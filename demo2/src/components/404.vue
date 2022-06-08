<template>
  <div class="box">
    <div class="inner">

    </div>
  </div>
</template>
<script>
export  default {

}
</script>
<style scoped>
.box{
  width: 500px;
  height: 500px;
  position: relative;
  background-color: #C10D0C;
}
.inner{
  position: absolute;
  top: 50%;
  bottom: 50%;
  transform: translate(-50%,-50%);
  width: 200px;
  height: 200px;
  background-color: #ff6700;
}
</style>
