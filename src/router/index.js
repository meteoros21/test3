import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import PostList from '../views/PostList'
import PostDetail from '../views/PostDetail'
import PostEdit from '../views/PostEdit'
import Test1 from '../views/Test1'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: '/post-list',
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/post-list',
    name: 'postList',
    component: PostList
  },
  {
    path: '/post-detail/:no',
    name: 'postDetail',
    component: PostDetail
  },
  {
    path: '/post-edit/:no',
    name: 'postEdit',
    component: PostEdit
  },
  {
    path: '/test1',
    name: 'test1',
    component: Test1
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
