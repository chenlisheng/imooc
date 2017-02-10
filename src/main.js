require('material-design-lite/material.min.js')
require('material-design-lite/material.min.css')
require('material-design-icons/iconfont/material-icons.css')

import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import VueMdl from 'vue-mdl'

import App from './components/App'

import Header from './components/common/Header'
import Footer from './components/common/Footer'
import RightNav from './components/common/RightNav'

import List from './components/course/List'

Vue.config.debug = true
Vue.use(Router)
Vue.use(VueMdl)
Vue.use(Resource)

Vue.component('common-header',Header)
Vue.component('common-footer',Footer)
Vue.component('common-rightnav',RightNav)

let router = new Router({
  history: false
})

router.map({
  '/': {
    component: function (resolve) {
      require(['./components/course/List.vue'], resolve)
    }
  }
})


router.start(App, '#app')
