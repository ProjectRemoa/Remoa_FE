import axios from "axios";

export const getScrap = async (pageNumber) => {
  const response = await axios.get(`/BE/user/scrap?page=${pageNumber}`);
  const {
    data: {
      data: { posts, totalPages },
    },
  } = response;

  return { posts, totalPages };
};
