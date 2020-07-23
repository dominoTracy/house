<template>
  <div class="mian" :style="{height:screenHeight+'px'}">
    <div class="bg bg-img"></div>
    <div class="swiper-main">
        <div class="swiper-thumbnail">
        <div
          class="thumbnail-item bg-img"
          v-for="(item,index) in url"
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
        <swiper-slide v-for="(item,index) in url" :key="index" @slideChange="slideChange">
          <div class="main-bg bg-img" :style="'background-image:url('+item+')'"></div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'gallery',
  components: {},
  data () {
    const _self = this
    return {
      screenHeight: '',
      swiperOptionThumbs1: {
        spaceBetween: 10,
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
      url: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595352166099&di=6e681c7a7543c32a5ca335ed1d014025&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595352166099&di=64450061d034e0966f6094798d21432d&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595352166098&di=0cf74d2dbbeb0dd7c75bcdc928ad68be&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F16%2F12%2F01300535031999137270128786964.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595352166098&di=2d3909fa45d34cb3f0d573899453b4ec&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F57%2F28%2F01300000921826141405283668131.jpg'
      ],
      list: [
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595352166099&di=6e681c7a7543c32a5ca335ed1d014025&imgtype=0&src=http%3A%2F%2Fa1.att.hudong.com%2F62%2F02%2F01300542526392139955025309984.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595352166099&di=64450061d034e0966f6094798d21432d&imgtype=0&src=http%3A%2F%2Fa4.att.hudong.com%2F52%2F52%2F01200000169026136208529565374.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595352166098&di=0cf74d2dbbeb0dd7c75bcdc928ad68be&imgtype=0&src=http%3A%2F%2Fa0.att.hudong.com%2F16%2F12%2F01300535031999137270128786964.jpg',
        'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595352166098&di=2d3909fa45d34cb3f0d573899453b4ec&imgtype=0&src=http%3A%2F%2Fa3.att.hudong.com%2F57%2F28%2F01300000921826141405283668131.jpg'
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
