<template>
  <div class="item">
    <div class="banner" :style="bg_url">
      <div class="item-center">
        <div
          class="item-project-box"
          v-for="(item,index) in system.list"
          :key="index"
          :style="{backgroundImage: 'url(' + item.bg_image + ')'}"
        >
          <div class="item-icon-text-box">
            <div class="icon-box">
              <img :src="item.fr_image" alt>
            </div>
            <div class="item-project-text">
              <h1 v-rainbow>{{item.title}}</h1>
              <p>{{item.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    system: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {};
  },
  computed: {
    bg_url() {
      return "background-image: url(" + this.system.bg_image + ")";
    }
  }
};
</script>

<style scoped>
.banner {
  min-width: 1296px;
  width: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.item-center {
  width: 1296px;
  height: 405px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  box-sizing: border-box;
  align-content: space-around;
}
.item-project-box {
  width: 360px;
  height: 142px;
  background-repeat: no-repeat;
  background-position: center;
}
.item-icon-text-box {
  display: flex;
  padding-top: 14px;
}
.icon-box {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  /* background-color: #3676bd; */
  flex: 0 0 42px;
  margin-right: 12px;
  margin-left: 18px;
}
.icon-box img{
  width: 100%;
  height: 100%;
}
.item-project-text {
  flex: 1;
  color: #2f2725;
  font-family: "微软雅黑";
  padding-right: 18px;
}
.item-project-text h1 {
  font-size: 18px;
  line-height: 30px;
}
.item-project-text p {
  font-size: 14px;
  line-height: 27px;
  color: #5c5453;
}
</style>
