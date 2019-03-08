<template>
    <div class="bottom-nav">
        <div class="bottom-nav-center">
            <router-link to="/homepage" active-class="active">首页</router-link>
            <router-link to="/noopsyche" active-class="active">智能康复</router-link>
            <router-link to="/course" active-class="active">课程中心</router-link>
            <router-link to="/news" active-class="active">新闻科普</router-link>
            <router-link to="/about" active-class="active">关于我们</router-link>
            <router-link to="/publicBenefit" active-class="active">社会公益</router-link>
            <router-link to="/qicai" active-class="active">康复器材</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bottom-nav{
    min-width:1296px;
    width: 100%;
    height: 60px;
    background-color: #234445;
}
.bottom-nav-center{
    width: 1290px;
    height: 60px;
    /* background-color: red; */
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    
}
.bottom-nav-center a{
    display: block;
    width: 180px;
    height: 60px;
    /* background-color: pink; */
    text-align: center;
    text-decoration: none;
    line-height: 60px;
    font-size: 16px;
    color: #fff;
}
.active {
    background-color: #00a5bf;
    color: #fff !important;
  }
</style>
