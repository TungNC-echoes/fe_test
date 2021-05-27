import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    }
  ]
})
