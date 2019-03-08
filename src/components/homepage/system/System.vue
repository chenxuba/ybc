<template>
    <div class="system">
        <div class="system-center">
            <web-dot></web-dot>
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
import Dot from './Dot/dot'
export default {
    props:{
        system:{
            type:Object,
            default:{}
        }
    },
    components:{
        "web-dot":Dot
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
    font-size: 34px;
    color: #3e3a39;
    margin-top: 15px;
    letter-spacing: 3px;
    position: relative;
    margin-bottom: 50px;
}
.text{
    font-family: "微软雅黑";
    line-height: 38px;
    color: #2f2725;
    font-size: 18px;
    text-align: left;
    padding-bottom: 64px;
}
</style>
