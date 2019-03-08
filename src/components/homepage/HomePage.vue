<template>
  <div class="homepage">
    <div class="banner"  >
      <img v-lazy="bgbanner.image_url" alt="">
    </div>
    <web-fourmenu :fourmenu="fourmenu"></web-fourmenu>
    <web-system :system="system"></web-system>
    <web-item :system="system"></web-item>
    <web-friend :friend="friend"></web-friend>
    <web-input></web-input>
    
  </div>
</template>

<script>
import FourMenu from '@/components/homepage/fourmenu/FourMenu'
import System from '@/components/homepage/system/System'
import Item from '@/components/homepage/item/Item'
import Friend from '@/components/homepage/friend/Friend'
import Input from '@/components/homepage/input/Input'
export default {
  name: 'homepage',
  data () {
    return {
      bgbanner:{},
      fourmenu:[],
      system:{},
      friend:[]
    }
  },
  components:{
    "web-fourmenu":FourMenu,
    "web-system":System,
    "web-item":Item,
    "web-friend":Friend,
    "web-input":Input,

  },
  computed:{
    
  },
  methods:{
    //获取banner图
    getBgbanner(){
      this.$http.get(API+"/api/v1.0/banner?name=homepage").then((result) => {
        this.bgbanner = result.body.data.list[0]
      }).catch((err) => {
        console.log(err)
      });
    },
    //获取fourmenu数据
    getfourmenu(){
      this.$http.get(API+"/api/v1.0/module?name=introduction").then((result) => {
        this.fourmenu = result.body.data.list
      }).catch((err) => {
        console.log(err)        
      });
    },
    //获取system数据
    getSystem(){
      this.$http.get(API+"/api/v1.0/module?name=trainsys").then((result) => {
        this.system = result.body.data
      }).catch((err) => {
        console.log(err)  
      });
    },
    //获取合作伙伴模块数据
    getFriend(){
      this.$http.get(API+"/api/v1.0/module?name=partner").then((result) => {
        this.friend = result.body.data.list
      }).catch((err) => {
        console.log(err)        
      });
    },
  },
  mounted(){
    this.$nextTick(() => {
        this.getBgbanner()
        this.getfourmenu()
        this.getSystem()
        this.getFriend()
    })
    
  }
}
</script>

<style scoped>
.banner{
  min-width: 1296px;
  width: 100%;
  height: 450px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.banner img{
  width: 100%;
  height: 100%;
}
</style>
