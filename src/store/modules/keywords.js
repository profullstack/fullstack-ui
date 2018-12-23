import keywords from '../api/keywords';
import * as types from '../types';

const actions = {
  [types.KEYWORDS_POST]: ({ commit }, opts) => keywords.post(opts)
    .then((res) => {
      commit(types.KEYWORD_ITEM, res.data);
    }),

  [types.KEYWORDS_PUT]: ({ commit }, opts) => keywords.put(opts)
    .then((res) => {
      commit(types.KEYWORD_ITEM, res.data);
    }),

  [types.KEYWORDS_DELETE]: ({ commit }, opts) => keywords.delete(opts._id)
    .then((res) => {
      commit(types.KEYWORD_ITEM, res.data);
    }),

  [types.KEYWORDS_GET]: ({ commit }, opts) => keywords.get(opts._id)
    .then((res) => {
      commit(types.KEYWORD_ITEM, res.data);
    }),

  [types.KEYWORDS_ALL]: ({ commit }) => keywords.getAll()
    .then((res) => {
      commit(types.KEYWORD_LIST, res.data);
    }),
};

const mutations = {
  [types.KEYWORD_ITEM]: (state, data) => {
    state.item = data;
  },

  [types.KEYWORD_LIST]: (state, data) => {
    state.list = data;
  },
};

const getters = {
  [types.KEYWORD_ITEM]: state => state.item,

  [types.KEYWORD_LIST]: state => state.list,
};

const state = {
  item: null,
  list: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
