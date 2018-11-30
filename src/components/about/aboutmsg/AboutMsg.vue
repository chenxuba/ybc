<template>
    <div class="aboutmsg">
        <div class="aboutmsg-center">
            <div class="app" v-for="(item,index) in about.list" :key="index">
                <div class="app-left">
                    <div class="app-left-img-box">
                        <img v-lazy="item.fr_image" alt="">
                    </div>
                </div>
                <div class="app-right">
                    <h1 class="title">{{item.title}}</h1>
                    <div class="slid" v-bgcolor></div>
                    <p class="txt">
                        {{item.content}}
                    </p>
                </div>
            </div>
            
            <!-- ---------------------------------------------------------------------------------- -->
        
            <!-- --------------------------------------------------------------- -->
            <div class="map">
                <img src="../../../../static/img/map2.jpg" alt="">
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    props:{
        about:{
            type:Object,
            default:{}
        }
    },
    data(){
        return{

        }
    },
    mounted(){
        
    },
    methods:{
        
    }
}
</script>

<style scoped>
.aboutmsg{
    width: 100%;
    margin-top: 50px;
    background-color: #fff;
}
.aboutmsg .aboutmsg-center{
    width: 1290px;
    margin: 0 auto;
}
.aboutmsg .aboutmsg-center .app{
    display: flex;
    width: 100%;
    height: 397px;
    margin: 60px 0;
    position: relative;
    
}
.aboutmsg .aboutmsg-center .app::after{
    content: '';
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    position: absolute;
    bottom: -30px;
    left: 0;
}
.aboutmsg .aboutmsg-center .app .app-left{
    flex: 0 0 397px;
    background-color: #a3c0e1;
    /* opacity: 0.46; */
    border-radius: 10px;
    position: relative;
}
.aboutmsg .aboutmsg-center .app .app-right{
    flex: 1;
    margin-left: 67px;
    /* background-color: orange; */
}
.app-left-img-box{
    width: 100%;
    height: 350px;
    position: absolute;
    top: 22px;
    left: 23px;
    right: -33px;
    /* background-color: red; */
}
.app-left-img-box img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.line{
    width: 100%;
    border: 1px dashed #b5b5b5;
    margin: 50px 0;
}

.app-right .title{
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
.map{
    width: 100%;
    height: 450px;
    margin-bottom: 50px;
    background-color: red;
}
.map img{
    width: 100%;
    height: 100%;
}
</style>
