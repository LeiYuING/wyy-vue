<template>
  <div class="all-list">
    <div class="musicList-head">
      <a :href="hrefs" class="url-one">{{nav_data}}</a>
      <div class="musicList-kind">
        <a :href="hrefs">{{kindList[0]}}</a>
        <span>|</span>
        <a :href="hrefs">{{kindList[1]}}</a>
        <span>|</span>
        <a :href="hrefs">{{kindList[2]}}</a>
        <span>|</span>
        <a :href="hrefs">{{kindList[3]}}</a>
        <span>|</span>
        <a :href="hrefs">{{kindList[4]}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      kindList: ['华语','流行','摇滚','民谣','电子'],
      hrefs: 'https://music.163.com/',
      nav_data: '热门推荐'
    }
  }

}
</script>
<style>
  a {
    text-decoration: none;
  font-family: "Arial Black";
}
a:link {
  color: dimgray;
}
a:visited {
  color: dimgray;
}
a:hover {
  color: dimgray;
}
a:active {
  color: dimgray;
}
.musicList-head{
  height: 33px;
  padding: 0 10px 0 34px;
  background-position: -225px -156px;
  border-bottom: 2px solid #C10D0C;
}
.musicList-kind{
  position: relative;
  left: -270px;
}
.url-one{
  line-height: 20px;
  float: left;
  font-size: 20px;
}
.all-list{
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}

</style>
