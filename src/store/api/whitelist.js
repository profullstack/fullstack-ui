import { api, globalErrorHandler } from './create-api';

export default {
  post(opts) {
    return api.post('/accounts/whitelist', opts)
      .catch(globalErrorHandler);
  },
};
