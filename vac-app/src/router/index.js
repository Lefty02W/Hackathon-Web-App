import Vue from 'vue'
import Router from 'vue-router'
import Info from '@/components/Info.vue'
import Stats from '@/components/Stats.vue'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.use(VueYouTubeEmbed)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Info',
      component: Info
    },
    {
      path: '/statistics',
      name: 'stats',
      component: Stats
    }
  ]
})
