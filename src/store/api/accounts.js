import { api, globalErrorHandler } from './create-api';

export default {
  login(creds) {
    return api.post('/accounts/login', creds)
      .then((res) => {
        api.defaults.headers.Authorization = `Bearer ${res.data.token}`;

        return res;
      })
      .catch(globalErrorHandler);
  },
  register(creds) {
    return api.post('/accounts', creds)
      .catch(globalErrorHandler);
  },
<<<<<<< HEAD
=======

  me() {
    return api.get('/accounts/me')
      .catch(globalErrorHandler);
  },

  update(data) {
    debugger;
    return api.patch('/accounts/me', data)
      .catch(globalErrorHandler);
  },
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
};
