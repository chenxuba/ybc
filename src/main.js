// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueLazyload from 'vue-lazyload'
 
//时间过滤器
import moment from 'moment'
Vue.filter('time', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD';
  return moment(value).format(formatString);
})
Vue.filter('time2', function (value, formatString) {
  formatString = formatString || 'YYYY-MM';
  return moment(value).format(formatString);
})
Vue.filter('time3', function (value, formatString) {
  formatString = formatString || 'DD';
  return moment(value).format(formatString);
})
//自定义scroll
Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

Vue.use(VueLazyload, {
  preLoad: true,
  error: 'static/img/loading.gif',
  loading: 'static/img/loading.jpg',
  attempt: 1
})

Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.use(VueResource)
//自定义指令
Vue.directive('rainbow',{
  bind(el,binding,vnode){
        el.style.color = "#" + Math.random().toString(16).slice(2,8);
  }
})

Vue.directive('bgcolor',{
  bind(el,binding,vnode){
        el.style.backgroundColor = "#" + Math.random().toString(16).slice(2,8);
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
