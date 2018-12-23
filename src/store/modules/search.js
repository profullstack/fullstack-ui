import search from '../api/search';
import * as types from '../types';

const actions = {
  [types.SEARCH_ALL]: ({ commit }, opts) => search.getAll(opts)
    .then((res) => {
      commit(types.SEARCH_RESULTS, res.data);
    }),
};

const mutations = {
  [types.SEARCH_RESULTS]: (state, data) => {
    state.results = data.results;
  },
};

const getters = {
  [types.SEARCH_RESULTS]: state => state.results,
};

const state = {
  results: null,
};

export default {
  state,
  getters,
  mutations,
  actions,
};
