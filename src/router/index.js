import Vue from 'vue'
import Router from 'vue-router'
import VueSidebarMenu from 'vue-sidebar-menu'
import Main from '@/components/Main'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

Vue.use(Router)
Vue.use(VueSidebarMenu)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    }
  ]
})
