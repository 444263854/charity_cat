import Vue from 'vue'
import Router from 'vue-router'
import app from './app'
import register from './register'
import entry from './entry'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'entry'
      }
    },
    entry,
    register,
    app,
  ]
})
