import axios from 'axios';

export const getReferences = (params) => {
  return axios.get('/BE/reference', { params });
};
