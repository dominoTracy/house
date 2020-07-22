<template>
<div>
    <div>
        <iframe class="main" :style="{height:screenHeight+'px',width:screenWidth+'px'}" src="https://my.matterportvr.cn/show/?m=KHLdRDNjwd7"></iframe>
    </div>
</div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      screenHeight: '',
      screenWidth: ''
    }
  },
  mounted () {
    this.screenWidth = `${document.documentElement.clientWidth}`// 获取浏览器可视区域高度
    this.screenHeight = `${document.documentElement.clientHeight}`// 获取浏览器可视区域高度
    let that = this
    window.onresize = function () {
      that.screenHeight = `${document.documentElement.clientHeight}`
      that.screenWidth = `${document.documentElement.clientWidth}`
      if (that.$refs.page) {
        that.$refs.autoH.style.Height = this.screenHeight
        that.$refs.autoH.style.Width = this.clientWidth
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .main{
    border: 0;
    padding: 0;
    margin: 0;
  }
</style>
