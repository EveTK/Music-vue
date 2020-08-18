import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入对应的路由
import discovery from '@/views/001.discovery.vue'
import playlists from '@/views/002.playlists.vue'
import songs from '@/views/003.songs.vue'
import mvs from '@/views/004.mvs.vue'
import result from '@/views/005.result.vue'
import playlist from '@/views/006.playlist.vue'
import mv from '@/views/007.mv.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/discovery'
    },
    {
      // 发现音乐
      path: '/discovery',
      component: discovery
    },
    {
      // 推荐歌单
      path: '/playlists',
      component: playlists
    },
    {
      // 推荐歌单
      path: '/playlist',
      component: playlist
    },
    {
      // 最新音乐
      path: '/songs',
      component: songs
    },
    {
      // 最新音乐
      path: '/mvs',
      component: mvs
    },
    // mv详情
    {
      path: '/mv',
      component: mv
    },
    // 搜索结果页
    {
      path: '/result',
      component: result
    }
  ]


  const router = new VueRouter({
    routes
  })
  
  export default router