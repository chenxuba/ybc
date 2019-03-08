<template>
  <div class="noopsyche">
    <div class="banner animated bounceInLeft" :style="head_bg_news"></div>
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
      intelligent: {},
      bgbanner:{},
    };
  },
  methods: {
    //获取用户口碑数据
    getuser() {
      this.$http
        .get(API+"/api/v1.0/module?name=evaluation")
        .then(result => {
          this.user = result.body.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    //请求智能康复模块数据
    getIntelligent() {
      this.$http
        .get(API+"/api/v1.0/module?name=intelligent")
        .then(result => {
          var list2 = [];
          var list = result.body.data.list;
          for (var i = 1; i < list.length; i += 2) {
            var l = {};
            l.bg_color = list[i - 1].bg_color;
            l.bg_image = list[i - 1].bg_image;
            l.content = list[i - 1].content;
            l.fr_color = list[i - 1].color;
            l.fr_image = list[i - 1].fr_image;
            l.title = list[i - 1].title;
            l.bg_color1 = list[i].bg_color;
            l.bg_image1 = list[i].bg_image;
            l.content1 = list[i].content;
            l.fr_color1 = list[i].color;
            l.fr_image1 = list[i].fr_image;
            l.title1 = list[i].title;
            list2.push(l);
          }
          result.body.data.list = list2;
          this.intelligent = result.body.data;
          // console.log(this.intelligent);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getBanner(){
      this.$http
        .get(API+"/api/v1.0/banner?name=intelligent")
        .then(result => {
          this.bgbanner = result.body.data.list[0];
          console.log(this.bgbanner)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getuser();
    this.getIntelligent();
    this.getBanner();
  },
  components: {
    "web-noopsychemsgmsg": NoopsycheMsg,
    "web-user": User
  },
  computed: {
    head_bg_news() {
      return "background-image: url(" + this.bgbanner.image_url + ")";
    }
  },
};
</script>

<style scoped>
.banner {
  min-width: 1296px;
  width: 100%;
  height: 500px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
