import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import HealthCenter from '@/pages/HealthCenter'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
      // children: [
      //   {
      //     path: 'omg',
      //     component:
      //   }
      // ]
    },
    {
      path: '/healthCenter',
      name: 'healthCenter',
      component: HealthCenter
    }
  ]
})
