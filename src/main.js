// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
axios.defaults.baseURL = process.env.BASE_URL;
axios.defaults.withCredentials = true;
Vue.use(VueAxios, axios)

import {
  store
} from './store/index.js';
import './assets/styles/reset.css'
import './directive/index'

import {
  messageBox,
  format
} from './assets/plugin/plugin'

import "quill/dist/quill.snow.css";
import VueQuillEditor from 'vue-quill-editor'


Vue.use(messageBox)
Vue.use(format)
Vue.config.productionTip = false
Vue.use(VueQuillEditor);

import './permission'


/**
 * 注册基础组件
 */
const requireComponent = require.context(
  //基础组件的相对目录
  './baseComponents',
  //是否查询子目录
  false,
  //匹配基础组件的文件名
  /Base[A-Z]\w+\.vue$/);

requireComponent.keys().forEach(filename => {
  const componentConfig = requireComponent(filename);
  const componentName = filename.replace('Base', 'Base-').replace(/\.\/(.*)\.\w+$/, '$1');
  Vue.component(componentName,
    //如果组件是
    componentConfig.default || componentConfig);
})

/**axios 拦截器 */
axios.interceptors.response.use(function (res) {
  return res;
}, function (err) {
  if (err.response.status == 401) {
    store.commit('SET_LOGIN', 0);
    Vue.prototype.$messageBox("没有登录，或登录失效", function (boolean) {
      router.push({
        name: "login"
      })
    })
  } else {
    Vue.prototype.$messageBox(err)
  }
  return Promise.reject(error);
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App)
})
