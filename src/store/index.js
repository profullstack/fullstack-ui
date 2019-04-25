import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import accounts from './modules/accounts';
import items from './modules/items';
import notes from './modules/notes';
import channels from './modules/channels';
import transactions from './modules/transactions';
import whitelist from './modules/whitelist';
import error from './modules/error';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isModalOpen: false,
  },
  mutations,
  modules: {
    accounts,
    items,
    notes,
    channels,
    transactions,
    whitelist,
    error,
  },
});

export default store;
