import channels from '../api/channels';
import * as types from '../types';

const actions = {
  [types.CHANNELS_LIST]: ({ commit }) => channels.getAll()
    .then((res) => {
      commit(types.CHANNELS_LIST, res.data.items);
    }),

  [types.CHANNELS_FAVORITES]: ({ commit }) => channels.getChannelFavorites()
    .then((res) => {
      commit(types.CHANNELS_FAVORITES, res.data.items);
    }),
};

const mutations = {
  [types.CHANNELS_LIST]: (state, data) => {
    state.channels = data;
  },
  [types.CHANNELS_FAVORITES]: (state, data) => {
    state.favorites = data;
  },
};

const getters = {
  [types.CHANNELS_LIST]: state => state.channels,
  [types.CHANNELS_FAVORITES]: state => state.favorites,
};

const state = {
  channels: [],
  favorites: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
