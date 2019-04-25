import * as types from '../types';

const actions = {};

const mutations = {
  [types.ERROR_STATUS]: (state, err) => {
    state.error = err;
  },
};

const getters = {
  [types.ERROR_STATUS]: state => state.error,
};

const state = {
  error: null,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
