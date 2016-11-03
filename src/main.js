import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import $ from 'jQuery'
import App from './app.vue'
import home from './view/home.vue'
import index from './view/index.vue'
import table from './view/table.vue'
import form from './view/form.vue'
import tab from './view/tab.vue'
import map from './view/map.vue'
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
