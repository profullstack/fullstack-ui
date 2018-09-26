import { api } from './create-api';

export default {
  getAll(opts) {
    return api.post('/search/all', opts);
  },
};
