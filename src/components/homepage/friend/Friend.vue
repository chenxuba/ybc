<template>
  <div class="friend">
    <div class="friend-center">
      <div class="title" v-rainbow>合作伙伴</div>
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
</template>

<script>
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
  created() {}
};
</script>

<style scoped>
.friend-center {
  width: 1296px;
  margin: 0 auto;
  margin-bottom: 45px;
}
.title {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 40px;
  color: #3e3a39;
  letter-spacing: 3px;
  position: relative;
  padding-top: 49px;
  margin-bottom: 56px;
}
.title:after {
  content: "";
  display: block;
  width: 95px;
  height: 7px;
  background-color: #24b5b8;
  position: absolute;
  bottom: -22px;
  right: 50%;
  margin-right: -48px;
  border-radius: 3px;
}
.friend-item-box {
  display: flex;
  height: 300px;
  padding-top: 40px;
  display: flex;
  flex-flow: wrap;
  align-content: space-around;
  justify-content: space-around;
}
.friend-item-box .friend-item {
  width: 300px;
  /* height: 100px; */
}
.friend-item-box .friend-item img {
  width: 100%;
  height: 80px;
}
</style>


