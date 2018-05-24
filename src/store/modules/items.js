import items from '../api/items';
import * as types from '../types';

const actions = {
  [types.ITEMS_POST]: ({ commit }, opts) => items.post(opts)
    .then((res) => {
      commit(types.ITEMS_ITEM, res.data);
    }),

  [types.ITEMS_PUT]: ({ commit }, opts) => items.put(opts)
    .then((res) => {
      commit(types.ITEMS_ITEM, res.data);
    }),

  [types.ITEMS_DELETE]: ({ commit }, opts) => items.delete(opts._id)
    .then((res) => {
      commit(types.ITEMS_ITEM, res.data);
    }),

  [types.ITEMS_GET]: ({ commit }, opts) => items.get(opts._id)
    .then((res) => {
      commit(types.ITEMS_ITEM, res.data);
    }),

  [types.ITEMS_ALL]: ({ commit }) => items.getAll()
    .then((res) => {
      commit(types.ITEMS_LIST, res.data);
    }),
};

const mutations = {
  [types.ITEMS_ITEM]: (state, data) => {
    state.item = data;
  },

  [types.ITEMS_LIST]: (state, data) => {
    state.list = data;
  },
};

const getters = {
  [types.ITEMS_ITEM]: state => state.item,

  [types.ITEMS_LIST]: state => state.list,
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
