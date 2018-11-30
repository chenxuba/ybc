<template>
    <div class="bottom-info">
        <div class="bottom-info-center">
            <div class="bottom-logo">
                <img src="../../../../static/img/blogo.png" alt="" width="100%">
            </div>
            <div class="bottom-msg">
                <div class="tel">
                    <span>电话：021-80392253</span>
                </div>
                <div class="e-mail">
                    <span>邮箱：ybc@ybc365.com</span>
                </div>
                <div class="location">
                    <span>地址：上海市杨浦区纪念路8号财大科技园102A</span>
                </div>
            </div>
            <div class="bottom-wx">
                <img src="../../../../static/img/bj.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bottom-info{
    min-width: 1296px;
    width: 100%;
    height: 230px;
    background-color: #24b5b8;
}
.bottom-info-center{
    width: 1290px;
    height: 230px;
    margin: 0 auto;
    background-color: #24b5b8;
    display: flex;
    justify-content: space-around;
}
.bottom-info-center .bottom-logo{
    width: 232px;
    height: 84px;
    margin-top: 75px;
    /* background-color: red; */
}
.bottom-info-center .bottom-msg{
    width: 400px;
    /* height: 90px; */
    color: #fff;
    font-size: 18px;
    margin-top: 72px;
    line-height: 36px;
    /* background-color: pink; */
}
.bottom-info-center .bottom-wx{
    width: 166px;
    height: 133px;
    margin-top: 50px;
    /* background-color: yellow; */
}
</style>
