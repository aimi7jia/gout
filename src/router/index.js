import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import HealthCenter from '@/pages/HealthCenter'
import Mine from '@/pages/Mine'
import serviceRecord from '@/pages/serviceRecord'
import bioGene from '@/pages/bioGene'
import geneReport from '@/pages/geneReport'
import checkProcess from '@/pages/checkProcess'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
      title: '首页'
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
      component: HealthCenter,
      title: '首页'
    },
    {
      path: '/Mine',
      name: 'mine',
      component: Mine,
      title: '我的'
    },
    {
      path: '/serviceRecord',
      name: 'serviceRecord',
      component: serviceRecord,
      title: '服务记录'
    },
    {
      path: '/bioGene',
      name: 'bioGene',
      component: bioGene,
      title: '生化基因'
    },
    {
      path: '/geneReport',
      name: 'geneReport',
      component: geneReport,
      title: '基因报告'
    },
    {
      path: '/checkProcess',
      name: 'checkProcess',
      component: checkProcess,
      title: '查看进程'
    }
  ]
})
