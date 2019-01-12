// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './assets/styles/reset.css'
import "quill/dist/quill.snow.css";
import {
  messageBox,
  format
} from './assets/plugin/plugin'
import VueQuillEditor from 'vue-quill-editor'

Vue.use(messageBox)
Vue.use(format)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueQuillEditor)

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
/**全局状态 */
const store = {
  state: {
    isLogin: false,
    avatar: ''
  },
  set(key, newValue) {
    if (this.state[key] === 'undefined') {
      throw new Error('不存在该变量状态')
    } else {
      this.state[key] = newValue
    }
  },
  get(key) {
    return this.state[key]
  }
}
/**axios 拦截器 */
axios.interceptors.response.use(function (res) {
  return res;
}, function (err) {
  if (err.response.status == 401) {
    store.set('isLogin', false);
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

/**全局守卫 */
router.beforeEach((to, from, next) => {
  const isRequire = to.matched.some(route => {
    if (route.meta.requiresAuto) {
      return true
    } else {
      return false
    }
  })
  if (isRequire) {
    if (store.get('isLogin')) {
      next()
    } else {
      axios.get('api/user/check').then(res => {
        if (res.data) {
          store.set('isLogin', true);
          next()
        } else {
          store.set('isLogin', false)
          notLogin()
        }
      }).catch(err => {
        notLogin()
        throw new Error(err)
      })

      function notLogin() {
        Vue.prototype.$messageBox('没有登录，或登录失效', function (boolean) {
          if (boolean) {
            router.push({
              name: "login"
            })
          } else {
            router.replace({
              name: from.name
            })
          }
        })
      }
    }
  } else {
    next()
  }
})
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: store,
  router,
  render: (h) => h(App)
})
