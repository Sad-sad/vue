import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import $ from 'jquery'
import App from './app.vue'
import home from './view/home.vue'
import index from './view/index.vue'
import table from './view/table.vue'
import form from './view/form.vue'
import tab from './view/tab.vue'
import map from './view/map.vue'
import select from './view/select.vue'
import countdown from './view/countdown.vue'
Vue.use(VueRouter)
Vue.use(VueResource)
// 实例化vue-router
var router = new VueRouter()

router.map({
    '/': {
      component: home,
      //字路由
      subRoutes:{
        '/index': {
          component:index
        },
        '/table': {
          component:table
        },
        '/form': {
          component:form
        },
        '/tab': {
          component:tab
        },
        '/map': {
          component:map
        },
        '/select': {
          component:select
        },
        '/countdown': {
          component:countdown
        }
      }
    }
})
router.alias({
    '/': '/index'
})
router.redirect({
    '*':"/"
});
router.start(App, '#app');
