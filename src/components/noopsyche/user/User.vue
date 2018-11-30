<template>
    <div class="user">
        <div class="user-center">
             <div class="title" v-rainbow>
                 {{user.title}}
             </div>
            <div class="power-four" >

                <div class="power" v-for="(item,index) in user.list" :key="index">
                    <div class="power-box" :style="{backgroundColor:item.fr_color}" v-scroll="handleScroll">
                        {{item.title}}
                    </div>
                    <div class="power-text">
                        <p>{{item.content}}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
    user:{
      type:Object,
      default:{}
    }
  },
methods: { 
    handleScroll(evt, el) {
      if (window.scrollY > 1200) {
        el.setAttribute("class", "animated power-box flipInY ");
      }
    }
  },
  mounted() {
    
  },
}
</script>

<style scoped>
.user-center{
    width: 1296px;
    margin: 60px auto;
    margin-bottom: 45px;
    
}
.title{
    text-align: center;
    font-family: "微软雅黑";
    font-size: 40px;
    color: #3e3a39;
    letter-spacing: 3px;
    position: relative;
    margin-bottom: 56px;
}
.title:after{
    content:"";
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

.power {
  width: 274px;
  height: 285px;
  font-family: "微软雅黑";
  /* background-color: yellow; */
}
.power-four{
    display: flex;
    justify-content: space-between;
}
.power-box {
  width: 173px;
  height: 172px;
  background-color: #3676bd;
  border-radius: 50%;
  border: solid 5px #fff;
  box-shadow: 5px 9px 5px 0px rgba(159, 160, 160, 0.5);
  margin: 0 auto;
  text-align: center;
  line-height: 172px;
  font-size: 25px;
  color: #fff;
}

.power-text {
  width: 274px;
  /* height: 81px; */
  padding-top: 20px;
  /* background-color: pink; */
}
.power-text p {
  font-size: 18px;
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
