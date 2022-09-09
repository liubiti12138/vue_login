import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Main from '@/components/Main'

Vue.use(Router)

const router = new Router({
  routes: [
    //可以配置重定向
    { path: '', redirect: "/login" },
    {
      path: '/login',
      // name: 'Login',
      component: Login,
      // meta: {
      //   keepalive: false
      // }
    },
    {
      path: '/Main',
      // name: 'Main',
      component: Main,
      // meta: {
      //   keepalive: true
      // }
    }
  ]
});

export {router};

