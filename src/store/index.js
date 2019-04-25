import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import accounts from './modules/accounts';
<<<<<<< HEAD
import parse from './modules/parse';
import search from './modules/search';
import keywords from './modules/keywords';
import items from './modules/items';
import notes from './modules/notes';
=======
import items from './modules/items';
import notes from './modules/notes';
import channels from './modules/channels';
import transactions from './modules/transactions';
import whitelist from './modules/whitelist';
import error from './modules/error';
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isModalOpen: false,
  },
  mutations,
  modules: {
    accounts,
<<<<<<< HEAD
    parse,
    search,
    keywords,
    items,
    notes,
=======
    items,
    notes,
    channels,
    transactions,
    whitelist,
    error,
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
  },
});

export default store;
