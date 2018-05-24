import api from './create-api';

export default {
  login(creds) {
    return api.post('/accounts/login', creds);
  },
  register(creds) {
    return api.post('/accounts', creds);
  },
};
