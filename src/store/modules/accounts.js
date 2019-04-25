import accounts from '../api/accounts';
import * as types from '../types';

const actions = {
<<<<<<< HEAD
=======
  [types.ACCOUNTS_ME]: ({ commit }) => accounts.me()
    .then((res) => {
      commit(types.ACCOUNTS_USER, res.data);
    }),

  [types.ACCOUNTS_ME_UPDATE]: ({ commit }, data) => accounts.update(data)
    .then((res) => {
      commit(types.ACCOUNTS_USER, res.data);
    }),

>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
  [types.ACCOUNTS_REGISTER]: ({ commit }, opts) => accounts.register(opts)
    .then((res) => {
      commit(types.ACCOUNTS_USER, res.data.user);
      commit(types.ACCOUNTS_LOGIN_STATUS, res.data.message);
      commit(types.ACCOUNTS_TOKEN, res.data.token);
    }),

  [types.ACCOUNTS_USER]: ({ commit }, creds) => accounts.login(creds)
    .then((res) => {
      commit(types.ACCOUNTS_USER, res.data.user);
      commit(types.ACCOUNTS_LOGIN_STATUS, res.data.message);
      commit(types.ACCOUNTS_TOKEN, res.data.token);
<<<<<<< HEAD
=======
    })
    .catch((err) => {
      commit(types.ERROR_STATUS, err);
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
    }),

  [types.ACCOUNTS_LOGOUT]: ({ commit }) => {
    commit(types.ACCOUNTS_USER, null);
    commit(types.ACCOUNTS_TOKEN, null);
    return Promise.resolve();
  },
};

const mutations = {
  [types.ACCOUNTS_USER]: (state, user) => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }

    state.user = user;
  },

  [types.ACCOUNTS_LOGIN_STATUS]: (state, message) => {
    state.status = message;
  },

  [types.ACCOUNTS_TOKEN]: (state, token) => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }

    state.token = token;
  },
};

const getters = {
  [types.ACCOUNTS_USER]: state => state.user,

  [types.ACCOUNTS_LOGIN_STATUS]: state => state.status,

  [types.ACCOUNTS_TOKEN]: state => state.token,
};

const state = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  status: null,
  token: localStorage.getItem('token') || null,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
