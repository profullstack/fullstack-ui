import { api } from './create-api';

export default {
  post(opts) {
    return api.post('/keywords', opts);
  },

  put(opts) {
    return api.put(`/keywords/${opts._id}`, opts);
  },

  delete(id) {
    return api.delete(`/keywords/${id}`);
  },

  get(id) {
    return api.get(`/keywords/${id}`);
  },

  getAll() {
    return api.get('/keywords');
  },
};
