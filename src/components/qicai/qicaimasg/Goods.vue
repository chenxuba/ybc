<template>
  <transition name="fade">
    <div class="show" v-show="showFlag">
      <div class="top-warp">
        <div class="left-img">
          <img :src="goods.thumbnail" alt width="100%" height="100%">
        </div>
        <div class="right-msg">
          <div class="title">
            <p>
              <span>{{goods.fullname}}</span>
            </p>
          </div>
          <h3>产品简介</h3>
          <p class="h3-p">
            {{goods.desc}}
          </p>
          <div class="tel">
            <p>咨询热线:{{goods.callnumber}}</p>
            <div class="liji">立即咨询</div>
          </div>
        </div>
      </div>
      <div class="bottom-warp">
        <h3>适用范围</h3>
        <p class="bottom-p">{{goods.scope}}</p>
        <h3>使用目的</h3>
        <p class="bottom-p">{{goods.field}}</p>
      </div>
      <div class="back-btn" @click="closeView">收起</div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showFlag: false
    };
  },
  props: {
    goods: {
      type: Object
    }
  },
  methods: {
    showView() {
      this.showFlag = true;
    },
    closeView() {
      this.showFlag = false;
    }
  }
};
</script>

<style scoped>
.show {
  width: 100%;
  height: 100%;
  background-color: #fff;
  position: absolute;
  top: 10px;
  z-index: 999;
}
.show .back-btn {
  width: 50px;
  height: 25px;
  background-color: #2078dd;
  color: #fff;
  line-height: 25px;
  text-align: center;
  letter-spacing: 1px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  font-size: 14px;
}
.show .top-warp {
  display: flex;
}
.show .top-warp .left-img {
  width: 300px;
  height: 217px;
  background-color: #eee;
}
.show .top-warp .right-msg {
  flex: 1;
  margin-left: 30px;
  /* background-color: orange; */
}
.show .bottom-warp {
  width: 100%;
  height: 200px;
  /* background-color: pink; */
  /* border: 1px solid red; */
  margin-top: 30px;
  box-sizing: border-box;
}
.show .bottom-warp h3 {
  font-size: 16px;
  line-height: 50px;
  letter-spacing: 1px;
  margin-left: 16px;
  color: #333333;
}

.show .bottom-warp .bottom-p {
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  margin-left: 16px;
  color: #666666;
}
.show .top-warp .right-msg .title p {
  border-bottom: 1px solid #ccc;
  display: inline-block;
  font-size: 16px;
  line-height: 28px;
  color: #999;
}
.show .top-warp .right-msg .title p span {
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
  color: #000;
}
.show .top-warp .right-msg h3 {
  font-size: 18px;
  line-height: 50px;
  letter-spacing: 1px;
  color: #4d4d4d;
}
.show .top-warp .right-msg .h3-p {
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 1px;
  color: #999999;
}
.show .top-warp .right-msg .tel {
  width: 317px;
  height: 95px;
  margin-top: 18px;
  background-color: #ececdf;
}
.show .top-warp .right-msg .tel p {
  font-size: 16px;
  line-height: 50px;
  letter-spacing: 1px;
  color: #575757;
  text-align: center;
}
.show .top-warp .right-msg .liji {
  width: 210px;
  height: 35px;
  background-color: #2bc4ca;
  color: #fff;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 35px;
  text-align: center;
  margin: 0 auto;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
