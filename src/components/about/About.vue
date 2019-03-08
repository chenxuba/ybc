<template>
    <div class="about">
        <div class="banner animated fadeInDown">
          <img v-lazy="bgbanner.image_url" alt="">
        </div>
        <web-aboutmsg :team="team" :team_list="team_list"></web-aboutmsg>
    </div>
</template>

<script>
import AboutMsg from '@/components/about/aboutmsg/AboutMsg'
export default {
  data() {
    return {
      bgbanner:{}, 
      team:{},
      team_list:[]
    };
  },
  components:{
      "web-aboutmsg": AboutMsg
  },
  methods:{
    //请求banner
    getBgbanner(){
      this.$http.get(API+"/api/v1.0/banner?name=aboutus").then((result) => {
        // console.log(result)
        this.bgbanner = result.body.data.list[0]
      }).catch((err) => {
        console.log(err)
      });
    },
    //请求团队介绍模块数据
    getTeam(){
      this.$http.get(API+"/api/v1.0/module?name=aboutus").then((res) => {
         this.team = res.body.data;
         this.team_list = res.body.data.list[0]
        //  console.log(this.team)
      }).catch((err) => {
        
      });
    }
  },
  mounted(){
    this.getBgbanner();
    this.getTeam();
  }
};
</script>

<style scoped>
.banner{
  min-width: 1296px;
  width: 100%;
  height: 500px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.banner img{
  width: 100%;
  height: 100%;
}
</style>
