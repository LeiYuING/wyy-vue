import Vue from 'vue'
import Router from 'vue-router'
import notFind from '../components/404'
import NavIndex from "../components/index/NavIndex";
import MyMusic from "../components/index/MyMusic";
import attention from "../components/index/attention";
import Shopping from "../components/index/Shopping";
import MusicMan from "../components/index/MusicMan";
import Download from "../components/index/Download";
import Recommend from "../components/FindMusicChild/Recommend";
import Top from "../components/FindMusicChild/Top";
import PlayList from "../components/FindMusicChild/PlayList";
import Radio from "../components/FindMusicChild/Radio";
import Singers from "../components/FindMusicChild/Singers";
import New from "../components/FindMusicChild/New";
import MusicHead from "../components/MusicHead";

Vue.use(Router)

export default new Router({
  mode: 'history',//不带#号
  routes: [
    {
      path:'/',
      redirect:'/head'
    },
    {
      path:'/head',
      component:MusicHead,
      redirect:'index',
      children:[
        {
          path:'/index',
          name: 'NavIndex',
          redirect: '/recommend',
          component: NavIndex,
          children:[
            {
              path:'/top',
              name:'top',
              component: Top,
            },
            {
              path:'/playlist',
              name:'playlist',
              component: PlayList
            },
            {
              path:'/recommend',
              name:'recommend',
              component: Recommend,
            },
            {
              path:'/radio',
              name:'radio',
              component: Radio
            },
            {
              path:'/singers',
              name:'singers',
              component: Singers
            },
            {
              path:'/new',
              name:'new',
              component: New
            }
          ]
        },
        {
          path:'/MyMusic',
          name:'/MyMusic',
          component:MyMusic
        },
        {
          path:'/attention',
          name:'/attention',
          component:attention
        },
        {
          path:'/Shopping',
          name:'/Shopping',
          component:Shopping
        },
        {
          path:'/MusicMan',
          name:'/MusicMan',
          component:MusicMan
        },
        {
          path:'/Download',
          name:'/Download',
          component:Download
        }
      ]
    },
    {
      path: '*',//除了以上的所有请求
      component: notFind
    }
  ]
})
