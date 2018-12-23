import parse from '../api/parse';
import * as types from '../types';

const actions = {
  [types.PARSE_ALL]: ({ commit }, opts) => parse.getAll(opts)
    .then((res) => {
      commit(types.PARSE_RESULTS, res.data);
    }),
};

const mutations = {
  [types.PARSE_RESULTS]: (state, data) => {
    state.results = data.results;
  },
};

const getters = {
  [types.PARSE_RESULTS]: state => state.results,
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
