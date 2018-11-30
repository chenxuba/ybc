<template>
  <div class="honor">
    <div class="honor-center">
      <div class="title" v-rainbow>
        {{honor.title}}
      </div>
      <div class="honor-box">
            <el-carousel :interval="2000" type="card" height="320px">
              <el-carousel-item v-for="(item,index) in honor.list" :key="index">
                <img :src="item.fr_image" alt="">
                <div class="honor-box-item-title" v-bgcolor>{{item.title}}</div>
              </el-carousel-item>
            </el-carousel>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      honor:{
        type:Object,
        default:{}
      }
    },
      data(){
          return{}
      },
    mounted() {
      
    }
  };

</script>

<style scoped>
 .el-carousel{
   text-align: center;
 }

  .honor {
    width: 100%;
  }

  .honor .honor-center {
    width: 1296px;
    height: 100%;
    margin: 0 auto;
    /* background-color: aquamarine; */
  }

  .honor .honor-center .title {
    text-align: center;
    font-family: "微软雅黑";
    font-size: 40px;
    color: #3e3a39;
    letter-spacing: 3px;
    position: relative;
    margin-bottom: 73px;
  }

  .honor .honor-center .title::after {
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

  .honor-box {
    width: 1296px;
    height: 291px;
    /* background-color: orange; */
    margin-bottom: 90px;
    position: relative;
  }



 

  .honor-box .honor-box-item-title {
    width: 360px;
    height: 100px;
    position: absolute;
    bottom: -47px;
    left: 50%;
     font-size: 20px;
     color: #fff;
     line-height: 60px;
    margin-left: -180px;
    /* background:rgba(0, 0, 0, 0.4) */
  }


</style>
