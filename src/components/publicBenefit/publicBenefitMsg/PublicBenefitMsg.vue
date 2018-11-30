<template>
    <div class="publicBenefitMsg">
        <div class="publicBenefitMsg-center">
            <div class="title" v-rainbow>
                 {{welfare.title}}
            </div>
            <div class="p-txt">
                <p>{{welfare.desc}}</p>
            </div>
            <div class="img-item-box">
                <div class="item-top-box">

                    <div class="item-img-box" v-for="(item,index) in welfare.list" :key="index">
                        <img v-lazy="item.fr_image" alt="">
                    </div>
                    
                    
                </div>
            </div>
            <!-- ---------------------- -->
            <div class="app">
                <div class="app-left">
                    <div class="app-left-img-box">
                        <img v-lazy="socialresp.fr_image" alt="">
                    </div>
                </div>
                <div class="app-right">
                    <h1 class="app-right-title">{{socialresp.title}}</h1>
                    <div class="slid" v-bgcolor></div>
                    <p class="txt">
                        {{socialresp.content}}
                    </p>
                </div>
            </div>
            <div class="introduce">
                <div class="introduce-title" v-rainbow>
                 捐助单位介绍
                </div>
            <div class="introduce-box">
                
                <div class="introduce-box-item">
                    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542869143714&di=a63fbaa48ee10df77351e24adca6c61b&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2Fb58f8c5494eef01f90c4cdfcebfe9925bc317d33.jpg" alt="">
                    <div class="introduce-box-item-title">
                        <span>同济科技园</span>
                    </div>
                </div>
                <!-- ------------------------------------------------------------ -->
              
            </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        welfare:{
            type:Object,
            default:{}
        },
        socialresp:{
            type:Object,
            default:{}
        }
    }
}
</script>

<style scoped>
.publicBenefitMsg-center{
    width: 1296px;
    margin: 50px auto;
    margin-bottom: 45px;
    
}
.publicBenefitMsg-center .title{
    text-align: center;
    font-family: "微软雅黑";
    font-size: 40px;
    color: #3e3a39;
    letter-spacing: 3px;
    position: relative;
    margin-bottom: 56px;
}
.publicBenefitMsg-center .title:after{
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
.p-txt{
    margin-bottom: 50px;
}
.p-txt p{
    width: 100%;
    min-width: 1296px;
    text-align: center;
    font-size: 18px;
    line-height: 34px;
	letter-spacing: 2px;
	color: #3e3a39;
}
.img-item-box{
    width: 100%;
    padding-bottom: 50px;
}
.item-top-box{
    width: 100%;
    height: 710px;
    /* background-color: red; */
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    justify-content: space-between;
}
.item-top-box .item-img-box{
    width: 314px;
    height: 350px;
    
}
.item-top-box .item-img-box img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}

/* 222 */
.publicBenefitMsg .publicBenefitMsg-center .app{
    display: flex;
    width: 100%;
    height: 550px;
    margin-bottom: 50px;
}
.publicBenefitMsg .publicBenefitMsg-center .app .app-left{
    flex: 0 0 530px;
    background-color: #a3c0e1;
    /* opacity: 0.46; */
    border-radius: 10px;
    position: relative;
}
.publicBenefitMsg .publicBenefitMsg-center .app .app-right{
    flex: 1;
    margin-left: 67px;
    /* background-color: orange; */
}
.app-left-img-box{
    width: 530px;
    position: absolute;
    top: 40px;
    left: 35px;
}
.app-left-img-box img{
    width: 100%;
    border-radius: 10px;
}
.app-right .app-right-title{
    font-size: 25px;
    line-height: 30px;
    color: #3676bd;
}
.app-right .slid{
    width: 100%;
    height: 9px;
    background-color: #3676bd;
    margin: 15px 0 24px 0;
}
.app-right .txt{
    font-size: 18px;
    line-height: 30px;
    color: #2f2725;
}
.introduce{
    display: none;
}
.introduce .introduce-title{
    text-align: center;
    font-family: "微软雅黑";
    font-size: 40px;
    color: #3e3a39;
    letter-spacing: 3px;
    position: relative;
    margin-bottom: 73px;
}
.introduce .introduce-title::after{
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
.introduce-box{
    width: 1296px;
    height: 291px;
    /* background-color: orange; */
    margin-bottom: 108px;
    display: flex;
    justify-content: space-between;
}
.introduce-box .introduce-box-item{
    width: 308px;
    height: 308px;
    position: relative;
    /* background-color: yellow; */
}
.introduce-box .introduce-box-item img{
    width: 100%;
    height: 100%;
}
.introduce-box .introduce-box-item .introduce-box-item-title{
    width: 281px;
    height: 95px;
    position: absolute;
    bottom: -47px;
    left: 50%;
    margin-left: -140.5px;
    background-color: #3676bd;
}
.introduce-box .introduce-box-item .introduce-box-item-title span{
    display: block;
    font-size: 25px;
    text-align: center;
    line-height: 95px;
	color: #f0f2f5;
}
</style>
