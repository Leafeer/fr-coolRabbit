import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Base'
import AppIndex from '@/components/home/AppIndex.vue'
import NoteBook from '@/components/home/NoteBook.vue'
import JsonTool from '@/components/home/jsontool/Index.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: AppIndex,
        component:AppIndex,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/noteBook',
        name: NoteBook,
        component:NoteBook,
        meta: {
          requireAuth: true
        }
      },
      {
        path: '/jsonTool',
        name: JsonTool,
        component:JsonTool,
        meta: {
          requireAuth: true
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
