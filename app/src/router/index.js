import Vue from 'vue'
import Router from 'vue-router'
import vote from '@/components/vote'
import manage from '@/components/manage'

Vue.use(Router)
Vue.config.productionTip = false

export default new Router({
  routes: [
    {
      path: '/',
      name: 'vote',
      component: vote
    },
    {
      path: '/manage',
      name: 'manage',
      component: manage
    }
  ]
})
