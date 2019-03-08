<template>
    <div class="qicai">
        <div class="banner animated fadeInDown">
          <img v-lazy="bgbanner.image_url" alt="">
        </div>
        <web-qicai></web-qicai>
    </div>
</template>

<script>
import QicaiMsg from '@/components/qicai/qicaimasg/QicaiMsg'
export default {
    data () {
        return {
             bgbanner:{}, 
        }
    },
    components:{
      "web-qicai": QicaiMsg
  },
    methods:{
    //请求banner
     getBgbanner(){
            this.$http.get(API+"/api/v1.0/banner?name=qicai").then((result) => {
                // console.log(result)
                this.bgbanner = result.body.data.list[0]
            }).catch((err) => {
                console.log(err)
            });
        }
    },
    mounted(){
    this.getBgbanner()
  }
}
</script>

<style scoped>
.banner{
  min-width: 1296px;
  width: 100%;
  height: 500px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-bottom: 30px;
}
.banner img{
  width: 100%;
  height: 100%;
}
</style>
