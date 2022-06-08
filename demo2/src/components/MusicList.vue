<template>
  <!-- 音乐列表 -->
  <div class="music-list">
    <ul>
      <li  v-for="music_list in music_lists" :key="music_list.title">
        <div class="music-image">
          <a>
          <img :src="music_list.img">
            <i></i>
          </a>
          <div class="music-listen">
            <i class="listen"></i>
            <span class="listen-volume">{{music_list.volume}}</span>
            <a class="listen-to" href="#"></a>
          </div>
        </div>

        <p>
          <a href="#">
            <i class="radio"  v-if="music_list.isRadio"></i>
              {{music_list.title}}
          </a>
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return {
      music_lists:[
        {
          img:require("../assets/images/1.jpg"),
          title:'节奏控 / 工作日午后醒脑',
          listen_sum:222,
          isRadio:false,
          volume: '76万'
        },
        {
          img: require("../assets/images/2.jpg"),
          title: '在感情中我只希望被对得起',
          listen_sum:222,
          isRadio:true,
          volume: '32万'
        },
        {
          img: require("../assets/images/3.jpg"),
          title: '各种dj各种国度各种风情各种硬曲持续更新',
          listen_sum:222,
          isRadio:false,
          volume: '23万'
        },
        {
          img:require("../assets/images/4.jpg"),
          title: '莫非留声机-《You belong to me》',
          listen_sum:222,
          isRadio:true,
          volume: '12万'
        },
        {
          img:require("../assets/images/5.jpg"),
          title: 'MODA NAHXA ⚡新歌播放正在喜欢听中…',
          listen_sum:222,
          isRadio:false,
          volume: '56万'
        },
        {
          img:require("../assets/images/6.jpg"),
          title: '【人间剧场】最感动 | 67 岁流浪老人徒步还乡，司机：走反了',
          listen_sum:222,
          isRadio:true,
          volume: '43万'
        },
        {
          img:require("../assets/images/7.jpg"),
          title: '「心动系情歌」想和你贴贴，是我的小心思',
          listen_sum:222,
          isRadio:true,
          volume: '22万'
        },
        {
          img:require("../assets/images/8.jpg"),
          title: '假小子',
          listen_sum:222,
          isRadio:true,
          volume: '55万'
        }
    ]
    }
  }
}
</script>
<style scoped>
.music-list{
  margin: 20px 0 0 -40px;
  display: flex;
}
.music-list ul{

  /*display: flex;*/
}
.music-list ul li{
  float: left;
  width: 140px;
  height: 204px;
  margin-right: 0px;
  padding-left: 42px;
  margin-bottom: 5px;

}
.music-list ul p a:hover{
  text-decoration: underline;
}
.music-list ul p a{
  color: #666;
  font-size: 12px;
}
.music-list ul p{
  text-align: left;

}
.music-listen{
  text-align: left;
  height: 27px;
  position: relative;
  top: -170px;
  background: url(../assets/images/coverall.png) no-repeat 0px -537px;
}
.music-image{
  width: 140px;
  height: 140px;

}

.radio{
  background:url(../assets/images/icon.png) no-repeat -31px -658px ;
  width: 35px;
  height: 15px;
  display: inline-block;
  position: relative;
  top: -1px;
  margin-right: 3px;
  vertical-align: middle;
}
.listen{
  vertical-align: bottom;
  width: 14px;
  height: 11px;
  background: url("../assets/images/iconall.png") no-repeat 0 -24px;
  display: inline-block;
  margin-left: 6px;
  margin-bottom: 1px;
}
.music-image a i{
  background: url("../assets/images/coverall.png") no-repeat;
  display: block;
  width: 140px;
  height: 140px;
  position: relative;
  top: -144px;
}
.listen-volume{
  vertical-align: bottom;
  color: #ccc;
  font-size: 12px;
  display: inline-block;
  position: relative;
  top:1px;
}
.listen-to{
  width: 16px;
  height: 17px;
  background: url("../assets/images/iconall.png") no-repeat 0 -60px;
  display: inline-block;
  position: relative;
  top:6px;
  right: -67px;

}
</style>
