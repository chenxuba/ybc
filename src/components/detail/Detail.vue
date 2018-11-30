<template>
    <div class="detail">
        <div class="banner" :style="head_bg_news"></div>
        <div class="content">
          <div class="title" v-rainbow>医佰康新闻资讯</div>
          <div class="content-txt">
            <h1 class="name">{{news.title}}</h1>
            <div class="content-txt-msg">
              <span>来源</span>:<span>{{news.from}}</span>
              <span>发布时间</span>:<span>{{news.c_time | time}}</span>
              <span>{{news.view}}次浏览</span>
              <span>分类</span>:<span>{{newsmenu[0]}}</span>
            </div>
            <p v-html="news.content" class="p"></p>
            <div class="goback" @click="goback">返回</div>
          </div>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            bgbanner:{},
            id: this.$route.params.id,
            news:{},
            newsmenu:[]
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
      this.$http.get("http://wx.ybc365.com/api/v1.0/banner?name=news").then(result => {
          this.bgbanner = result.body.data.list[0];
        })
        .catch(err => {
          console.log(err);
        });
    },
    //获得详情
    getDetail(){
      this.$http.get("http://wx.ybc365.com/api/v1.0/newses/"+ this.id).then((result) => {
        // console.log(result)
        this.news = result.body.data.news
        this.newsmenu = result.body.data.news.category
        console.log(this.news)
      }).catch((err) => {
        console.log(err)      
      });
    },
    goback(){
      this.$router.go(-1)
    }
  },
  mounted() {
    this.getBgbanner()
    this.getDetail()
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
  height: 520px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.detail .content .title{
    text-align: center;
    font-family: "微软雅黑";
    font-size: 40px;
    color: #3e3a39;
    letter-spacing: 3px;
    position: relative;
    padding-top: 49px;
    margin-bottom: 56px;
}
.detail .content .title::after{
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
.detail .content .content-txt{
    width: 1296px;
    margin: 0 auto;
    height: 100%;
    padding-top: 39px;
    border: dashed 2px #bfbfbf;
    position: relative;
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
    padding: 10px;
    width: 60px;
    color: #fff;
    text-align: center;
    background-color: #24b5b8;
    position: absolute;
    right: 50px;
    bottom: 20px;
    cursor: pointer;
}
</style>
