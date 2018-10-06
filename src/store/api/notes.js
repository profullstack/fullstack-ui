import { api, globalErrorHandler } from './create-api';

export default {
  post(opts) {
    return api.post('/notes', opts)
      .catch(globalErrorHandler);
  },

  put(opts) {
    return api.put(`/notes/${opts._id}`, opts)
      .catch(globalErrorHandler);
  },

  delete(id) {
    return api.delete(`/notes/${id}`)
      .catch(globalErrorHandler);
  },

  get(id) {
    return api.get(`/notes/${id}`)
      .catch(globalErrorHandler);
  },

  getAll() {
    return api.get('/notes')
      .catch(globalErrorHandler);
  },

  getAllByUser() {
    return api.get('/notes/me')
      .catch(globalErrorHandler);
  },
};
