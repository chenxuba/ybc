<template>
    <div class="publicBenefit">
        <div class="banner animated bounceInLeft" >
          <img v-lazy="bgbanner.image_url" alt="">
        </div>
        <web-publicBenefitMsg :welfare="welfare" :socialresp="socialresp"></web-publicBenefitMsg>
    </div>
</template>

<script>
import PublicBenefitMsg from '@/components/publicBenefit/publicBenefitMsg/PublicBenefitMsg'
export default {
  data() {
    return {
      bgbanner:{}, 
      welfare:{} ,
      socialresp:{}
    };
  },
  components:{
      "web-publicBenefitMsg":PublicBenefitMsg
  },
  computed:{
    
  },
  methods:{
    //请求banner
    getBgbanner(){
      this.$http.get(API+"/api/v1.0/banner?name=welfare").then((result) => {
        this.bgbanner = result.body.data.list[0]
      }).catch((err) => {
        console.log(err)
      });
    },
    //请求社会公益模块
    getwelfare(){
      this.$http.get(API+"/api/v1.0/module?name=welfare").then((result) => {
        this.welfare = result.body.data
      }).catch((err) => {
        console.log(err)
      });
    },
    //请求社会责任模块数据
    getsocialresp(){
      this.$http.get(API+"/api/v1.0/module?name=socialresp").then((result) => {
        this.socialresp = result.body.data.list[0]
        // console.log(this.socialresp)
      }).catch((err) => {
        console.log(err)
      });
    },
  },
  mounted(){
      this.getBgbanner()
      this.getwelfare()
      this.getsocialresp()
      // this.getdonation()
  }
};
</script>

<style scoped>
.publicBenefit{
  min-width: 1296px;
}
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
