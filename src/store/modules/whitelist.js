import whitelist from '../api/whitelist';
import * as types from '../types';

const actions = {
  [types.WHITELIST_POST]: ({ commit }, opts) => whitelist.post(opts)
    .then((res) => {
      commit(types.WHITELIST_LIST, res.data.whitelist);
    }),
};

const mutations = {
  [types.WHITELIST_LIST]: (state, data) => {
    state.whitelist = data;
  },
};

const getters = {
  [types.WHITELIST_LIST]: state => state.whitelist,
};

const state = {
  whitelist: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
