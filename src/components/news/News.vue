<template>

    <div class="news" >
        <div class="banner animated bounceInLeft" :style="head_bg_news"></div>
        <web-ybcnews></web-ybcnews>
    </div>
</template>

<script>
import YbcNews from "@/components/news/ybcnews/YbcNews";
export default {
  data() {
    return {
      bgbanner:{},
    };
  },
  components: {
    "web-ybcnews": YbcNews
  },
  computed: {
    head_bg_news() {
      return "background-image: url(" + this.bgbanner.image_url + ")";
    }
  },
  methods: {
    getBgbanner() {
      this.$http
        .get(API+"/api/v1.0/banner?name=news")
        .then(result => {
          this.bgbanner = result.body.data.list[0];
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.$nextTick(()=>{
      this.getBgbanner();
    })
  }
};
</script>

<style scoped>
.banner {
  width: 100%;
  min-width: 1296px;
  height: 500px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
