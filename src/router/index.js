import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/pages/Hello'
import HealthCenter from '@/pages/HealthCenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: Hello
    },
    {
      path: '/healthCenter',
      name: 'healthCenter',
      component: HealthCenter
    }
  ]
})
