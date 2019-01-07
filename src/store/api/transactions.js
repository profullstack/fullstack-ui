import { api, globalErrorHandler } from './create-api';

export default {
  post(opts) {
    return api.post('/transactions', opts)
      .catch(globalErrorHandler);
  },

  get(id) {
    return api.get(`/transactions/${id}`)
      .catch(globalErrorHandler);
  },

  // todo: setup admin user role first
  // getAll() {
  //   return api.get('/transactions')
  //     .catch(globalErrorHandler);
  // },

  getStatus(id) {
    return api.get(`/transactions/status?id=${id}`)
      .catch(globalErrorHandler);
  },

  getAllByUser() {
    return api.get('/transactions/me')
      .catch(globalErrorHandler);
  },
};
