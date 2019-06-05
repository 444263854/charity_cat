import {
  store
} from './store/index'
import router from './router'
import axios from 'axios'
import Vue from 'vue'

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
    if (store.state.User.isLogin) {
      next()
    } else {
      axios.get('/user/check').then(res => {
        if (res.data) {
          store.commit('SET_LOGIN', 1);
          store.commit('SET_AVATAR', res.content.avatar);
          next()
        } else {
          notLogin()
        }
      }).catch(err => {
        notLogin()
        throw new Error(err)
      })

      function notLogin() {
        Vue.prototype.$messageBox('没有登录，或登录失效，是否返回登录？', function (boolean) {
          if (boolean) {
            router.push({
              name: "login",
              query: {
                redirect: to.fullPath
              }
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
