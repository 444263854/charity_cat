import {
  getSession,
  setSession,
  removeSession
} from '@/utils/index.js'

export const User = {
  state: {
    isLogin: getSession('isLogin'),
    avatar: getSession('avatar'),
  },
  mutations: {
    'SET_LOGIN': function (state, value) {
      state.isLogin = value;
      setSession('isLogin', value);
    },
    'REMOVE_LOGIN': function (state) {
      state.isLogin = 0;
      removeSession('isLogin');
    },
    'SET_AVATAR': function (state, value) {
      state.avatar = value;
      setSession('avatar', value);
    },
    'REMOVE_AVATAR': function (state) {
      state.avatar = null;
      removeSession('avatar');
    }
  },
  actions: {
    'logout': function ({
      commit
    }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOGIN', 0);
        commit('REMOVE_AVATAR');
        commit('REMOVE_LOGIN');
        resolve()
      })
    }
  }
}
