import Vuex from 'vuex';
import Vue from 'vue';
import {
  User
} from './module/user.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    User
  }
})
