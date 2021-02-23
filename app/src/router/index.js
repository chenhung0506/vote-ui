import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import vote from '@/components/vote'
import manage from '@/components/manage'

Vue.use(Router)
Vue.config.productionTip = false

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage
    },
    {
      path: '/',
      name: 'vote',
      component: vote
    }
  ]
})
