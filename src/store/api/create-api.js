import Axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production' ? '/api/1' : 'http://localhost:3000/api/1';
const api = Axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer ${localStorage.getItem('token')}`,
  },
});

function globalErrorHandler(err) {
  if (err.code === 401) {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }

  console.error(err);
  return Promise.reject(err);
}

export default {
  api,
  globalErrorHandler,
};
