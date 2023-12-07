import axios from "axios";

export const getScrap = async () => {
  const response = await axios.get(`/BE/user/scrap?page=${1}`);
  const {
    data: {
      data: { posts },
    },
  } = response;
  return posts;
};
