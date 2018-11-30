<template>
    <div class="about">
        <div class="banner animated fadeInDown">
          <img v-lazy="bgbanner.image_url" alt="">
        </div>
        <web-aboutmsg :about="about"></web-aboutmsg>
        <web-honor :honor="honor"></web-honor>
    </div>
</template>

<script>
import AboutMsg from '@/components/about/aboutmsg/AboutMsg'
import Honor from '@/components/about/honor/Honor'
export default {
  data() {
    return {
      bgbanner:{}, 
      about:{},
      honor:{}   
    };
  },
  components:{
      "web-aboutmsg": AboutMsg,
      "web-honor": Honor
  },
  computed:{
    
  },
  methods:{
    //请求banner
    getBgbanner(){
      this.$http.get("http://wx.ybc365.com/api/v1.0/banner?name=aboutus").then((result) => {
        // console.log(result)
        this.bgbanner = result.body.data.list[0]
      }).catch((err) => {
        console.log(err)
      });
    },
    //请求关于我们模块数据
    getAbout(){
      this.$http.get("http://wx.ybc365.com/api/v1.0/module?name=aboutus").then((result) => {
        // console.log(result)
        this.about = result.body.data        
      }).catch((err) => {
        console.log(err)        
      });
    },
    //请求我们的荣誉模块数据
    getHonor(){
      this.$http.get("http://wx.ybc365.com/api/v1.0/module?name=honor").then((result) => {
        // console.log(result) 
        this.honor = result.body.data    
      }).catch((err) => {
        console.log(err)     
      });
    }
  },
  mounted(){
    this.getBgbanner()
    this.getAbout()
    this.getHonor()
  }
};
</script>

<style scoped>
.banner{
  min-width: 1296px;
  width: 100%;
  height: 520px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.banner img{
  width: 100%;
  height: 100%;
}
</style>
