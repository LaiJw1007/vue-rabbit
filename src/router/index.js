// createRouter:创建路由实例对象
// createWebHistory：创建history模式的路由
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 配置path和component对应关系的位置
  routes: [
    {
      path:'/',
      component:Layout,
      // 二级路由
      children:[{
        // 默认渲染页 路径可以滞空
        path:'',
        component:Home
      },
      {
        path:'category/:id',  //占位符 params传参  接收参数route.params.id
        component:Category
      },
      {
        path:'category/sub/:id',
        component: SubCategory
      }
    ]
    },
    {
      path:'/login',
      component:Login
    }
  ]
})

export default router
