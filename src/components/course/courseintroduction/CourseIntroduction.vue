<template>
    <div class="course-introduction">
        <div class="course-introduction-center">
            <div class="title" v-rainbow>
                 医佰康课程介绍
            </div>
            <div class="search-box">
                <div class="input-btn-box">
                    <el-input  v-model="search" placeholder="请输入项目名称搜索"></el-input>
                </div>
            </div>
            <!-- 课程列表 -->
            <div class="course-link" v-for="(item,index) in filterWord" :key="index">
                <div class="course-link-left">
                    <img v-lazy="item.fr_image" alt="">
                </div>
                <div class="course-link-right">
                    <h1 class="tit">{{item.title}}</h1>
                    <div class="slid" v-bgcolor ></div>
                    <p class="txt">
                        {{item.content}}
                    </p>
                </div>
            </div>
           

            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        course:{
            type:Array,
            default:{}
        }
    },
    data(){
        return{
            search:'',
        }
    },
    
    computed:{
        filterWord(){
            return this.course.filter((item)=>{
                return item.title.match(this.search);
            })
        }
    }
}
</script>

<style scoped>
.course-introduction-center{
    width: 1296px;
    margin: 0 auto;
    margin-bottom: 45px;
}
.course-introduction-center .title{
    text-align: center;
    font-family: "微软雅黑";
    font-size: 40px;
    color: #3e3a39;
    letter-spacing: 3px;
    position: relative;
    padding-top: 49px;
    margin-bottom: 56px;
}
.course-introduction-center .title:after{
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
.search-box{
    width: 100%;
    height: 100px;
    background-color: #f0f2f5;
    position: relative;
    margin-bottom: 49px;
}
.input-btn-box{
    width: 420px;
    height: 37px;
    /* background-color: red; */
    position: absolute;
    top: 31px;
    left: 39px;
    display: flex;
    /* justify-content: space-between */
}
.input-btn-box .btn{
    width: 100px;
    height: 37px;
    text-align: center;
    line-height: 37px;
    color: #fff;
    font-size: 18px;
    background-color: #24b5b8;
    cursor: pointer;
}
.input-btn-box input{
    flex: 1;
    margin-right: 10px;
}
.course-link{
    width: 100%;
    height: 472px;
    display: flex;
    /* background-color: red; */
    padding: 54px 33px 55px 16px;
    box-sizing: border-box;
    border: 1px solid #bfbfbf;
    margin-bottom: 26px;
}
.course-link .course-link-left{
    flex: 0 0 341px;
    /* background-color: pink; */
    margin-right: 47px;
    padding: 11px;
    box-sizing: border-box;
    box-shadow: 3px 4px 8px 1px 
  rgba(137, 137, 137, 0.75);
    border-radius: 10px;
}
.course-link .course-link-left img{
    width: 100%;
    height: 100%;
}
.course-link .course-link-right{
    flex: 1;
    padding: 11px 33px 0 0;
    box-sizing: border-box;
    /* background-color: greenyellow; */
}
.course-link-right .tit{
    font-size: 25px;
    line-height: 30px;
    color: #3676bd;
}
.course-link-right .slid{
    width: 100%;
    height: 9px;
    background-color: #3676bd;
    margin: 15px 0 24px 0;
}
.course-link-right .txt{
    font-size: 18px;
    line-height: 30px;
    color: #2f2725;
}
</style>
