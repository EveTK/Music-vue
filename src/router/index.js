import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '@/views/Main.vue'
import Recommend from '@/views/Recommend.vue'
import Singer from '@/views/Singer.vue'
import Rank from '@/views/Rank.vue'
import Search from '@/views/Search.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: Main,
    children: [
      {path: '', component: Recommend},
      { path: 'recommend',component: Recommend },
      { path: 'singer',component: Singer },
      { path: 'rank',component: Rank },
      { path: 'search',component: Search },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
