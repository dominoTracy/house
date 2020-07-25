import Vue from 'vue'
import Router from 'vue-router'
import VR from '@/components/VR'
import LoginIn from '@/view/login/login'
import Swiper from '@/components/Swiper'
import test from '@/components/test'
import house from '@/view/house/house'
import showflat from '@/components/tt'
import gallery from '@/components/gallery'
import Test from '@/view/test/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LoginIn',
      component: LoginIn
    },
    {
      path: '/Test',
      name: 'Test',
      component: Test
    },
    {
      path: '/house',
      name: 'house',
      component: house
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery
    },
    {
      path: '/vr',
      name: 'VR',
      component: VR
    },
    {
      path: '/showflat',
      name: 'showflat',
      component: showflat
    },
    {
      path: '/swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/test1',
      name: 'test',
      component: test
    }
  ]
})
