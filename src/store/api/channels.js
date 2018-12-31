import { api, globalErrorHandler } from './create-api';

export default {
  getAll() {
    return api.get('/sling/schedule.json')
      .catch(globalErrorHandler);
  },

  getChannelFavorites() {
    return api.get('/me/channels/favorites')
      .catch(globalErrorHandler);
  },
};
