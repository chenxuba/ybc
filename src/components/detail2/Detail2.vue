<template>
    <div class="detail">
        <div class="banner" :style="head_bg_news"></div>
        <div class="content">
         <web-dot></web-dot>
          <div class="title" v-rainbow>社会公益</div>
          <div class="content-txt">
            <h1 class="name">{{news.title}}</h1>
            <div class="content-txt-msg">
              <!-- <span>来源</span>:<span>{{news.from}}</span> -->
              <span>发布时间</span>:<span>{{news.c_time | time}}</span>
              <span>{{news.view}}次浏览</span>
              <!-- <span>分类</span>:<span>{{newsmenu[0]}}</span> -->
            </div>
            <p v-html="news.content" class="p"></p>
            <div class="goback" @click="goback" v-if="isShow">返回</div>
          </div>
        </div>
        
    </div>
</template>

<script>
import Dot from "../homepage/system/Dot/dot";
export default {
    data(){
        return{
            bgbanner:{},
            id: this.$route.params.id,
            news:{},
            newsmenu:[],
            isShow:false
        }
    },
    computed: {
    head_bg_news() {
      return "background-image: url(" + this.bgbanner.image_url + ")";
    }
  },
  methods: {
    //获得banner
    getBgbanner() {
      this.$http.get(API+"/api/v1.0/banner?name=welfare").then(result => {
          this.bgbanner = result.body.data.list[0];
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获得详情
    getDetail(){
      this.$http.get(API+"/api/v1.0/welfares/"+ this.id).then((result) => {
        // console.log(result)
        this.news = result.body.data.welfare
        this.newsmenu = result.body.data.welfare.category
        // console.log(this.news)
      }).catch((err) => {
        console.log(err)      
      });
    },
    goback(){
      this.$router.go(-1)
    },
    handleScroll(){
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      // console.log(scrollTop)
      if(scrollTop >= 600){
        this.isShow = true;
      }else{
        this.isShow = false;
      }
    }
  },
  mounted() {
    this.getBgbanner()
    this.getDetail()
    window.addEventListener('scroll',this.handleScroll)
  },
  components: {
    "web-dot": Dot
  }
}
</script>

<style scoped>
.p{
  padding: 0 120px;
  line-height: 1.8em;
}
.banner {
  width: 100%;
  height: 500px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-bottom: 40px;
}
.detail .content .title{
    text-align: center;
    font-family: "微软雅黑";
    font-size: 34px;
    color: #3e3a39;
    letter-spacing: 3px;
    position: relative;
    padding-top: 15px;
    margin-bottom: 40px;
}

.detail .content .content-txt{
    width: 1296px;
    margin: 0 auto;
    height: 100%;
    padding-top: 40px;
    border: dashed 1px #bfbfbf;
    position: relative;
    margin-bottom: 20px;
}
.detail .content .content-txt .name{
  text-align: center;
  font-weight: bold;
	font-size: 25px;
	line-height: 30px;
	color: #f1c232;
}
.detail .content .content-txt .content-txt-msg{
  text-align: center;
  font-size: 15px;
  line-height: 30px;
	color: #9fa0a0;
  margin: 23px 0 25px 0;
}
.detail .content .content-txt .content-txt-msg span:nth-child(n+1){
  display: inline-block;
  margin: 0 10px;
}
.detail .content .content-txt .content-txt-msg .first-place{
  width: 1200px;
  height: 54px;
  background-color: #ffffff;
	border: solid 1px #8a8b89;
  box-sizing: border-box;
  margin: 0 auto;
  font-size: 15px;
  line-height: 54px;
  margin-top: 25px;
  text-align: left;
	color: #2f2725;
}
.goback{
    /* padding: 10px; */
    width: 20px;
    height: 60px;
    color: #fff;
    line-height: 30px;
    text-align: center;
    background-color: #24b5b8;
    position: fixed;
    bottom: 450px;
    right:80px;
    cursor: pointer;
}
</style>
