import axios from "axios";

const API_SERVER = process.env.REACT_APP_API_SERVER;

export const getReferences = (params) => {
  return axios.get(`${API_SERVER}reference`, { params });
};
