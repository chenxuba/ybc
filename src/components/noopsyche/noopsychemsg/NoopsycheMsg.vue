<template>
    <div class="noopsychemsg">
        <div class="noopsychemsg-center">
            <div class="app-wx" v-for="(i,x) in intelligent.list" :key="x">
                <div class="app">
                    <div class="app-left">
                        <img :src="i.bg_image" alt="">
                    </div>
                    <div class="app-right">
                        <p class="title">{{i.title}}</p>
                        <p class="txt">
                            {{i.content}}
                        </p>
                        <div class="img" v-show="i.fr_image">
                            <img :src="i.fr_image" alt="">
                        </div>
                    </div>
                </div>
                <div class="wx">
                    <div class="app-right">
                        <p class="title">{{i.title1}}</p>
                        <p class="txt">
                           {{i.content1}}
                        </p>
                        <div class="img" v-show="i.fr_image1">
                            <img :src="i.fr_image1" alt="">
                        </div>
                    </div>
                    <div class="app-left">
                        <img :src="i.bg_image1" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props:{
        intelligent:{
            type: Object,
            default: {}
        }
    }
}
</script>

<style scoped>
.noopsychemsg{
    width: 100%;
    margin-top: 60px;
    /* background-color: red; */
}
.noopsychemsg .noopsychemsg-center{
    width: 1290px;
    margin: 0 auto;
}
.app-wx{
    width: 100%;
}
.app-wx .app,
.app-wx .wx{
    width: 100%;
    height: 305px;
    display: flex;
}
.app-wx .app .app-left,
.app-wx .wx .app-left{
    width: 350px;
    height: 305px;
    margin-right: 50px;
    /* background-color: gold; */
}
.app-wx .app .app-left img,
.app-wx .wx .app-left img{
    width: 100%;
    height: 100%;
}
.app-wx .app .app-right,
.app-wx .wx .app-right{
    flex: 1;
    position: relative;
    /* background-color: pink; */
}
.app-wx .app .app-right .title,
.app-wx .wx .app-right .title{
    line-height: 50px;
    font-size: 18px;
    border-bottom: 2px solid #2bc4ca;
}
.app-wx .app .app-right .txt,
.app-wx .wx .app-right .txt{
    padding-right: 400px;
    line-height: 1.7em;
    margin-top: 30px;
    color: #8c8c8c;
    font-size: 14px;
}
.app-wx .app .app-right .img,
.app-wx .wx .app-right .img{
    width: 180px;
    height: 200px;
    /* background-color: orange; */
    position: absolute;
    top: 88px;
    right: 100px;
}
.app-wx .app .app-right .img img,
.app-wx .wx .app-right .img img{
    width: 100%;
    height: 100%;
}
.app-wx .wx{
    margin-top: 100px;
    margin-bottom: 50px;
}
.app-wx .wx .app-left{
  margin-left: 55px;
  margin-right: 0;
}
</style>
