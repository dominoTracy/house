<template>
<div>
    <div>
        <el-row :gutter="20">
            <el-col :span="24" :style="{height:screenHeight+'px'}">
                <div class="cc" :style="{height:screenHeight+'px'}"></div>
            </el-col>
        </el-row>
    </div>
    <div id="allmap" style="width:100%;height:400px"></div>
</div>
</template>
<script type="text/javascript" src="//api.map.baidu.com/api?v=2.0&ak=2VCkbXfrhd2PV3p1q2GmAAgYZderliLQ"></script>
<script>
export default {
  name: 'test',
  data () {
    return {
      screenHeight: ''
    }
  },
  created (){
  },
  methods: {
  },
  mounted () {
      // 百度地图API功能
  var map = new BMap.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl({
    mapTypes:[
                BMAP_NORMAL_MAP,
                BMAP_HYBRID_MAP
            ]}))
    map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    this.screenHeight = `${document.documentElement.clientHeight}`// 获取浏览器可视区域高度
    let that = this
    window.onresize = function () {
      that.screenHeight = `${document.documentElement.clientHeight}`
      if (that.$refs.page) {
        that.$refs.autoH.style.Height = this.screenHeight
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.el-col-24{
    padding: 0 !important;
    margin: 0 !important;
}
.test{
  background-color: red;
  color: #fff;
}
.cc{
  width: 100%;
  background: url('../assets/images/bj1.jpg') no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
</style>
