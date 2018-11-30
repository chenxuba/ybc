<template>
  <div id="app">
    <web-nav></web-nav>
     <transition name="move" mode="out-in">
        <router-view/>
    </transition>
    <web-bottomnav></web-bottomnav>
    <web-bottominfo></web-bottominfo>
    <web-copyright></web-copyright>
  </div>
</template>

<script>
import Nav from '@/components/nav/Nav'
import BottomNav from '@/components/homepage/bottomnav/BottomNav'
import BottomInfo from '@/components/homepage/bottominfo/BottomInfo'
import Copyright from '@/components/homepage/copyright/Copyright'
export default {
  name: 'App',
  components:{
    "web-nav": Nav,
    "web-bottomnav":BottomNav,
    "web-bottominfo":BottomInfo,
    "web-copyright":Copyright
  }
}
</script>

<style>
.move-enter-active{
  transition:  2s    /*开始进入所画的事件*/
}
.move-enter{
  /* transform: translateX(-100%); */
  opacity: 0;        /*开始进入所用的的方式   从左向右进*/  

}
</style>
