<template>
  <div class="friend-box">
    <web-dot></web-dot>
    <div class="title" v-rainbow>合作伙伴</div>
    <div class="friend">
      <div class="friend-center">
        <div class="friend-item-box">
          <div
            class="friend-item"
            v-for="(item,index) in friend"
            :key="index"
            v-scroll="handleScroll"
          >
            <img :src="item.fr_image" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dot from "../system/Dot/dot";
export default {
  props: {
    friend: {
      type: Array,
      default: {}
    }
  },
  data() {
    return {};
  },
  methods: {
    handleScroll(evt, el) {
      if (window.scrollY > 1500) {
        el.setAttribute("class", "animated friend-item wobble ");
      }
    }
  },
  created() {},
  components: {
    "web-dot": Dot
  }
};
</script>

<style scoped>
.friend-box {
  margin-top: 60px;
}
.friend {
  width: 100%;
  min-width: 1296px;
  background-color: #c5e7ef;
}
.friend-center {
  width: 1296px;
  margin: 50px auto;
  margin-bottom: 45px;
}
.title {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 34px;
  color: #3e3a39;
  letter-spacing: 3px;
  position: relative;
  margin-top: 17px;
}

.friend-item-box {
  display: flex;
  height: 294px;
  padding-top: 40px;
  box-sizing: border-box;
  flex-flow: wrap;
  align-content: space-around;
  justify-content: space-around;
}
.friend-item-box .friend-item {
  width: 280px;
  height: 100px;
}
.friend-item-box .friend-item img {
  /* width: 100%; */
  height: 50px;
}
.friend-item-box .friend-item:nth-child(4) img {
  width: 100%;
}
</style>


