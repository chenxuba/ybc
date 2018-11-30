<template>
    <div class="fourmenu">
        <div class="fourmenu-center">
          
            <div class="power" v-for="(item,index) in fourmenu" :key="index">
                <div class="power-box animated"  :style="{backgroundColor:item.fr_color}" :id="getid(index)">
                    <span>{{item.title}}</span>
                </div>
                <div class="power-text">
                    <p>{{item.content}}</p>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
  props: {
    fourmenu: {
      type: Array,
      default: {}
    }
  },
  data() {
    return {};
  },
  methods: {
    getid(index) {
      return "person_" + index;
    }
  },
  mounted() {},
  computed: {}
};
</script>

<style scoped>
#person_0 {
  animation: fadeInDownBig 1s;
}
#person_1 {
  animation: fadeInDownBig 1.2s;
}
#person_2 {
  animation: fadeInDownBig 1.4s;
}
#person_3 {
  animation: fadeInDownBig 1.6s;
}

.fourmenu {
  width: 100%;
}
.fourmenu .fourmenu-center {
  width: 1296px;
  padding: 50px 0 0 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.fourmenu-center {
  height: 395px;
}
.power {
  width: 274px;
  height: 285px;
  font-family: "微软雅黑";
}
.power-box {
  width: 173px;
  height: 172px;
  background-color: #ccc;
  border-radius: 50%;
  border: solid 5px #fff;
  box-shadow: 5px 9px 5px 0px rgba(159, 160, 160, 0.5);
  margin: 0 auto;
  text-align: center;
  line-height: 172px;
  font-size: 25px;
  color: #fff;
}

.power-text {
  width: 274px;
  padding-top: 20px;
}
.power-text p {
  font-size: 18px;
  line-height: 30px;
  color: #7e7572;
}
.wit {
  background-color: #ff6666;
}
.autonomously {
  background-color: #66cc99;
}
.diversification {
  background-color: #e9a33a;
}
@keyframes fadeInDownBig {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, -2000px, 0);
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
</style>
