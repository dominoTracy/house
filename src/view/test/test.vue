<template>
    <section>
        <div class="main">
            <div class="mainHead">
                <swiper ref= 'mySwiper' :options= 'swiperOptions '>
                    <!-- <swiper-slide class="swiper-slide" v-for="(item, key) in swiperList" :key="key">
                      <img class="swiper-head-img" :src="item.url" alt=""/>
                    </swiper-slide> -->
                    <swiper-slide v-for="(item, key) in swiperList" :key="key">1
                        <img class="swiper-head-img" :src="item.url" alt="" style="width:500px;height:500px"/>
                    </swiper-slide>
                    <div class= 'swiper-pagination ' slot= 'pagination '></div>
                </swiper>
                <div class="mainSlider">
                    <img class="btnSlider" @click="showSlider" src="../../assets/images/menu.png" alt="">
                    <img class="facebook" src="../../assets/images/icon_facebook.png" alt="">
                    <img class="wechat" src="../../assets/images/icon_wechat.png" alt="">
                    <img class="twitter" src="../../assets/images/icon_twitter.png" alt="">
                    <img class="icon_G" src="../../assets/images/icon_G+.png" alt="">
                    <img class="icon_P" src="../../assets/images/icon_P.png" alt="">
                    <div class="phone1">422-02155363117</div>
                    <img class="icon_phone" src="../../assets/images/icon_phone.png" alt="">
                    <div class="phone1">02155363117@sin.com</div>
                    <img class="icon_email" src="../../assets/images/icon_email.png" alt="">
                </div>
                <div class="mainInfo">
                    <img class="txt_main" src="../../assets/images/txt_main.png" alt="">
                    <el-button>Click to VIEW</el-button>
                </div>
                <div class="silderMenu" :class="{isslider:showslider,noslider:hideslider}">
                    <div class="sliderHead">
                        <img class="icon_back" @click="hideSlider" src="../../assets/images/icon_back.png" alt="">
                    </div>
                    <div class="menuContent">
                        <ul>
                            <li>HOME</li>
                            <li>INTRODUCTION</li>
                            <li>SITE PLAN</li>
                            <li>FLOOR PLAN</li>
                            <li @click="goVR">VR</li>
                            <li @click="goGallery">GALLERY</li>
                            <li>360 VIEW</li>
                            <li>FINANCING</li>
                            <li @click="goShowflat">SHOWFLAT CCTV</li>
                            <li>MEDIA ROOM</li>
                            <li>APPLICATION</li>
                            <li>EVENT</li>
                            <li>CONTACT US</li>
                        </ul>
                        <el-button>LOGIN</el-button>
                    </div>
                    <div class="menuFoot">
                        <a class="btnSearch" @click="openSearch" href="javascript:;">
                            <img src="../../assets/images/btn_search.png" alt="">
                        </a>
                        <el-button-group class="btnLang">
                            <el-button class="btnlanguage" size="mini"
                                        :type="btnEn"
                                        @click="changeEn">En</el-button>
                            <el-button class="btnlanguage" size="mini"
                                        :type="btnZh"
                                        @click="changeZh">中文</el-button>
                        </el-button-group>
                    </div>
                </div>
                <div class="searchBox" v-if="showSearch">
                    <div class="searchBackground" @click="closeSearch"></div>
                    <div class="searchGroup">
                    <div class="searchBigTitle">Find Your Dream Home</div>
                    <div class="searchMiniTitle">e Have Over Million Properties For You</div>
                    <div class="searchMain">
                        <div class="searchColumn">
                        <el-select v-model="locationInput" placeholder="请选择">
                            <el-option
                            v-for="item in location"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="Status" placeholder="请选择">
                            <el-option
                            v-for="item in status"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <el-select v-model="Type" placeholder="请选择">
                            <el-option
                            v-for="item in type"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        </div>
                        <div class="searchColumn">
                        <el-select v-model="Bedrooms" placeholder="请选择">
                            <el-option
                            v-for="item in bedrooms"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                        <div class="choosePrice">
                            <div class="block">
                            <div class="demonstration">Price Range</div>
                            <el-slider v-model="value1" range></el-slider>
                            </div>
                        </div>
                        <el-button>Search now</el-button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="content1">
                <el-row :gutter="20">
                    <el-col :span="14">
                        <div class="boxImg">
                            <img class="queens" src="../../assets/images/queens.jpg" alt="">
                        </div>
                    </el-col>
                    <el-col :span="10">
                        <div class="boxRight">
                            <div class="boxQueens">
                                <img class="logo_queens" src="../../assets/images/logo_queens.png" alt="">
                            </div>
                            <div class="boxTitle">
                                <div class="zdhh">DISTINCTIVELY DIFFERENT AND ABOVE ALL TIMELESS</div>
                            </div>
                            <div class="boxContent">
                                <div>There are those who think little of details. And those who know that they are the very essence of life. For the latter, Queens Peak awaits.</div>
                                <div>Rising forty-four storeys into the sky across two residential towers, the sinuously contoured balconies give the façade a sculptural presence that at once evoke a sense of awe.</div>
                                <div>More than a mere residence, it is a landmark celebration of the finer things in life. A veritable design expression of ‘less is more’ elevated to the sublime, leaving you the enviable task of savouring an abode that is clearly distinctively different and timeless.</div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <div class="content2">
                <el-row :gutter="20">
                    <el-col :span="24">
                        <div class="boxGallery">
                            <div class="titleGallery">
                                <img class="imgGallery" src="../../assets/images/icon_gallery.png" alt="">
                            </div>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="24">
                        <div class="boxCarousel" @click="goGallery">
                            <el-carousel :interval="5000" arrow="always" type="card" height="420px">
                                <el-carousel-item>
                                    <img class="imgCard" src="../../assets/images/bj3.jpg" alt="">
                                </el-carousel-item>
                                <el-carousel-item>
                                    <img class="imgCard" src="../../assets/images/bj3.jpg" alt="">
                                </el-carousel-item>
                                <el-carousel-item>
                                    <img class="imgCard" src="../../assets/images/bj3.jpg" alt="">
                                </el-carousel-item>
                            </el-carousel>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!-- location -->
            <el-row style="background:linear-gradient(0deg,rgba(227,221,211,1),rgba(217,211,202,1));">
                <el-col :span="24">
                    <div class="logoLocation">
                        <img src="../../assets/images/logo_location.png" alt="">
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="boxLocation">
                        <div class="locationBj">
                            <el-tabs type="border-card" style="background:#f2f2f2">
                                <el-tab-pane label="Amentities">
                                    <div class="contentLo">
                                        <img src="../../assets/images/contentQueens.png" alt="">
                                    </div>
                                    <el-button>Click to VIEW</el-button>
                                </el-tab-pane>
                                <el-tab-pane label="Neighbourhood">Neighbourhood</el-tab-pane>
                            </el-tabs>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!-- INTRODUCTION -->
            <el-row style="background:linear-gradient(0deg,rgba(227,221,211,1),rgba(217,211,202,1));">
                <el-col :span="24">
                    <div class="icon_int">
                        <img src="../../assets/images/icon_int.png" alt="">
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="bigVideo">
                        <img class="boxplay" src="../../assets/images/boxplay.png" alt="">
                        <img class="icon_play_big" src="../../assets/images/icon_play_big.png" alt="">
                        <div class="txtVideo">
                            <div class="txtContent">
                                <div class="txt1">Developer</div>
                                <div class="txt2">Singapore Company</div>
                            </div>
                            <el-button>LIVE VIEW </el-button>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="boxMiniVideo">
                        <div class="miniBox1">
                            <div class="miniVideo">
                                <div class="txtVideo">
                                    <div class="txtContent">
                                        <div class="txt1">Developer</div>
                                        <div class="txt2">Singapore Company</div>
                                    </div>
                                    <img class="icon_play_small" src="../../assets/images/icon_play_small.png" alt="">
                                </div>
                            </div>
                            <div class="miniVideo">
                                <div class="txtVideo">
                                    <div class="txtContent">
                                        <div class="txt1">Developer</div>
                                        <div class="txt2">Singapore Company</div>
                                    </div>
                                    <img class="icon_play_small" src="../../assets/images/icon_play_small.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="miniBox1">
                            <div class="miniVideo">
                                <div class="txtVideo">
                                    <div class="txtContent">
                                        <div class="txt1">Developer</div>
                                        <div class="txt2">Singapore Company</div>
                                    </div>
                                    <img class="icon_play_small" src="../../assets/images/icon_play_small.png" alt="">
                                </div>
                            </div>
                            <div class="miniVideo">
                                <div class="txtVideo">
                                    <div class="txtContent">
                                        <div class="txt1">Developer</div>
                                        <div class="txt2">Singapore Company</div>
                                    </div>
                                    <img class="icon_play_small" src="../../assets/images/icon_play_small.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!-- Site Plan -->
            <el-row>
                <el-col :span="24">
                    <div class="logo_site">
                        <img src="../../assets/images/logo_site.png" alt="">
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="boxSite">
                        <div class="siteBj">
                            <div class="slider">
                                <ul>
                                    <li>Level Upper</li>
                                    <li>Level 07</li>
                                    <li>Level 09 Upper</li>
                                    <li>Level 09 Lower</li>
                                    <li>Level 10</li>
                                    <li>Level 16 Upper</li>
                                    <li>Level 17 Lower</li>
                                    <li>Level 22</li>
                                    <li>Level 23</li>
                                    <li>Level 24</li>
                                    <li>Level 25</li>
                                    <li>Level 27 lower</li>
                                    <li>Level 29 Lower</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!-- Floor Plan -->
            <el-row>
                <el-col :span="24">
                    <div class="logo_site floorPlan">
                        <img src="../../assets/images/logo_floor.png" alt="">
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="boxSite">
                        <div class="noBj">
                            <div class="imgBj"></div>
                            <div class="boxChoose">
                                <div class="chooseItem"></div>
                                <div class="chooseItem"></div>
                                <div class="chooseItem"></div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!-- VR -->
            <el-row>
                <el-col :span="24" class="floorTitle">
                    <div class="logo_site logo_floor">
                        <img class="logo_virtual" src="../../assets/images/logo_virtual.png" alt="">
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="floorBj" :style="{backgroundImage:'url('+ floorimg +'  )'}" @click="goVR">
                        <!-- <img class="icon_where" src="../../assets/images/icon_where.png" alt=""> -->
                        <div class="boxFloor">
                            <img class="leftImg" src="../../assets/images/vrr1.png" @mouseover="setimg1" alt="">
                            <img src="../../assets/images/vrr2.png" @mouseover="setimg2" alt="">
                            <img src="../../assets/images/vrr3.png" @mouseover="setimg3" alt="">
                            <img class="rightImg" src="../../assets/images/vrr4.png" @mouseover="setimg4" alt="">
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!-- SHOWFLAT -->
            <el-row style="background:linear-gradient(0deg,rgba(227,221,211,1),rgba(217,211,202,1));">
                <el-col :span="24">
                    <div class="icon_int icon_showflat">
                        <img style="width:272px" src="../../assets/images/logo_showflat.png" alt="">
                    </div>
                </el-col>
                <el-col :span="10">
                    <div class="boxShowFlat">
                        <div class="sminibox">
                            <div class="miniVideo sFlat">
                                <div class="flatBt">
                                    <img src="../../assets/images/wz1.png" alt="">
                                </div>
                            </div>
                            <div class="miniVideo sFlat">
                                <div class="flatBt">
                                    <img src="../../assets/images/wz1.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="sminibox">
                            <div class="miniVideo sFlat">
                                <div class="flatBt">
                                    <img src="../../assets/images/wz1.png" alt="">
                                </div>
                            </div>
                            <div class="miniVideo sFlat">
                                <div class="flatBt">
                                    <img src="../../assets/images/wz1.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="14">
                    <div class="bigVideo vrRight sWidth">
                        <div class="txtVideo colorShow">
                            <div class="txtContent">
                                <el-button @click="goShowflat">TO VIEW</el-button>
                            </div>
                            <div>
                                <img src="../../assets/images/wz1.png" alt="">
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!-- 360 -->
            <el-row style="background:linear-gradient(0deg,rgba(227,221,211,1),rgba(217,211,202,1));">
                <el-col :span="12">
                    <div class="icon_int logo_360">
                        <img src="../../assets/images/logo_360.png" alt="">
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="icon_int logo_media">
                        <img src="../../assets/images/logo_media.png" alt="">
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="bigVideo bj360">
                        <img class="boxplay" src="../../assets/images/icon_360.png" alt="">
                        <div class="txtVideo">
                            <div class="txtContent">
                                <div class="txt3">THE SANTORINI</div>
                                <div class="txt2">From MCC Singapore Company</div>
                            </div>
                            <el-button>LIVE VIEW </el-button>
                        </div>
                    </div>
                </el-col>
                <el-col :span="12">
                    <div class="boxMiniVideo">
                        <div class="miniBox1">
                            <div class="miniVideo">
                                <div class="txtVideo">
                                    <div class="txtContent">
                                        <div class="txt1">Developer</div>
                                        <div class="txt2">Singapore Company</div>
                                    </div>
                                    <img class="icon_play_small" src="../../assets/images/icon_play_small.png" alt="">
                                </div>
                            </div>
                            <div class="miniVideo">
                                <div class="txtVideo">
                                    <div class="txtContent">
                                        <div class="txt1">Developer</div>
                                        <div class="txt2">Singapore Company</div>
                                    </div>
                                    <img class="icon_play_small" src="../../assets/images/icon_play_small.png" alt="">
                                </div>
                            </div>
                        </div>
                        <div class="miniBox1">
                            <div class="miniVideo">
                                <div class="txtVideo">
                                    <div class="txtContent">
                                        <div class="txt1">Developer</div>
                                        <div class="txt2">Singapore Company</div>
                                    </div>
                                    <img class="icon_play_small" src="../../assets/images/icon_play_small.png" alt="">
                                </div>
                            </div>
                            <div class="miniVideo">
                                <div class="txtVideo">
                                    <div class="txtContent">
                                        <div class="txt1">Developer</div>
                                        <div class="txt2">Singapore Company</div>
                                    </div>
                                    <img class="icon_play_small" src="../../assets/images/icon_play_small.png" alt="">
                                </div>
                            </div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <!-- EVENT -->
            <el-row>
                <el-col :span="24">
                    <div class="icon_int">
                        <img src="../../assets/images/icon_int.png" alt="">
                    </div>
                </el-col>
                <el-col :span="24">
                    <div class="boxEvent">
                        <div class="comi"></div>
                    </div>
                </el-col>
            </el-row>
            <!-- foot -->
            <el-row>
                <el-col :span="24">
                    <div class="footer">
                        <div class="boxFoot">
                            MCC &nbsp; LAND &nbsp; (s) &nbsp;PTELTD &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; CHINA &nbsp; JINGYE &nbsp; ENGINEERING &nbsp; CORPORATION &nbsp; LTD &nbsp; (SINGAPORE &nbsp; BRANCH)
                        </div>
                        <div class="line"></div>
                        <div class="boxBottom">
                            <div class="bottom1">
                            <div class="bottomRow1">MCC LAND ( SINGAPORE) P TE LTD</div>
                            <div class="bottomRow2 mt36">Bukit batok crescent 319 73 wcega</div>
                            <div class="bottomRow2 mt10">Tower singapore 658065</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10">Email: info@mccsingapore.com.sg</div>
                            <div class="bottomRow2 mt10">@COPYRIGHT 1994 - 2020 . ALL</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10">RIGHTS RESERVED</div>
                            </div>
                            <div class="line2"></div>
                            <div class="bottom1">
                            <div class="bottomRow1">COMMERCIAL</div>
                            <div class="bottomRow2 mt36">For sale</div>
                            <div class="bottomRow2 mt10">For rent</div>
                            <div class="bottomRow2 mt10">Unit search</div>
                            <div class="bottomRow2 mt10">Promotions</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            </div>
                            <div class="line2"></div>
                            <div class="bottom1">
                            <div class="bottomRow1">INTERNATIONAL</div>
                            <div class="bottomRow2 mt36">Hotels & Serviced residences</div>
                            <div class="bottomRow2 mt10">Shopping mails</div>
                            <div class="bottomRow2 mt10">Food & Beverage</div>
                            <div class="bottomRow2 mt10">Self-storage</div>
                            <div class="bottomRow2 mt10">Laundry services</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            </div>
                            <div class="line2"></div>
                            <div class="bottom1">
                            <div class="bottomRow1">ABOUTS US</div>
                            <div class="bottomRow2 mt36">Accolades</div>
                            <div class="bottomRow2 mt10">Newsroom</div>
                            <div class="bottomRow2 mt10">Careers</div>
                            <div class="bottomRow2 mt10">Construction updates</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            </div>
                            <div class="line2"></div>
                            <div class="bottom1">
                            <div class="bottomRow1">CONTACT US</div>
                            <div class="bottomRow2 mt36">Connect with us</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            <div class="bottomRow2 mt10 visiH">space</div>
                            </div>
                        </div>
                        </div>
                </el-col>
            </el-row>
        </div>
    </section>
</template>
<script>
import vr1 from '../../assets/images/vr1.png'
import vr2 from '../../assets/images/vr2.png'
import vr3 from '../../assets/images/vr3.png'
import vr4 from '../../assets/images/vr4.png'

export default {
  name: 'Test',
  data () {
    return {
      swiperList: [
        {
          url: '../../assets/images/bj1.jpg'
        },
        {
          url: '../../assets/images/bj1.jpg'
        },
        {
          url: '../../assets/images/bj1.jpg'
        }
      ],
      swiperOptions: {
        loop: true,
        autoplay: 'autoplay',
        pagination: {
          el: '.swiper-pagination '
        }
      },
      showslider: false,
      hideslider: true,
      lang: 'English',
      btnEn: 'info',
      btnZh: '',
      showSearch: false,
      location: [
        {
          value: 'zh-CN',
          label: '中文简体'
        },
        {
          value: 'en-US',
          label: 'English'
        }
      ],
      status: [
        {
          value: 'zh-CN',
          label: '中文简体'
        },
        {
          value: 'en-US',
          label: 'English'
        }
      ],
      type: [
        {
          value: 'zh-CN',
          label: '中文简体'
        },
        {
          value: 'en-US',
          label: 'English'
        }
      ],
      bedrooms: [
        {
          value: 'zh-CN',
          label: '中文简体'
        },
        {
          value: 'en-US',
          label: 'English'
        }
      ],
      price: [
        {
          value: 'zh-CN',
          label: '中文简体'
        },
        {
          value: 'en-US',
          label: 'English'
        }
      ],
      locationInput: '',
      Status: '',
      Type: '',
      Bedrooms: '',
      Price: '',
      value1: [0, 60000],
      floorimg: vr1
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(3, 1000, false)
  },
  methods: {
    goVR () {
      this.$router.push('/vr')
    },
    goGallery () {
      this.$router.push('/gallery')
    },
    goShowflat () {
      this.$router.push('/showflat')
    },
    setimg1 () {
      this.floorimg = vr1
    },
    setimg2 () {
      this.floorimg = vr2
    },
    setimg3 () {
      this.floorimg = vr3
    },
    setimg4 () {
      this.floorimg = vr4
    },
    showSlider () {
      this.hideslider = !this.hideslider
      this.showslider = !this.showslider
    },
    hideSlider () {
      this.showslider = !this.showslider
      this.hideslider = !this.hideslider
    },
    changeEn () {
      this.lang = 'enUS'
      this.btnEn = 'info'
      this.btnZh = ''
    },
    changeZh () {
      this.lang = 'zhCN'
      this.btnZh = 'info'
      this.btnEn = ''
    },
    openSearch () {
      var preD = function (e) {
        e.preventDefault()
      }
      this.showSearch = !this.showSearch
      if (this.showSearch) {
        document.body.style.overflow = 'hidden'
        document.addEventListener('touchmove', preD, {passive: false}) // 禁止页面滑动
      } else {
        document.body.style.overflow = '' // 出现滚动条
        document.removeEventListener('touchmove', preD, {passive: false})
      }
    },
    closeSearch () {
      var preD = function (e) {
        e.preventDefault()
      }
      this.showSearch = !this.showSearch
      document.body.style.overflow = '' // 出现滚动条
      document.removeEventListener('touchmove', preD, {passive: false})
    }
  }
}
</script>
<style lang="scss" scoped>
.main{
    .txt3{
        font-size:24px;
        font-family:Montserrat;
        font-weight:bold;
        color:rgba(86,86,86,1);
    }
    .bj360{
        // background: url('../../assets/images/test_housetype.jpg') no-repeat;
    }
    .logo_360{
        width: 237px!important;
        margin-left: 40px!important;
    }
    .logo_media{
        margin-left: 20px!important;
        width: 316px!important;
    }
    .colorShow{
        background:rgba(230,172,92,1)!important;
        .el-button{
            width:176px;
            height:44px;
            border:4px solid rgba(246,252,253,1);
            border-radius:4px;
            font-size:20px;
            font-family:Montserrat;
            font-weight:bold;
            color:rgba(255,255,255,1)!important;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        img{
            width: 80%;
        }
    }
    .flatBt{
        width: 100%;
        height: 30%;
        background-color: #E6AC5C;
        border-radius:0px 0px 8px 8px;
        position: absolute;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 80%;
        }
    }
    .sWidth{
        height: 454px!important;
        margin-top: 60px!important;
        background: url('../../assets/images/test3.jpg') no-repeat!important;
        background-size: 100% 100%!important;
    }
    .boxShowFlat{
        display: flex;
        margin-left: 30px;
        margin-top: 50px;
        margin-right: 10px;
        .sminibox{
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: start!important;
            .sFlat{
                position: relative;
                width: 94%!important;
                background: url('../../assets/images/test_house.jpg') no-repeat!important;
                height: 217px!important;
                margin: 10px 10px 10px 10px;
                border-radius: 8px;
                cursor: pointer;
            }
        }
    }
    .icon_showflat{
        margin-left: 0 !important;
    }
    .logo_virtual{
        width: 400px;
        height: 66px;
    }
    .boxEvent{
        width: 100%;
        .comi{
            width: 100%;
            height: 1460px;
            background: url('../../assets/images/test4.png');
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            background-position: center center;
        }
    }
    .noLeft{
        padding-left: 20!important;
    }
    .vrLeft{
        margin-left: 40px!important;
        margin-right: 20px!important;
    }
    .vrRight{
        margin-left: 0!important;
        margin-right: 40px!important;
    }
    .floorBj{
        width: 100%;
        height: 700px;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center center;
        cursor: pointer;
        .icon_where{
            width: 88px;
            width: 88px;
            margin-top: 200px;
        }
        .boxFloor{
            width: 100%;
            height:200px;
            background:rgba(255,255,255,1);
            position: absolute;
            top: 700px;
            left: 0;
            display: flex;
            justify-content: space-around;
            align-items: center;
            // padding: 0 20px 0 10px;
            img{
                width: 23%;
                height: 190px;
                border-radius:8px;
                cursor: pointer;
            }
            .leftImg{
                margin-left: 30px;
            }
            .rightImg{
                margin-right: 30px;
            }
        }
    }
    .floorTitle{
        background: #F2F2F2;
        padding-bottom: 88px;
    }
    .logo_floor{
        width: 303px;
    }
    .noBj{
        width: 100%;
        height: 100%;
        background: #fff;
        display: flex;
        .boxChoose{
            width: 20%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            background: #E6E6E6;
            .chooseItem{
                margin-left: 2%;
                width: 98%;
                height: 32%;
                background: #fff;
            }
        }
    }
    .imgBj{
        width: 80%;
        height: 100%;
        background: url('../../assets/images/test_floor2.png') no-repeat;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center center;
    }
    .floorPlan{
        width: 303px;
        height: 66px;
    }
    .boxSite{
        width: 95%;
        height: 600px;
        margin: 2.5% 0 88px 2.5%;
        background: #E6E6E6;
        padding: .5% .5% .5% .5%;
        .siteBj{
            position: relative;
            width: 100%;
            height: 100%;
            background: url('../../assets/images/test_floor.jpg');
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            background-position: center center;
            .slider{
                position: absolute;
                top: 0;
                left: 0;
                width: 25%;
                height: 600px;
                background: #F2F2F2;
                ul{
                    margin-top: 30px;
                    color:rgba(64,64,64,1);
                    float: left;
                    text-align: left;
                    margin-left: 100px;
                    li{
                        font-size:12px;
                        font-family:Montserrat;
                        font-weight:600;
                        color:rgba(64,64,64,1);
                        cursor: pointer;
                        margin-top: 10px;
                    }
                    li:hover{
                        color: #E6AC5C;
                        margin-left: -100px;
                    }
                }
            }
        }
    }
    .logo_site{
        padding-left: 40px;
        width: 250px;
        height: 66px;
        margin-top: 88px;
        float: left;
    }
    .miniBox1{
        display: flex;
        justify-content: space-between;
        .miniVideo{
            background: royalblue;
            // max-width: 300px;
            width: 49%;
            height: 190px;
            background: url('../../assets/images/miniVideo.png');
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            background-position: center center;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            border-radius:8px;
            cursor: pointer;
            .txtVideo{
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 88px;
                background:linear-gradient(90deg,rgba(255,255,255,1),rgba(230,230,230,1));
                border-radius:0px 0px 8px 8px;
                display: flex;
                align-items: center;
                flex-flow: row nowrap;
                justify-content: space-between;
                .icon_play_small{
                    width: 44px;
                    height: 44px;
                    margin-right: 20px;
                }
                .txtContent{
                    display: flex;
                    flex-direction: column;
                    margin-left: 20px;
                    .txt1{
                        text-align: left;
                        font-size:24px;
                        font-family:Montserrat;
                        font-weight:bold;
                        color:rgba(86,86,86,1);
                    }
                    .txt2{
                        text-align: left;
                        font-size:18px;
                        font-family:Montserrat;
                        font-weight:600;
                        color:rgba(86,86,86,1);
                    }
                }
            }
        }
    }
    .boxMiniVideo{
        margin-top: 50px;
        margin-left: 20px;
        margin-right: 40px;
        height: 400px;
        margin-bottom: 88px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .bigVideo{
        margin-top: 50px;
        margin-left: 40px;
        height: 400px;
        background: url('../../assets/images/bigVideo.jpg');
        margin-bottom: 88px;
        background-size: cover;
        -webkit-background-size: cover;
        -o-background-size: cover;
        background-position: center center;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        border-radius:8px;
        .boxplay{
            width: 55px;
            height: 53px;
            float: right;
            margin: 2% 20% 0 108%;
            cursor: pointer;
        }
        .icon_play_big{
            width: 130px;
            height: 130px;
            margin-top: 7%;
            cursor: pointer;
        }
        .txtVideo{
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 88px;
            background:linear-gradient(90deg,rgba(255,255,255,1),rgba(230,230,230,1));
            border-radius:0px 0px 8px 8px;
            display: flex;
            align-items: center;
            flex-flow: row nowrap;
            justify-content: space-between;
            .el-button{
                width:176px;
                height:44px;
                background:rgba(246,210,114,1);
                border-radius:4px;
                font-size:20px;
                font-family:Montserrat;
                font-weight:bold;
                color:rgba(64,64,64,1);
                margin-right: 20px;
            }
            .txtContent{
                display: flex;
                flex-direction: column;
                margin-left: 20px;
                .txt1{
                    text-align: left;
                    font-size:24px;
                    font-family:Montserrat;
                    font-weight:bold;
                    color:rgba(86,86,86,1);
                }
                .txt2{
                    text-align: left;
                    font-size:18px;
                    font-family:Montserrat;
                    font-weight:600;
                    color:rgba(86,86,86,1);
                }
            }
        }
    }
    .icon_int{
        margin-left: 40px;
        width: 358px;
        height: 66px;
        margin-top: 88px;
        float: left;
    }
    .boxLocation{
        padding-bottom: 88px;
        .locationBj{
            margin: 50px 0 0 40px;
            // padding-right: 40px;
            width: 94%;
            min-width: 1200px;
            height: 500px;
            background: url('../../assets/images/location_map.jpg') no-repeat;
            background-size: cover;
            -webkit-background-size: cover;
            -o-background-size: cover;
            background-position: center center;
            border:4px solid rgba(255, 255, 255, 1);
            box-shadow:0px 8px 12px 0px rgba(0, 0, 0, 0.35);
            .el-tabs{
                width: 400px;
                float: right;
                height: 496px;
                // background: #BFBFBF;
            }
            .contentLo{
                width: 100%;
                height: 100%;
                img{
                    width: 50%;
                    height: 50%;
                    margin-left: -15%;
                    margin-top: 10%;
                }
            }
            .el-button{
                    width: 195px;
                    height: 49px;
                    background: #f6d272;
                    border-radius: 4px;
                    font-size: 17px;
                    font-weight: bold;
                    color: #000;
                    margin-left: -15%;
                    margin-top: 10%;
                }
        }
    }
    .logoLocation{
        padding-left: 40px;
        img{
            margin-top: 88px;
            width: 250px;
            height: 66px;
            float: left;
        }
    }
    .content2{
        width: 100%;
        height:800px;
        margin-top: 88px;
        background:linear-gradient(0deg,rgba(227,221,211,1),rgba(255,255,255,1));
        .boxGallery{
            width: 100%;
            margin-top: 88px;
            display: flex;
            flex-direction: column;
            .titleGallery{
                width: 100%;
                .imgGallery{
                    float: left;
                    width: 228px;
                    height: 66px;
                    padding-left: 40px;
                }
            }
        }
        .boxCarousel{
            margin-top: 108px;
            padding: 0 40px 0 40px;
            .el-carousel{
                height: 450px;
                overflow: hidden;
            }
            .el-carousel__item--card{
                width: 810px !important;
                height: 410px !important;
                background: #fff;
                border:4px solid rgba(255, 255, 255, 1) !important;
                box-shadow:0px 4px 10px 0px rgba(0, 0, 0, 0.35) !important;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0;
                .el-carousel__mask{
                    background: #000000 !important;
                    opacity: .7 !important;
                }
                .imgCard{
                    width: 800px;
                    height: 400px;
                }
            }
            .el-carousel__indicator{
                width: 300px !important;
                height: 100px !important;
            }
        }
    }
    .content1{
        width: 100%;
        margin-top: 80px;
        .boxImg{
            width: 810px;
            height: 410px;
            border:4px solid rgba(255, 255, 255, 1);
            box-shadow:0px 8px 12px 0px rgba(0, 0, 0, 0.35);
            padding: 0 0 0 0px;
            margin: 0 0 0 40px;
            .queens{
                width: 800px;
                height: 400px;
                padding: 5px;
            }
        }
        .boxRight{
            height: 410px;
            display: flex;
            flex-direction: column;
            .boxQueens{
                width: 100%;
                height: 137px;
                .logo_queens{
                    width: 200px;
                    height: 137px;
                    float: right;
                    margin-right: 40px;
                }
            }
            .boxTitle{
                width: 100%;
                margin-top: 50px;
                .zdhh{
                    float: left;
                    width: 322px;
                    font-size:24px;
                    font-weight:bold;
                    color:rgba(64,64,64,1);
                }
            }
            .boxContent{
                width: 100%;
                div{
                    float: left;
                    text-align: left;
                    margin-top: 5px;
                    color:rgba(191,191,191,1);
                }
            }
        }
    }
    .isslider{
        transform: translate(318px,0);
        transition: transform 1s;
    }
    .noslider{
        transform: translate(-318px,0);
        transition: transform 2s;
    }

    .mainHead{
        .swiper-slide{
            width: 100%;
            height: 600px;
            //background: url('../../assets/images/bj2.png') no-repeat;
            //background-size: cover;
            //-webkit-background-size: cover;
            //-o-background-size: cover;
            //background-position: center center;
        }
        .swiper-head-img{
          width: 100%;
          height: 600px;
        }
        .mainSlider{
            position: absolute;
            left: 0;
            top: 0;
            width: 40px;
            height: 600px;
            background: #fff;
            z-index: 3;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                display: block;
            }
            .btnSlider{
                width: 20px;
                height: 20px;
                margin-top: 8px;
                cursor: pointer;
            }
            .facebook{
                width: 20px;
                height: 20px;
                margin-top: 90px;
            }
            .wechat{
                width: 20px;
                height: 17px;
                margin-top: 10px;
            }
            .twitter{
                width: 20px;
                height: 17px;
                margin-top: 10px;
            }
            .icon_G{
                width: 20px;
                height: 20px;
                margin-top: 10px;
            }
            .icon_P{
                width: 20px;
                height: 20px;
                margin-top: 10px;
            }
            .phone1{
                width: 100px;
                height: 10px;
                font-size: 10px;
                -moz-transform:rotate(90deg);
                -webkit-transform:rotate(90deg);
                -o-transform:rotate(90deg);
                transform:rotate(90deg);
                margin-top: 65px;
                font-weight:bold;
                color:rgba(63,63,63,1);
            }
            .icon_phone{
                width: 10px;
                height: 10px;
                margin-top: 40px;
            }
            .icon_email{
                width: 10px;
                height: 10px;
                margin-top: 57px;
            }
        }
        .mainInfo{
            position: absolute;
            top: 0;
            left: 40px;
            width: 318px;
            height: 600px;
            background: rgba(0,0,0,.5);
            z-index: 2;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .txt_main{
                width: 294px;
                height: 243px;
            }
            .el-button{
                width: 195px;
                height: 49px;
                background: #f6d272;
                border-radius: 4px;
                font-size: 17px;
                font-family: Montserrat;
                font-weight: bold;
                color: #000;
                margin-top: 20px;
            }
        }
        .silderMenu{
            position: absolute;
            top: 0;
            left: -278px;
            width: 318px;
            height: 600px;
            z-index: 2;
            background: #fff;
            box-shadow:0px -12px 12px 8px rgba(119,116,116,0.26);
            animation:mymove 5s infinite;
            -webkit-animation:mymove 5s infinite; /*Safari and Chrome*/
            .sliderHead{
                width: 318px;
                height: 40px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                border-bottom: 1px solid rgba(128,128,128,1);
                .icon_back{
                    width: 20px;
                    height: 20px;
                    margin-right: 10px;
                    cursor: pointer;
                }
            }
            .menuContent {
                margin-top: 70px;
                ul{
                    li{
                        font-size:12px;
                        font-family:Montserrat;
                        // font-weight:600;
                        color:rgba(64,64,64,1);
                        cursor: pointer;
                        margin-top: 10px;
                    }
                    li:hover{
                        color: #E6AC5C;
                        margin-left: -100px;
                    }
                }
                .el-button{
                    width:100px;
                    height:36px;
                    background:rgba(251,175,93,1);
                    border-radius:4px;
                    font-size:16px;
                    color:rgba(255,255,255,1);
                    margin-top: 15px;
                }
            }
            .menuFoot{
                display: flex;
                justify-content: flex-end;
                align-items: center;
                margin-top: 60px;
                .btnSearch img{
                    width: 25px;
                    margin-right: 15px;
                    height: 25px;
                }
                .btnLang{
                    margin-right: 15px;
                }
            }
        }
    }

    .searchBox{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        .searchBackground{
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,.7);
            top: 0;
            left: 0;
        }
        .searchGroup{
            position: absolute;
            z-index: 10001;
            .searchBigTitle{
            font-size:48px;
            font-family:Montserrat;
            font-weight:600;
            color:rgba(255,255,255,1);
            }
            .searchMiniTitle{
            font-size:24px;
            font-family:Montserrat;
            font-weight:600;
            color:rgba(255,255,255,1);
            margin-top: 47px;
            }
            .searchMain{
            border-radius:10px;
            background: #fff;
            display: flex;
            flex-direction: column;
            margin-top: 48px;
            z-index: 10001;
            .searchColumn{
                padding: 16px 5px 16px 5px !important;
                display: flex;
                justify-content: space-between;
                .el-select{
                padding: 0 5px 0 5px;
                // background:rgba(255,255,255,1);
                // border:2px solid rgba(149,149,149,1);
                // border-radius:10px;
                }
                .choosePrice{
                width: 231.4px;
                height: 40px;
                display: flex;
                .block{
                    width: 231.4px;
                    height: 40px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    .el-slider{
                    width: 100px;
                    }
                    .demonstration{
                    font-size:15px;
                    color:rgba(64,64,64,1);
                    }
                }
                }
                .el-button{
                width: 231.4px;
                background:#F6D272;
                border-radius:10px;height: 40px;
                color: #fff;
                }
            }
            }
        }
        }
    .footer{
        min-width:1200px ;
        // height:646px;
        background:rgba(53,61,74,1);
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 60px;
        padding-bottom: 80px;
        .boxFoot{
            // margin-top: 111px;
            padding-top: 111px;
            font-size:14px;
            font-family:HelveticaNeue;
            font-weight:500;
            color:rgba(179,179,179,1);
        }
        .line{
            width:1454px;
            height:1px;
            background:rgba(153,153,153,1);
            margin-top: 18px;
        }
        .boxBottom{
            margin-top: 83px;
            display: flex;
            align-items: center;
            .bottom1{
            display: flex;
            flex-direction: column;
            align-items: start;
            .bottomRow1{
                font-size:16px;
                font-family:HelveticaNeue;
                font-weight:500;
                color:rgba(255,255,255,1);
            }
            .bottomRow2{
                font-size:12px;
                font-family:HelveticaNeue;
                font-weight:500;
                color:rgba(204,204,204,1);
            }
            .visiH{
                visibility: hidden;
            }
            }
            .line2{
            width:1px;
            height:136px;
            background:rgba(161,161,161,1);
            margin: 0 30px 0 50px;
            }
        }
    }
}
</style>
<style lang="scss">
.el-tabs__header{
    width: 100% !important;
    /deep/.el-tabs__nav{
        width: 100% !important;
        background: #d9d9d9!important;
        .el-tabs__item{
            width: 50% !important;
            color:#bfbfbf!important;
            // background: #BFBFBF!important;
        }
        .is-active{
            background: #f2f2f2!important;
            font-weight:600;
            color:#404040!important;
        }
    }
}
</style>
