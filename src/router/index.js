import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/homepage/HomePage'
import Noopsyche from '@/components/noopsyche/Noopsyche'
import Course from '@/components/course/Course'
import News from '@/components/news/News'
import About from '@/components/about/About'
import Detail from '@/components/detail/Detail'
import Detail2 from '@/components/detail2/Detail2'
import PublicBenefit from '@/components/publicBenefit/PublicBenefit'
import Qicai from '@/components/qicai/Qicai'
Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",redirect:'/homepage'},
    {
      path: '/homepage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/noopsyche',
      name: 'Noopsyche',
      component: Noopsyche
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/publicBenefit',
      name: 'PublicBenefit',
      component: PublicBenefit
    },
    {
      path:'/detail/:id',
      component: Detail
    },
    {
      path:'/detail2/:id',
      component: Detail2
    },
    {
      path: '/qicai',
      name: 'Qicai',
      component: Qicai
    },
  ]
})
