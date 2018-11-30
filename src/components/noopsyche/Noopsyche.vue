<template>
    <div class="noopsyche">
        <web-noopsychemsgmsg :intelligent="intelligent"></web-noopsychemsgmsg>
        <web-user :user="user"></web-user>

    </div>
</template>

<script>
import BottomNav from "@/components/homepage/bottomnav/BottomNav";
import BottomInfo from "@/components/homepage/bottominfo/BottomInfo";
import Copyright from "@/components/homepage/copyright/Copyright";
import NoopsycheMsg from "@/components/noopsyche/noopsychemsg/NoopsycheMsg";
import User from "@/components/noopsyche/user/User";
export default {
  data() {
    return {
      user: {},
      intelligent:{}
    };
  },
  methods: {
    //获取用户口碑数据
    getuser() {
      this.$http.get("http://wx.ybc365.com/api/v1.0/module?name=evaluation").then(result => {
          this.user = result.body.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //请求智能康复模块数据
    getIntelligent(){
      this.$http.get("http://wx.ybc365.com/api/v1.0/module?name=intelligent").then((result) => {
          this.intelligent = result.body.data
      }).catch((err) => {
          console.log(err);        
      });
    }
  },
  mounted() {
      this.getuser()
      this.getIntelligent()
  },
  components: {
    "web-noopsychemsgmsg": NoopsycheMsg,
    "web-user": User
  }
};
</script>

<style scoped>
</style>
