import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Edit from '@/views/edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children: [
        {
          path: '/edit',
          name: 'Edit',
          component: Edit
        }
      ]
    }
  ]
})
