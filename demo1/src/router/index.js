import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import hello from '../components/hello'
import test from '../components/test'
import axios from '../components/axios'
import params from "../components/params";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
        path: '/test',
        name: 'test',
        component: test
        },
        {
          path:'/axios',
          name: 'axios',
          component: axios
        }
        ]
    },
    {
      path: "/hello",
      name: 'hello',
      component: hello
    },
    {
      path: "/params/:id",
      name: 'params',
      component: params
    },{
      path: "/goHello",
      redirect: "/hello"
    }

  ]
})
