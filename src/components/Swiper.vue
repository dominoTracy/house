<template>
  <!-- <swiper ref= 'mySwiper ' :options= 'swiperOptions' autoplay='1000'>
    <swiper-slide><img src="../assets/images/bj1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bj1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bj1.jpg" alt=""></swiper-slide>
    <div class= 'swiper-pagination ' slot= 'pagination '></div>
  </swiper> -->
  <div class="swiper-container" style="height:600px">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
    <!-- 如果需要滚动条 -->
    <div class="swiper-scrollbar"></div>
</div>
</template>

<script>
import 'swiper/swiper-bundle.css'
import Swiper from 'swiper/swiper-bundle.min.js'
export default {
  name: 'carrousel',
  data () {
    return {
      swiperOptions: {
        notNextTick: true,
        autoplay: 3000,
        direction: 'horizontal',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination '
        }
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    // swiper () {
    //   return this.$refs.mySwiper.$swiper
    // }
  },
  methods: {
    init () {
      setTimeout(() => {
        var mySwiper = new Swiper('.swiper-container', {
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          },
          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar'
          }
        })
      }, 1000)
    }
  },
  mounted () {
    this.init()
    console.log('Current Swiper instance object ', this.swiper)
    // this.swiper.slideTo(2, 1000, false)
  }
}
</script>
<style lang="scss" scoped>
.swiper-slide{
  width: 500px;
  height: 400px;
}
</style>
