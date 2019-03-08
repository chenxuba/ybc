<template>
    <div class="course">
        <div class="banner animated bounceInLeft">
          <img v-lazy="bgbanner.image_url" alt="">
        </div>
        <web-course-introduction :course="course"></web-course-introduction>
    </div>
</template>

<script>
import CourseIntroduction from "@/components/course/courseintroduction/CourseIntroduction";

export default {
  data() {
    return {
      bgbanner: {},
      course:[]
    };
  },
  components: {
    "web-course-introduction": CourseIntroduction
  },
  computed: {
    head_bg_course() {
      return "background-image: url(" + this.bgbanner.image_url + ")";
    }
  },
  methods: {
    //请求banner
    getBgbanner() {
      this.$http.get(API+"/api/v1.0/banner?name=course").then(result => {
          this.bgbanner = result.body.data.list[0];
        }).catch(err => {
          console.log(err);
        });
    },
    //请求课程列表介绍
    getCourse(){
      this.$http.get(API+"/api/v1.0/module?name=courses").then(result => {
          this.course = result.body.data.list
      }).catch(err => {
          console.log(err);
      });
    }
  },
  mounted() {
    this.getBgbanner();
    this.getCourse()
  }
};
</script>

<style scoped>
.course .banner {
  width: 100%;
  min-width: 1296px;
  height: 500px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.course .banner img{
  width: 100%;
  height: 100%;
}
</style>
