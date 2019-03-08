<template>
  <div class="aboutmsg">
    <div class="aboutmsg-center">
      <web-dot></web-dot>
      <div class="title" v-rainbow>{{team.title}}</div>
      <div class="p-txt">
        <p>{{team_list.content}}</p>
      </div>
      <div class="jieshao">
        <div class="b1" v-for="(item,index ) in team.list" :key="index">
          <div class="b2">
            <img v-lazy="item.fr_image" alt width="100%" height="100%">
          </div>
          <span class="name">{{item.title}}</span>
        </div>
      </div>
      <div class="map">
        <iframe
          class="ueditor_baidumap"
          :src="src"
          frameborder="0"
          width="100%"
          height="344"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import Dot from "../../homepage/system/Dot/dot";
export default {
  props: {
    team: {
      type: Object,
      default: {}
    },
    team_list:{}
  },
  components: {
    "web-dot": Dot
  },
  data () {
    return {
      src: API + "/new/show.html#center=121.498578,31.303534&zoom=15&width=1290&height=340&markers=121.498578,31.303534&markerStyles=l,A"
    }
  }
};
</script>

<style scoped>
.ueditor_baidumap {
  height: 100%;
}
.aboutmsg {
  width: 100%;
  margin-top: 50px;
  background-color: #fff;
}
.aboutmsg .aboutmsg-center {
  width: 1290px;
  margin: 0 auto;
}
.aboutmsg .aboutmsg-center .app {
  display: flex;
  width: 100%;
  height: 397px;
  margin: 60px 0;
  position: relative;
}
.aboutmsg .aboutmsg-center .app::after {
  content: "";
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  position: absolute;
  bottom: -30px;
  left: 0;
}
.aboutmsg .aboutmsg-center .app .app-left {
  flex: 0 0 397px;
  background-color: #a3c0e1;
  /* opacity: 0.46; */
  border-radius: 10px;
  position: relative;
}
.aboutmsg .aboutmsg-center .app .app-right {
  flex: 1;
  margin-left: 67px;
  /* background-color: orange; */
}
.app-left-img-box {
  width: 100%;
  height: 350px;
  position: absolute;
  top: 22px;
  left: 23px;
  right: -33px;
  /* background-color: red; */
}
.app-left-img-box img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.line {
  width: 100%;
  border: 1px dashed #b5b5b5;
  margin: 50px 0;
}

.app-right .title {
  font-size: 25px;
  line-height: 30px;
  color: #3676bd;
}
.app-right .slid {
  width: 100%;
  height: 9px;
  background-color: #3676bd;
  margin: 15px 0 24px 0;
}
.app-right .txt {
  font-size: 18px;
  line-height: 30px;
  color: #2f2725;
}
.map {
  width: 100%;
  height: 340px;
  margin-bottom: 50px;
  /* background-color: red; */
  /* display: flex; */
}
.title {
  text-align: center;
  font-family: "微软雅黑";
  font-size: 34px;
  color: #3e3a39;
  letter-spacing: 3px;
  position: relative;
  margin-top: 17px;
  margin-bottom: 50px;
}
.p-txt {
  font-size: 15px;
  line-height: 27px;
  letter-spacing: 1px;
  color: #333333;
  margin-bottom: 60px;
}
.jieshao {
  width: 100%;
  display: flex;
  padding: 0 50px;
  box-sizing: border-box;
  justify-content: space-between;
}
.jieshao .b1 {
  width: 348px;
  height: 100%;
  /* background-color: red; */
}
.jieshao .b1 .b2 {
  width: 348px;
  height: 258px;
  background-color: #331d14;
  padding: 15px;
  box-sizing: border-box;
}
.jieshao .b1 .b2 img {
  width: 100%;
  height: 100%;
}
.jieshao .b1 .name {
  display: inline-block;
  width: 100%;
  font-size: 15px;
  margin-top: 15px;
  text-align: center;
  line-height: 27px;
  letter-spacing: 1px;
  color: #333333;
  margin-bottom: 95px;
}
.map{
    /* padding: 0 50px; */
    box-sizing: border-box;
}
</style>
