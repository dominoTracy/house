<template>
  <swiper ref= 'mySwiper ' :options= 'swiperOptions '>
    <swiper-slide><img src="../assets/images/bj1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bj1.jpg" alt=""></swiper-slide>
    <swiper-slide><img src="../assets/images/bj1.jpg" alt=""></swiper-slide>
    <div class= 'swiper-pagination ' slot= 'pagination '></div>
  </swiper>
</template>

<script>
export default {
  name: 'carrousel ',
  data () {
    return {
      swiperOptions: {
        loop: true,
        pagination: {
          el: '.swiper-pagination '
        }
        // Some Swiper option/callback...
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    console.log('Current Swiper instance object ', this.swiper)
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
