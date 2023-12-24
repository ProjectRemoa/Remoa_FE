import axios from "axios";

export const getReferences = (params) => {
  return axios.get("/http://54.180.159.30:8080/reference", { params });
};
