import Vue from 'vue'
import Router from 'vue-router'
import VR from '@/components/VR'
import LoginIn from '@/view/login/login'
import Swiper from '@/components/Swiper'
import test from '@/components/test'
import house from '@/view/house/house'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginIn',
      component: LoginIn
    },
    {
      path: '/house',
      name: 'house',
      component: house
    },
    {
      path: '/vr',
      name: 'VR',
      component: VR
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/test',
      name: 'test',
      component: test
    }
  ]
})
