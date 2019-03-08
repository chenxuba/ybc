<template>
  <div class="user">
    <div class="user-center">
      <web-dot></web-dot>
      <div class="title" v-rainbow>{{user.title}}</div>
      <div class="power-four">
        <div class="power" v-for="(item,index) in user.list" :key="index">
          <div
            class="power-box"
            :style="{backgroundColor:item.fr_color}"
            v-scroll="handleScroll"
          >{{item.title}}</div>
          <div class="power-text">
            <p>{{item.content}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dot from "../../homepage/system/Dot/dot";
export default {
  props: {
    user: {
      type: Object,
      default: {}
    }
  },
  methods: {
    handleScroll(evt, el) {
      if (window.scrollY > 1200) {
        el.setAttribute("class", "animated power-box flipInY ");
      }
    }
  },
  mounted() {},
  components: {
    "web-dot": Dot
  }
};
</script>

<style scoped>
.user-center {
  width: 1296px;
  margin: 60px auto;
  margin-bottom: 100px;
}
.title {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 34px;
  color: #3e3a39;
  letter-spacing: 3px;
  position: relative;
  margin: 10px 0 30px 0;
}

.power {
  width: 235px;
  height: 245px;
  font-family: "微软雅黑";
  /* background-color: yellow; */
}
.power-four {
  display: flex;
  justify-content: space-between;
}
.power-box {
  width: 149px;
  height: 149px;
  background-color: #3676bd;
  border-radius: 50%;
  border: solid 3px #fff;
  box-shadow: 5px 9px 8px 0px rgba(159, 160, 160, 0.5);
  margin: 0 auto;
  text-align: center;
  line-height: 149px;
  font-size: 20px;
  color: #fff;
}

.power-text {
  width: 235px;
  /* height: 81px; */
  padding-top: 20px;
  /* background-color: pink; */
}
.power-text p {
  font-size: 15px;
  line-height: 30px;
  color: #7e7572;
}
.wit {
  background-color: #ff6666;
}
.autonomously {
  background-color: #66cc99;
}
.diversification {
  background-color: #e9a33a;
}
</style>
