import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import accounts from './modules/accounts';
import parse from './modules/parse';
import search from './modules/search';
import keywords from './modules/keywords';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isModalOpen: false,
  },
  mutations,
  modules: {
    accounts,
    parse,
    search,
    keywords,
  },
});

export default store;
