import { createRouter, createWebHistory } from 'vue-router'

import Login from "@/views/Login/index.vue"
import Layout from "@/views/Layout/index.vue"
import Home from "@/views/Home/index.vue"
import Category from "@/views/Category/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    //path和component对应关系的位置
    {
      path:'/',
      component: Layout,
      children:[
        {
          path:'',
          component: Home,
        },
        {
          path:'/Category/:id',
          component: Category,
        },

      ]
    },
    {
      path:'/login',
      component: Login
    }
  ]
})

export default router
