<template>
    <div class="ybcnews">
        <div class="ybcnews-center">
            <div class="title" v-rainbow>
                 医佰康新闻资讯
            </div>
            <div class="news-list-box">
                <!-- --------------------------------- -->
                <div class="news-list01 hot" v-for="(item,index) in topview.slice(0,3)" :key="index" @click="showdetail(item.id)" :title="item.title">
                    <div class="img-box">
                        <img v-lazy="item.thumbnail" alt="">
                    </div>
                    <div class="txt-box">
                        <p class="txt-title">{{item.title}}</p>
                        <div class="line"></div>
                        <p class="txt-info">{{item.excerpt}}</p>
                    </div>
                </div>
               
                <!-- ----------------------- -->
            </div>
            <div class="fenye">
            <div class="news-link" v-for="(item,index) in list" :key="index" >
                    <div class="news-link-item">
                        <div class="time">
                            <span>{{item.c_time | time3}}</span>
                            <span>{{item.c_time | time2}}</span>
                        </div>
                        <div class="title-img-box">
                            <img :src="item.thumbnail" alt="">
                        </div>
                        <div class="item-info">
                            <h1 class="item-info-title" :title="item.title">{{item.title}}</h1>
                            <h3 class="item-menu">{{item.category[0]}} {{item.category[1]}}</h3>
                            <p class="item-p">{{item.excerpt}}</p>
                            <div class="item-seeall" @click="showdetail(item.id)">查看全文</div>
                        </div>
                    </div>
                <div class="item-line"></div>
            </div>
            
            <!-- *********************************************************************************************** -->
            

            <!-- ************************************************************************** -->
            
                      <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page.sync="paginations.page_index"
                        :page-sizes="paginations.page_sizes"
                        :page-size="paginations.page_size"
                        :layout="paginations.layout"
                        :total="paginations.total">
                      </el-pagination>
            </div>
           
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[],
            alllist:[],
            paginations:{
                page_index:1,//当前位于哪一页
                total:0,//总数
                page_size:1,//一页显示多少条
                page_sizes:[1,3,10],//每页显示多少条
                layout:"total, sizes, prev, pager, next, jumper"
            },
            topview:[]
        }
    },
    created(){
        //获得文章列表
        this.$http.get("http://wx.ybc365.com/api/v1.0/newses?page=1&per_page=1000").then((result) => {
            // console.log(result); 
            this.alllist = result.body.data.list
            // console.log(this.alllist)
            //设置分页数据
            this.setPaginations()      
        }).catch((err) => {
            console.log(err);        
        });
        this.$http.get("http://wx.ybc365.com/api/v1.0/newses/topview").then((result) => {
            // console.log(result); 
            this.topview = result.body.data.list  
            console.log(this.topview)                 
        }).catch((err) => {
            console.log(err);                    
        });
    
    },
    methods:{
        handleSizeChange(page_size){
            // console.log(page_size)
            this.paginations.page_index = 1;
            this.paginations.page_size = page_size;
            this.list = this.alllist.filter((item,index)=>{
                return index < page_size;
            })
        },
        handleCurrentChange(page){
            // console.log(page)
            //获取当前页
            let index = this.paginations.page_size * (page - 1);
            let nums = this.paginations.page_size * page;
            //容器
            let listbox = [];
            for(let i = index; i<nums; i++){
                if(this.alllist[i]){
                    listbox.push(this.alllist[i])
                }
                this.list = listbox;
            }

        },
        setPaginations(){
            this.paginations.total = this.alllist.length;
            // console.log(this.paginations.total)
            this.paginations.page_index = 1;
            this.paginations.page_size = 10; //控制初始页面显示的条数
            this.list = this.alllist.filter((item,index)=>{
                return index < this.paginations.page_size;
            })
        },
        showdetail(id){
            this.$router.push({path:'detail/'+ id})
        }
    }
}
</script>

<style scoped>
.ybcnews{
    width: 100%;
    background-color: #fff;
}
.ybcnews-center{
    width: 1290px;
    margin: 0 auto;
}
.ybcnews-center .title{
    text-align: center;
    font-family: "微软雅黑";
    font-size: 40px;
    color: #3e3a39;
    letter-spacing: 3px;
    position: relative;
    padding-top: 49px;
    margin-bottom: 56px;
}
.ybcnews-center .title::after{
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

.news-list-box{
    width: 100%;
    height: 397px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    /* background-color: red; */
}
.news-list-box .hot{
    width: 397px;
    height: 397px;
    border-radius: 10px;
    background-color: yellow;
    cursor: pointer;
    position: relative;

}
.hot .img-box{
    width: 397px;
    height: 397px;
}
.hot .img-box img{
    width: 397px;
    height: 397px;
    border-radius: 10px;
}
.hot .txt-box{
    width: 397px;
    height: 132px;
    border-radius:0 0 10px 10px;
    background-color: #3676bd;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 20px;
    box-sizing: border-box;
}
.hot .txt-box .txt-title{
    width: 70%;
    font-size: 20px;
    color: #fff;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.hot .txt-box .line{
    width: 100%;
    height: 1px;
    margin-top: 12px;
    margin-bottom: 13px;
    background-color: #fff;
}
.hot .txt-box .txt-info{
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 2;
      /*! autoprefixer: off */
    -webkit-box-orient: vertical;
      /* autoprefixer: on */
    overflow: hidden;
}
.news-link{
    width: 100%;
}
.news-link .news-link-item{
    width: 100%;
    height: 174px;
    display: flex;
}
.news-link .news-link-item .time{
    width: 70px;
    height: 70px;
    margin-right: 27px;
    text-align: center;
    background-color: #3676bd;

}
.news-link .news-link-item .time span:nth-child(1){
    display: block;
    font-size: 25px;
    margin: 11px 0;
    color: #fff;
}
.news-link .news-link-item .time span:nth-child(2){
    color: #fff;
    font-size: 14px;
}
.news-link .news-link-item .title-img-box{
    width: 300px;
    height: 174px;
    margin-right: 20px;
    background-color: green;
}
.news-link .news-link-item .title-img-box img{
    width: 100%;
    height: 100%;
}
.news-link .news-link-item .item-info{
    flex: 1;
}
.news-link .news-link-item .item-info .item-info-title{
    width: 500px;
    text-align: left;
    font-size: 20px;
    line-height: 30px;
    color: #2f2725;
    /* 超出部分省略号显示 */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

}
.news-link .news-link-item .item-info .item-menu{
    font-size: 12px;
    color: #898989;
    line-height: 30px;
    text-align: left;
    
}
.news-link .news-link-item .item-info .item-p{
    width: 765px;
    font-size: 14px;
    color: #797271;
    line-height: 28px;
    text-align: left;
    word-break: break-all;
    display: -webkit-box;
    -webkit-line-clamp: 3;
     /*! autoprefixer: off */
    -webkit-box-orient: vertical;
     /* autoprefixer: on */
    overflow: hidden;
}
.news-link .news-link-item .item-info .item-seeall{
    width: 214px;
    height: 28px;
    background-color: #fff;
    border: 1px solid #a0a0a0;
    text-align: center;
    font-size: 14px;
    line-height: 28px;
    color: #898989;
    cursor: pointer;
    margin-top: 19px;
}
.news-link .news-link-item .item-info .item-seeall:hover{
    background-color: #3676bd;
    color: #fff;
}
.item-line{
    width: 100%;
    margin: 25px 0;
    border: .5px dashed #b5b5b5;
}
.fenye{
    margin: 26px 0;
    text-align: center;
}
</style>
