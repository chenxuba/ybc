<template>
  <div class="course-introduction">
    <div class="course-introduction-center">
      <web-dot></web-dot>
      <div class="title" v-rainbow>医佰康课程介绍</div>
      <!-- <div class="search-box">
        <div class="input-btn-box">
          <el-input v-model="search" placeholder="请输入项目名称搜索"></el-input>
        </div>
      </div>-->
      <!-- 课程列表 -->
      <div class="course-link">
        <div class="course-item" v-for="(item,index) in course" :key="index">
          <div class="img-box">
            <img :src="item.fr_image" alt>
          </div>
          <h2 class="course-item-title">{{item.title}}</h2>
          <p class="course-item-p">{{item.content}}</p>
          <div class="course-item-see">查看全文</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dot from "../../homepage/system/Dot/dot";
export default {
  props: {
    course: {
      type: Array,
      default: {}
    }
  },
  data() {
    return {
    //   search: ""
    };
  },
  components: {
    "web-dot": Dot
  }

  //   computed: {
  //     filterWord() {
  //       return this.course.filter(item => {
  //         return item.title.match(this.search);
  //       });
  //     }
  //   }
};
</script>

<style scoped>
.course-introduction-center {
  width: 1296px;
  margin: 40px auto;
  /* margin-bottom: 45px; */
}
.title {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 34px;
  color: #3e3a39;
  letter-spacing: 3px;
  position: relative;
  margin-bottom: 30px;
  margin-top: 15px;
}


.course-link {
  width: 100%;
  height: 100%;
  display: flex;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  /* background-color: red; */
  padding: 0 85px;
  box-sizing: border-box;
}
.course-link .course-item {
  width: 362px;
  height: 485px;
  margin-bottom: 60px;
  margin-right: 13px;
  background-color: #ebeff2;
}
.course-link .course-item .img-box {
  width: 346px;
  height: 260px;
  background-color: orange;
  margin: 8px 0 0 9px;
}
.course-link .course-item .img-box img {
  width: 100%;
  height: 100%;
}
.course-link .course-item .course-item-title {
  font-size: 18px;
  color: #333;
  line-height: 70px;
  margin-left: 9px;
}
.course-link .course-item .course-item-p {
  margin-left: 9px;
  margin-right: 8px;
  font-size: 14px;
  color: #666;
  line-height: 26px;
}
.course-link .course-item .course-item-see {
  width: 170px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  text-indent: -1em;
  font-size: 15px;
  color: #fff;
  margin-top: 30px;
  background-color: #2bc4ca;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
}
</style>
