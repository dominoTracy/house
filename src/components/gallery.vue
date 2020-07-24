<template>
  <div class="mian" :style="{height:screenHeight+'px'}">
    <div class="bg bg-img"></div>
    <div class="swiper-main">
        <div class="swiper-thumbnail">
        <div
          class="thumbnail-item bg-img"
          v-for="(item,index) in list1"
          :key="index"
          :style="'background-image:url('+item+')'"
        >
          <div class="bg-color" v-if="index_url!=index"></div>
        </div>
      </div>
      <swiper
        :options="swiperOptionThumbs1"
        class="swiper-container gallery-top"
        ref="swiperThumbs1"
      >
        <swiper-slide v-for="(item,index) in list" :key="index" @slideChange="slideChange">
          <div class="main-bg bg-img" :style="'background-image:url('+item+')'"></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import showflat1 from '../assets/images/showflat1.png'
import showflat2 from '../assets/images/showflat2.png'
import showflat3 from '../assets/images/showflat3.png'
import showflat4 from '../assets/images/showflat4.png'
import showflat5 from '../assets/images/showflat5.png'

import f1 from '../assets/images/f1.png'
import f2 from '../assets/images/f2.png'
import f3 from '../assets/images/f3.png'
import f4 from '../assets/images/f4.png'
import f5 from '../assets/images/f5.png'

import s1 from '../assets/images/s1.png'
import s2 from '../assets/images/s2.png'
import s3 from '../assets/images/s3.png'
import s4 from '../assets/images/s4.png'
export default {
  name: 'gallery',
  components: {},
  data () {
    const _self = this
    return {
      screenHeight: '',
      swiperOptionThumbs1: {
        spaceBetween: 10,
        // loop: 'loop',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        thumbs: {
          swiper: _self.swiperOptionThumbs1
        },
        on: {
          slideChange: (e) => {
            console.log(e.activeIndex)
            this.index_url = e.activeIndex
          }
        }
      },
      swiperOptionThumbs2: {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true
      },
      list: [
        showflat1, showflat2, showflat3, showflat4, showflat5
      ],
      list1: [
        f1, f2, f3, f4, f5
      ],
      index_url: 0,
      index_list: 0
    }
  },
  mounted () {
    this.screenHeight = `${document.documentElement.clientHeight}`// 获取浏览器可视区域高度
    let that = this
    window.onresize = function () {
      that.screenHeight = `${document.documentElement.clientHeight}`
      if (that.$refs.page) {
        that.$refs.autoH.style.Height = this.screenHeight
      }
    }
  },
  created () {},
  computed: {
    swiper1 () {
      return this.$refs.swiperThumbs1.swiper
    },
    swiper2 () {
      return this.$refs.swiperThumbs2.swiper
    }
  },
  methods: {
    callback () {
      console.log(1)
    },
    slideChange () {
      console.log(this.$refs.swiperThumbs1.swiper.activeIndex)
    }
  }
}
</script>
<style lang="scss" scoped>
.mian {
  width: 100%;
  display: flex;
//   align-items: center;
  justify-content: center;
}
.bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  filter: blur(20px);
}
.bg-img {
  background-size: cover;
  background-position: center;
}
.swiper-main {
  width: 75%;
  height: 500px;
  margin: 30px 30px;
}
.swiper-container {
  margin-left: auto;
  margin-right: auto;
}
.swiper-thumbnail {
  width: 100%;
  margin: 10px auto 0;
  display: flex;
  overflow-x: scroll;
  display: flex;
  justify-content: center;
}
.thumbnail-item {
  position: relative;
  width: 150px;
  height: 85px;
  display: inline-table;
}

.main-bg {
  position: relative;
  width: 125%;
  height: 550px;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center center;
}
.list {
  width: 20%;
  margin-top: 20px;
}
.list-item {
  position: relative;
  width: 100%;
  height: 170px;
}
.bg-color {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
