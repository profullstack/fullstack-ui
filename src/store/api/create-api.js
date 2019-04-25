import Axios from 'axios';

<<<<<<< HEAD
const baseURL = process.env.NODE_ENV === 'production' ? '/api/1' : 'http://localhost:3000/api/1';
=======
const baseURL = process.env.NODE_ENV === 'production' ? '/api/1' : 'http://localhost:3001/api/1';
>>>>>>> 17e5838ed620f443beef10b72321ed8e1c6ccf51
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

export {
  api,
  globalErrorHandler,
};
