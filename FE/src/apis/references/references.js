import axios from "axios";

export const getReferences = (params) => {
  return axios.get("https://remoaserver.store/reference", { params });
};
