import items from '../api/notes';
import * as types from '../types';

const actions = {
  [types.NOTES_POST]: ({ commit }, opts) => items.post(opts)
    .then((res) => {
      commit(types.NOTES_NOTE, res.data);
    }),

  [types.NOTES_PUT]: ({ commit }, opts) => items.put(opts)
    .then((res) => {
      commit(types.NOTES_NOTE, res.data);
    }),

  [types.NOTES_DELETE]: ({ commit }, opts) => items.delete(opts._id)
    .then((res) => {
      commit(types.NOTES_NOTE, res.data);
    }),

  [types.NOTES_GET]: ({ commit }, opts) => items.get(opts._id)
    .then((res) => {
      commit(types.NOTES_NOTE, res.data);
    }),

  [types.NOTES_LIST]: ({ commit }) => items.getAll()
    .then((res) => {
      commit(types.NOTES_LIST, res.data);
    }),

  [types.NOTES_LIST_ME]: ({ commit }) => items.getAllByUser()
    .then((res) => {
      commit(types.NOTES_LIST, res.data);
    }),
};

const mutations = {
  [types.NOTES_NOTE]: (state, data) => {
    state.note = data;
  },

  [types.NOTES_LIST]: (state, data) => {
    state.notes = data;
  },
};

const getters = {
  [types.NOTES_NOTE]: state => state.note,

  [types.NOTES_LIST]: state => state.notes,
};

const state = {
  note: null,
  notes: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
