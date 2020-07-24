<template>
  <section>
    <div class="topMenu">
      <el-header>
        <a href="javascript:;"
           class="logo">
          <img class="headerLogo"
               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAREAAAA/CAYAAADHRfx8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkNDNkM1QjdCQzcxNTExRUE5RjIwRjcxQzBCNkMxQkFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkNDNkM1QjdDQzcxNTExRUE5RjIwRjcxQzBCNkMxQkFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Q0M2QzVCNzlDNzE1MTFFQTlGMjBGNzFDMEI2QzFCQUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Q0M2QzVCN0FDNzE1MTFFQTlGMjBGNzFDMEI2QzFCQUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6h7L1XAAA8v0lEQVR42ux9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" />
        </a>
        <div class="headerBox">
            <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                <el-submenu index="1">
                  <template slot="title">PREMIUM PROPERTY</template>
                  <div class="boxDown">
                    <div class="boxContent">
                      <table class="boxMenu">
                        <tr class="firstTr" style="border:1px solid red;pading-bottom:10px">
                          <th>Residential Projects</th>
                          <th>Commercial Projects</th>
                          <th>Oversea Projects</th>
                        </tr>
                        <tr>
                          <td><a href="javascript:;">Northwave</a></td>
                          <td><a href="javascript:;">Queens Peak</a></td>
                          <td><a href="javascript:;">Dara Sakor</a></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:;">The Santorini</a></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:;">Canberra Residences</a></td>
                          <td></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td><a href="javascript:;">One Canberra</a></td>
                          <td></td>
                          <td></td>
                        </tr>
                      </table>
                      <img src="../../assets/images/test_house.jpg" alt="">
                    </div>
                  </div>
                </el-submenu>
                <el-menu-item index="2" @click="gopro">MCC SPACE</el-menu-item>
                <el-menu-item index="3" @click="gopro">MCC CLUB</el-menu-item>
                <el-menu-item index="4" @click="gopro"><a href="https://www.ele.me" target="_blank">MEDIA ROOM</a></el-menu-item>
            </el-menu>
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
            <el-button size="mini" class="btnLogin" @click="gopro">LOGIN</el-button>
        </div>
      </el-header>
    </div>
    <div class="banner">
      <swiper ref= 'mySwiper ' :options= 'swiperOptions ' v-bind:style="{height:screenHeight+'px'}">
        <swiper-slide><img src="../../assets/images/bj1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/images/bj1.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="../../assets/images/bj1.jpg" alt=""></swiper-slide>
        <div class= 'swiper-pagination ' slot= 'pagination '></div>
      </swiper>
      <div class="searchBox" v-if="showSearch" :style="{height:screenHeight+'px'}">
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
    <div class="contentCenter">
      <el-row :gutter="20">
            <el-col :span="24">
                <div class="boxCenter" :style="{height:screenHeight+'px'}"></div>
            </el-col>
      </el-row>
    </div>
    <div class="contentMap" v-bind:style="{height:screenHeight+'px'}">
      <el-row :gutter="20">
            <el-col :span="24">
                <baidu-map class="map" center="新加坡" :zoom="zoom" @ready="handler" :style="{height:screenHeight+'px'}">
                  <!-- <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation> -->
                  <!-- <bm-marker :position="{lng: 116.404, lat: 39.915}" :dragging="true" animation="BMAP_ANIMATION_BOUNCE">
                      <bm-label content="我爱北京天安门" :labelStyle="{color: 'red', fontSize : '24px'}" :offset="{width: -35, height: 30}"/>
                  </bm-marker> -->
                </baidu-map>
            </el-col>
            <el-col :span="16">
              <div class="searchInput">
                <el-row :gutter="24">
                  <el-col :span="4">
                    <el-select v-model="locationInput" placeholder="Location">
                      <el-option
                        v-for="item in location"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="Status" placeholder="Status">
                      <el-option
                        v-for="item in status"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="Type" placeholder="Type">
                      <el-option
                        v-for="item in type"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="Bedrooms" placeholder="Bedrooms">
                      <el-option
                        v-for="item in bedrooms"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <el-select v-model="Price" placeholder="Price">
                      <el-option
                        v-for="item in price"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="4">
                    <el-button type="warning" round>Search</el-button>
                  </el-col>
                </el-row>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="houseList" v-if="showFloor" :style="{height:screenHeight * .96 +'px'}">
                <div class="houseTitle">
                  PREMIUM PROPERTY
                </div>
                <div class="listBox" :style="{height:screenHeight * .96 - 60 +'px'}">
                  <div class="listItem" @click="toHouseDetail">
                    <div class="leftBox">
                      <img src="../../assets/images/test_house.jpg" alt="">
                    </div>
                    <div class="rightBox">
                      <div class="rightTitle">Sea Horizon</div>
                      <div class="rightTitle">
                        <img class="icon_point" src="../../assets/images/icon_point.png" alt="">
                        <div class="txtPoint">Pasir Ris Drive 3/Pasir Ris Rise</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtSwm">Nearby</div>
                        <img class="icon_swm" src="../../assets/images/icon_swm.png" alt="">
                        <div class="txtSwm">2 Swimming Pool</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtSwm" style="visibility: hidden;">Nearby</div>
                        <img class="icon_park" src="../../assets/images/icon_park.png" alt="">
                        <div class="txtSwm">1 Carpark</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea">Land Area: 27,660m²</div>
                        <div class="txtArea posArea">Total: 495 units</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea" style="width:97.45px">GFA: 58,086m²</div>
                        <div class="txtArea posArea">TOP: 07/10/2016</div>
                      </div>
                      <div class="housePrice">FROM S$ 1,400,000</div>
                    </div>
                  </div>
                  <div class="listItem" @click="toHouseDetail">
                    <div class="leftBox">
                      <img src="../../assets/images/test_house.jpg" alt="">
                    </div>
                    <div class="rightBox">
                      <div class="rightTitle">Sea Horizon</div>
                      <div class="rightTitle">
                        <img class="icon_point" src="../../assets/images/icon_point.png" alt="">
                        <div class="txtPoint">Pasir Ris Drive 3/Pasir Ris Rise</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtSwm">Nearby</div>
                        <img class="icon_swm" src="../../assets/images/icon_swm.png" alt="">
                        <div class="txtSwm">2 Swimming Pool</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtSwm" style="visibility: hidden;">Nearby</div>
                        <img class="icon_park" src="../../assets/images/icon_park.png" alt="">
                        <div class="txtSwm">1 Carpark</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea">Land Area: 27,660m²</div>
                        <div class="txtArea posArea">Total: 495 units</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea" style="width:97.45px">GFA: 58,086m²</div>
                        <div class="txtArea posArea">TOP: 07/10/2016</div>
                      </div>
                      <div class="housePrice">FROM S$ 1,400,000</div>
                    </div>
                  </div>
                  <div class="listItem" @click="toHouseDetail">
                    <div class="leftBox">
                      <img src="../../assets/images/test_house.jpg" alt="">
                    </div>
                    <div class="rightBox">
                      <div class="rightTitle">Sea Horizon</div>
                      <div class="rightTitle">
                        <img class="icon_point" src="../../assets/images/icon_point.png" alt="">
                        <div class="txtPoint">Pasir Ris Drive 3/Pasir Ris Rise</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtSwm">Nearby</div>
                        <img class="icon_swm" src="../../assets/images/icon_swm.png" alt="">
                        <div class="txtSwm">2 Swimming Pool</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtSwm" style="visibility: hidden;">Nearby</div>
                        <img class="icon_park" src="../../assets/images/icon_park.png" alt="">
                        <div class="txtSwm">1 Carpark</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea">Land Area: 27,660m²</div>
                        <div class="txtArea posArea">Total: 495 units</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea" style="width:97.45px">GFA: 58,086m²</div>
                        <div class="txtArea posArea">TOP: 07/10/2016</div>
                      </div>
                      <div class="housePrice">FROM S$ 1,400,000</div>
                    </div>
                  </div>
                  <div class="listItem" @click="toHouseDetail">
                    <div class="leftBox">
                      <img src="../../assets/images/test_house.jpg" alt="">
                    </div>
                    <div class="rightBox">
                      <div class="rightTitle">Sea Horizon</div>
                      <div class="rightTitle">
                        <img class="icon_point" src="../../assets/images/icon_point.png" alt="">
                        <div class="txtPoint">Pasir Ris Drive 3/Pasir Ris Rise</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtSwm">Nearby</div>
                        <img class="icon_swm" src="../../assets/images/icon_swm.png" alt="">
                        <div class="txtSwm">2 Swimming Pool</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtSwm" style="visibility: hidden;">Nearby</div>
                        <img class="icon_park" src="../../assets/images/icon_park.png" alt="">
                        <div class="txtSwm">1 Carpark</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea">Land Area: 27,660m²</div>
                        <div class="txtArea posArea">Total: 495 units</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea" style="width:97.45px">GFA: 58,086m²</div>
                        <div class="txtArea posArea">TOP: 07/10/2016</div>
                      </div>
                      <div class="housePrice">FROM S$ 1,400,000</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="houseList" v-else :style="{height:screenHeight * .96 +'px'}">
                <div class="houseTitle">
                  <img class="arrow_left" @click="toHouseDetail" src="../../assets/images/arrow-left-filling.png" alt="">
                  SEA HORIZON
                </div>
                <div class="listBox" :style="{height:screenHeight * .96 - 60 +'px'}">
                  <div class="listItem">
                    <div class="leftBox">
                      <img src="../../assets/images/test_housetype.jpg" alt="">
                    </div>
                    <div class="rightBox">
                      <div class="rightTitle">Type Ala-P</div>
                      <div class="rightTitle">
                        <div class="txtArea">TOTEL:3</div>
                        <div class="txtArea posArea">BEDROOMS:2</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea" style="width:97.45px">AREA:1603sqft</div>
                        <div class="txtArea posArea">UNCOMPLETED</div>
                      </div>
                      <div class="housePrice">FROM S$ 1,400,000</div>
                    </div>
                  </div>
                  <div class="listItem">
                    <div class="leftBox">
                      <img src="../../assets/images/test_housetype.jpg" alt="">
                    </div>
                    <div class="rightBox">
                      <div class="rightTitle">Type Ala-P</div>
                      <div class="rightTitle">
                        <div class="txtArea">TOTEL:3</div>
                        <div class="txtArea posArea">BEDROOMS:2</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea" style="width:97.45px">AREA:1603sqft</div>
                        <div class="txtArea posArea">UNCOMPLETED</div>
                      </div>
                      <div class="housePrice">FROM S$ 1,400,000</div>
                    </div>
                  </div>
                  <div class="listItem">
                    <div class="leftBox">
                      <img src="../../assets/images/test_housetype.jpg" alt="">
                    </div>
                    <div class="rightBox">
                      <div class="rightTitle">Type Ala-P</div>
                      <div class="rightTitle">
                        <div class="txtArea">TOTEL:3</div>
                        <div class="txtArea posArea">BEDROOMS:2</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea" style="width:97.45px">AREA:1603sqft</div>
                        <div class="txtArea posArea">UNCOMPLETED</div>
                      </div>
                      <div class="housePrice">FROM S$ 1,400,000</div>
                    </div>
                  </div>
                  <div class="listItem">
                    <div class="leftBox">
                      <img src="../../assets/images/test_housetype.jpg" alt="">
                    </div>
                    <div class="rightBox">
                      <div class="rightTitle">Type Ala-P</div>
                      <div class="rightTitle">
                        <div class="txtArea">TOTEL:3</div>
                        <div class="txtArea posArea">BEDROOMS:2</div>
                      </div>
                      <div class="rightTitle">
                        <div class="txtArea" style="width:97.45px">AREA:1603sqft</div>
                        <div class="txtArea posArea">UNCOMPLETED</div>
                      </div>
                      <div class="housePrice">FROM S$ 1,400,000</div>
                    </div>
                  </div>
                </div>
              </div>
            </el-col>
      </el-row>
    </div>
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
  </section>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
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
      lang: 'English',
      btnEn: 'info',
      btnZh: '',
      screenHeight: '',
      activeIndex: '1',
      testList: [
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
        pagination: {
          el: '.swiper-pagination '
        }
        // Some Swiper option/callback...
      },
      center: {lng: 0, lat: 0},
      zoom: 12,
      showFloor: true,
      showSearch: false,
      value1: [0, 60000]
    }
  },
  methods: {
    gopro () {
      this.$router.push('/house')
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
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handler ({BMap, map}) {
      console.log(BMap, map)
      this.center.lng = 116.404
      this.center.lat = 39.915
      this.zoom = 15
    },
    toHouseDetail () {
      this.showFloor = !this.showFloor
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
    },
    handleScroll () {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      if (document.getElementsByTagName('body').length === 1) {
        document.body.scrollTop = this.screenHeight
      }
    }
  },
  created () {
  },
  mounted () {
    window.addEventListener('mousewheel', this.handleScroll, false)
    console.log('Current Swiper instance object ', this.swiper)
    this.screenHeight = `${document.documentElement.clientHeight}`// 获取浏览器可视区域高度
    let that = this
    console.log(document.documentElement.clientHeight)
    console.log(this.testList[0].url)
    window.onresize = function () {
      that.screenHeight = `${document.documentElement.clientHeight}`
      if (that.$refs.page) {
        that.$refs.autoH.style.Height = this.screenHeight
      }
    }
  },
  computed: {
  },
  destroyed () {
    window.removeEventListener('beforeunload', e => this.test(e))
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
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
.headerMain{
  width: 100%;
  background: url('../../assets/images/bj1.jpg') no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.searchInput{
  position: absolute;
  width: 50%;
  height: 60px;
  background:rgba(255,255,255,1);
  border-radius:30px;
  top: 80%;
  left: 10%;
  display: flex;
  align-items: center;
  .el-row{
    margin-left: 0 !important;
    margin-right: 0 !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
    .el-col{
      padding-left: 0 !important;
      padding-right: 0 !important;
      /deep/ input::-webkit-input-placeholder {
          color: #000;
        }
      /deep/ input::-moz-input-placeholder {
          color: #000;
        }
      /deep/ input::-ms-input-placeholder {
          color: #000;
        }
      .el-select{
        /deep/ .el-input__inner{
          height: 36px !important;
          border-radius: 20px !important;
        }
      }
      .el-button.is-round{
        height: 36px;
        width: 100%;
        // padding: 0 !important;
      }
    }
  }
}
.map  {
  width: 100%;
}
.houseList{
  position: absolute;
  width: 30%;
  background:#F2F2F2;
  box-shadow:0px 2px 8px 0px rgba(119,116,116,0.5);
  border-radius:6px 2px 2px 6px;
  top: 2%;
  z-index: 10;
  right: 2%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .houseTitle{
    width: 96%;
    height: 50px;
    line-height: 50px;
    font-weight:600;
    color:rgba(64,64,64,1);
    border-bottom: 1px #999999 solid;
    display: flex;
    align-items: center;
    justify-content: center;
    .arrow_left{
      width: 20px;
      height: 20px;
      position: absolute;
      left: 5px;
      cursor: pointer;
    }
  }
  .listBox{
    width: 96%;
    // height: 90%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    align-items: center;
    .listItem{
      width: 96%;
      height:200px;
      background:rgba(255,255,255,1);
      border-radius:6px;
      margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      .leftBox{
        width: 200px;
        height: 140px;
        img{
          width: 200px;
          height: 140px;
        }
      }
      .rightBox{
        width: 200px;
        height: 140px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: flex-start;
        .rightTitle{
          font-weight:600;
          display: flex;
          align-items: center;
          width: 200px;
          .txtPoint{
            margin-left: 5px;
            font-size: 10px;
            color:rgba(183,183,183,1);
          }
          .icon_point{
            width: 9px;
            height: 14px;
          }
          .txtSwm{
            font-size: 10px;
            color:rgba(128,128,128,1);
          }
          .icon_swm{
            width: 17px;
            height: 19px;
            margin: 0 5px 0 5px;
          }
          .icon_park{
            width: 14px;
            height: 18px;
            margin: 0 5px 0 7px;
          }
          .txtArea{
            font-size: 10px;
            color:rgba(102,102,102,1);
            text-align: left;
          }
          .posArea{
            margin-left: 10px;
          }
        }
        .housePrice{
          width: 200px;
          border-top: 1px rgba(204,204,204,1) solid;
          text-align: right;
          font-size:16px;
          font-family:Montserrat;
          font-weight:600;
          color:rgba(102,102,102,1);
        }
      }
    }
  }
}
.boxCenter{
  width: 100%;
  height: 100%;
  background: url('../../assets/images/test_swiper1.png') no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.contentMap{
  #allmap{
    width: 100%;
  }
}
.boxMenu{
  font-size: 16px;
  float: left;zhang
  .firstTr{
    border-bottom: 2px solid rgba(215,215,215,1);
  }
  a{
    text-decoration: none;
    color:rgba(77,77,77,1);
  }
  th{
    padding-right: 75px;
    color:rgba(26,26,26,1);
    font-weight:600;
  }
  td{
    padding-top: 38px;
  }
}
.boxContent{
  img{
    width: 555px;
    height: 306px;
    float: right;
  }
}
.footer{
  min-width:1200px ;
  height:646px;
  background:rgba(53,61,74,1);
  display: flex;
  flex-direction: column;
  align-items: center;
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
.contentCenter{
  width: 100%;
}
.contentMap{
  width: 100%;
}
/deep/ .swiper-container{
  width: 100% !important;
  // height: 100% !important;
/deep/ .swiper-slider{
    width: 100% !important;
    height: 100% !important;
    img{
      margin-left: auto !important;
      margin-right: auto !important;
      max-width: 1920px !important;
      height: auto !important;
      // min-width: 100%;
      // min-height: 100%;
      // transform:translate(-50%,-50%);
    }
  }
}
.boxDown{
  height: 390px;
  display: flex;
  justify-content: center;
  .boxContent{
    margin-top: 43px;
  }
}
.el-menu--popup{
  padding: 0;
}
.topMenu {
  width: 100%;
  position: absolute;
  z-index: 9999;
  .el-header {
    padding: 0;
    height:110px !important;
    .logo {
      float: left;
      height: 110px;
      padding: 0 0 0 24px;
      display: flex;
      align-items: center;
      .headerLogo {
        width: 273px;
        height: 63px;
      }
    }
    .headerBox {
      float: right;
      list-style-type: none;
      height: 110px;
      padding: 0 15px 0 0;
      margin: 0;
      display: flex;
      align-items: center;
      color: #fff;
      .el-menu-demo{
        padding: 0 30px 0 0;
      }
      .btnLang{
        display: flex;
        padding: 0 20px 0 0;
      }
      .btnSearch{
        padding: 0 20px 0 0;
      }
      .btnLogin{
        // margin-right: 20px;
        width:100px;
        height:36px;
        background:#F6D272;
        border-radius:6px;
        color: #fff;
        font-size:16px;
      }
      .btnlanguage{
        width:60px;
        height:36px;
        font-size:16px;
        font-weight:300;
      }
    /* 点击以后的背景色进行隐藏 */
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
        background-color: rgba(0,0,0,0) !important;
        color: #F6D272;
    }
    .el-menu--horizontal>.el-menu-item.is-active {
        border-bottom: none;
    }
      .el-menu-item{
            color: #fff;
            a{
                text-decoration: none;
            }
      }
      .el-menu{
          background: none;
          border-bottom: none;
      }
      .is-opened{
        background-color: rgba(0,0,0,0);
      }
    }
  }
}
.mt36{
  margin-top: 36px;
}
.mt20{
  margin-top: 20px;
}
.mt50{
  margin-top: 50px;
}
.mt10{
  margin-top: 10px;
}
</style>
<style lang="scss">
  /* 点击以后的背景色进行隐藏 */
    .el-menu--horizontal>.el-menu-item:not(.is-disabled):focus, .el-menu--horizontal>.el-menu-item:not(.is-disabled):hover, .el-menu--horizontal>.el-submenu .el-submenu__title:hover {
              background-color: rgba(0,0,0,0) !important;
        color: #F6D272;
    }
    .el-menu--horizontal>.el-submenu .el-submenu__title {
    height: 60px;
    line-height: 60px;
    border-bottom: 2px solid transparent;
    color: #fff;
}
.el-submenu__icon-arrow{
  display: none;
}
.el-menu--horizontal{
  width: 100%;
  left: 0px !important;
}
</style>
