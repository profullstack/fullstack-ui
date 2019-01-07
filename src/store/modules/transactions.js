import transactions from '../api/transactions';
import * as types from '../types';

const actions = {
  [types.TRANSACTIONS_POST]: ({ commit }, opts) => transactions.post(opts)
    .then((res) => {
      commit(types.TRANSACTIONS_PENDING, res.data);
    }),

  [types.TRANSACTIONS_GET]: ({ commit }, opts) => transactions.get(opts._id)
    .then((res) => {
      commit(types.TRANSACTIONS_TX, res.data);
    }),

  // todo: setup admin role first
  // [types.TRANSACTIONS_LIST]: ({ commit }) => transactions.getAll()
  //   .then((res) => {
  //     commit(types.TRANSACTIONS_LIST, res.data);
  //   }),

  [types.TRANSACTIONS_LIST_ME]: ({ commit }) => transactions.getAllByUser()
    .then((res) => {
      commit(types.TRANSACTIONS_LIST, res.data);
    }),

  [types.TRANSACTIONS_STATUS]: ({ commit }, opts) => {
    console.log(opts, '<= opts', arguments, '<= arguments');
    transactions.getStatus(opts.id)
      .then((res) => {
        commit(types.TRANSACTIONS_STATUS, res.data);
      });
  },
};

const mutations = {
  [types.TRANSACTIONS_PENDING]: (state, data) => {
    state.pendingTx = data;
  },

  [types.TRANSACTIONS_TX]: (state, data) => {
    state.transaction = data;
  },

  [types.TRANSACTIONS_LIST]: (state, data) => {
    state.transactions = data;
  },

  [types.TRANSACTIONS_STATUS]: (state, data) => {
    state.status = data;
  },
};

const getters = {
  [types.TRANSACTIONS_TX]: state => state.transaction,

  [types.TRANSACTIONS_PENDING]: state => state.pendingTx,

  [types.TRANSACTIONS_LIST]: state => state.transactions,

  [types.TRANSACTIONS_STATUS]: state => state.status,
};

const state = {
  status: '',
  pendingTx: null,
  transaction: null,
  transactions: [],
};

export default {
  state,
  getters,
  mutations,
  actions,
};
