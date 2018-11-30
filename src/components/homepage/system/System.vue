<template>
    <div class="system">
        <div class="system-center">
            <div class="title" v-rainbow>
                <span> {{system.title}}</span>   
            </div>
            <div class="text">
                <p>{{system.desc}}</p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    props:{
        system:{
            type:Object,
            default:{}
        }
    }
}
</script>

<style scoped>

.system-center{
    width: 1296px;
    margin: 0 auto;
}
.title{
    text-align: center;
    font-family: "微软雅黑";
    font-size: 40px;
    color: #3e3a39;
    letter-spacing: 3px;
    position: relative;
    margin-bottom: 75px;
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
.text{
    font-family: "微软雅黑";
    line-height: 42px;
    color: #2f2725;
    font-size: 20px;
    text-align: center;
    padding-bottom: 64px;
}
</style>
